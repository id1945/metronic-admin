/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { Localization, ValidateInput, ValidateOptions, ValidateResult } from '../core/Core';

export interface RegexpOptions extends ValidateOptions {
    // If specified, flags can have any combination of JavaScript regular expression flags such as:
    // g: global match
    // i: ignore case
    // m: multiple line
    flags?: string;
    // The regular expression you need to check
    regexp: string | RegExp;
}

export default function regexp() {
    return {
        /**
         * Check if the element value matches given regular expression
         */
        validate(input: ValidateInput<RegexpOptions, Localization>): ValidateResult {
            if (input.value === '') {
                return { valid: true };
            }

            const reg = input.options.regexp;
            if (reg instanceof RegExp) {
                return { valid: reg.test(input.value) };
            } else {
                const pattern = reg.toString();
                const exp = input.options.flags ? (new RegExp(pattern, input.options.flags)) : new RegExp(pattern);
                return { valid: exp.test(input.value) };
            }
        },
    };
}
