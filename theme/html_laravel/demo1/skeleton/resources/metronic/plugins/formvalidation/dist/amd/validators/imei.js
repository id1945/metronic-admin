define(["require", "exports", "../algorithms/luhn"], function (require, exports, luhn_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function imei() {
        return {
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                switch (true) {
                    case /^\d{15}$/.test(input.value):
                    case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(input.value):
                    case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(input.value):
                        var v = input.value.replace(/[^0-9]/g, '');
                        return { valid: luhn_1.default(v) };
                    case /^\d{14}$/.test(input.value):
                    case /^\d{16}$/.test(input.value):
                    case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(input.value):
                    case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(input.value):
                        return { valid: true };
                    default:
                        return { valid: false };
                }
            },
        };
    }
    exports.default = imei;
});
