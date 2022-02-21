/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ValidateResult } from '../../core/Core';

/**
 * Validate Swiss VAT number
 *
 * @returns {ValidateResult}
 */
export default function chVat(value: string): ValidateResult {
    let v = value;
    if (/^CHE[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^E[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }

    v = v.substr(1);
    const weight = [5, 4, 3, 2, 7, 6, 5, 4];
    let sum = 0;
    for (let i = 0; i < 8; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }

    sum = 11 - (sum % 11);
    if (sum === 10) {
        return {
            meta: {},
            valid: false,
        };
    }
    if (sum === 11) {
        sum = 0;
    }

    return {
        meta: {},
        valid: `${sum}` === v.substr(8, 1),
    };
}
