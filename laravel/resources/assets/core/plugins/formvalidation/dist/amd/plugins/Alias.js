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
    var Alias = (function (_super) {
        __extends(Alias, _super);
        function Alias(opts) {
            var _this = _super.call(this, opts) || this;
            _this.opts = opts || {};
            _this.validatorNameFilter = _this.getValidatorName.bind(_this);
            return _this;
        }
        Alias.prototype.install = function () {
            this.core.registerFilter('validator-name', this.validatorNameFilter);
        };
        Alias.prototype.uninstall = function () {
            this.core.deregisterFilter('validator-name', this.validatorNameFilter);
        };
        Alias.prototype.getValidatorName = function (alias, _field) {
            return this.opts[alias] || alias;
        };
        return Alias;
    }(Plugin_1.default));
    exports.default = Alias;
});
