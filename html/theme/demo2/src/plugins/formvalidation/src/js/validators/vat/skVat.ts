/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ValidateResult } from '../../core/Core';

/**
 * Validate Slovak VAT number
 *
 * @returns {ValidateResult}
 */
export default function skVat(value: string): ValidateResult {
    let v = value;
    if (/^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }

    return {
        meta: {},
        valid: parseInt(v, 10) % 11 === 0,
    };
}
