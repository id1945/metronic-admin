define(["require", "exports", "../../algorithms/luhn", "../../utils/isValidDate"], function (require, exports, luhn_1, isValidDate_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function seId(value) {
        if (!/^[0-9]{10}$/.test(value) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(value)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var v = value.replace(/[^0-9]/g, '');
        var year = parseInt(v.substr(0, 2), 10) + 1900;
        var month = parseInt(v.substr(2, 2), 10);
        var day = parseInt(v.substr(4, 2), 10);
        if (!isValidDate_1.default(year, month, day)) {
            return {
                meta: {},
                valid: false,
            };
        }
        return {
            meta: {},
            valid: luhn_1.default(v),
        };
    }
    exports.default = seId;
});
