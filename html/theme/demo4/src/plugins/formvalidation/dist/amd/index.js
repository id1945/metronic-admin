define(["require", "exports", "./algorithms/index", "./core/index", "./filters/index", "./plugins/index", "./utils/index", "./validators/index"], function (require, exports, index_1, index_2, index_3, index_4, index_5, index_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Plugin = exports.validators = exports.utils = exports.plugins = exports.locales = exports.filters = exports.formValidation = exports.algorithms = void 0;
    exports.algorithms = index_1.default;
    exports.formValidation = index_2.default;
    Object.defineProperty(exports, "Plugin", { enumerable: true, get: function () { return index_2.Plugin; } });
    exports.filters = index_3.default;
    exports.plugins = index_4.default;
    exports.utils = index_5.default;
    exports.validators = index_6.default;
    var locales = {};
    exports.locales = locales;
});
