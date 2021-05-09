/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import isValidDate from '../../utils/isValidDate';

/**
 * Validate Romanian numerical personal code (CNP)
 *
 * @see http://en.wikipedia.org/wiki/National_identification_number#Romania
 * @returns {ValidateResult}
 */
export default function roId(value: string) {
    if (!/^[0-9]{13}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    const gender = parseInt(value.charAt(0), 10);
    if (gender === 0 || gender === 7 || gender === 8) {
        return {
            meta: {},
            valid: false,
        };
    }

    // Determine the date of birth
    let year = parseInt(value.substr(1, 2), 10);
    const month = parseInt(value.substr(3, 2), 10);
    const day = parseInt(value.substr(5, 2), 10);
    // The year of date is determined base on the gender
    const centuries = {
        1: 1900,  // Male born between 1900 and 1999
        2: 1900,  // Female born between 1900 and 1999
        3: 1800,  // Male born between 1800 and 1899
        4: 1800,  // Female born between 1800 and 1899
        5: 2000,  // Male born after 2000
        6: 2000,   // Female born after 2000
    };
    if (day > 31 && month > 12) {
        return {
            meta: {},
            valid: false,
        };
    }
    if (gender !== 9) {
        year = centuries[gender + ''] + year;
        if (!isValidDate(year, month, day)) {
            return {
                meta: {},
                valid: false,
            };
        }
    }

    // Validate the check digit
    let sum = 0;
    const weight = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];
    const length = value.length;
    for (let i = 0; i < length - 1; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
    }
    sum = sum % 11;
    if (sum === 10) {
        sum = 1;
    }
    return {
        meta: {},
        valid: `${sum}` === value.charAt(length - 1),
    };
}
