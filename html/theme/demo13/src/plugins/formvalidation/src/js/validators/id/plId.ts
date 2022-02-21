/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ValidateResult } from '../../core/Core';

/**
 * Validate Poland citizen number (PESEL)
 *
 * @see http://en.wikipedia.org/wiki/National_identification_number#Poland
 * @see http://en.wikipedia.org/wiki/PESEL
 * @returns {ValidateResult}
 */
export default function plId(value: string): ValidateResult {
    if (!/^[0-9]{11}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }

    let sum = 0;
    const length = value.length;
    const weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 7];

    for (let i = 0; i < length - 1; i++) {
        sum += weight[i] * parseInt(value.charAt(i), 10);
    }
    sum = sum % 10;
    if (sum === 0) {
        sum = 10;
    }
    sum = 10 - sum;

    return {
        meta: {},
        valid: `${sum}` === value.charAt(length - 1),
    };
}
