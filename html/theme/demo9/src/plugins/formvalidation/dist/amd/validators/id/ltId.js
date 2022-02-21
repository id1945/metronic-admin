define(["require", "exports", "../../utils/isValidDate"], function (require, exports, isValidDate_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function ltId(value) {
        if (!/^[0-9]{11}$/.test(value)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var gender = parseInt(value.charAt(0), 10);
        var year = parseInt(value.substr(1, 2), 10);
        var month = parseInt(value.substr(3, 2), 10);
        var day = parseInt(value.substr(5, 2), 10);
        var century = gender % 2 === 0 ? 17 + gender / 2 : 17 + (gender + 1) / 2;
        year = century * 100 + year;
        if (!isValidDate_1.default(year, month, day, true)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var weight = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
        var sum = 0;
        var i;
        for (i = 0; i < 10; i++) {
            sum += parseInt(value.charAt(i), 10) * weight[i];
        }
        sum = sum % 11;
        if (sum !== 10) {
            return {
                meta: {},
                valid: "" + sum === value.charAt(10),
            };
        }
        sum = 0;
        weight = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
        for (i = 0; i < 10; i++) {
            sum += parseInt(value.charAt(i), 10) * weight[i];
        }
        sum = sum % 11;
        if (sum === 10) {
            sum = 0;
        }
        return {
            meta: {},
            valid: "" + sum === value.charAt(10),
        };
    }
    exports.default = ltId;
});
