/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ValidateResult } from '../../core/Core';

/**
 * Validate Spanish personal identity code (DNI)
 * Support DNI (for Spanish citizens), NIE (for foreign people) and CIF (for legal entities)
 *
 * @see https://en.wikipedia.org/wiki/National_identification_number#Spain
 * @returns {ValidateResult}
 */
export default function esId(value: string): ValidateResult {
    const isDNI = /^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(value);
    const isNIE = /^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(value);
    const isCIF = /^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(value);
    if (!isDNI && !isNIE && !isCIF) {
        return {
            meta: {},
            valid: false,
        };
    }

    let v = value.replace(/-/g, '');
    let check;
    let tpe;
    let isValid = true;
    if (isDNI || isNIE) {
        tpe = 'DNI';
        const index = 'XYZ'.indexOf(v.charAt(0));
        if (index !== -1) {
            // It is NIE number
            v = index + v.substr(1) + '';
            tpe = 'NIE';
        }

        check = parseInt(v.substr(0, 8), 10);
        check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
        return {
            meta: {
                type: tpe,
            },
            valid: check === v.substr(8, 1),
        };
    } else {
        check = v.substr(1, 7);
        tpe = 'CIF';
        const letter = v[0];
        const control = v.substr(-1);
        let sum = 0;

        // The digits in the even positions are added to the sum directly.
        // The ones in the odd positions are multiplied by 2 and then added to the sum.
        // If the result of multiplying by 2 is 10 or higher, add the two digits
        // together and add that to the sum instead
        for (let i = 0; i < check.length; i++) {
            if (i % 2 !== 0) {
                sum += parseInt(check[i], 10);
            } else {
                const tmp = '' + parseInt(check[i], 10) * 2;
                sum += parseInt(tmp[0], 10);
                if (tmp.length === 2) {
                    sum += parseInt(tmp[1], 10);
                }
            }
        }

        // The control digit is calculated from the last digit of the sum.
        // If that last digit is not 0, subtract it from 10
        let lastDigit = sum - Math.floor(sum / 10) * 10;
        if (lastDigit !== 0) {
            lastDigit = 10 - lastDigit;
        }

        if ('KQS'.indexOf(letter) !== -1) {
            // If the CIF starts with a K, Q or S, the control digit must be a letter
            isValid = control === 'JABCDEFGHI'[lastDigit];
        } else if ('ABEH'.indexOf(letter) !== -1) {
            // If it starts with A, B, E or H, it has to be a number
            isValid = control === '' + lastDigit;
        } else {
            // In any other case, it doesn't matter
            isValid =
                control === '' + lastDigit ||
                control === 'JABCDEFGHI'[lastDigit];
        }

        return {
            meta: {
                type: tpe,
            },
            valid: isValid,
        };
    }
}
