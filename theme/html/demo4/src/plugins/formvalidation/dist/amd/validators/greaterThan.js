define(["require", "exports", "../utils/format"], function (require, exports, format_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function greaterThan() {
        return {
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                var opts = Object.assign({}, { inclusive: true, message: '' }, input.options);
                var minValue = parseFloat(("" + opts.min).replace(',', '.'));
                return opts.inclusive
                    ? {
                        message: format_1.default(input.l10n ? opts.message || input.l10n.greaterThan.default : opts.message, "" + minValue),
                        valid: parseFloat(input.value) >= minValue,
                    }
                    : {
                        message: format_1.default(input.l10n ? opts.message || input.l10n.greaterThan.notInclusive : opts.message, "" + minValue),
                        valid: parseFloat(input.value) > minValue,
                    };
            },
        };
    }
    exports.default = greaterThan;
});
