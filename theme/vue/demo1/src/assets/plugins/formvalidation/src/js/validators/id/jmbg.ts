/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

/**
 * Validate Unique Master Citizen Number which uses in
 * - Bosnia and Herzegovina (country code: BA)
 * - Macedonia (MK)
 * - Montenegro (ME)
 * - Serbia (RS)
 * - Slovenia (SI)
 *
 * @see http://en.wikipedia.org/wiki/Unique_Master_Citizen_Number
 * @returns {boolean}
 */
export default function jmbg(value: string, countryCode: 'BA' | 'MK' | 'ME' | 'RS' | 'SI') {
    if (!/^\d{13}$/.test(value)) {
        return false;
    }
    const day = parseInt(value.substr(0, 2), 10);
    const month = parseInt(value.substr(2, 2), 10);
    // const year = parseInt(value.substr(4, 3), 10)
    const rr = parseInt(value.substr(7, 2), 10);
    const k = parseInt(value.substr(12, 1), 10);

    // Validate date of birth
    // FIXME: Validate the year of birth
    if (day > 31 || month > 12) {
        return false;
    }

    // Validate checksum
    let sum = 0;
    for (let i = 0; i < 6; i++) {
        sum += (7 - i) * (parseInt(value.charAt(i), 10) + parseInt(value.charAt(i + 6), 10));
    }
    sum = 11 - sum % 11;
    if (sum === 10 || sum === 11) {
        sum = 0;
    }
    if (sum !== k) {
        return false;
    }

    // Validate political region
    // rr is the political region of birth, which can be in ranges:
    // 10-19: Bosnia and Herzegovina
    // 20-29: Montenegro
    // 30-39: Croatia (not used anymore)
    // 41-49: Macedonia
    // 50-59: Slovenia (only 50 is used)
    // 70-79: Central Serbia
    // 80-89: Serbian province of Vojvodina
    // 90-99: Kosovo
    switch (countryCode.toUpperCase()) {
        case 'BA': return (10 <= rr && rr <= 19);
        case 'MK': return (41 <= rr && rr <= 49);
        case 'ME': return (20 <= rr && rr <= 29);
        case 'RS': return (70 <= rr && rr <= 99);
        case 'SI': return (50 <= rr && rr <= 59);
        default: return true;
    }
}
