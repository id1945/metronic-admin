define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function notEmpty() {
        return {
            validate: function (input) {
                var trim = !!input.options && !!input.options.trim;
                var value = input.value;
                return {
                    valid: (!trim && value !== '') || (trim && value !== '' && value.trim() !== ''),
                };
            },
        };
    }
    exports.default = notEmpty;
});
