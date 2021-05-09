/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

/**
 * Validate Greek VAT number
 *
 * @returns {ValidateResult}
 */
export default function grVat(value: string) {
    let v = value;
    if (/^(GR|EL)[0-9]{9}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{9}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }

    if (v.length === 8) {
        v = `0${v}`;
    }

    const weight = [256, 128, 64, 32, 16, 8, 4, 2];
    let sum = 0;
    for (let i = 0; i < 8; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = (sum % 11) % 10;

    return {
        meta: {},
        valid: `${sum}` === v.substr(8, 1),
    };
}
