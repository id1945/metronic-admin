define(["require", "exports", "../utils/format"], function (require, exports, format_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function between() {
        var formatValue = function (value) {
            return parseFloat(("" + value).replace(',', '.'));
        };
        return {
            validate: function (input) {
                var value = input.value;
                if (value === '') {
                    return { valid: true };
                }
                var opts = Object.assign({}, { inclusive: true, message: '' }, input.options);
                var minValue = formatValue(opts.min);
                var maxValue = formatValue(opts.max);
                return opts.inclusive
                    ? {
                        message: format_1.default(input.l10n ? opts.message || input.l10n.between.default : opts.message, ["" + minValue, "" + maxValue]),
                        valid: parseFloat(value) >= minValue && parseFloat(value) <= maxValue,
                    }
                    : {
                        message: format_1.default(input.l10n ? opts.message || input.l10n.between.notInclusive : opts.message, ["" + minValue, "" + maxValue]),
                        valid: parseFloat(value) > minValue && parseFloat(value) < maxValue,
                    };
            },
        };
    }
    exports.default = between;
});
