/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import emitter, { Emitter } from './emitter';
import filter, { Filter } from './filter';
import Plugin from './Plugin';

import getFieldValue from '../filters/getFieldValue';
import validators from '../validators/index';

export interface LocalizationMessage {
    [locale: string]: string;
}
export type LocalizationMessageType = LocalizationMessage | string;
export interface ValidatorOptions {
    enabled?: boolean;
    message?: string;
    [option: string]: unknown;
}
export interface FieldOptions {
    // Field can be defined by given CSS selector
    // By default, we use `name` attribute to indicate the field element
    selector?: string;
    validators: {
        [validatorName: string]: ValidatorOptions;
    };
}
export interface FieldsOptions {
    [field: string]: FieldOptions;
}
export interface FieldElements {
    [field: string]: HTMLElement[];
}
export interface Localization {
    [validator: string]: {
        default?: string;
    };
}

// Validate input and output
export interface ValidateOptions {
    message?: string;
}
export interface ValidateInput<
    T extends ValidateOptions,
    L extends Localization
> {
    element?: HTMLElement;
    elements?: HTMLElement[];
    field?: string;
    options?: T;
    l10n?: L;
    value: string;
}
export interface ValidateResult {
    message?: LocalizationMessageType;
    meta?: unknown;
    valid: boolean;
}
export interface ValidateFunctionInterface<K extends ValidateOptions, T> {
    validate(input: ValidateInput<K, Localization>): T;
}
export type ValidateFunction<K extends ValidateOptions> =
    ValidateFunctionInterface<K, ValidateResult | Promise<ValidateResult>>;

// Events
export interface DynamicFieldEvent {
    elements: HTMLElement[];
    field: string;
    options: FieldOptions;
}
export interface ValidatorNotValidatedEvent {
    element: HTMLElement;
    elements: HTMLElement[];
    field: string;
    validator: string;
}
export interface ValidatorValidatedEvent {
    element: HTMLElement;
    elements: HTMLElement[];
    field: string;
    result: ValidateResult;
    validator: string;
}
export interface ElementIgnoredEvent {
    element: HTMLElement;
    elements: HTMLElement[];
    field: string;
}
export interface ElementNotValidatedEvent {
    element: HTMLElement;
    elements: HTMLElement[];
    field: string;
}
export interface ElementValidatingEvent {
    element: HTMLElement;
    elements: HTMLElement[];
    field: string;
}
export interface ElementValidatedEvent {
    element: HTMLElement;
    elements: HTMLElement[];
    field: string;
    valid: boolean;
}
export interface FormResetEvent {
    reset: boolean;
}
export interface FieldResetEvent {
    field: string;
    reset: boolean;
}

class Core {
    private form: HTMLElement;
    private fields: FieldsOptions;
    private elements: FieldElements = {};
    private ee: Emitter = emitter();
    private filter: Filter = filter();
    private plugins: {
        [name: string]: Plugin<unknown>;
    } = {};

    // Store the result of validation for each field
    private results: Map<string, string> = new Map();

    private validators: {
        [name: string]: () => ValidateFunction<ValidateOptions>;
    } = {};

    private localization?: Localization;
    private locale: string;

    constructor(form: HTMLElement, fields?: FieldsOptions) {
        this.form = form;
        this.fields = fields;
    }

    public on(event: string, func: (...arg: unknown[]) => unknown): this {
        this.ee.on(event, func);
        return this;
    }

    public off(event: string, func: (...arg: unknown[]) => unknown): this {
        this.ee.off(event, func);
        return this;
    }

    public emit(event: string, ...args: unknown[]): this {
        this.ee.emit(event, ...args);
        return this;
    }

    public registerPlugin(name: string, plugin: Plugin<unknown>): this {
        // Check if whether the plugin is registered
        if (this.plugins[name]) {
            throw new Error(`The plguin ${name} is registered`);
        }
        // Install the plugin
        plugin.setCore(this);
        plugin.install();
        this.plugins[name] = plugin;
        return this;
    }

    public deregisterPlugin(name: string): this {
        const plugin = this.plugins[name];
        if (plugin) {
            plugin.uninstall();
        }
        delete this.plugins[name];
        return this;
    }

    public registerValidator<K extends ValidateOptions>(
        name: string,
        func: () => ValidateFunction<K>
    ): this {
        if (this.validators[name]) {
            throw new Error(`The validator ${name} is registered`);
        }
        this.validators[name] = func;
        return this;
    }

    /**
     * Add a filter
     *
     * @param {string} name The name of filter
     * @param {Function} func The filter function
     * @return {Core}
     */
    public registerFilter(
        name: string,
        func: (...arg: unknown[]) => unknown
    ): this {
        this.filter.add(name, func);
        return this;
    }

