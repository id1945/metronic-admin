/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { Localization, ValidateInput, ValidateOptions, ValidateResult } from '../core/Core';

export default function siret() {
    return {
        /**
         * Check if a string is a siret number
         */
        validate(input: ValidateInput<ValidateOptions, Localization>): ValidateResult {
            if (input.value === '') {
                return { valid: true };
            }

            const length = input.value.length;
            let sum = 0;
            let tmp;
            for (let i = 0; i < length; i++) {
                tmp = parseInt(input.value.charAt(i), 10);
                if ((i % 2) === 0) {
                    tmp = tmp * 2;
                    if (tmp > 9) {
                        tmp -= 9;
                    }
                }
                sum += tmp;
            }
            return { valid: sum % 10 === 0 };
        },
    };
}
