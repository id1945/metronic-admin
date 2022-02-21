/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ValidateResult } from '../../core/Core';

/**
 * Validate Argentinian VAT number
 *
 * @see https://es.wikipedia.org/wiki/Clave_%C3%9Anica_de_Identificaci%C3%B3n_Tributaria
 * @returns {ValidateResult}
 */
export default function arVat(value: string): ValidateResult {
    // Replace `-` with empty
    let v = value.replace('-', '');
    if (/^AR[0-9]{11}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{11}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    const weight = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = 11 - (sum % 11);
    if (sum === 11) {
        sum = 0;
    }
    return {
        meta: {},
        valid: `${sum}` === v.substr(10),
    };
}
