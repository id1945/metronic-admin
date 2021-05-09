/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import luhn from '../../algorithms/luhn';
import isValidDate from '../../utils/isValidDate';

/**
 * Validate Swedish personal identity number (personnummer)
 *
 * @see http://en.wikipedia.org/wiki/Personal_identity_number_(Sweden)
 * @returns {ValidateResult}
 */
export default function seId(value: string) {
    if (!/^[0-9]{10}$/.test(value) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    const v = value.replace(/[^0-9]/g, '');
    const year = parseInt(v.substr(0, 2), 10) + 1900;
    const month = parseInt(v.substr(2, 2), 10);
    const day = parseInt(v.substr(4, 2), 10);
    if (!isValidDate(year, month, day)) {
        return {
            meta: {},
            valid: false,
        };
    }

    // Validate the last check digit
    return {
        meta: {},
        valid: luhn(v),
    };
}
