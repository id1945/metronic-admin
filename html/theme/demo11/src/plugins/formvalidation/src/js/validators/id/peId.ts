/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ValidateResult } from '../../core/Core';

/**
 * Validate Peruvian identity number (CUI)
 *
 * @see https://es.wikipedia.org/wiki/Documento_Nacional_de_Identidad_(Per%C3%BA)
 * @returns {ValidateResult}
 */
export default function peId(value: string): ValidateResult {
    if (!/^\d{8}[0-9A-Z]*$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    if (value.length === 8) {
        return {
            meta: {},
            valid: true,
        };
    }
    const weight = [3, 2, 7, 6, 5, 4, 3, 2];
    let sum = 0;
    for (let i = 0; i < 8; i++) {
        sum += weight[i] * parseInt(value.charAt(i), 10);
    }
    const cd = sum % 11;
    const checkDigit = [6, 5, 4, 3, 2, 1, 1, 0, 9, 8, 7][cd];
    const checkChar = 'KJIHGFEDCBA'.charAt(cd);
    return {
        meta: {},
        valid:
            value.charAt(8) === `${checkDigit}` ||
            value.charAt(8) === checkChar,
    };
}
