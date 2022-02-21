define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function vin() {
        return {
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(input.value)) {
                    return { valid: false };
                }
                var v = input.value.toUpperCase();
                var chars = {
                    A: 1,
                    B: 2,
                    C: 3,
                    D: 4,
                    E: 5,
                    F: 6,
                    G: 7,
                    H: 8,
                    J: 1,
                    K: 2,
                    L: 3,
                    M: 4,
                    N: 5,
                    P: 7,
                    R: 9,
                    S: 2,
                    T: 3,
                    U: 4,
                    V: 5,
                    W: 6,
                    X: 7,
                    Y: 8,
                    Z: 9,
                    0: 0,
                    1: 1,
                    2: 2,
                    3: 3,
                    4: 4,
                    5: 5,
                    6: 6,
                    7: 7,
                    8: 8,
                    9: 9,
                };
                var weights = [
                    8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2,
                ];
                var length = v.length;
                var sum = 0;
                for (var i = 0; i < length; i++) {
                    sum += chars["" + v.charAt(i)] * weights[i];
                }
                var reminder = "" + sum % 11;
                if (reminder === '10') {
                    reminder = 'X';
                }
                return { valid: reminder === v.charAt(8) };
            },
        };
    }
    exports.default = vin;
});
