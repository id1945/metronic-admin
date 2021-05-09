/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

/**
 * Validate Hong Kong identity card number (HKID)
 *
 * @see https://en.wikipedia.org/wiki/National_identification_number#Hong_Kong
 * @returns {ValidateResult}
 */
export default function hkId(value: string) {
    const v = value.toUpperCase();
    if (!/^[A-MP-Z]{1,2}[0-9]{6}[0-9A]$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const firstChar = v.charAt(0);
    const secondChar = v.charAt(1);
    let sum = 0;
    let digitParts = v;
    if (/^[A-Z]$/.test(secondChar)) {
        sum += 9 * (10 + alphabet.indexOf(firstChar));
        sum += 8 * (10 + alphabet.indexOf(secondChar));
        digitParts = v.substr(2);
    } else {
        sum += 9 * 36;
        sum += 8 * (10 + alphabet.indexOf(firstChar));
        digitParts = v.substr(1);
    }

    const length = digitParts.length;
    for (let i = 0; i < length - 1; i++) {
        sum += (7 - i) * parseInt(digitParts.charAt(i), 10);
    }
    const remaining = sum % 11;
    const checkDigit = remaining === 0 ? '0' : (11 - remaining === 10 ? 'A' : `${11 - remaining}`);
    return {
        meta: {},
        valid: checkDigit === digitParts.charAt(length - 1),
    };
}
