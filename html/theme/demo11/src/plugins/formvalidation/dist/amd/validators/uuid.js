define(["require", "exports", "../utils/format"], function (require, exports, format_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function uuid() {
        return {
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                var opts = Object.assign({}, { message: '' }, input.options);
                var patterns = {
                    3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
                    4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                    5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                    all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
                };
                var version = opts.version ? "" + opts.version : 'all';
                return {
                    message: opts.version
                        ? format_1.default(input.l10n
                            ? opts.message || input.l10n.uuid.version
                            : opts.message, opts.version)
                        : input.l10n
                            ? input.l10n.uuid.default
                            : opts.message,
                    valid: null === patterns[version]
                        ? true
                        : patterns[version].test(input.value),
                };
            },
        };
    }
    exports.default = uuid;
});
