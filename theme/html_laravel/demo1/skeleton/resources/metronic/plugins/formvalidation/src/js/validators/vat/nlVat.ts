/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import mod97And10 from '../../algorithms/mod97And10';
import nlId from '../id/nlId';

/**
 * Validate Dutch VAT number
 *
 * @returns {ValidateResult}
 */
export default function nlVat(value: string) {
    let v = value;
    if (/^NL[0-9]{9}B[0-9]{2}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{9}B[0-9]{2}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }

    const id = v.substr(0, 9);
    return {
        meta: {},
        valid: nlId(id).valid || mod97And10(`NL${v}`),
    };
}
