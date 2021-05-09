define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function coId(value) {
        var v = value.replace(/\./g, '').replace('-', '');
        if (!/^\d{8,16}$/.test(v)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var length = v.length;
        var weight = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71];
        var sum = 0;
        for (var i = length - 2; i >= 0; i--) {
            sum += parseInt(v.charAt(i), 10) * weight[i];
        }
        sum = sum % 11;
        if (sum >= 2) {
            sum = 11 - sum;
        }
        return {
            meta: {},
            valid: "" + sum === v.substr(length - 1),
        };
    }
    exports.default = coId;
});
