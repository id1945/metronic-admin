/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { Localization, ValidateInput, ValidateOptions, ValidateResult } from '../core/Core';

export default function issn() {
    return {
        /**
         * Validate ISSN (International Standard Serial Number)
         * @see http://en.wikipedia.org/wiki/International_Standard_Serial_Number
         */
        validate(input: ValidateInput<ValidateOptions, Localization>): ValidateResult {
            if (input.value === '') {
                return { valid: true };
            }

            // Groups are separated by a hyphen or a space
            if (!/^\d{4}\-\d{3}[\dX]$/.test(input.value)) {
                return { valid: false };
            }

            // Replace all special characters except digits and X
            const chars = input.value.replace(/[^0-9X]/gi, '').split('');
            const length = chars.length;
            let sum = 0;

            if (chars[7] === 'X') {
                chars[7] = '10';
            }
            for (let i = 0; i < length; i++) {
                sum += parseInt(chars[i], 10) * (8 - i);
            }
            return { valid: (sum % 11 === 0) };
        },
    };
}
