define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function ruVat(value) {
        var v = value;
        if (/^RU([0-9]{10}|[0-9]{12})$/.test(v)) {
            v = v.substr(2);
        }
        if (!/^([0-9]{10}|[0-9]{12})$/.test(v)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var i = 0;
        if (v.length === 10) {
            var weight = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
            var sum = 0;
            for (i = 0; i < 10; i++) {
                sum += parseInt(v.charAt(i), 10) * weight[i];
            }
            sum = sum % 11;
            if (sum > 9) {
                sum = sum % 10;
            }
            return {
                meta: {},
                valid: "" + sum === v.substr(9, 1),
            };
        }
        else if (v.length === 12) {
            var weight1 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
            var weight2 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
            var sum1 = 0;
            var sum2 = 0;
            for (i = 0; i < 11; i++) {
                sum1 += parseInt(v.charAt(i), 10) * weight1[i];
                sum2 += parseInt(v.charAt(i), 10) * weight2[i];
            }
            sum1 = sum1 % 11;
            if (sum1 > 9) {
                sum1 = sum1 % 10;
            }
            sum2 = sum2 % 11;
            if (sum2 > 9) {
                sum2 = sum2 % 10;
            }
            return {
                meta: {},
                valid: "" + sum1 === v.substr(10, 1) && "" + sum2 === v.substr(11, 1),
            };
        }
        return {
            meta: {},
            valid: true,
        };
    }
    exports.default = ruVat;
});
