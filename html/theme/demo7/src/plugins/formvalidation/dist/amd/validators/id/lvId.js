define(["require", "exports", "../../utils/isValidDate"], function (require, exports, isValidDate_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function lvId(value) {
        if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(value)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var v = value.replace(/\D/g, '');
        var day = parseInt(v.substr(0, 2), 10);
        var month = parseInt(v.substr(2, 2), 10);
        var year = parseInt(v.substr(4, 2), 10);
        year = year + 1800 + parseInt(v.charAt(6), 10) * 100;
        if (!isValidDate_1.default(year, month, day, true)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var sum = 0;
        var weight = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
        for (var i = 0; i < 10; i++) {
            sum += parseInt(v.charAt(i), 10) * weight[i];
        }
        sum = ((sum + 1) % 11) % 10;
        return {
            meta: {},
            valid: "" + sum === v.charAt(10),
        };
    }
    exports.default = lvId;
});
