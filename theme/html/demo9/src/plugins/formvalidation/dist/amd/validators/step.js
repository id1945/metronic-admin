define(["require", "exports", "../utils/format"], function (require, exports, format_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function step() {
        var round = function (input, precision) {
            var m = Math.pow(10, precision);
            var x = input * m;
            var sign;
            switch (true) {
                case (x === 0):
                    sign = 0;
                    break;
                case (x > 0):
                    sign = 1;
                    break;
                case (x < 0):
                    sign = -1;
                    break;
            }
            var isHalf = (x % 1 === 0.5 * sign);
            return isHalf ? (Math.floor(x) + (sign > 0 ? 1 : 0)) / m : Math.round(x) / m;
        };
        var floatMod = function (x, y) {
            if (y === 0.0) {
                return 1.0;
            }
            var dotX = ("" + x).split('.');
            var dotY = ("" + y).split('.');
            var precision = ((dotX.length === 1) ? 0 : dotX[1].length) + ((dotY.length === 1) ? 0 : dotY[1].length);
            return round(x - y * Math.floor(x / y), precision);
        };
        return {
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                var v = parseFloat(input.value);
                if (isNaN(v) || !isFinite(v)) {
                    return { valid: false };
                }
                var opts = Object.assign({}, {
                    baseValue: 0,
                    message: '',
                    step: 1,
                }, input.options);
                var mod = floatMod(v - opts.baseValue, opts.step);
                return {
                    message: format_1.default(input.l10n ? opts.message || input.l10n.step.default : opts.message, "" + opts.step),
                    valid: mod === 0.0 || mod === opts.step,
                };
            },
        };
    }
    exports.default = step;
});
