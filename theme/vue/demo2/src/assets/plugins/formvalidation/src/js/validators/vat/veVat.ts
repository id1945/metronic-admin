/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

/**
 * Validate Venezuelan VAT number (RIF)
 *
 * @returns {ValidateResult}
 */
export default function veVat(value: string) {
    let v = value;
    if (/^VE[VEJPG][0-9]{9}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[VEJPG][0-9]{9}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }

    const types = {
        E: 8,
        G: 20,
        J: 12,
        P: 16,
        V: 4,
    };
    const weight = [3, 2, 7, 6, 5, 4, 3, 2];
    let sum = types[v.charAt(0)];

    for (let i = 0; i < 8; i++) {
        sum += parseInt(v.charAt(i + 1), 10) * weight[i];
    }

    sum = 11 - sum % 11;
    if (sum === 11 || sum === 10) {
        sum = 0;
    }
    return {
        meta: {},
        valid: `${sum}` === v.substr(9, 1),
    };
}
