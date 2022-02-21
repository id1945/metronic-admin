define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function arVat(value) {
        var v = value.replace('-', '');
        if (/^AR[0-9]{11}$/.test(v)) {
            v = v.substr(2);
        }
        if (!/^[0-9]{11}$/.test(v)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var weight = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
        var sum = 0;
        for (var i = 0; i < 10; i++) {
            sum += parseInt(v.charAt(i), 10) * weight[i];
        }
        sum = 11 - (sum % 11);
        if (sum === 11) {
            sum = 0;
        }
        return {
            meta: {},
            valid: "" + sum === v.substr(10),
        };
    }
    exports.default = arVat;
});
