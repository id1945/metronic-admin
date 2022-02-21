define(["require", "exports", "../../algorithms/luhn"], function (require, exports, luhn_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function ilId(value) {
        if (!/^\d{1,9}$/.test(value)) {
            return {
                meta: {},
                valid: false,
            };
        }
        return {
            meta: {},
            valid: luhn_1.default(value),
        };
    }
    exports.default = ilId;
});
