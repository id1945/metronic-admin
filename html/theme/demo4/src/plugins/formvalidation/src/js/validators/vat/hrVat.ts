/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import mod11And10 from '../../algorithms/mod11And10';
import { ValidateResult } from '../../core/Core';

/**
 * Validate Croatian VAT number
 *
 * @returns {ValidateResult}
 */
export default function hrVat(value: string): ValidateResult {
    let v = value;
    if (/^HR[0-9]{11}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{11}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }

    return {
        meta: {},
        valid: mod11And10(v),
    };
}
