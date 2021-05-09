/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

/**
 * Implement Luhn validation algorithm
 * Credit to https://gist.github.com/ShirtlessKirk/2134376
 *
 * @see http://en.wikipedia.org/wiki/Luhn
 * @param {string} value
 * @returns {boolean}
 */
export default function luhn(value: string): boolean {
    let length = value.length;
    const prodArr = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]];
    let mul = 0;
    let sum = 0;

    while (length--) {
        sum += prodArr[mul][parseInt(value.charAt(length), 10)];
        mul = 1 - mul;
    }

    return (sum % 10 === 0 && sum > 0);
}
