/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ValidateResult } from '../../core/Core';

/**
 * Validate Colombian identification number (NIT)
 * @see https://es.wikipedia.org/wiki/N%C3%BAmero_de_Identificaci%C3%B3n_Tributaria
 * @returns {ValidateResult}
 */
export default function coId(value: string): ValidateResult {
    const v = value.replace(/\./g, '').replace('-', '');
    if (!/^\d{8,16}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    const length = v.length;
    const weight = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71];
    let sum = 0;
    for (let i = length - 2; i >= 0; i--) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = sum % 11;
    if (sum >= 2) {
        sum = 11 - sum;
    }
    return {
        meta: {},
        valid: `${sum}` === v.substr(length - 1),
    };
}
