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

export default function hex(): ValidateFunctionInterface<
    ValidateOptions,
    ValidateResult
> {
    return {
        /**
         * Return true if and only if the input value is a valid hexadecimal number
         */
        validate(
            input: ValidateInput<ValidateOptions, Localization>
        ): ValidateResult {
            return {
                valid: input.value === '' || /^[0-9a-fA-F]+$/.test(input.value),
            };
        },
    };
}
