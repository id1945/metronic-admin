/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ValidateResult } from '../../core/Core';

/**
 * Validate Serbian VAT number
 *
 * @returns {ValidateResult}
 */
export default function rsVat(value: string): ValidateResult {
    let v = value;
    if (/^RS[0-9]{9}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{9}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }

    let sum = 10;
    let temp = 0;
    for (let i = 0; i < 8; i++) {
        temp = (parseInt(v.charAt(i), 10) + sum) % 10;
        if (temp === 0) {
            temp = 10;
        }
        sum = (2 * temp) % 11;
    }

    return {
        meta: {},
        valid: (sum + parseInt(v.substr(8, 1), 10)) % 10 === 1,
    };
}
