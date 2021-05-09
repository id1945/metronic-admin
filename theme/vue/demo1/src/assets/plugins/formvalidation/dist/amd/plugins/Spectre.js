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
define(["require", "exports", "../utils/classSet", "../utils/hasClass", "./Framework"], function (require, exports, classSet_1, hasClass_1, Framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Spectre = (function (_super) {
        __extends(Spectre, _super);
        function Spectre(opts) {
            return _super.call(this, Object.assign({}, {
                formClass: 'fv-plugins-spectre',
                messageClass: 'form-input-hint',
                rowInvalidClass: 'has-error',
                rowPattern: /^(.*)(col)(-(xs|sm|md|lg))*-[0-9]+(.*)$/,
                rowSelector: '.form-group',
                rowValidClass: 'has-success',
            }, opts)) || this;
        }
        Spectre.prototype.onIconPlaced = function (e) {
            var type = e.element.getAttribute('type');
            var parent = e.element.parentElement;
            if ('checkbox' === type || 'radio' === type) {
                classSet_1.default(e.iconElement, {
                    'fv-plugins-icon-check': true,
                });
                if (hasClass_1.default(parent, "form-" + type)) {
                    parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
                }
            }
        };
        return Spectre;
    }(Framework_1.default));
    exports.default = Spectre;
});
