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

export interface StringLengthOptions extends ValidateOptions {
    // At least one of two options is required
    // The min, max keys define the number which the field value compares to. min, max can be
    // - A number
    // - Name of field which its value defines the number
    // - Name of callback function that returns the number
    // - A callback function that returns the number
    max?: number | string;
    min?: number | string;
    // Indicate the length will be calculated after trimming the value or not. It is false, by default
    trim?: boolean | string;
    // Evaluate string length in UTF-8 bytes, default to false
    utf8Bytes?: boolean | string;
}
export interface StringLengthLocalization extends Localization {
    stringLength: {
        between: string;
        default: string;
        less: string;
        more: string;
    };
}

export default function stringLength(): ValidateFunctionInterface<
    StringLengthOptions,
    ValidateResult
> {
    // Credit to http://stackoverflow.com/a/23329386 (@lovasoa) for UTF-8 byte length code
    const utf8Length = (str: string) => {
        let s = str.length;
        for (let i = str.length - 1; i >= 0; i--) {
            const code = str.charCodeAt(i);
            if (code > 0x7f && code <= 0x7ff) {
                s++;
            } else if (code > 0x7ff && code <= 0xffff) {
                s += 2;
            }
            if (code >= 0xdc00 && code <= 0xdfff) {
                i--;
            }
        }
        return `${s}`;
    };

    return {
        /**
         * Check if the length of element value is less or more than given number
         */
        validate(
            input: ValidateInput<StringLengthOptions, StringLengthLocalization>
        ): ValidateResult {
            const opts = Object.assign(
                {},
                {
                    message: '',
                    trim: false,
                    utf8Bytes: false,
                },
                input.options
            );
            const v =
                opts.trim === true || `${opts.trim}` === 'true'
                    ? input.value.trim()
                    : input.value;
            if (v === '') {
                return { valid: true };
            }

            // TODO: `min`, `max` can be dynamic options
            const min = opts.min ? `${opts.min}` : '';
            const max = opts.max ? `${opts.max}` : '';
            const length = opts.utf8Bytes ? utf8Length(v) : v.length;

            let isValid = true;
            let msg = input.l10n
                ? opts.message || input.l10n.stringLength.default
                : opts.message;

            if (
                (min && length < parseInt(min, 10)) ||
                (max && length > parseInt(max, 10))
            ) {
                isValid = false;
            }

            switch (true) {
                case !!min && !!max:
                    msg = format(
                        input.l10n
                            ? opts.message || input.l10n.stringLength.between
                            : opts.message,
                        [min, max]
                    );
                    break;

                case !!min:
                    msg = format(
                        input.l10n
                            ? opts.message || input.l10n.stringLength.more
                            : opts.message,
                        `${parseInt(min, 10)}`
                    );
                    break;

                case !!max:
                    msg = format(
                        input.l10n
                            ? opts.message || input.l10n.stringLength.less
                            : opts.message,
                        `${parseInt(max, 10)}`
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
