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

export interface LessThanOptions extends ValidateOptions {
    // Default is true
    inclusive: boolean;
    max?: number;
}
export interface LessThanLocalization extends Localization {
    lessThan: {
        default: string;
        notInclusive: string;
    };
}

export default function lessThan(): ValidateFunctionInterface<
    LessThanOptions,
    ValidateResult
> {
    return {
        validate(
            input: ValidateInput<LessThanOptions, LessThanLocalization>
        ): ValidateResult {
            if (input.value === '') {
                return { valid: true };
            }

            const opts = Object.assign(
                {},
                { inclusive: true, message: '' },
                input.options
            );
            const maxValue = parseFloat(`${opts.max}`.replace(',', '.'));
            return opts.inclusive
                ? {
                      message: format(
                          input.l10n
                              ? opts.message || input.l10n.lessThan.default
                              : opts.message,
                          `${maxValue}`
                      ),
                      valid: parseFloat(input.value) <= maxValue,
                  }
                : {
                      message: format(
                          input.l10n
                              ? opts.message || input.l10n.lessThan.notInclusive
                              : opts.message,
                          `${maxValue}`
                      ),
                      valid: parseFloat(input.value) < maxValue,
                  };
        },
    };
}
