define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function beVat(value) {
        var v = value;
        if (/^BE[0]?[0-9]{9}$/.test(v)) {
            v = v.substr(2);
        }
        if (!/^[0]?[0-9]{9}$/.test(v)) {
            return {
                meta: {},
                valid: false,
            };
        }
        if (v.length === 9) {
            v = "0" + v;
        }
        if (v.substr(1, 1) === '0') {
            return {
                meta: {},
                valid: false,
            };
        }
        var sum = parseInt(v.substr(0, 8), 10) + parseInt(v.substr(8, 2), 10);
        return {
            meta: {},
            valid: sum % 97 === 0,
        };
    }
    exports.default = beVat;
});
