define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function blank() {
        return {
            validate: function (_input) {
                return { valid: true };
            },
        };
    }
    exports.default = blank;
});
