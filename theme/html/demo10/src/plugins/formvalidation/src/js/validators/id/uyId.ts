/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

/**
 * Validate Uruguayan identity document
 *
 * @see https://en.wikipedia.org/wiki/Identity_document#Uruguay
 * @returns {ValidateResult}
 */
export default function uyId(value: string) {
    if (!/^\d{8}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    const weight = [2, 9, 8, 7, 6, 3, 4];
    let sum = 0;
    for (let i = 0; i < 7; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
    }
    sum = sum % 10;
    if (sum > 0) {
        sum = 10 - sum;
    }
    return {
        meta: {},
        valid: `${sum}` === value.charAt(7),
    };
}
