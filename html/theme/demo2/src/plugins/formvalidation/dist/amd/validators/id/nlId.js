define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function nlId(value) {
        if (value.length < 8) {
            return {
                meta: {},
                valid: false,
            };
        }
        var v = value;
        if (v.length === 8) {
            v = "0" + v;
        }
        if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(v)) {
            return {
                meta: {},
                valid: false,
            };
        }
        v = v.replace(/\./g, '');
        if (parseInt(v, 10) === 0) {
            return {
                meta: {},
                valid: false,
            };
        }
        var sum = 0;
        var length = v.length;
        for (var i = 0; i < length - 1; i++) {
            sum += (9 - i) * parseInt(v.charAt(i), 10);
        }
        sum = sum % 11;
        if (sum === 10) {
            sum = 0;
        }
        return {
            meta: {},
            valid: "" + sum === v.charAt(length - 1),
        };
    }
    exports.default = nlId;
});
