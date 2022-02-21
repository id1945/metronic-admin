define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function siret() {
        return {
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                var length = input.value.length;
                var sum = 0;
                var tmp;
                for (var i = 0; i < length; i++) {
                    tmp = parseInt(input.value.charAt(i), 10);
                    if (i % 2 === 0) {
                        tmp = tmp * 2;
                        if (tmp > 9) {
                            tmp -= 9;
                        }
                    }
                    sum += tmp;
                }
                return { valid: sum % 10 === 0 };
            },
        };
    }
    exports.default = siret;
});
