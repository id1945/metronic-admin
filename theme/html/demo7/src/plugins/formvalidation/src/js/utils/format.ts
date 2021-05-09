/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

/**
 * Format a string
 * It's used to format the error message
 * format('The field must between %s and %s', [10, 20]) = 'The field must between 10 and 20'
 *
 * @param {string} message
 * @param {string|string[]} parameters
 * @returns {string}
 */
export default function format(message: string, parameters: string | string[]): string {
    const params = Array.isArray(parameters) ? parameters : [parameters];
    let output = message;
    params.forEach((p) => {
        output = output.replace('%s', p);
    });

    return output;
}
