define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function hkId(value) {
        var v = value.toUpperCase();
        if (!/^[A-MP-Z]{1,2}[0-9]{6}[0-9A]$/.test(v)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var firstChar = v.charAt(0);
        var secondChar = v.charAt(1);
        var sum = 0;
        var digitParts = v;
        if (/^[A-Z]$/.test(secondChar)) {
            sum += 9 * (10 + alphabet.indexOf(firstChar));
            sum += 8 * (10 + alphabet.indexOf(secondChar));
            digitParts = v.substr(2);
        }
        else {
            sum += 9 * 36;
            sum += 8 * (10 + alphabet.indexOf(firstChar));
            digitParts = v.substr(1);
        }
        var length = digitParts.length;
        for (var i = 0; i < length - 1; i++) {
            sum += (7 - i) * parseInt(digitParts.charAt(i), 10);
        }
        var remaining = sum % 11;
        var checkDigit = remaining === 0
            ? '0'
            : 11 - remaining === 10
                ? 'A'
                : "" + (11 - remaining);
        return {
            meta: {},
            valid: checkDigit === digitParts.charAt(length - 1),
        };
    }
    exports.default = hkId;
});
