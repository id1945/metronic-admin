/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import isValidDate from '../../utils/isValidDate';

/**
 * Validate Latvian VAT number
 *
 * @returns {ValidateResult}
 */
export default function lv(value: string) {
    let v = value;
    if (/^LV[0-9]{11}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{11}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }

    const first = parseInt(v.charAt(0), 10);
    const length = v.length;
    let sum = 0;
    let weight = [];
    let i;
    if (first > 3) {
        // Legal entity
        sum = 0;
        weight = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1];
        for (i = 0; i < length; i++) {
            sum += parseInt(v.charAt(i), 10) * weight[i];
        }
        sum = sum % 11;
        return {
            meta: {},
            valid: sum === 3,
        };
    } else {
        // Check birth date
        const day = parseInt(v.substr(0, 2), 10);
        const month = parseInt(v.substr(2, 2), 10);
        let year = parseInt(v.substr(4, 2), 10);
        year = year + 1800 + parseInt(v.charAt(6), 10) * 100;

        if (!isValidDate(year, month, day)) {
            return {
                meta: {},
                valid: false,
            };
        }

        // Check personal code
        sum = 0;
        weight = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
        for (i = 0; i < length - 1; i++) {
            sum += parseInt(v.charAt(i), 10) * weight[i];
        }
        sum = (sum + 1) % 11 % 10;
        return {
            meta: {},
            valid: `${sum}` === v.charAt(length - 1),
        };
    }
}
