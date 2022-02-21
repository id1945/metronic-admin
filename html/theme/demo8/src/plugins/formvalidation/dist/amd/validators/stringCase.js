define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function stringCase() {
        return {
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                var opts = Object.assign({}, { case: 'lower' }, input.options);
                var caseOpt = (opts.case || 'lower').toLowerCase();
                return {
                    message: opts.message ||
                        (input.l10n
                            ? 'upper' === caseOpt
                                ? input.l10n.stringCase.upper
                                : input.l10n.stringCase.default
                            : opts.message),
                    valid: 'upper' === caseOpt
                        ? input.value === input.value.toUpperCase()
                        : input.value === input.value.toLowerCase(),
                };
            },
        };
    }
    exports.default = stringCase;
});
