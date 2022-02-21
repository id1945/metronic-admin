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

export interface ChoiceOptions extends ValidateOptions {
    max?: number;
    min?: number;
}
export interface ChoiceLocalization extends Localization {
    choice: {
        between: string;
        default: string;
        less: string;
        more: string;
    };
}

export default function choice(): ValidateFunctionInterface<
    ChoiceOptions,
    ValidateResult
> {
    return {
        validate(
            input: ValidateInput<ChoiceOptions, ChoiceLocalization>
        ): ValidateResult {
            const numChoices =
                'select' === input.element.tagName.toLowerCase()
                    ? input.element.querySelectorAll('option:checked').length
                    : input.elements.filter(
                          (ele) => (ele as HTMLInputElement).checked
                      ).length;

            const min = input.options.min ? `${input.options.min}` : '';
            const max = input.options.max ? `${input.options.max}` : '';
            let msg = input.l10n
                ? input.options.message || input.l10n.choice.default
                : input.options.message;

            const isValid = !(
                (min && numChoices < parseInt(min, 10)) ||
                (max && numChoices > parseInt(max, 10))
            );

            switch (true) {
                case !!min && !!max:
                    msg = format(
                        input.l10n
                            ? input.l10n.choice.between
                            : input.options.message,
                        [min, max]
                    );
                    break;

                case !!min:
                    msg = format(
                        input.l10n
                            ? input.l10n.choice.more
                            : input.options.message,
                        min
                    );
                    break;

                case !!max:
                    msg = format(
                        input.l10n
                            ? input.l10n.choice.less
                            : input.options.message,
                        max
                    );
                    break;

                default:
                    break;
            }

            return {
                message: msg,
                valid: isValid,
            };
        },
    };
}
