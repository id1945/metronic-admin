/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import luhn from '../algorithms/luhn';
import {
    Localization,
    ValidateFunctionInterface,
    ValidateInput,
    ValidateOptions,
    ValidateResult,
} from '../core/Core';

export default function siren(): ValidateFunctionInterface<
    ValidateOptions,
    ValidateResult
> {
    return {
        /**
         * Check if a string is a siren number
         */
        validate(
            input: ValidateInput<ValidateOptions, Localization>
        ): ValidateResult {
            return {
                valid:
                    input.value === '' ||
                    (/^\d{9}$/.test(input.value) && luhn(input.value)),
            };
        },
    };
}
