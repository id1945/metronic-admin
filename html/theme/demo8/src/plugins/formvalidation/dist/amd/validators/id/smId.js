define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function smId(value) {
        return {
            meta: {},
            valid: /^\d{5}$/.test(value),
        };
    }
    exports.default = smId;
});
