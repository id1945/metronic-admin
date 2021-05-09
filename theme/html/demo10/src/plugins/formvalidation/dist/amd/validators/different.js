define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function different() {
        return {
            validate: function (input) {
                var compareWith = ('function' === typeof input.options.compare)
                    ? input.options.compare.call(this)
                    : input.options.compare;
                return {
                    valid: (compareWith === '' || input.value !== compareWith),
                };
            },
        };
    }
    exports.default = different;
});
