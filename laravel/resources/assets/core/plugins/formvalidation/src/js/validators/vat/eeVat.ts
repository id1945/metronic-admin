/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ValidateResult } from '../../core/Core';

/**
 * Validate Estonian VAT number
 *
 * @returns {ValidateResult}
 */
export default function eeVat(value: string): ValidateResult {
    let v = value;
    if (/^EE[0-9]{9}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{9}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }

    let sum = 0;
    const weight = [3, 7, 1, 3, 7, 1, 3, 7, 1];
    for (let i = 0; i < 9; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    return {
        meta: {},
        valid: sum % 10 === 0,
    };
}
