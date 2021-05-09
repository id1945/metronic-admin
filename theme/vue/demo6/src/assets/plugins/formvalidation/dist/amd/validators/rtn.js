define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function rtn() {
        return {
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                if (!/^\d{9}$/.test(input.value)) {
                    return { valid: false };
                }
                var sum = 0;
                for (var i = 0; i < input.value.length; i += 3) {
                    sum += parseInt(input.value.charAt(i), 10) * 3
                        + parseInt(input.value.charAt(i + 1), 10) * 7
                        + parseInt(input.value.charAt(i + 2), 10);
                }
                return { valid: (sum !== 0 && sum % 10 === 0) };
            },
        };
    }
    exports.default = rtn;
});
