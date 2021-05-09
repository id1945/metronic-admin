define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function mtVat(value) {
        var v = value;
        if (/^MT[0-9]{8}$/.test(v)) {
            v = v.substr(2);
        }
        if (!/^[0-9]{8}$/.test(v)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var weight = [3, 4, 6, 7, 8, 9, 10, 1];
        var sum = 0;
        for (var i = 0; i < 8; i++) {
            sum += parseInt(v.charAt(i), 10) * weight[i];
        }
        return {
            meta: {},
            valid: sum % 37 === 0,
        };
    }
    exports.default = mtVat;
});
