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

export default function digits(): ValidateFunctionInterface<
    ValidateOptions,
    ValidateResult
> {
    return {
        /**
         * Return true if the input value contains digits only
         */
        validate(
            input: ValidateInput<ValidateOptions, Localization>
        ): ValidateResult {
            return { valid: input.value === '' || /^\d+$/.test(input.value) };
        },
    };
}
