define(["require", "exports", "../../utils/isValidDate"], function (require, exports, isValidDate_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function czVat(value) {
        var v = value;
        if (/^CZ[0-9]{8,10}$/.test(v)) {
            v = v.substr(2);
        }
        if (!/^[0-9]{8,10}$/.test(v)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var sum = 0;
        var i = 0;
        if (v.length === 8) {
            if ("" + v.charAt(0) === '9') {
                return {
                    meta: {},
                    valid: false,
                };
            }
            sum = 0;
            for (i = 0; i < 7; i++) {
                sum += parseInt(v.charAt(i), 10) * (8 - i);
            }
            sum = 11 - sum % 11;
            if (sum === 10) {
                sum = 0;
            }
            if (sum === 11) {
                sum = 1;
            }
            return {
                meta: {},
                valid: "" + sum === v.substr(7, 1),
            };
        }
        else if (v.length === 9 && ("" + v.charAt(0) === '6')) {
            sum = 0;
            for (i = 0; i < 7; i++) {
                sum += parseInt(v.charAt(i + 1), 10) * (8 - i);
            }
            sum = 11 - sum % 11;
            if (sum === 10) {
                sum = 0;
            }
            if (sum === 11) {
                sum = 1;
            }
            sum = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][sum - 1];
            return {
                meta: {},
                valid: "" + sum === v.substr(8, 1),
            };
        }
        else if (v.length === 9 || v.length === 10) {
            var year = 1900 + parseInt(v.substr(0, 2), 10);
            var month = parseInt(v.substr(2, 2), 10) % 50 % 20;
            var day = parseInt(v.substr(4, 2), 10);
            if (v.length === 9) {
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
            if (v.length === 10) {
                var check = parseInt(v.substr(0, 9), 10) % 11;
                if (year < 1985) {
                    check = check % 10;
                }
                return {
                    meta: {},
                    valid: "" + check === v.substr(9, 1),
                };
            }
            return {
                meta: {},
                valid: true,
            };
        }
        return {
            meta: {},
            valid: false,
        };
    }
    exports.default = czVat;
});
