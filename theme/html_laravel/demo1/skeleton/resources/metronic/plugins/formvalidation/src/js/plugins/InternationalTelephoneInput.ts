/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ValidateFunction } from '../core/Core';
import Plugin from '../core/Plugin';

export interface InternationalTelephoneInputOptions {
    autoPlaceholder?: string;
    field: string | string[];
    message: string;
    utilsScript?: string;
}

declare function intlTelInput(input: HTMLElement, options: InternationalTelephoneInputOptions): IntlTelInput;
interface IntlTelInput {
    isValidNumber(): boolean;
    destroy(): () => void;
}

export default class InternationalTelephoneInput extends Plugin<InternationalTelephoneInputOptions> {
    public static INT_TEL_VALIDATOR = '___InternationalTelephoneInputValidator';
    private validatePhoneNumber: () => ValidateFunction;
    private intlTelInstances?: Map<string, IntlTelInput> = new Map();
    private countryChangeHandler: Map<string, () => void> = new Map();
    private fieldElements: Map<string, HTMLElement> = new Map();
    private fields: string[];

    constructor(opts?: InternationalTelephoneInputOptions) {
        super(opts);
        this.opts = Object.assign({}, {
            autoPlaceholder: 'polite',
            utilsScript: '',
        }, opts);
        this.validatePhoneNumber = this.checkPhoneNumber.bind(this);
        this.fields = (typeof this.opts.field === 'string') ? this.opts.field.split(',') : this.opts.field;
    }

    public install(): void {
        this.core.registerValidator(InternationalTelephoneInput.INT_TEL_VALIDATOR, this.validatePhoneNumber);
        this.fields.forEach((field) => {
            this.core.addField(field, {
                validators: {
                    [InternationalTelephoneInput.INT_TEL_VALIDATOR]: {
                        message: this.opts.message,
                    },
                },
            });

            const ele = this.core.getElements(field)[0];
            const handler = () => this.core.revalidateField(field);

            ele.addEventListener('countrychange', handler);
            this.countryChangeHandler.set(field, handler);
            this.fieldElements.set(field, ele);
            this.intlTelInstances.set(field, intlTelInput(ele, this.opts));
        });
    }

    public uninstall(): void {
        this.fields.forEach((field) => {
            // Remove event handler
            const handler = this.countryChangeHandler.get(field);
            const ele = this.fieldElements.get(field);
            const intlTel = this.intlTelInstances.get(field);

            if (handler && ele && intlTel) {
                ele.removeEventListener('countrychange', handler);
                this.core.disableValidator(field, InternationalTelephoneInput.INT_TEL_VALIDATOR);
                intlTel.destroy();
            }
        });
    }

    private checkPhoneNumber(): ValidateFunction {
        return {
            validate: (input) => {
                const value = input.value;
                const intlTel = this.intlTelInstances.get(input.field);
                if (value === '' || !intlTel) {
                    return {
                        valid: true,
                    };
                }
                return {
                    valid: intlTel.isValidNumber(),
                };
            },
        };
    }
}
