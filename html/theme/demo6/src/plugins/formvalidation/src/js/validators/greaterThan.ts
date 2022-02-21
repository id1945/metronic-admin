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
import format from '../utils/format';

export interface GreaterThanOptions extends ValidateOptions {
    // Default is true
    inclusive: boolean;
    message: string;
    min?: number;
}
export interface GreaterThanLocalization extends Localization {
    greaterThan: {
        default: string;
        notInclusive: string;
    };
}

export default function greaterThan(): ValidateFunctionInterface<
    GreaterThanOptions,
    ValidateResult
> {
    return {
        validate(
            input: ValidateInput<GreaterThanOptions, GreaterThanLocalization>
        ): ValidateResult {
            if (input.value === '') {
                return { valid: true };
            }

            const opts = Object.assign(
                {},
                { inclusive: true, message: '' },
                input.options
            );
            const minValue = parseFloat(`${opts.min}`.replace(',', '.'));
            return opts.inclusive
                ? {
                      message: format(
                          input.l10n
                              ? opts.message || input.l10n.greaterThan.default
                              : opts.message,
                          `${minValue}`
                      ),
                      valid: parseFloat(input.value) >= minValue,
                  }
                : {
                      message: format(
                          input.l10n
                              ? opts.message ||
                                    input.l10n.greaterThan.notInclusive
                              : opts.message,
                          `${minValue}`
                      ),
                      valid: parseFloat(input.value) > minValue,
                  };
        },
    };
}
