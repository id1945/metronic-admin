/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

/**
 * Implement modulus 11, 10 (ISO 7064) algorithm
 *
 * @param {string} value
 * @returns {boolean}
 */
export default function mod11And10(value: string): boolean {
    const length = value.length;
    let check = 5;

    for (let i = 0; i < length; i++) {
        check = (((check || 10) * 2) % 11 + parseInt(value.charAt(i), 10)) % 10;
    }

    return (check === 1);
}
