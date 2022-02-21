/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import luhn from '../../algorithms/luhn';
import { ValidateResult } from '../../core/Core';
import isValidDate from '../../utils/isValidDate';

/**
 * Validate South African ID
 *
 * @see http://en.wikipedia.org/wiki/National_identification_number#South_Africa
 * @returns {ValidateResult}
 */
export default function zaId(value: string): ValidateResult {
    if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    let year = parseInt(value.substr(0, 2), 10);
    const currentYear = new Date().getFullYear() % 100;
    const month = parseInt(value.substr(2, 2), 10);
    const day = parseInt(value.substr(4, 2), 10);
    year = year >= currentYear ? year + 1900 : year + 2000;

    if (!isValidDate(year, month, day)) {
        return {
            meta: {},
            valid: false,
        };
    }

    // Validate the last check digit
    return {
        meta: {},
        valid: luhn(value),
    };
}
