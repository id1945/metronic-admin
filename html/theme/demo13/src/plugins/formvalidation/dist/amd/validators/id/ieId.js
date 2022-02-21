define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function ieId(value) {
        if (!/^\d{7}[A-W][AHWTX]?$/.test(value)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var getCheckDigit = function (v) {
            var input = v;
            while (input.length < 7) {
                input = "0" + input;
            }
            var alphabet = 'WABCDEFGHIJKLMNOPQRSTUV';
            var sum = 0;
            for (var i = 0; i < 7; i++) {
                sum += parseInt(input.charAt(i), 10) * (8 - i);
            }
            sum += 9 * alphabet.indexOf(input.substr(7));
            return alphabet[sum % 23];
        };
        var isValid = value.length === 9 &&
            ('A' === value.charAt(8) || 'H' === value.charAt(8))
            ? value.charAt(7) ===
                getCheckDigit(value.substr(0, 7) + value.substr(8) + '')
            :
                value.charAt(7) === getCheckDigit(value.substr(0, 7));
        return {
            meta: {},
            valid: isValid,
        };
    }
    exports.default = ieId;
});
