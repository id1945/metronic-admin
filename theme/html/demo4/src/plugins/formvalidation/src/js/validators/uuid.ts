/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { Localization, ValidateInput, ValidateOptions, ValidateResult } from '../core/Core';
import format from '../utils/format';

export interface UuidOptions extends ValidateOptions {
    // Can be 3, 4, 5, null
    version?: string;
}
export interface UuidLocalization extends Localization {
    uuid: {
        default: string,
        version: string,
    };
}

export default function uuid() {
    return {
        /**
         * Return true if and only if the input value is a valid UUID string
         * @see http://en.wikipedia.org/wiki/Universally_unique_identifier
         */
        validate(input: ValidateInput<UuidOptions, UuidLocalization>): ValidateResult {
            if (input.value === '') {
                return { valid: true };
            }

            const opts = Object.assign({}, { message: '' }, input.options);

            // See the format at http://en.wikipedia.org/wiki/Universally_unique_identifier#Variants_and_versions
            const patterns = {
                3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
                4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
            };
            const version = opts.version ? `${opts.version}` : 'all';
            return {
                message: opts.version
                        ? format(input.l10n ? opts.message || input.l10n.uuid.version : opts.message, opts.version)
                        : (input.l10n ? input.l10n.uuid.default : opts.message),
                valid: (null === patterns[version]) ? true : patterns[version].test(input.value),
            };
        },
    };
}
