/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

/**
 * Validate South African VAT number
 *
 * @returns {ValidateResult}
 */
export default function zaVat(value: string) {
    let v = value;
    if (/^ZA4[0-9]{9}$/.test(v)) {
        v = v.substr(2);
    }

    return {
        meta: {},
        valid: /^4[0-9]{9}$/.test(v),
    };
}
