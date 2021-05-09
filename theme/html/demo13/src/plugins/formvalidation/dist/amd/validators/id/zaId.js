define(["require", "exports", "../../algorithms/luhn", "../../utils/isValidDate"], function (require, exports, luhn_1, isValidDate_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function zaId(value) {
        if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(value)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var year = parseInt(value.substr(0, 2), 10);
        var currentYear = new Date().getFullYear() % 100;
        var month = parseInt(value.substr(2, 2), 10);
        var day = parseInt(value.substr(4, 2), 10);
        year = (year >= currentYear) ? (year + 1900) : (year + 2000);
        if (!isValidDate_1.default(year, month, day)) {
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
    exports.default = zaId;
});
