define(["require", "exports", "../utils/call"], function (require, exports, call_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function callback() {
        return {
            validate: function (input) {
                var response = call_1.default(input.options.callback, [input]);
                return ('boolean' === typeof response)
                    ? { valid: response }
                    : response;
            },
        };
    }
    exports.default = callback;
});
