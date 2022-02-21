define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function huVat(value) {
        var v = value;
        if (/^HU[0-9]{8}$/.test(v)) {
            v = v.substr(2);
        }
        if (!/^[0-9]{8}$/.test(v)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var weight = [9, 7, 3, 1, 9, 7, 3, 1];
        var sum = 0;
        for (var i = 0; i < 8; i++) {
            sum += parseInt(v.charAt(i), 10) * weight[i];
        }
        return {
            meta: {},
            valid: sum % 10 === 0,
        };
    }
    exports.default = huVat;
});
