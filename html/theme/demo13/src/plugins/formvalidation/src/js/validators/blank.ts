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

/**
 * This validator always returns valid.
 * It can be used when we want to show the custom message returned from server
 */
export default function blank(): ValidateFunctionInterface<
    ValidateOptions,
    ValidateResult
> {
    return {
        validate(
            _input: ValidateInput<ValidateOptions, Localization>
        ): ValidateResult {
            return { valid: true };
        },
    };
}
