define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function transform(input) {
        return input
            .split('')
            .map(function (c) {
            var code = c.charCodeAt(0);
            return code >= 65 && code <= 90
                ?
                    code - 55
                : c;
        })
            .join('')
            .split('')
            .map(function (c) { return parseInt(c, 10); });
    }
    function mod97And10(input) {
        var digits = transform(input);
        var temp = 0;
        var length = digits.length;
        for (var i = 0; i < length - 1; ++i) {
            temp = ((temp + digits[i]) * 10) % 97;
        }
        temp += digits[length - 1];
        return temp % 97 === 1;
    }
    exports.default = mod97And10;
});
