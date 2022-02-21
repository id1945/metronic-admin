define(["require", "exports", "../../utils/isValidDate"], function (require, exports, isValidDate_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function dkId(value) {
        if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(value)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var v = value.replace(/-/g, '');
        var day = parseInt(v.substr(0, 2), 10);
        var month = parseInt(v.substr(2, 2), 10);
        var year = parseInt(v.substr(4, 2), 10);
        switch (true) {
            case '5678'.indexOf(v.charAt(6)) !== -1 && year >= 58:
                year += 1800;
                break;
            case '0123'.indexOf(v.charAt(6)) !== -1:
            case '49'.indexOf(v.charAt(6)) !== -1 && year >= 37:
                year += 1900;
                break;
            default:
                year += 2000;
                break;
        }
        return {
            meta: {},
            valid: isValidDate_1.default(year, month, day),
        };
    }
    exports.default = dkId;
});
