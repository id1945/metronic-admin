define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function trId(value) {
        if (value.length !== 11) {
            return {
                meta: {},
                valid: false,
            };
        }
        var sum = 0;
        for (var i = 0; i < 10; i++) {
            sum += parseInt(value.charAt(i), 10);
        }
        return {
            meta: {},
            valid: (sum % 10) === parseInt(value.charAt(10), 10),
        };
    }
    exports.default = trId;
});
