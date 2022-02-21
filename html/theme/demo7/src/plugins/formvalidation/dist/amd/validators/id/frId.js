define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function frId(value) {
        var v = value.toUpperCase();
        if (!/^(1|2)\d{2}\d{2}(\d{2}|\d[A-Z]|\d{3})\d{2,3}\d{3}\d{2}$/.test(v)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var cog = v.substr(5, 2);
        switch (true) {
            case /^\d{2}$/.test(cog):
                v = value;
                break;
            case cog === '2A':
                v = value.substr(0, 5) + "19" + value.substr(7);
                break;
            case cog === '2B':
                v = value.substr(0, 5) + "18" + value.substr(7);
                break;
            default:
                return {
                    meta: {},
                    valid: false,
                };
        }
        var mod = 97 - (parseInt(v.substr(0, 13), 10) % 97);
        var prefixWithZero = mod < 10 ? "0" + mod : "" + mod;
        return {
            meta: {},
            valid: prefixWithZero === v.substr(13),
        };
    }
    exports.default = frId;
});
