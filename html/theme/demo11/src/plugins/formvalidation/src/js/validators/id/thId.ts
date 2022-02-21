/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ValidateResult } from '../../core/Core';

/**
 * Validate Thailand citizen number
 *
 * @see http://en.wikipedia.org/wiki/National_identification_number#Thailand
 * @returns {ValidateResult}
 */
export default function thId(value: string): ValidateResult {
    if (value.length !== 13) {
        return {
            meta: {},
            valid: false,
        };
    }

    let sum = 0;
    for (let i = 0; i < 12; i++) {
        sum += parseInt(value.charAt(i), 10) * (13 - i);
    }

    return {
        meta: {},
        valid: (11 - (sum % 11)) % 10 === parseInt(value.charAt(12), 10),
    };
}
