/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import {
    DynamicFieldEvent, ElementNotValidatedEvent, ElementValidatingEvent, ValidatorValidatedEvent,
} from '../core/Core';
import Plugin from '../core/Plugin';

export interface SequenceOptions {
    enabled: boolean | { [field: string]: boolean };
}

/**
 * ```
 *  new Core(form, { ... })
 *      .registerPlugin('sequence', new Sequence({
 *          enabled: false // Default value is `true`
 *      }));
 * ```
 *
 * The `enabled` option can be:
 * - `true` (default): When a field has multiple validators, all of them will be checked respectively.
 * If errors occur in multiple validators, all of them will be displayed to the user
 * - `false`: When a field has multiple validators, validation for this field will be terminated upon the
 * first encountered error.
 * Thus, only the very first error message related to this field will be displayed to the user
 *
 * User can set the `enabled` option to all fields as sample code above, or apply it for specific fields as following:
 * ```
 *  new Core(form, { ... })
 *      .registerPlugin('sequence', new Sequence({
 *          enabled: {
 *              fullName: true, // It's not necessary since the default value is `true`
 *              username: false,
 *              email: false
 *          }
 *      }));
 * ```
 */
export default class Sequence extends Plugin<SequenceOptions> {
    private invalidFields: Map<HTMLElement, string[]> = new Map();
    private validatorHandler: (e: ValidatorValidatedEvent) => void;
    private shouldValidateFilter: (...arg: any[]) => boolean;
    private fieldAddedHandler: (e: DynamicFieldEvent) => void;
    private elementNotValidatedHandler: (e: ElementNotValidatedEvent) => void;
    private elementValidatingHandler: (e: ElementValidatingEvent) => void;

    constructor(opts?: SequenceOptions) {
        super(opts);
        this.opts = Object.assign({}, { enabled: true }, opts);

        this.validatorHandler = this.onValidatorValidated.bind(this);
        this.shouldValidateFilter = this.shouldValidate.bind(this);
        this.fieldAddedHandler = this.onFieldAdded.bind(this);
        this.elementNotValidatedHandler = this.onElementNotValidated.bind(this);
        this.elementValidatingHandler = this.onElementValidating.bind(this);
    }

    public install(): void {
        this.core
            .on('core.validator.validated', this.validatorHandler)
            .on('core.field.added', this.fieldAddedHandler)
            .on('core.element.notvalidated', this.elementNotValidatedHandler)
            .on('core.element.validating', this.elementValidatingHandler)
            .registerFilter('field-should-validate', this.shouldValidateFilter);
    }

    public uninstall(): void {
        this.invalidFields.clear();

        this.core
            .off('core.validator.validated', this.validatorHandler)
            .off('core.field.added', this.fieldAddedHandler)
            .off('core.element.notvalidated', this.elementNotValidatedHandler)
            .off('core.element.validating', this.elementValidatingHandler)
            .deregisterFilter('field-should-validate', this.shouldValidateFilter);
    }

    private shouldValidate(field: string, element: HTMLElement, value: string, validator: string): boolean {
        // Stop validating
        // if the `enabled` option is set to `false`
        // and there's at least one validator that field doesn't pass
        const stop = (this.opts.enabled === true || this.opts.enabled[field] === true)
            && this.invalidFields.has(element)
            && !!this.invalidFields.get(element).length
            && this.invalidFields.get(element).indexOf(validator) === -1;
        return !stop;
    }

    private onValidatorValidated(e: ValidatorValidatedEvent): void {
        const validators = this.invalidFields.has(e.element) ? this.invalidFields.get(e.element) : [];
        const index = validators.indexOf(e.validator);
        if (e.result.valid && index >= 0) {
            validators.splice(index, 1);
        } else if (!e.result.valid && index === -1) {
            validators.push(e.validator);
        }

        this.invalidFields.set(e.element, validators);
    }

    private onFieldAdded(e: DynamicFieldEvent): void {
        // Remove the field element from set of invalid elements
        if (e.elements) {
            this.clearInvalidFields(e.elements);
        }
    }

    private onElementNotValidated(e: ElementNotValidatedEvent): void {
        this.clearInvalidFields(e.elements);
    }

    private onElementValidating(e: ElementValidatingEvent): void {
        this.clearInvalidFields(e.elements);
    }

    private clearInvalidFields(elements: HTMLElement[]) {
        elements.forEach((ele) => this.invalidFields.delete(ele));
    }
}
