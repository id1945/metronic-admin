/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ValidateResult } from '../../core/Core';

/**
 * Validate San Marino citizen number
 *
 * @see http://en.wikipedia.org/wiki/National_identification_number#San_Marino
 * @returns {ValidateResult}
 */
export default function smId(value: string): ValidateResult {
    return {
        meta: {},
        valid: /^\d{5}$/.test(value),
    };
}