    /**
     * Remove a filter
     *
     * @param {string} name The name of filter
     * @param {Function} func The filter function
     * @return {Core}
     */
    public deregisterFilter(
        name: string,
        func: (...arg: unknown[]) => unknown
    ): this {
        this.filter.remove(name, func);
        return this;
    }

    /**
     * Execute a filter
     *
     * @param {string} name The name of filter
     * @param {T} defaultValue The default value returns by the filter
     * @param {array} args The filter arguments
     * @returns {T}
     */
    public executeFilter<T>(name: string, defaultValue: T, args: unknown[]): T {
        return this.filter.execute(name, defaultValue, args);
    }

    /**
     * Add a field
     *
     * @param {string} field The field name
     * @param {FieldOptions} options The field options. The options will be merged with the original validator rules
     * if the field is already defined
     * @return {Core}
     */
    public addField(field: string, options?: FieldOptions): this {
        const opts = Object.assign(
            {},
            {
                selector: '',
                validators: {},
            },
            options
        );

        // Merge the options
        this.fields[field] = this.fields[field]
            ? {
                  selector: opts.selector || this.fields[field].selector,
                  validators: Object.assign(
                      {},
                      this.fields[field].validators,
                      opts.validators
                  ),
              }
            : opts;
        this.elements[field] = this.queryElements(field);

        this.emit('core.field.added', {
            elements: this.elements[field],
            field,
            options: this.fields[field],
        });
        return this;
    }

    /**
     * Remove given field by name
     *
     * @param {string} field The field name
     * @return {Core}
     */
    public removeField(field: string): this {
        if (!this.fields[field]) {
            throw new Error(
                `The field ${field} validators are not defined. Please ensure the field is added first`
            );
        }

        const elements = this.elements[field];
        const options = this.fields[field];

        delete this.elements[field];
        delete this.fields[field];
        this.emit('core.field.removed', {
            elements,
            field,
            options,
        });

        return this;
    }

    /**
     * Validate all fields
     *
     * @return {Promise<string>}
     */
    public validate(): Promise<string> {
        this.emit('core.form.validating');
        return this.filter
            .execute('validate-pre', Promise.resolve(), [])
            .then(() => {
                return Promise.all(
                    Object.keys(this.fields).map((field) =>
                        this.validateField(field)
                    )
                ).then((results) => {
                    // `results` is an array of `Valid`, `Invalid` and `NotValidated`
                    switch (true) {
                        case results.indexOf('Invalid') !== -1:
                            this.emit('core.form.invalid');
                            return Promise.resolve('Invalid');

                        case results.indexOf('NotValidated') !== -1:
                            this.emit('core.form.notvalidated');
                            return Promise.resolve('NotValidated');

                        default:
                            this.emit('core.form.valid');
                            return Promise.resolve('Valid');
                    }
                });
            });
    }

    /**
     * Validate a particular field
     *
     * @param {string} field The field name
     * @return {Promise<string>}
     */
    public validateField(field: string): Promise<string> {
        // Stop validation process if the field is already validated
        const result = this.results.get(field);
        if (result === 'Valid' || result === 'Invalid') {
            return Promise.resolve(result);
        }

        this.emit('core.field.validating', field);

        const elements = this.elements[field];
        if (elements.length === 0) {
            this.emit('core.field.valid', field);
            return Promise.resolve('Valid');
        }

        const type = elements[0].getAttribute('type');
        if ('radio' === type || 'checkbox' === type || elements.length === 1) {
            return this.validateElement(field, elements[0]);
        } else {
            return Promise.all(
                elements.map((ele) => this.validateElement(field, ele))
            ).then((results) => {
                // `results` is an array of `Valid`, `Invalid` and `NotValidated`
                switch (true) {
                    case results.indexOf('Invalid') !== -1:
                        this.emit('core.field.invalid', field);
                        this.results.set(field, 'Invalid');
                        return Promise.resolve('Invalid');

                    case results.indexOf('NotValidated') !== -1:
                        this.emit('core.field.notvalidated', field);
                        this.results.delete(field);
                        return Promise.resolve('NotValidated');

                    default:
                        this.emit('core.field.valid', field);
                        this.results.set(field, 'Valid');
                        return Promise.resolve('Valid');
                }
            });
        }
    }

