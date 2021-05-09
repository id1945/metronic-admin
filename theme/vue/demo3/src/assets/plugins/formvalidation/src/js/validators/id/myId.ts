/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import isValidDate from '../../utils/isValidDate';

/**
 * Validate Malaysian identity card number
 *
 * @see https://en.wikipedia.org/wiki/Malaysian_identity_card
 * @returns {ValidateResult}
 */
export default function myId(value: string) {
    if (!/^\d{12}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Validate date of birth
    const year = parseInt(value.substr(0, 2), 10);
    const month = parseInt(value.substr(2, 2), 10);
    const day = parseInt(value.substr(4, 2), 10);
    if (!isValidDate(year + 1900, month, day) && !isValidDate(year + 2000, month, day)) {
        return {
            meta: {},
            valid: false,
        };
    }

    // Validate place of birth
    const placeOfBirth = value.substr(6, 2);
    const notAvailablePlaces = ["17", "18", "19", "20", "69", "70", "73", "80", "81", "94", "95", "96", "97"];
    return {
        meta: {},
        valid: notAvailablePlaces.indexOf(placeOfBirth) === -1,
    };
}
