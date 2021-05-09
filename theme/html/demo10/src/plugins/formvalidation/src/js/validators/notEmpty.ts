/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { Localization, ValidateInput, ValidateOptions, ValidateResult } from '../core/Core';

export interface NotEmptyOptions extends ValidateOptions {
    trim?: boolean;
}

export default function notEmpty() {
    return {
        validate(input: ValidateInput<NotEmptyOptions, Localization>): ValidateResult {
            const trim = !!input.options && !!input.options.trim;
            const value = input.value;
            return {
                valid: (!trim && value !== '') || (trim && value !== '' && value.trim() !== ''),
            };
        },
    };
}
