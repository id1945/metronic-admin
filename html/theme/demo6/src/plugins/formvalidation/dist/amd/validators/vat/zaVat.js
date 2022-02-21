define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function zaVat(value) {
        var v = value;
        if (/^ZA4[0-9]{9}$/.test(v)) {
            v = v.substr(2);
        }
        return {
            meta: {},
            valid: /^4[0-9]{9}$/.test(v),
        };
    }
    exports.default = zaVat;
});
