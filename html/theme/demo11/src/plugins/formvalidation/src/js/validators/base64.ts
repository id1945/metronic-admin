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

export default function base64(): ValidateFunctionInterface<
    ValidateOptions,
    ValidateResult
> {
    return {
        validate(
            input: ValidateInput<ValidateOptions, Localization>
        ): ValidateResult {
            return {
                valid:
                    input.value === '' ||
                    /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(
                        input.value
                    ),
            };
        },
    };
}
