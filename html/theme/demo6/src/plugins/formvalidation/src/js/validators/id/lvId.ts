/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ValidateResult } from '../../core/Core';
import isValidDate from '../../utils/isValidDate';

/**
 * Validate Latvian Personal Code (Personas kods)
 *
 * @see http://laacz.lv/2006/11/25/pk-parbaudes-algoritms/
 * @returns {ValidateResult}
 */
export default function lvId(value: string): ValidateResult {
    if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    const v = value.replace(/\D/g, '');
    // Check birth date
    const day = parseInt(v.substr(0, 2), 10);
    const month = parseInt(v.substr(2, 2), 10);
    let year = parseInt(v.substr(4, 2), 10);
    year = year + 1800 + parseInt(v.charAt(6), 10) * 100;

    if (!isValidDate(year, month, day, true)) {
        return {
            meta: {},
            valid: false,
        };
    }

    // Check personal code
    let sum = 0;
    const weight = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
    for (let i = 0; i < 10; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = ((sum + 1) % 11) % 10;
    return {
        meta: {},
        valid: `${sum}` === v.charAt(10),
    };
}
