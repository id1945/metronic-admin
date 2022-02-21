define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function cusip() {
        return {
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                var value = input.value.toUpperCase();
                if (!/^[0123456789ABCDEFGHJKLMNPQRSTUVWXYZ*@#]{9}$/.test(value)) {
                    return { valid: false };
                }
                var chars = value.split('');
                var lastChar = chars.pop();
                var converted = chars.map(function (c) {
                    var code = c.charCodeAt(0);
                    switch (true) {
                        case c === '*':
                            return 36;
                        case c === '@':
                            return 37;
                        case c === '#':
                            return 38;
                        case code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0):
                            return code - 'A'.charCodeAt(0) + 10;
                        default:
                            return parseInt(c, 10);
                    }
                });
                var sum = converted
                    .map(function (v, i) {
                    var double = i % 2 === 0 ? v : 2 * v;
                    return Math.floor(double / 10) + (double % 10);
                })
                    .reduce(function (a, b) { return a + b; }, 0);
                var checkDigit = (10 - (sum % 10)) % 10;
                return { valid: lastChar === "" + checkDigit };
            },
        };
    }
    exports.default = cusip;
});
