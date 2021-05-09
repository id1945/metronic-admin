/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

/**
 * Validate Brazilian VAT number (CNPJ)
 *
 * @returns {ValidateResult}
 */
export default function brVat(value: string) {
    if (value === '') {
        return {
            meta: {},
            valid: true,
        };
    }
    const cnpj = value.replace(/[^\d]+/g, '');
    if (cnpj === '' || cnpj.length !== 14) {
        return {
            meta: {},
            valid: false,
        };
    }

    // Remove invalids CNPJs
    if (cnpj === '00000000000000' || cnpj === '11111111111111' || cnpj === '22222222222222' ||
        cnpj === '33333333333333' || cnpj === '44444444444444' || cnpj === '55555555555555' ||
        cnpj === '66666666666666' || cnpj === '77777777777777' || cnpj === '88888888888888' ||
        cnpj === '99999999999999'
    ) {
        return {
            meta: {},
            valid: false,
        };
    }

    // Validate verification digits
    let length = cnpj.length - 2;
    let numbers = cnpj.substring(0, length);
    const digits = cnpj.substring(length);
    let sum = 0;
    let pos = length - 7;
    let i;

    for (i = length; i >= 1; i--) {
        sum += parseInt(numbers.charAt(length - i), 10) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }

    let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result !== parseInt(digits.charAt(0), 10)) {
        return {
            meta: {},
            valid: false,
        };
    }

    length = length + 1;
    numbers = cnpj.substring(0, length);
    sum = 0;
    pos = length - 7;
    for (i = length; i >= 1; i--) {
        sum += parseInt(numbers.charAt(length - i), 10) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }

    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    return {
        meta: {},
        valid: result === parseInt(digits.charAt(1), 10),
    };
}
