/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

/**
 * Validate Taiwan identity card number
 *
 * @see https://en.wikipedia.org/wiki/National_identification_number#Taiwan
 * @returns {ValidateResult}
 */
export default function twId(value: string) {
    const v = value.toUpperCase();
    if (!/^[A-Z][12][0-9]{8}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    const length = v.length;
    const alphabet = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
    const letterIndex = alphabet.indexOf(v.charAt(0)) + 10;
    const letterValue = Math.floor(letterIndex / 10) + (letterIndex % 10) * (length - 1);

    let sum = 0;
    for (let i = 1; i < length - 1; i++) {
        sum += parseInt(v.charAt(i), 10) * (length - 1 - i);
    }
    return {
        meta: {},
        valid: (letterValue + sum + parseInt(v.charAt(length - 1), 10)) % 10 === 0,
    };
}
