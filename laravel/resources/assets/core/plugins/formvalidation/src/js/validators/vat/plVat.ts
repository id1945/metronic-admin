/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ValidateResult } from '../../core/Core';

/**
 * Validate Polish VAT number
 *
 * @returns {ValidateResult}
 */
export default function plVat(value: string): ValidateResult {
    let v = value;
    if (/^PL[0-9]{10}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{10}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }

    const weight = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1];
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    return {
        meta: {},
        valid: sum % 11 === 0,
    };
}
