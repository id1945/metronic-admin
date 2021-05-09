define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function mod11And10(value) {
        var length = value.length;
        var check = 5;
        for (var i = 0; i < length; i++) {
            check = (((check || 10) * 2) % 11 + parseInt(value.charAt(i), 10)) % 10;
        }
        return (check === 1);
    }
    exports.default = mod11And10;
});
