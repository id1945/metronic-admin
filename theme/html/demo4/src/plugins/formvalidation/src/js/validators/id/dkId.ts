/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import isValidDate from '../../utils/isValidDate';

/**
 * Validate Danish Personal Identification number (CPR)
 *
 * @see https://en.wikipedia.org/wiki/Personal_identification_number_(Denmark)
 * @returns {ValidateResult}
 */
export default function dkId(value: string) {
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

    switch (true) {
        case ('5678'.indexOf(v.charAt(6)) !== -1 && year >= 58):
            year += 1800;
            break;
        case ('0123'.indexOf(v.charAt(6)) !== -1):
        case ('49'.indexOf(v.charAt(6)) !== -1 && year >= 37):
            year += 1900;
            break;
        default:
            year += 2000;
            break;
    }

    return {
        meta: {},
        valid: isValidDate(year, month, day),
    };
}
