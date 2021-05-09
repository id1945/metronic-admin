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
define(["require", "exports", "../utils/classSet", "./Framework"], function (require, exports, classSet_1, Framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Pure = (function (_super) {
        __extends(Pure, _super);
        function Pure(opts) {
            return _super.call(this, Object.assign({}, {
                formClass: 'fv-plugins-pure',
                messageClass: 'fv-help-block',
                rowInvalidClass: 'fv-has-error',
                rowPattern: /^.*pure-control-group.*$/,
                rowSelector: '.pure-control-group',
                rowValidClass: 'fv-has-success',
            }, opts)) || this;
        }
        Pure.prototype.onIconPlaced = function (e) {
            var type = e.element.getAttribute('type');
            if ('checkbox' === type || 'radio' === type) {
                var parent_1 = e.element.parentElement;
                classSet_1.default(e.iconElement, {
                    'fv-plugins-icon-check': true,
                });
                if ('LABEL' === parent_1.tagName) {
                    parent_1.parentElement.insertBefore(e.iconElement, parent_1.nextSibling);
                }
            }
        };
        return Pure;
    }(Framework_1.default));
    exports.default = Pure;
});
