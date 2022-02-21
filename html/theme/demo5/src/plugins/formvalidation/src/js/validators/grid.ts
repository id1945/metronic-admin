/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import mod37And36 from '../algorithms/mod37And36';
import {
    Localization,
    ValidateFunctionInterface,
    ValidateInput,
    ValidateOptions,
    ValidateResult,
} from '../core/Core';

export default function grid(): ValidateFunctionInterface<
    ValidateOptions,
    ValidateResult
> {
    return {
        /**
         * Validate GRId (Global Release Identifier)
         * @see http://en.wikipedia.org/wiki/Global_Release_Identifier
         */
        validate(
            input: ValidateInput<ValidateOptions, Localization>
        ): ValidateResult {
            if (input.value === '') {
                return { valid: true };
            }

            let v = input.value.toUpperCase();
            if (
                !/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(
                    v
                )
            ) {
                return { valid: false };
            }
            v = v.replace(/\s/g, '').replace(/-/g, '');
            if ('GRID:' === v.substr(0, 5)) {
                v = v.substr(5);
            }
            return { valid: mod37And36(v) };
        },
    };
}
