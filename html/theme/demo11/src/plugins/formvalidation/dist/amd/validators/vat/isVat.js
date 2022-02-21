define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isVat(value) {
        var v = value;
        if (/^IS[0-9]{5,6}$/.test(v)) {
            v = v.substr(2);
        }
        return {
            meta: {},
            valid: /^[0-9]{5,6}$/.test(v),
        };
    }
    exports.default = isVat;
});
