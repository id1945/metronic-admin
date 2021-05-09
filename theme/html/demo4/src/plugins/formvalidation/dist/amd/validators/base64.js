define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function base64() {
        return {
            validate: function (input) {
                return {
                    valid: (input.value === '') ||
                        /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(input.value),
                };
            },
        };
    }
    exports.default = base64;
});
