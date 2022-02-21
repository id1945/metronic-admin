define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function mod37And36(value, alphabet) {
        if (alphabet === void 0) { alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; }
        var length = value.length;
        var modulus = alphabet.length;
        var check = Math.floor(modulus / 2);
        for (var i = 0; i < length; i++) {
            check =
                ((((check || modulus) * 2) % (modulus + 1)) +
                    alphabet.indexOf(value.charAt(i))) %
                    modulus;
        }
        return check === 1;
    }
    exports.default = mod37And36;
});