    /**
     * Validate particular element
     *
     * @param {string} field The field name
     * @param {HTMLElement} ele The field element
     * @return {Promise<string>}
     */
    public validateElement(field: string, ele: HTMLElement): Promise<string> {
        // Reset validation result
        this.results.delete(field);

        const elements = this.elements[field];
        const ignored = this.filter.execute('element-ignored', false, [
            field,
            ele,
            elements,
        ]);
        if (ignored) {
            this.emit('core.element.ignored', {
                element: ele,
                elements,
                field,
            });
            return Promise.resolve('Ignored');
        }

        const validatorList = this.fields[field].validators;
        this.emit('core.element.validating', {
            element: ele,
            elements,
            field,
        });

        const promises = Object.keys(validatorList).map((v) => {
            return () => this.executeValidator(field, ele, v, validatorList[v]);
        });

        return this.waterfall(promises)
            .then((results) => {
                // `results` is an array of `Valid` or `Invalid`
                const isValid = results.indexOf('Invalid') === -1;
                this.emit('core.element.validated', {
                    element: ele,
                    elements,
                    field,
                    valid: isValid,
                });

                const type = ele.getAttribute('type');
                if (
                    'radio' === type ||
                    'checkbox' === type ||
                    elements.length === 1
                ) {
                    this.emit(
                        isValid ? 'core.field.valid' : 'core.field.invalid',
                        field
                    );
                }

                return Promise.resolve(isValid ? 'Valid' : 'Invalid');
            })
            .catch((reason) => {
                // reason is `NotValidated`
                this.emit('core.element.notvalidated', {
                    element: ele,
                    elements,
                    field,
                });
                return Promise.resolve(reason);
            });
    }

    /**
     * Perform given validator on field
     *
     * @param {string} field The field name
     * @param {HTMLElement} ele The field element
     * @param {string} v The validator name
     * @param {ValidatorOptions} opts The validator options
     * @return {Promise<string>}
     */
    public executeValidator(
        field: string,
        ele: HTMLElement,
        v: string,
        opts: ValidatorOptions
    ): Promise<string> {
        const elements = this.elements[field];

        const name = this.filter.execute('validator-name', v, [v, field]);
        opts.message = this.filter.execute('validator-message', opts.message, [
            this.locale,
            field,
            name,
        ]);

        // Simply pass the validator if
        // - it isn't defined yet
        // - or the associated validator isn't enabled
        if (!this.validators[name] || opts.enabled === false) {
            this.emit('core.validator.validated', {
                element: ele,
                elements,
                field,
                result: this.normalizeResult(field, name, { valid: true }),
                validator: name,
            });
            return Promise.resolve('Valid');
        }

        const validator = this.validators[name];

        // Get the field value
        const value = this.getElementValue(field, ele, name);

        const willValidate = this.filter.execute(
            'field-should-validate',
            true,
            [field, ele, value, v]
        );
        if (!willValidate) {
            this.emit('core.validator.notvalidated', {
                element: ele,
                elements,
                field,
                validator: v,
            });
            return Promise.resolve('NotValidated');
        }

        this.emit('core.validator.validating', {
            element: ele,
            elements,
            field,
            validator: v,
        });

        // Perform validation
        const result = validator().validate({
            element: ele,
            elements,
            field,
            l10n: this.localization,
            options: opts,
            value,
        });

        // Check whether the result is a `Promise`
        const isPromise = 'function' === typeof result['then'];
        if (isPromise) {
            return (result as Promise<ValidateResult>).then((r) => {
                const data = this.normalizeResult(field, v, r);
                this.emit('core.validator.validated', {
                    element: ele,
                    elements,
                    field,
                    result: data,
                    validator: v,
                });
                return data.valid ? 'Valid' : 'Invalid';
            });
        } else {
            const data = this.normalizeResult(
                field,
                v,
                result as ValidateResult
            );
            this.emit('core.validator.validated', {
                element: ele,
                elements,
                field,
                result: data,
                validator: v,
            });

            return Promise.resolve(data.valid ? 'Valid' : 'Invalid');
        }
    }

    public getElementValue(
        field: string,
        ele: HTMLElement,
        validator?: string
    ): string {
        const defaultValue = getFieldValue(
            this.form,
            field,
            ele,
            this.elements[field]
        );
        return this.filter.execute('field-value', defaultValue, [
            defaultValue,
            field,
            ele,
            validator,
        ]);
    }

    // Some getter methods
    public getElements(field: string): HTMLElement[] {
        return this.elements[field];
    }

    public getFields(): FieldsOptions {
        return this.fields;
    }

    public getFormElement(): HTMLElement {
        return this.form;
    }

    public getLocale(): string {
        return this.locale;
    }

    public getPlugin(name: string): Plugin<unknown> {
        return this.plugins[name];
    }

