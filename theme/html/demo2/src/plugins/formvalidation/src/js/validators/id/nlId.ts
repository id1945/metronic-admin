/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

/**
 * Validate Dutch national identification number (BSN)
 *
 * @see https://nl.wikipedia.org/wiki/Burgerservicenummer
 * @returns {ValidateResult}
 */
export default function nlId(value: string) {
    if (value.length < 8) {
        return {
            meta: {},
            valid: false,
        };
    }

    let v = value;
    if (v.length === 8) {
        v = `0${v}`;
    }
    if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    v = v.replace(/\./g, '');
    if (parseInt(v, 10) === 0) {
        return {
            meta: {},
            valid: false,
        };
    }
    let sum = 0;
    const length = v.length;
    for (let i = 0; i < length - 1; i++) {
        sum += (9 - i) * parseInt(v.charAt(i), 10);
    }
    sum = sum % 11;
    if (sum === 10) {
        sum = 0;
    }
    return {
        meta: {},
        valid: `${sum}` === v.charAt(length - 1),
    };
}
