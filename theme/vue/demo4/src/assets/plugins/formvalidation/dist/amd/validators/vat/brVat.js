define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function brVat(value) {
        if (value === '') {
            return {
                meta: {},
                valid: true,
            };
        }
        var cnpj = value.replace(/[^\d]+/g, '');
        if (cnpj === '' || cnpj.length !== 14) {
            return {
                meta: {},
                valid: false,
            };
        }
        if (cnpj === '00000000000000' || cnpj === '11111111111111' || cnpj === '22222222222222' ||
            cnpj === '33333333333333' || cnpj === '44444444444444' || cnpj === '55555555555555' ||
            cnpj === '66666666666666' || cnpj === '77777777777777' || cnpj === '88888888888888' ||
            cnpj === '99999999999999') {
            return {
                meta: {},
                valid: false,
            };
        }
        var length = cnpj.length - 2;
        var numbers = cnpj.substring(0, length);
        var digits = cnpj.substring(length);
        var sum = 0;
        var pos = length - 7;
        var i;
        for (i = length; i >= 1; i--) {
            sum += parseInt(numbers.charAt(length - i), 10) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }
        var result = sum % 11 < 2 ? 0 : 11 - sum % 11;
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
    exports.default = brVat;
});
