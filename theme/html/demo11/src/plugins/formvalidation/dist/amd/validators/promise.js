define(["require", "exports", "../utils/call"], function (require, exports, call_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function promise() {
        return {
            validate: function (input) {
                return call_1.default(input.options.promise, [input]);
            },
        };
    }
    exports.default = promise;
});
