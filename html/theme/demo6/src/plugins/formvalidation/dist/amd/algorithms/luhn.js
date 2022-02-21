define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function luhn(value) {
        var length = value.length;
        var prodArr = [
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [0, 2, 4, 6, 8, 1, 3, 5, 7, 9],
        ];
        var mul = 0;
        var sum = 0;
        while (length--) {
            sum += prodArr[mul][parseInt(value.charAt(length), 10)];
            mul = 1 - mul;
        }
        return sum % 10 === 0 && sum > 0;
    }
    exports.default = luhn;
});
