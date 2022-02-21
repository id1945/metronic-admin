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
    var Aria = (function (_super) {
        __extends(Aria, _super);
        function Aria() {
            var _this = _super.call(this, {}) || this;
            _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
            _this.fieldValidHandler = _this.onFieldValid.bind(_this);
            _this.fieldInvalidHandler = _this.onFieldInvalid.bind(_this);
            _this.messageDisplayedHandler = _this.onMessageDisplayed.bind(_this);
            return _this;
        }
        Aria.prototype.install = function () {
            this.core
                .on('core.field.valid', this.fieldValidHandler)
                .on('core.field.invalid', this.fieldInvalidHandler)
                .on('core.element.validated', this.elementValidatedHandler)
                .on('plugins.message.displayed', this.messageDisplayedHandler);
        };
        Aria.prototype.uninstall = function () {
            this.core
                .off('core.field.valid', this.fieldValidHandler)
                .off('core.field.invalid', this.fieldInvalidHandler)
                .off('core.element.validated', this.elementValidatedHandler)
                .off('plugins.message.displayed', this.messageDisplayedHandler);
        };
        Aria.prototype.onElementValidated = function (e) {
            if (e.valid) {
                e.element.setAttribute('aria-invalid', 'false');
                e.element.removeAttribute('aria-describedby');
            }
        };
        Aria.prototype.onFieldValid = function (field) {
            var elements = this.core.getElements(field);
            if (elements) {
                elements.forEach(function (ele) {
                    ele.setAttribute('aria-invalid', 'false');
                    ele.removeAttribute('aria-describedby');
                });
            }
        };
        Aria.prototype.onFieldInvalid = function (field) {
            var elements = this.core.getElements(field);
            if (elements) {
                elements.forEach(function (ele) { return ele.setAttribute('aria-invalid', 'true'); });
            }
        };
        Aria.prototype.onMessageDisplayed = function (e) {
            e.messageElement.setAttribute('role', 'alert');
            e.messageElement.setAttribute('aria-hidden', 'false');
            var elements = this.core.getElements(e.field);
            var index = elements.indexOf(e.element);
            var id = "js-fv-" + e.field + "-" + index + "-" + Date.now() + "-message";
            e.messageElement.setAttribute('id', id);
            e.element.setAttribute('aria-describedby', id);
            var type = e.element.getAttribute('type');
            if ('radio' === type || 'checkbox' === type) {
                elements.forEach(function (ele) { return ele.setAttribute('aria-describedby', id); });
            }
        };
        return Aria;
    }(Plugin_1.default));
    exports.default = Aria;
});
