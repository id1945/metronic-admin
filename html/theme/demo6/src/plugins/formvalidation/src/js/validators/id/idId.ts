/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ValidateResult } from '../../core/Core';
import verhoeff from '../../algorithms/verhoeff';

/**
 * Validate Indian Aadhaar numbers
 * @see https://en.wikipedia.org/wiki/Aadhaar
 * @returns {ValidateResult}
 */
export default function idId(value: string): ValidateResult {
    if (!/^[2-9]\d{11}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    const converted = value.split('').map((item) => parseInt(item, 10));
    return {
        meta: {},
        valid: verhoeff(converted),
    };
}
