/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ValidateResult } from '../../core/Core';

/**
 * Validate Portuguese VAT number
 *
 * @returns {ValidateResult}
 */
export default function ptVat(value: string): ValidateResult {
    let v = value;
    if (/^PT[0-9]{9}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{9}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }

    const weight = [9, 8, 7, 6, 5, 4, 3, 2];
    let sum = 0;
    for (let i = 0; i < 8; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = 11 - (sum % 11);
    if (sum > 9) {
        sum = 0;
    }
    return {
        meta: {},
        valid: `${sum}` === v.substr(8, 1),
    };
}