    /**
     * Update the field status
     *
     * @param {string} field The field name
     * @param {string} status The new status
     * @param {string} [validator] The validator name. If it isn't specified, all validators will be updated
     * @return {Core}
     */
    public updateFieldStatus(
        field: string,
        status: string,
        validator?: string
    ): this {
        const elements = this.elements[field];
        const type = elements[0].getAttribute('type');
        const list =
            'radio' === type || 'checkbox' === type ? [elements[0]] : elements;
        list.forEach((ele) =>
            this.updateElementStatus(field, ele, status, validator)
        );

        if (!validator) {
            switch (status) {
                case 'NotValidated':
                    this.emit('core.field.notvalidated', field);
                    this.results.delete(field);
                    break;

                case 'Validating':
                    this.emit('core.field.validating', field);
                    this.results.delete(field);
                    break;

                case 'Valid':
                    this.emit('core.field.valid', field);
                    this.results.set(field, 'Valid');
                    break;

                case 'Invalid':
                    this.emit('core.field.invalid', field);
                    this.results.set(field, 'Invalid');
                    break;
            }
        }

        return this;
    }

    /**
     * Update the element status
     *
     * @param {string} field The field name
     * @param {HTMLElement} ele The field element
     * @param {string} status The new status
     * @param {string} [validator] The validator name. If it isn't specified, all validators will be updated
     * @return {Core}
     */
    public updateElementStatus(
        field: string,
        ele: HTMLElement,
        status: string,
        validator?: string
    ): this {
        const elements = this.elements[field];
        const fieldValidators = this.fields[field].validators;
        const validatorArr = validator
            ? [validator]
            : Object.keys(fieldValidators);

        switch (status) {
            case 'NotValidated':
                validatorArr.forEach((v) =>
                    this.emit('core.validator.notvalidated', {
                        element: ele,
                        elements,
                        field,
                        validator: v,
                    })
                );
                this.emit('core.element.notvalidated', {
                    element: ele,
                    elements,
                    field,
                });
                break;

            case 'Validating':
                validatorArr.forEach((v) =>
                    this.emit('core.validator.validating', {
                        element: ele,
                        elements,
                        field,
                        validator: v,
                    })
                );
                this.emit('core.element.validating', {
                    element: ele,
                    elements,
                    field,
                });
                break;

            case 'Valid':
                validatorArr.forEach((v) =>
                    this.emit('core.validator.validated', {
                        element: ele,
                        field,
                        result: {
                            message: fieldValidators[v].message,
                            valid: true,
                        },
                        validator: v,
                    })
                );
                this.emit('core.element.validated', {
                    element: ele,
                    elements,
                    field,
                    valid: true,
                });
                break;

            case 'Invalid':
                validatorArr.forEach((v) =>
                    this.emit('core.validator.validated', {
                        element: ele,
                        field,
                        result: {
                            message: fieldValidators[v].message,
                            valid: false,
                        },
                        validator: v,
                    })
                );
                this.emit('core.element.validated', {
                    element: ele,
                    elements,
                    field,
                    valid: false,
                });
                break;
        }

        return this;
    }

    /**
     * Reset the form. It also clears all the messages, hide the feedback icons, etc.
     *
     * @param {boolean} reset If true, the method resets field value to empty
     * or remove `checked`, `selected` attributes
     * @return {Core}
     */
    public resetForm(reset?: boolean): this {
        Object.keys(this.fields).forEach((field) =>
            this.resetField(field, reset)
        );
        this.emit('core.form.reset', {
            reset,
        });
        return this;
    }

    /**
     * Reset the field. It also clears all the messages, hide the feedback icons, etc.
     *
     * @param {string} field The field name
     * @param {boolean} reset If true, the method resets field value to empty
     * or remove `checked`, `selected` attributes
     * @return {Core}
     */
    public resetField(field: string, reset?: boolean): this {
        // Reset the field element value if needed
        if (reset) {
            const elements = this.elements[field];
            const type = elements[0].getAttribute('type');
            elements.forEach((ele) => {
                if ('radio' === type || 'checkbox' === type) {
                    ele.removeAttribute('selected');
                    ele.removeAttribute('checked');
                    (ele as HTMLInputElement).checked = false;
                } else {
                    ele.setAttribute('value', '');
                    if (
                        ele instanceof HTMLInputElement ||
                        ele instanceof HTMLTextAreaElement
                    ) {
                        ele.value = '';
                    }
                }
            });
        }

        // Mark the field as not validated yet
        this.updateFieldStatus(field, 'NotValidated');

        this.emit('core.field.reset', {
            field,
            reset,
        });
        return this;
    }

