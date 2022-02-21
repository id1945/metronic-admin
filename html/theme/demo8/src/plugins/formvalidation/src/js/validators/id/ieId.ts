/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ValidateResult } from '../../core/Core';

/**
 * Validate Irish Personal Public Service Number (PPS)
 *
 * @see https://en.wikipedia.org/wiki/Personal_Public_Service_Number
 * @returns {ValidateResult}
 */
export default function ieId(value: string): ValidateResult {
    if (!/^\d{7}[A-W][AHWTX]?$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }

    const getCheckDigit = (v: string) => {
        let input = v;
        while (input.length < 7) {
            input = `0${input}`;
        }
        const alphabet = 'WABCDEFGHIJKLMNOPQRSTUV';
        let sum = 0;
        for (let i = 0; i < 7; i++) {
            sum += parseInt(input.charAt(i), 10) * (8 - i);
        }
        sum += 9 * alphabet.indexOf(input.substr(7));
        return alphabet[sum % 23];
    };

    // 2013 format
    const isValid =
        value.length === 9 &&
        ('A' === value.charAt(8) || 'H' === value.charAt(8))
            ? value.charAt(7) ===
              getCheckDigit(value.substr(0, 7) + value.substr(8) + '')
            : // The old format
              value.charAt(7) === getCheckDigit(value.substr(0, 7));
    return {
        meta: {},
        valid: isValid,
    };
}
