/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ValidateResult } from '../../core/Core';
import jmbg from './jmbg';

/**
 * @returns {ValidateResult}
 */
export default function meId(value: string): ValidateResult {
    return {
        meta: {},
        valid: jmbg(value, 'ME'),
    };
}
