define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function hex() {
        return {
            validate: function (input) {
                return {
                    valid: input.value === '' || /^[0-9a-fA-F]+$/.test(input.value),
                };
            },
        };
    }
    exports.default = hex;
});
