define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function uyId(value) {
        if (!/^\d{8}$/.test(value)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var weight = [2, 9, 8, 7, 6, 3, 4];
        var sum = 0;
        for (var i = 0; i < 7; i++) {
            sum += parseInt(value.charAt(i), 10) * weight[i];
        }
        sum = sum % 10;
        if (sum > 0) {
            sum = 10 - sum;
        }
        return {
            meta: {},
            valid: "" + sum === value.charAt(7),
        };
    }
    exports.default = uyId;
});
