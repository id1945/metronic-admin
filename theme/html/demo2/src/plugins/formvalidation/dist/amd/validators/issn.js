define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function issn() {
        return {
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                if (!/^\d{4}\-\d{3}[\dX]$/.test(input.value)) {
                    return { valid: false };
                }
                var chars = input.value.replace(/[^0-9X]/gi, '').split('');
                var length = chars.length;
                var sum = 0;
                if (chars[7] === 'X') {
                    chars[7] = '10';
                }
                for (var i = 0; i < length; i++) {
                    sum += parseInt(chars[i], 10) * (8 - i);
                }
                return { valid: (sum % 11 === 0) };
            },
        };
    }
    exports.default = issn;
});
