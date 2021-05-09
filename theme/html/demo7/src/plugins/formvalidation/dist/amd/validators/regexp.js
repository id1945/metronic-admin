define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function regexp() {
        return {
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                var reg = input.options.regexp;
                if (reg instanceof RegExp) {
                    return { valid: reg.test(input.value) };
                }
                else {
                    var pattern = reg.toString();
                    var exp = input.options.flags ? (new RegExp(pattern, input.options.flags)) : new RegExp(pattern);
                    return { valid: exp.test(input.value) };
                }
            },
        };
    }
    exports.default = regexp;
});
