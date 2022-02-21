define(["require", "exports", "../../algorithms/mod11And10"], function (require, exports, mod11And10_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function hrId(value) {
        return {
            meta: {},
            valid: /^[0-9]{11}$/.test(value) && mod11And10_1.default(value),
        };
    }
    exports.default = hrId;
});
