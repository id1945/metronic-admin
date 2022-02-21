/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import luhn from '../../algorithms/luhn';
import { ValidateResult } from '../../core/Core';

/**
 * Validate Italian VAT number, which consists of 11 digits.
 * - First 7 digits are a company identifier
 * - Next 3 are the province of residence
 * - The last one is a check digit
 *
 * @returns {ValidateResult}
 */
export default function itVat(value: string): ValidateResult {
    let v = value;
    if (/^IT[0-9]{11}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{11}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }

    if (parseInt(v.substr(0, 7), 10) === 0) {
        return {
            meta: {},
            valid: false,
        };
    }

    const lastThree = parseInt(v.substr(7, 3), 10);
    if (
        lastThree < 1 ||
        (lastThree > 201 && lastThree !== 999 && lastThree !== 888)
    ) {
        return {
            meta: {},
            valid: false,
        };
    }

    return {
        meta: {},
        valid: luhn(v),
    };
}
