define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function brId(value) {
        var v = value.replace(/\D/g, '');
        if (!/^\d{11}$/.test(v) || /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(v)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var d1 = 0;
        var i;
        for (i = 0; i < 9; i++) {
            d1 += (10 - i) * parseInt(v.charAt(i), 10);
        }
        d1 = 11 - d1 % 11;
        if (d1 === 10 || d1 === 11) {
            d1 = 0;
        }
        if ("" + d1 !== v.charAt(9)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var d2 = 0;
        for (i = 0; i < 10; i++) {
            d2 += (11 - i) * parseInt(v.charAt(i), 10);
        }
        d2 = 11 - d2 % 11;
        if (d2 === 10 || d2 === 11) {
            d2 = 0;
        }
        return {
            meta: {},
            valid: "" + d2 === v.charAt(10),
        };
    }
    exports.default = brId;
});
