/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { Localization, ValidateInput, ValidateOptions, ValidateResult } from '../core/Core';

type CompareIdenticalCallback = () => string;

export interface IdenticalOptions extends ValidateOptions {
    compare: string | CompareIdenticalCallback;
}

export default function identical() {
    return {
        validate(input: ValidateInput<IdenticalOptions, Localization>): ValidateResult {
            const compareWith = ('function' === typeof input.options.compare)
                ? (input.options.compare as CompareIdenticalCallback).call(this)
                : (input.options.compare as string);

            return {
                valid: (compareWith === '' || input.value === compareWith),
            };
        },
    };
}
