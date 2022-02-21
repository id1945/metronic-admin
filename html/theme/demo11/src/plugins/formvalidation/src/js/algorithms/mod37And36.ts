/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

/**
 * Implements Mod 37, 36 (ISO 7064) algorithm
 *
 * @param {string} value
 * @param {string} [alphabet]
 * @returns {boolean}
 */
export default function mod37And36(
    value: string,
    alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
): boolean {
    const length = value.length;
    const modulus = alphabet.length;
    let check = Math.floor(modulus / 2);
    for (let i = 0; i < length; i++) {
        check =
            ((((check || modulus) * 2) % (modulus + 1)) +
                alphabet.indexOf(value.charAt(i))) %
            modulus;
    }

    return check === 1;
}
