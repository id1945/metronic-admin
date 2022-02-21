define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function esVat(value) {
        var v = value;
        if (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(v)) {
            v = v.substr(2);
        }
        if (!/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(v)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var dni = function (input) {
            var check = parseInt(input.substr(0, 8), 10);
            return ("" + 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23] === input.substr(8, 1));
        };
        var nie = function (input) {
            var check = ['XYZ'.indexOf(input.charAt(0)), input.substr(1)].join('');
            var cd = 'TRWAGMYFPDXBNJZSQVHLCKE'[parseInt(check, 10) % 23];
            return "" + cd === input.substr(8, 1);
        };
        var cif = function (input) {
            var firstChar = input.charAt(0);
            var check;
            if ('KLM'.indexOf(firstChar) !== -1) {
                check = parseInt(input.substr(1, 8), 10);
                check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
                return "" + check === input.substr(8, 1);
            }
            else if ('ABCDEFGHJNPQRSUVW'.indexOf(firstChar) !== -1) {
                var weight = [2, 1, 2, 1, 2, 1, 2];
                var sum = 0;
                var temp = 0;
                for (var i = 0; i < 7; i++) {
                    temp = parseInt(input.charAt(i + 1), 10) * weight[i];
                    if (temp > 9) {
                        temp = Math.floor(temp / 10) + (temp % 10);
                    }
                    sum += temp;
                }
                sum = 10 - (sum % 10);
                if (sum === 10) {
                    sum = 0;
                }
                return ("" + sum === input.substr(8, 1) ||
                    'JABCDEFGHI'[sum] === input.substr(8, 1));
            }
            return false;
        };
        var first = v.charAt(0);
        if (/^[0-9]$/.test(first)) {
            return {
                meta: {
                    type: 'DNI',
                },
                valid: dni(v),
            };
        }
        else if (/^[XYZ]$/.test(first)) {
            return {
                meta: {
                    type: 'NIE',
                },
                valid: nie(v),
            };
        }
        else {
            return {
                meta: {
                    type: 'CIF',
                },
                valid: cif(v),
            };
        }
    }
    exports.default = esVat;
});
