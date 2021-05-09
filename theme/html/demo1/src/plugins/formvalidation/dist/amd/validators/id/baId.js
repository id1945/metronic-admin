define(["require", "exports", "./jmbg"], function (require, exports, jmbg_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function baId(value) {
        return {
            meta: {},
            valid: jmbg_1.default(value, 'BA'),
        };
    }
    exports.default = baId;
});
