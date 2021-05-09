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
    var DefaultSubmit = (function (_super) {
        __extends(DefaultSubmit, _super);
        function DefaultSubmit() {
            var _this = _super.call(this, {}) || this;
            _this.onValidHandler = _this.onFormValid.bind(_this);
            return _this;
        }
        DefaultSubmit.prototype.install = function () {
            var form = this.core.getFormElement();
            if (form.querySelectorAll('[type="submit"][name="submit"]').length) {
                throw new Error('Do not use `submit` for the name attribute of submit button');
            }
            this.core.on('core.form.valid', this.onValidHandler);
        };
        DefaultSubmit.prototype.uninstall = function () {
            this.core.off('core.form.valid', this.onValidHandler);
        };
        DefaultSubmit.prototype.onFormValid = function () {
            var form = this.core.getFormElement();
            if (form instanceof HTMLFormElement) {
                form.submit();
            }
        };
        return DefaultSubmit;
    }(Plugin_1.default));
    exports.default = DefaultSubmit;
});
