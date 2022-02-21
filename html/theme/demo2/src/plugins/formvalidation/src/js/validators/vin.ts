/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import {
    Localization,
    ValidateFunctionInterface,
    ValidateInput,
    ValidateOptions,
    ValidateResult,
} from '../core/Core';

export default function vin(): ValidateFunctionInterface<
    ValidateOptions,
    ValidateResult
> {
    return {
        /**
         * Validate an US VIN (Vehicle Identification Number)
         */
        validate(
            input: ValidateInput<ValidateOptions, Localization>
        ): ValidateResult {
            if (input.value === '') {
                return { valid: true };
            }

            // Don't accept I, O, Q characters
            if (
                !/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(
                    input.value
                )
            ) {
                return { valid: false };
            }

            const v = input.value.toUpperCase();
            const chars = {
                A: 1,
                B: 2,
                C: 3,
                D: 4,
                E: 5,
                F: 6,
                G: 7,
                H: 8,
                J: 1,
                K: 2,
                L: 3,
                M: 4,
                N: 5,
                P: 7,
                R: 9,
                S: 2,
                T: 3,
                U: 4,
                V: 5,
                W: 6,
                X: 7,
                Y: 8,
                Z: 9,
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                5: 5,
                6: 6,
                7: 7,
                8: 8,
                9: 9,
            };
            const weights = [
                8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2,
            ];
            const length = v.length;
            let sum = 0;
            for (let i = 0; i < length; i++) {
                sum += chars[`${v.charAt(i)}`] * weights[i];
            }

            let reminder = `${sum % 11}`;
            if (reminder === '10') {
                reminder = 'X';
            }

            return { valid: reminder === v.charAt(8) };
        },
    };
}
