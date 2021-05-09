/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { Localization, ValidateInput, ValidateOptions, ValidateResult } from '../core/Core';

export default function isbn() {
    return {
        /**
         * Return true if the input value is a valid ISBN 10 or ISBN 13 number
         * @see http://en.wikipedia.org/wiki/International_Standard_Book_Number
         */
        validate(input: ValidateInput<ValidateOptions, Localization>): ValidateResult {
            if (input.value === '') {
                return {
                    meta: {
                        type: null,
                    },
                    valid: true,
                };
            }

            // http://en.wikipedia.org/wiki/International_Standard_Book_Number#Overview
            // Groups are separated by a hyphen or a space
            let tpe;
            switch (true) {
                case /^\d{9}[\dX]$/.test(input.value):
                case (input.value.length === 13 && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(input.value)):
                case (input.value.length === 13 && /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(input.value)):
                    tpe = 'ISBN10';
                    break;

                case /^(978|979)\d{9}[\dX]$/.test(input.value):
                case (input.value.length === 17 && /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(input.value)):
                case (input.value.length === 17 && /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(input.value)):
                    tpe = 'ISBN13';
                    break;

                default:
                    return {
                        meta: {
                            type: null,
                        },
                        valid: false,
                    };
            }

            // Replace all special characters except digits and X
            const chars = input.value.replace(/[^0-9X]/gi, '').split('');
            const length = chars.length;
            let sum = 0;
            let i;
            let checksum;

            switch (tpe) {
                case 'ISBN10':
                    sum = 0;
                    for (i = 0; i < length - 1; i++) {
                        sum += parseInt(chars[i], 10) * (10 - i);
                    }
                    checksum = 11 - (sum % 11);
                    if (checksum === 11) {
                        checksum = 0;
                    } else if (checksum === 10) {
                        checksum = 'X';
                    }
                    return {
                        meta: {
                            type: tpe,
                        },
                        valid: `${checksum}` === chars[length - 1],
                    };

                case 'ISBN13':
                    sum = 0;
                    for (i = 0; i < length - 1; i++) {
                        sum += ((i % 2 === 0) ? parseInt(chars[i], 10) : (parseInt(chars[i], 10) * 3));
                    }
                    checksum = 10 - (sum % 10);
                    if (checksum === 10) {
                        checksum = '0';
                    }
                    return {
                        meta: {
                            type: tpe,
                        },
                        valid: `${checksum}` === chars[length - 1],
                    };
            }
        },
    };
}
