/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

/**
 * Validate Turkish Identification Number
 *
 * @see https://en.wikipedia.org/wiki/Turkish_Identification_Number
 * @returns {ValidateResult}
 */
export default function trId(value: string) {
    if (value.length !== 11) {
        return {
            meta: {},
            valid: false,
        };
    }

    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(value.charAt(i), 10);
    }

    return {
        meta: {},
        valid: (sum % 10) === parseInt(value.charAt(10), 10),
    };
}
