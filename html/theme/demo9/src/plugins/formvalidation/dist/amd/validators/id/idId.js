define(["require", "exports", "../../algorithms/verhoeff"], function (require, exports, verhoeff_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function idId(value) {
        if (!/^[2-9]\d{11}$/.test(value)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var converted = value.split('').map(function (item) { return parseInt(item, 10); });
        return {
            meta: {},
            valid: verhoeff_1.default(converted),
        };
    }
    exports.default = idId;
});
