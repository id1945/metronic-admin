define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function digits() {
        return {
            validate: function (input) {
                return { valid: input.value === '' || /^\d+$/.test(input.value) };
            },
        };
    }
    exports.default = digits;
});
