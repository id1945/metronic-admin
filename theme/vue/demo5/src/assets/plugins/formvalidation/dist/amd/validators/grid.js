define(["require", "exports", "../algorithms/mod37And36"], function (require, exports, mod37And36_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function grid() {
        return {
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                var v = input.value.toUpperCase();
                if (!/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(v)) {
                    return { valid: false };
                }
                v = v.replace(/\s/g, '').replace(/-/g, '');
                if ('GRID:' === v.substr(0, 5)) {
                    v = v.substr(5);
                }
                return { valid: mod37And36_1.default(v) };
            },
        };
    }
    exports.default = grid;
});
