/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

/**
 * Validate Romanian VAT number
 *
 * @returns {ValidateResult}
 */
export default function roVat(value: string) {
    let v = value;
    if (/^RO[1-9][0-9]{1,9}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[1-9][0-9]{1,9}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }

    const length = v.length;
    const weight = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - length);
    let sum = 0;
    for (let i = 0; i < length - 1; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    sum = (10 * sum) % 11 % 10;
    return {
        meta: {},
        valid: `${sum}` === v.substr(length - 1, 1),
    };
}
