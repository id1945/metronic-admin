define(["require", "exports", "../../algorithms/mod97And10", "../id/nlId"], function (require, exports, mod97And10_1, nlId_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function nlVat(value) {
        var v = value;
        if (/^NL[0-9]{9}B[0-9]{2}$/.test(v)) {
            v = v.substr(2);
        }
        if (!/^[0-9]{9}B[0-9]{2}$/.test(v)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var id = v.substr(0, 9);
        return {
            meta: {},
            valid: nlId_1.default(id).valid || mod97And10_1.default("NL" + v),
        };
    }
    exports.default = nlVat;
});
