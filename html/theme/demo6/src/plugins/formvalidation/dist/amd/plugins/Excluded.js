var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../core/Plugin"], function (require, exports, Plugin_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Excluded = (function (_super) {
        __extends(Excluded, _super);
        function Excluded(opts) {
            var _this = _super.call(this, opts) || this;
            _this.opts = Object.assign({}, { excluded: Excluded.defaultIgnore }, opts);
            _this.ignoreValidationFilter = _this.ignoreValidation.bind(_this);
            return _this;
        }
        Excluded.defaultIgnore = function (_field, element, _elements) {
            var isVisible = !!(element.offsetWidth ||
                element.offsetHeight ||
                element.getClientRects().length);
            var disabled = element.getAttribute('disabled');
            return (disabled === '' ||
                disabled === 'disabled' ||
                element.getAttribute('type') === 'hidden' ||
                !isVisible);
        };
        Excluded.prototype.install = function () {
            this.core.registerFilter('element-ignored', this.ignoreValidationFilter);
        };
        Excluded.prototype.uninstall = function () {
            this.core.deregisterFilter('element-ignored', this.ignoreValidationFilter);
        };
        Excluded.prototype.ignoreValidation = function (field, element, elements) {
            return this.opts.excluded.apply(this, [field, element, elements]);
        };
        return Excluded;
    }(Plugin_1.default));
    exports.default = Excluded;
});
