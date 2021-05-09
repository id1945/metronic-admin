define(["require", "exports", "../../utils/isValidDate"], function (require, exports, isValidDate_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function fiId(value) {
        if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(value)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var day = parseInt(value.substr(0, 2), 10);
        var month = parseInt(value.substr(2, 2), 10);
        var year = parseInt(value.substr(4, 2), 10);
        var centuries = {
            '+': 1800,
            '-': 1900,
            'A': 2000,
        };
        year = centuries[value.charAt(6)] + year;
        if (!isValidDate_1.default(year, month, day)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var individual = parseInt(value.substr(7, 3), 10);
        if (individual < 2) {
            return {
                meta: {},
                valid: false,
            };
        }
        var n = parseInt(value.substr(0, 6) + value.substr(7, 3) + '', 10);
        return {
            meta: {},
            valid: '0123456789ABCDEFHJKLMNPRSTUVWXY'.charAt(n % 31) === value.charAt(10),
        };
    }
    exports.default = fiId;
});
