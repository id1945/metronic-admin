define(["require", "exports", "../../algorithms/luhn"], function (require, exports, luhn_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function seVat(value) {
        var v = value;
        if (/^SE[0-9]{10}01$/.test(v)) {
            v = v.substr(2);
        }
        if (!/^[0-9]{10}01$/.test(v)) {
            return {
                meta: {},
                valid: false,
            };
        }
        v = v.substr(0, 10);
        return {
            meta: {},
            valid: luhn_1.default(v),
        };
    }
    exports.default = seVat;
});
