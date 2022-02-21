define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function bic() {
        return {
            validate: function (input) {
                return {
                    valid: input.value === '' ||
                        /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(input.value),
                };
            },
        };
    }
    exports.default = bic;
});
