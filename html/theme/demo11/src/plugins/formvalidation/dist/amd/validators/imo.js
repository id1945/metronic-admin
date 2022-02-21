define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function imo() {
        return {
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                if (!/^IMO \d{7}$/i.test(input.value)) {
                    return { valid: false };
                }
                var digits = input.value.replace(/^.*(\d{7})$/, '$1');
                var sum = 0;
                for (var i = 6; i >= 1; i--) {
                    sum += parseInt(digits.slice(6 - i, -i), 10) * (i + 1);
                }
                return { valid: sum % 10 === parseInt(digits.charAt(6), 10) };
            },
        };
    }
    exports.default = imo;
});
