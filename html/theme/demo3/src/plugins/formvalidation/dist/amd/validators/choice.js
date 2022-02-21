define(["require", "exports", "../utils/format"], function (require, exports, format_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function choice() {
        return {
            validate: function (input) {
                var numChoices = 'select' === input.element.tagName.toLowerCase()
                    ? input.element.querySelectorAll('option:checked').length
                    : input.elements.filter(function (ele) { return ele.checked; }).length;
                var min = input.options.min ? "" + input.options.min : '';
                var max = input.options.max ? "" + input.options.max : '';
                var msg = input.l10n
                    ? input.options.message || input.l10n.choice.default
                    : input.options.message;
                var isValid = !((min && numChoices < parseInt(min, 10)) ||
                    (max && numChoices > parseInt(max, 10)));
                switch (true) {
                    case !!min && !!max:
                        msg = format_1.default(input.l10n
                            ? input.l10n.choice.between
                            : input.options.message, [min, max]);
                        break;
                    case !!min:
                        msg = format_1.default(input.l10n
                            ? input.l10n.choice.more
                            : input.options.message, min);
                        break;
                    case !!max:
                        msg = format_1.default(input.l10n
                            ? input.l10n.choice.less
                            : input.options.message, max);
                        break;
                    default:
                        break;
                }
                return {
                    message: msg,
                    valid: isValid,
                };
            },
        };
    }
    exports.default = choice;
});
