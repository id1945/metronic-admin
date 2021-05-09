define(["require", "exports", "../../algorithms/luhn"], function (require, exports, luhn_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function frVat(value) {
        var v = value;
        if (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(v)) {
            v = v.substr(2);
        }
        if (!/^[0-9A-Z]{2}[0-9]{9}$/.test(v)) {
            return {
                meta: {},
                valid: false,
            };
        }
        if (!luhn_1.default(v.substr(2))) {
            return {
                meta: {},
                valid: false,
            };
        }
        if (/^[0-9]{2}$/.test(v.substr(0, 2))) {
            return {
                meta: {},
                valid: v.substr(0, 2) === "" + parseInt(v.substr(2) + '12', 10) % 97,
            };
        }
        else {
            var alphabet = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ';
            var check = void 0;
            if (/^[0-9]$/.test(v.charAt(0))) {
                check = alphabet.indexOf(v.charAt(0)) * 24 + alphabet.indexOf(v.charAt(1)) - 10;
            }
            else {
                check = alphabet.indexOf(v.charAt(0)) * 34 + alphabet.indexOf(v.charAt(1)) - 100;
            }
            return {
                meta: {},
                valid: ((parseInt(v.substr(2), 10) + 1 + Math.floor(check / 11)) % 11) === (check % 11),
            };
        }
    }
    exports.default = frVat;
});
