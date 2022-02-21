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
    var L10n = (function (_super) {
        __extends(L10n, _super);
        function L10n(opts) {
            var _this = _super.call(this, opts) || this;
            _this.messageFilter = _this.getMessage.bind(_this);
            return _this;
        }
        L10n.prototype.install = function () {
            this.core.registerFilter('validator-message', this.messageFilter);
        };
        L10n.prototype.uninstall = function () {
            this.core.deregisterFilter('validator-message', this.messageFilter);
        };
        L10n.prototype.getMessage = function (locale, field, validator) {
            if (this.opts[field] && this.opts[field][validator]) {
                var message = this.opts[field][validator];
                var messageType = typeof message;
                if ('object' === messageType && message[locale]) {
                    return message[locale];
                }
                else if ('function' === messageType) {
                    var result = message.apply(this, [field, validator]);
                    return result && result[locale] ? result[locale] : '';
                }
            }
            return '';
        };
        return L10n;
    }(Plugin_1.default));
    exports.default = L10n;
});
