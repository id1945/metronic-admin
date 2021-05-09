/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

/**
 * Validate Finnish VAT number
 *
 * @returns {ValidateResult}
 */
export default function fiVat(value: string) {
    let v = value;
    if (/^FI[0-9]{8}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{8}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }

    const weight = [7, 9, 10, 5, 8, 4, 2, 1];
    let sum = 0;
    for (let i = 0; i < 8; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    return {
        meta: {},
        valid: sum % 11 === 0,
    };
}
