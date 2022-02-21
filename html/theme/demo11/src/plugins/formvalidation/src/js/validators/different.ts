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

type CompareDifferentCallback = () => string;

export interface DifferentOptions extends ValidateOptions {
    compare: string | CompareDifferentCallback;
}

export default function different(): ValidateFunctionInterface<
    DifferentOptions,
    ValidateResult
> {
    return {
        validate(
            input: ValidateInput<DifferentOptions, Localization>
        ): ValidateResult {
            const compareWith =
                'function' === typeof input.options.compare
                    ? (input.options.compare as CompareDifferentCallback).call(
                          this
                      )
                    : (input.options.compare as string);

            return {
                valid: compareWith === '' || input.value !== compareWith,
            };
        },
    };
}
