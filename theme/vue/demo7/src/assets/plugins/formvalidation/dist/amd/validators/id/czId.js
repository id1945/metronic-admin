define(["require", "exports", "../../utils/isValidDate"], function (require, exports, isValidDate_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function czId(value) {
        if (!/^\d{9,10}$/.test(value)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var year = 1900 + parseInt(value.substr(0, 2), 10);
        var month = parseInt(value.substr(2, 2), 10) % 50 % 20;
        var day = parseInt(value.substr(4, 2), 10);
        if (value.length === 9) {
            if (year >= 1980) {
                year -= 100;
            }
            if (year > 1953) {
                return {
                    meta: {},
                    valid: false,
                };
            }
        }
        else if (year < 1954) {
            year += 100;
        }
        if (!isValidDate_1.default(year, month, day)) {
            return {
                meta: {},
                valid: false,
            };
        }
        if (value.length === 10) {
            var check = parseInt(value.substr(0, 9), 10) % 11;
            if (year < 1985) {
                check = check % 10;
            }
            return {
                meta: {},
                valid: "" + check === value.substr(9, 1),
            };
        }
        return {
            meta: {},
            valid: true,
        };
    }
    exports.default = czId;
});
