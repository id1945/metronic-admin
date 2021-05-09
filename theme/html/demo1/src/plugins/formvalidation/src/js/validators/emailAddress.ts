/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { Localization, ValidateInput, ValidateOptions, ValidateResult } from '../core/Core';

export interface EmailAddressOptions extends ValidateOptions {
    // Allow multiple email addresses, separated by a comma or semicolon; default is false.
    multiple?: boolean | string;
    // Regex for character or characters expected as separator between addresses
    // default is comma /[,;]/, i.e. comma or semicolon.
    separator?: string | RegExp;
}

export default function emailAddress() {
    const splitEmailAddresses = (emailAddresses: string, separator: string | RegExp) => {
        const quotedFragments = emailAddresses.split(/"/);
        const quotedFragmentCount = quotedFragments.length;
        const emailAddressArray = [];
        let nextEmailAddress = '';

        for (let i = 0; i < quotedFragmentCount; i++) {
            if (i % 2 === 0) {
                const splitEmailAddressFragments = quotedFragments[i].split(separator);
                const splitEmailAddressFragmentCount = splitEmailAddressFragments.length;

                if (splitEmailAddressFragmentCount === 1) {
                    nextEmailAddress += splitEmailAddressFragments[0];
                } else {
                    emailAddressArray.push(nextEmailAddress + splitEmailAddressFragments[0]);

                    for (let j = 1; j < splitEmailAddressFragmentCount - 1; j++) {
                        emailAddressArray.push(splitEmailAddressFragments[j]);
                    }
                    nextEmailAddress = splitEmailAddressFragments[splitEmailAddressFragmentCount - 1];
                }
            } else {
                nextEmailAddress += '"' + quotedFragments[i];
                if (i < quotedFragmentCount - 1) {
                    nextEmailAddress += '"';
                }
            }
        }

        emailAddressArray.push(nextEmailAddress);
        return emailAddressArray;
    };

    return {
        /**
         * Return true if and only if the input value is a valid email address
         */
        validate(input: ValidateInput<EmailAddressOptions, Localization>): ValidateResult {
            if (input.value === '') {
                return { valid: true };
            }
            const opts = Object.assign({}, {
                multiple: false,
                separator: /[,;]/,
            }, input.options);

            // Email address regular expression
            // http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
            // tslint:disable-next-line:max-line-length
            const emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            const allowMultiple = opts.multiple === true || `${opts.multiple}` === 'true';

            if (allowMultiple) {
                const separator = opts.separator || /[,;]/;
                const addresses = splitEmailAddresses(input.value, separator);
                const length = addresses.length;

                for (let i = 0; i < length; i++) {
                    if (!emailRegExp.test(addresses[i])) {
                        return { valid: false };
                    }
                }

                return { valid: true };
            } else {
                return { valid: emailRegExp.test(input.value) };
            }
        },
    };
}
