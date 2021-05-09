/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import luhn from '../../algorithms/luhn';

/**
 * Validate French VAT number (TVA - taxe sur la valeur ajoutée)
 * It's constructed by a SIREN number, prefixed by two characters.
 *
 * @returns {ValidateResult}
 */
export default function frVat(value: string) {
    let v = value;
    if (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9A-Z]{2}[0-9]{9}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }

    if (!luhn(v.substr(2))) {
        return {
            meta: {},
            valid: false,
        };
    }

    if (/^[0-9]{2}$/.test(v.substr(0, 2))) {
        // First two characters are digits
        return {
            meta: {},
            valid: v.substr(0, 2) === `${parseInt(v.substr(2) + '12', 10) % 97}`,
        };
    } else {
        // The first characters cann't be O and I
        const alphabet = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ';
        let check;
        // First one is digit
        if (/^[0-9]$/.test(v.charAt(0))) {
            check = alphabet.indexOf(v.charAt(0)) * 24 + alphabet.indexOf(v.charAt(1)) - 10;
        } else {
            check = alphabet.indexOf(v.charAt(0)) * 34 + alphabet.indexOf(v.charAt(1)) - 100;
        }
        return {
            meta: {},
            valid: ((parseInt(v.substr(2), 10) + 1 + Math.floor(check / 11)) % 11) === (check % 11),
        };
    }
}
