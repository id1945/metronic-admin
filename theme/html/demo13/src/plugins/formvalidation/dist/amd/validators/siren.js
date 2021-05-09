define(["require", "exports", "../algorithms/luhn"], function (require, exports, luhn_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function siren() {
        return {
            validate: function (input) {
                return {
                    valid: (input.value === '') || (/^\d{9}$/.test(input.value) && luhn_1.default(input.value)),
                };
            },
        };
    }
    exports.default = siren;
});
