define(["require", "exports", "./luhn", "./mod11And10", "./mod37And36", "./verhoeff"], function (require, exports, luhn_1, mod11And10_1, mod37And36_1, verhoeff_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        luhn: luhn_1.default,
        mod11And10: mod11And10_1.default,
        mod37And36: mod37And36_1.default,
        verhoeff: verhoeff_1.default,
    };
});
