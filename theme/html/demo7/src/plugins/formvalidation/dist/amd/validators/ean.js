define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function ean() {
        return {
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                if (!/^(\d{8}|\d{12}|\d{13}|\d{14})$/.test(input.value)) {
                    return { valid: false };
                }
                var length = input.value.length;
                var sum = 0;
                var weight = (length === 8) ? [3, 1] : [1, 3];
                for (var i = 0; i < length - 1; i++) {
                    sum += parseInt(input.value.charAt(i), 10) * weight[i % 2];
                }
                sum = (10 - sum % 10) % 10;
                return { valid: "" + sum === input.value.charAt(length - 1) };
            },
        };
    }
    exports.default = ean;
});
