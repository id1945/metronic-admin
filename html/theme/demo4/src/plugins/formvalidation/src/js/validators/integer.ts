/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import {
    Localization,
    ValidateFunctionInterface,
    ValidateInput,
    ValidateOptions,
    ValidateResult,
} from '../core/Core';

export interface IntegerOptions extends ValidateOptions {
    // The decimal separator. It's '.' by default
    decimalSeparator: string;
    // The thousands separator. It's empty by default
    thousandsSeparator: string;
}

export default function integer(): ValidateFunctionInterface<
    IntegerOptions,
    ValidateResult
> {
    return {
        validate(
            input: ValidateInput<IntegerOptions, Localization>
        ): ValidateResult {
            if (input.value === '') {
                return { valid: true };
            }

            const opts = Object.assign(
                {},
                {
                    decimalSeparator: '.',
                    thousandsSeparator: '',
                },
                input.options
            );

            const decimalSeparator =
                opts.decimalSeparator === '.' ? '\\.' : opts.decimalSeparator;
            const thousandsSeparator =
                opts.thousandsSeparator === '.'
                    ? '\\.'
                    : opts.thousandsSeparator;
            const testRegexp = new RegExp(
                `^-?[0-9]{1,3}(${thousandsSeparator}[0-9]{3})*(${decimalSeparator}[0-9]+)?$`
            );
            const thousandsReplacer = new RegExp(thousandsSeparator, 'g');

            let v = `${input.value}`;
            if (!testRegexp.test(v)) {
                return { valid: false };
            }

            // Replace thousands separator with blank
            if (thousandsSeparator) {
                v = v.replace(thousandsReplacer, '');
            }
            // Replace decimal separator with a dot
            if (decimalSeparator) {
                v = v.replace(decimalSeparator, '.');
            }

            const n = parseFloat(v);
            return { valid: !isNaN(n) && isFinite(n) && Math.floor(n) === n };
        },
    };
}