    /**
     * Revalidate a particular field. It's useful when the field value is effected by third parties
     * (for example, attach another UI library to the field).
     * Since there isn't an automatic way for FormValidation to know when the field value is modified in those cases,
     * we need to revalidate the field manually.
     *
     * @param {string} field The field name
     * @return {Promise<string>}
     */
    public revalidateField(field: string): Promise<string> {
        this.updateFieldStatus(field, 'NotValidated');
        return this.validateField(field);
    }

    /**
     * Disable particular validator for given field
     *
     * @param {string} field The field name
     * @param {string} validator The validator name. If it isn't specified, all validators will be disabled
     * @return {Core}
     */
    public disableValidator(field: string, validator?: string): this {
        return this.toggleValidator(false, field, validator);
    }

    /**
     * Enable particular validator for given field
     *
     * @param {string} field The field name
     * @param {string} validator The validator name. If it isn't specified, all validators will be enabled
     * @return {Core}
     */
    public enableValidator(field: string, validator?: string): this {
        return this.toggleValidator(true, field, validator);
    }

    /**
     * Update option of particular validator for given field
     *
     * @param {string} field The field name
     * @param {string} validator The validator name
     * @param {string} name The option's name
     * @param {unknown} value The option's value
     * @return {Core}
     */
    public updateValidatorOption(
        field: string,
        validator: string,
        name: string,
        value: unknown
    ): this {
        if (
            this.fields[field] &&
            this.fields[field].validators &&
            this.fields[field].validators[validator]
        ) {
            (this.fields[field].validators[validator] as ValidateOptions)[
                name
            ] = value;
        }

        return this;
    }

    public setFieldOptions(field: string, options: FieldOptions): this {
        this.fields[field] = options;
        return this;
    }

    public destroy(): this {
        // Remove plugins and filters
        Object.keys(this.plugins).forEach((id) => this.plugins[id].uninstall());

        this.ee.clear();
        this.filter.clear();
        this.results.clear();
        this.plugins = {};
        return this;
    }

    public setLocale(locale: string, localization: Localization): this {
        this.locale = locale;
        this.localization = localization;
        return this;
    }

    private waterfall(promises: (() => Promise<string>)[]): Promise<string[]> {
        return promises.reduce((p, c) => {
            return p.then((res) => {
                return c().then((result) => {
                    res.push(result);
                    return res;
                });
            });
        }, Promise.resolve([]));
    }

    private queryElements(field: string): HTMLElement[] {
        const selector = this.fields[field].selector
            ? // Check if the selector is an ID selector which starts with `#`
              '#' === this.fields[field].selector.charAt(0)
                ? `[id="${this.fields[field].selector.substring(1)}"]`
                : this.fields[field].selector
            : `[name="${field}"]`;
        return [].slice.call(
            this.form.querySelectorAll(selector)
        ) as HTMLElement[];
    }

    private normalizeResult(
        field: string,
        validator: string,
        result: ValidateResult
    ): ValidateResult {
        const opts = this.fields[field].validators[validator];
        return Object.assign({}, result, {
            message:
                result.message ||
                (opts ? opts.message : '') ||
                (this.localization &&
                this.localization[validator] &&
                this.localization[validator].default
                    ? this.localization[validator].default
                    : '') ||
                `The field ${field} is not valid`,
        });
    }

    private toggleValidator(
        enabled: boolean,
        field: string,
        validator?: string
    ): this {
        const validatorArr = this.fields[field].validators;
        if (validator && validatorArr && validatorArr[validator]) {
            this.fields[field].validators[validator].enabled = enabled;
        } else if (!validator) {
            Object.keys(validatorArr).forEach(
                (v) => (this.fields[field].validators[v].enabled = enabled)
            );
        }

        return this.updateFieldStatus(field, 'NotValidated', validator);
    }
}

// A factory method
export interface Options {
    fields?: FieldsOptions;
    locale?: string;
    localization?: Localization;
    plugins?: {
        [name: string]: Plugin<unknown>;
    };
}

export default function formValidation(
    form: HTMLElement,
    options?: Options
): Core {
    const opts = Object.assign(
        {},
        {
            fields: {},
            locale: 'en_US',
            plugins: {},
        },
        options
    );

    const core = new Core(form, opts.fields);
    core.setLocale(opts.locale, opts.localization);

    // Register plugins
    Object.keys(opts.plugins).forEach((name) =>
        core.registerPlugin(name, opts.plugins[name])
    );

    // Register basic validators
    Object.keys(validators).forEach((name) =>
        core.registerValidator(name, validators[name])
    );

    // and add fields
    Object.keys(opts.fields).forEach((field) =>
        core.addField(field, opts.fields[field])
    );

    return core;
}
export { Core };
