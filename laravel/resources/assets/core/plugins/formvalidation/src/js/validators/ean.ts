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

export default function ean(): ValidateFunctionInterface<
    ValidateOptions,
    ValidateResult
> {
    return {
        /**
         * Validate EAN (International Article Number)
         * @see http://en.wikipedia.org/wiki/European_Article_Number
         */
        validate(
            input: ValidateInput<ValidateOptions, Localization>
        ): ValidateResult {
            if (input.value === '') {
                return { valid: true };
            }

            if (!/^(\d{8}|\d{12}|\d{13}|\d{14})$/.test(input.value)) {
                return { valid: false };
            }

            const length = input.value.length;
            let sum = 0;
            const weight = length === 8 ? [3, 1] : [1, 3];
            for (let i = 0; i < length - 1; i++) {
                sum += parseInt(input.value.charAt(i), 10) * weight[i % 2];
            }
            sum = (10 - (sum % 10)) % 10;
            return { valid: `${sum}` === input.value.charAt(length - 1) };
        },
    };
}
