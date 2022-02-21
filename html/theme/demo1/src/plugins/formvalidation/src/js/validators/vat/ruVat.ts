/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ValidateResult } from '../../core/Core';

/**
 * Validate Russian VAT number (Taxpayer Identification Number - INN)
 *
 * @returns {ValidateResult}
 */
export default function ruVat(value: string): ValidateResult {
    let v = value;
    if (/^RU([0-9]{10}|[0-9]{12})$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^([0-9]{10}|[0-9]{12})$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }

    let i = 0;
    if (v.length === 10) {
        const weight = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
        let sum = 0;
        for (i = 0; i < 10; i++) {
            sum += parseInt(v.charAt(i), 10) * weight[i];
        }
        sum = sum % 11;
        if (sum > 9) {
            sum = sum % 10;
        }

        return {
            meta: {},
            valid: `${sum}` === v.substr(9, 1),
        };
    } else if (v.length === 12) {
        const weight1 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
        const weight2 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
        let sum1 = 0;
        let sum2 = 0;
        for (i = 0; i < 11; i++) {
            sum1 += parseInt(v.charAt(i), 10) * weight1[i];
            sum2 += parseInt(v.charAt(i), 10) * weight2[i];
        }
        sum1 = sum1 % 11;
        if (sum1 > 9) {
            sum1 = sum1 % 10;
        }
        sum2 = sum2 % 11;
        if (sum2 > 9) {
            sum2 = sum2 % 10;
        }

        return {
            meta: {},
            valid:
                `${sum1}` === v.substr(10, 1) && `${sum2}` === v.substr(11, 1),
        };
    }

    return {
        meta: {},
        valid: true,
    };
}
