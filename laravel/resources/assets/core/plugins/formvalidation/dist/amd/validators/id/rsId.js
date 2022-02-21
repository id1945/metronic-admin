define(["require", "exports", "./jmbg"], function (require, exports, jmbg_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function rsId(value) {
        return {
            meta: {},
            valid: jmbg_1.default(value, 'RS'),
        };
    }
    exports.default = rsId;
});
