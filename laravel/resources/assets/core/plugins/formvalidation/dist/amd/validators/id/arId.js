define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function arId(value) {
        var v = value.replace(/\./g, '');
        return {
            meta: {},
            valid: /^\d{7,8}$/.test(v),
        };
    }
    exports.default = arId;
});
