/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ValidateResult } from '../../core/Core';

/**
 * Validate United Kingdom VAT number
 *
 * @returns {ValidateResult}
 */
export default function gbVat(value: string): ValidateResult {
    let v = value;
    if (
        /^GB[0-9]{9}$/.test(v) /* Standard */ ||
        /^GB[0-9]{12}$/.test(v) /* Branches */ ||
        /^GBGD[0-9]{3}$/.test(v) /* Government department */ ||
        /^GBHA[0-9]{3}$/.test(v) /* Health authority */ ||
        /^GB(GD|HA)8888[0-9]{5}$/.test(v)
    ) {
        v = v.substr(2);
    }
    if (
        !/^[0-9]{9}$/.test(v) &&
        !/^[0-9]{12}$/.test(v) &&
        !/^GD[0-9]{3}$/.test(v) &&
        !/^HA[0-9]{3}$/.test(v) &&
        !/^(GD|HA)8888[0-9]{5}$/.test(v)
    ) {
        return {
            meta: {},
            valid: false,
        };
    }

    const length = v.length;
    if (length === 5) {
        const firstTwo = v.substr(0, 2);
        const lastThree = parseInt(v.substr(2), 10);
        return {
            meta: {},
            valid:
                ('GD' === firstTwo && lastThree < 500) ||
                ('HA' === firstTwo && lastThree >= 500),
        };
    } else if (
        length === 11 &&
        ('GD8888' === v.substr(0, 6) || 'HA8888' === v.substr(0, 6))
    ) {
        if (
            ('GD' === v.substr(0, 2) && parseInt(v.substr(6, 3), 10) >= 500) ||
            ('HA' === v.substr(0, 2) && parseInt(v.substr(6, 3), 10) < 500)
        ) {
            return {
                meta: {},
                valid: false,
            };
        }
        return {
            meta: {},
            valid:
                parseInt(v.substr(6, 3), 10) % 97 ===
                parseInt(v.substr(9, 2), 10),
        };
    } else if (length === 9 || length === 12) {
        const weight = [8, 7, 6, 5, 4, 3, 2, 10, 1];
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(v.charAt(i), 10) * weight[i];
        }
        sum = sum % 97;

        const isValid =
            parseInt(v.substr(0, 3), 10) >= 100
                ? sum === 0 || sum === 42 || sum === 55
                : sum === 0;
        return {
            meta: {},
            valid: isValid,
        };
    }

    return {
        meta: {},
        valid: true,
    };
}
