/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { Localization, ValidateInput, ValidateOptions, ValidateResult } from '../core/Core';

export default function rtn() {
    return {
        /**
         * Validate a RTN (Routing transit number)
         * @see http://en.wikipedia.org/wiki/Routing_transit_number
         */
        validate(input: ValidateInput<ValidateOptions, Localization>): ValidateResult {
            if (input.value === '') {
                return { valid: true };
            }

            if (!/^\d{9}$/.test(input.value)) {
                return { valid: false };
            }

            let sum = 0;
            for (let i = 0; i < input.value.length; i += 3) {
                sum += parseInt(input.value.charAt(i),     10) * 3
                    +  parseInt(input.value.charAt(i + 1), 10) * 7
                    +  parseInt(input.value.charAt(i + 2), 10);
            }
            return { valid: (sum !== 0 && sum % 10 === 0) };
        },
    };
}
