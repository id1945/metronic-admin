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

export default function sedol(): ValidateFunctionInterface<
    ValidateOptions,
    ValidateResult
> {
    return {
        /**
         * Validate a SEDOL (Stock Exchange Daily Official List)
         * @see http://en.wikipedia.org/wiki/SEDOL
         */
        validate(
            input: ValidateInput<ValidateOptions, Localization>
        ): ValidateResult {
            if (input.value === '') {
                return { valid: true };
            }

            const v = input.value.toUpperCase();
            if (!/^[0-9A-Z]{7}$/.test(v)) {
                return { valid: false };
            }

            const weight = [1, 3, 1, 7, 3, 9, 1];
            const length = v.length;
            let sum = 0;
            for (let i = 0; i < length - 1; i++) {
                sum += weight[i] * parseInt(v.charAt(i), 36);
            }
            sum = (10 - (sum % 10)) % 10;
            return { valid: `${sum}` === v.charAt(length - 1) };
        },
    };
}
