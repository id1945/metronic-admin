/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ValidateResult } from '../../core/Core';

/**
 * Validate Austrian VAT number
 *
 * @returns {ValidateResult}
 */
export default function atVat(value: string): ValidateResult {
    let v = value;
    if (/^ATU[0-9]{8}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^U[0-9]{8}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }

    v = v.substr(1);
    const weight = [1, 2, 1, 2, 1, 2, 1];
    let sum = 0;
    let temp = 0;
    for (let i = 0; i < 7; i++) {
        temp = parseInt(v.charAt(i), 10) * weight[i];
        if (temp > 9) {
            temp = Math.floor(temp / 10) + (temp % 10);
        }
        sum += temp;
    }

    sum = 10 - ((sum + 4) % 10);
    if (sum === 10) {
        sum = 0;
    }

    return {
        meta: {},
        valid: `${sum}` === v.substr(7, 1),
    };
}
