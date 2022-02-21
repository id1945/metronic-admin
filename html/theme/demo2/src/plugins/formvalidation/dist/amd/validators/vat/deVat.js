define(["require", "exports", "../../algorithms/mod11And10"], function (require, exports, mod11And10_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function deVat(value) {
        var v = value;
        if (/^DE[0-9]{9}$/.test(v)) {
            v = v.substr(2);
        }
        if (!/^[0-9]{9}$/.test(v)) {
            return {
                meta: {},
                valid: false,
            };
        }
        return {
            meta: {},
            valid: mod11And10_1.default(v),
        };
    }
    exports.default = deVat;
});
