/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import isValidDate from '../../utils/isValidDate';

/**
 * Validate Iceland national identification number (Kennitala)
 *
 * @see http://en.wikipedia.org/wiki/Kennitala
 * @returns {ValidateResult}
 */
export default function isId(value: string) {
    if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    const v = value.replace(/-/g, '');
    const day = parseInt(v.substr(0, 2), 10);
    const month = parseInt(v.substr(2, 2), 10);
    let year = parseInt(v.substr(4, 2), 10);
    const century = parseInt(v.charAt(9), 10);

    year = (century === 9) ? (1900 + year) : ((20 + century) * 100 + year);
    if (!isValidDate(year, month, day, true)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Validate the check digit
    const weight = [3, 2, 7, 6, 5, 4, 3, 2];
    let sum = 0;
    for (let i = 0; i < 8; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = 11 - sum % 11;
    return {
        meta: {},
        valid: `${sum}` === v.charAt(8),
    };
}
