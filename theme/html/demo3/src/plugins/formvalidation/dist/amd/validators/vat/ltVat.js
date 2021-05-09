define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function ltVat(value) {
        var v = value;
        if (/^LT([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(v)) {
            v = v.substr(2);
        }
        if (!/^([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(v)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var length = v.length;
        var sum = 0;
        var i;
        for (i = 0; i < length - 1; i++) {
            sum += parseInt(v.charAt(i), 10) * (1 + i % 9);
        }
        var check = sum % 11;
        if (check === 10) {
            sum = 0;
            for (i = 0; i < length - 1; i++) {
                sum += parseInt(v.charAt(i), 10) * (1 + (i + 2) % 9);
            }
        }
        check = check % 11 % 10;
        return {
            meta: {},
            valid: "" + check === v.charAt(length - 1),
        };
    }
    exports.default = ltVat;
});
