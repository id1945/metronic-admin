/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { Localization, ValidateInput, ValidateOptions, ValidateResult } from '../core/Core';

export interface NumericOptions extends ValidateOptions {
    // The decimal separator. It's '.' by default
    decimalSeparator: string;
    // The thousands separator. It's empty by default
    thousandsSeparator: string;
}

export default function numeric() {
    return {
        validate(input: ValidateInput<NumericOptions, Localization>): ValidateResult {
            if (input.value === '') {
                return { valid: true };
            }

            const opts = Object.assign({}, {
                decimalSeparator: '.',
                thousandsSeparator: '',
            }, input.options);

            let v = `${input.value}`;
            // Support preceding zero numbers such as .5, -.5
            if (v.substr(0, 1) === opts.decimalSeparator) {
                v = `0${opts.decimalSeparator}${v.substr(1)}`;
            } else if (v.substr(0, 2) === `-${opts.decimalSeparator}`) {
                v = `-0${opts.decimalSeparator}${v.substr(2)}`;
            }

            const decimalSeparator = (opts.decimalSeparator === '.') ? '\\.' : opts.decimalSeparator;
            const thousandsSeparator = (opts.thousandsSeparator === '.') ? '\\.' : opts.thousandsSeparator;
            const testRegexp = new RegExp(`^-?[0-9]{1,3}(${thousandsSeparator}[0-9]{3})*(${decimalSeparator}[0-9]+)?$`);
            const thousandsReplacer = new RegExp(thousandsSeparator, 'g');

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
            return { valid: !isNaN(n) && isFinite(n) };
        },
    };
}
