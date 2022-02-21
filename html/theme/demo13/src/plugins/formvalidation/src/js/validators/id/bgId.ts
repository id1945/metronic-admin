/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ValidateResult } from '../../core/Core';
import isValidDate from '../../utils/isValidDate';

/**
 * Validate Bulgarian national identification number (EGN)
 *
 * @see http://en.wikipedia.org/wiki/Uniform_civil_number
 * @returns {ValidateResult}
 */
export default function bgId(value: string): ValidateResult {
    if (!/^\d{10}$/.test(value) && !/^\d{6}\s\d{3}\s\d{1}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    const v = value.replace(/\s/g, '');
    // Check the birth date
    let year = parseInt(v.substr(0, 2), 10) + 1900;
    let month = parseInt(v.substr(2, 2), 10);
    const day = parseInt(v.substr(4, 2), 10);
    if (month > 40) {
        year += 100;
        month -= 40;
    } else if (month > 20) {
        year -= 100;
        month -= 20;
    }

    if (!isValidDate(year, month, day)) {
        return {
            meta: {},
            valid: false,
        };
    }

    let sum = 0;
    const weight = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    for (let i = 0; i < 9; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = (sum % 11) % 10;
    return {
        meta: {},
        valid: `${sum}` === v.substr(9, 1),
    };
}
