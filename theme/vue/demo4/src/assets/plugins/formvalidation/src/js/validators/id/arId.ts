/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

/**
 * Validate Argentinian national identifiers
 *
 * @see https://en.wikipedia.org/wiki/Documento_Nacional_de_Identidad_(Argentina)
 * @returns {ValidateResult}
 */
export default function arId(value: string) {
    // Replace dot with empty space
    const v = value.replace(/\./g, '');
    return {
        meta: {},
        valid: /^\d{7,8}$/.test(v),
    };
}
