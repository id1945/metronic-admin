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
import call from '../utils/call';

export interface CallbackOptions extends ValidateOptions {
    callback: ((...arg: unknown[]) => unknown) | string;
}

export default function callback(): ValidateFunctionInterface<
    CallbackOptions,
    ValidateResult
> {
    return {
        validate(
            input: ValidateInput<CallbackOptions, Localization>
        ): ValidateResult {
            const response = call(input.options.callback, [input]);
            return 'boolean' === typeof response
                ? { valid: response } // Deprecated
                : (response as ValidateResult);
        },
    };
}
