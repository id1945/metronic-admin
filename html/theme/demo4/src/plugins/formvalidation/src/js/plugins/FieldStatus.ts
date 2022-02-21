/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import {
    DynamicFieldEvent,
    ElementIgnoredEvent,
    ElementNotValidatedEvent,
    ElementValidatedEvent,
    ElementValidatingEvent,
} from '../core/Core';
import Plugin from '../core/Plugin';

export interface FieldStatusOptions {
    onStatusChanged?: (areFieldsValid: boolean) => void;
}

export default class FieldStatus extends Plugin<FieldStatusOptions> {
    private statuses: Map<string, string> = new Map();

    private elementValidatingHandler: (e: ElementValidatingEvent) => void;
    private elementValidatedHandler: (e: ElementValidatedEvent) => void;
    private elementNotValidatedHandler: (e: ElementNotValidatedEvent) => void;
    private elementIgnoredHandler: (e: ElementIgnoredEvent) => void;
    private fieldAddedHandler: (e: DynamicFieldEvent) => void;
    private fieldRemovedHandler: (e: DynamicFieldEvent) => void;

    constructor(opts?: FieldStatusOptions) {
        super(opts);
        this.opts = Object.assign(
            {},
            {
                onStatusChanged: () => {},
            },
            opts
        );

        this.elementValidatingHandler = this.onElementValidating.bind(this);
        this.elementValidatedHandler = this.onElementValidated.bind(this);
        this.elementNotValidatedHandler = this.onElementNotValidated.bind(this);
        this.elementIgnoredHandler = this.onElementIgnored.bind(this);
        this.fieldAddedHandler = this.onFieldAdded.bind(this);
        this.fieldRemovedHandler = this.onFieldRemoved.bind(this);
    }

    public install(): void {
        this.core
            .on('core.element.validating', this.elementValidatingHandler)
            .on('core.element.validated', this.elementValidatedHandler)
            .on('core.element.notvalidated', this.elementNotValidatedHandler)
            .on('core.element.ignored', this.elementIgnoredHandler)
            .on('core.field.added', this.fieldAddedHandler)
            .on('core.field.removed', this.fieldRemovedHandler);
    }

    public uninstall(): void {
        this.statuses.clear();
        this.core
            .off('core.element.validating', this.elementValidatingHandler)
            .off('core.element.validated', this.elementValidatedHandler)
            .off('core.element.notvalidated', this.elementNotValidatedHandler)
            .off('core.element.ignored', this.elementIgnoredHandler)
            .off('core.field.added', this.fieldAddedHandler)
            .off('core.field.removed', this.fieldRemovedHandler);
    }

    public areFieldsValid(): boolean {
        return Array.from(this.statuses.values()).every((value) => {
            return (
                value === 'Valid' ||
                value === 'NotValidated' ||
                value === 'Ignored'
            );
        });
    }

    public getStatuses(): Map<string, string> {
        return this.statuses;
    }

    private onFieldAdded(e: DynamicFieldEvent): void {
        this.statuses.set(e.field, 'NotValidated');
    }

    private onFieldRemoved(e: DynamicFieldEvent): void {
        if (this.statuses.has(e.field)) {
            this.statuses.delete(e.field);
        }
        this.opts.onStatusChanged(this.areFieldsValid());
    }

    private onElementValidating(e: ElementValidatingEvent): void {
        this.statuses.set(e.field, 'Validating');
        this.opts.onStatusChanged(false);
    }

    private onElementValidated(e: ElementValidatedEvent): void {
        this.statuses.set(e.field, e.valid ? 'Valid' : 'Invalid');
        if (e.valid) {
            this.opts.onStatusChanged(this.areFieldsValid());
        } else {
            this.opts.onStatusChanged(false);
        }
    }

    private onElementNotValidated(e: ElementNotValidatedEvent): void {
        this.statuses.set(e.field, 'NotValidated');
        this.opts.onStatusChanged(false);
    }

    private onElementIgnored(e: ElementIgnoredEvent): void {
        this.statuses.set(e.field, 'Ignored');
        this.opts.onStatusChanged(this.areFieldsValid());
    }
}
