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

export interface StringCaseOptions extends ValidateOptions {
    // Can be 'lower' (default) or 'upper'
    case: string;
}
export interface StringCaseLocalization extends Localization {
    stringCase: {
        default: string;
        upper: string;
    };
}

export default function stringCase(): ValidateFunctionInterface<
    StringCaseOptions,
    ValidateResult
> {
    return {
        /**
         * Check if a string is a lower or upper case one
         */
        validate(
            input: ValidateInput<StringCaseOptions, StringCaseLocalization>
        ): ValidateResult {
            if (input.value === '') {
                return { valid: true };
            }

            const opts = Object.assign({}, { case: 'lower' }, input.options);
            const caseOpt = (opts.case || 'lower').toLowerCase();
            return {
                message:
                    opts.message ||
                    (input.l10n
                        ? 'upper' === caseOpt
                            ? input.l10n.stringCase.upper
                            : input.l10n.stringCase.default
                        : opts.message),
                valid:
                    'upper' === caseOpt
                        ? input.value === input.value.toUpperCase()
                        : input.value === input.value.toLowerCase(),
            };
        },
    };
}
