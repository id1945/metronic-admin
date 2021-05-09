/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

/**
 * Validate Icelandic VAT (VSK) number
 *
 * @returns {ValidateResult}
 */
export default function isVat(value: string) {
    let v = value;
    if (/^IS[0-9]{5,6}$/.test(v)) {
        v = v.substr(2);
    }
    return {
        meta: {},
        valid: /^[0-9]{5,6}$/.test(v),
    };
}
