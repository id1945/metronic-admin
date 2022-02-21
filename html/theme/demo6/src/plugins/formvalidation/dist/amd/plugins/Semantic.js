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
    var Semantic = (function (_super) {
        __extends(Semantic, _super);
        function Semantic(opts) {
            return _super.call(this, Object.assign({}, {
                formClass: 'fv-plugins-semantic',
                messageClass: 'ui pointing red label',
                rowInvalidClass: 'error',
                rowPattern: /^.*(field|column).*$/,
                rowSelector: '.fields',
                rowValidClass: 'fv-has-success',
            }, opts)) || this;
        }
        Semantic.prototype.onIconPlaced = function (e) {
            var type = e.element.getAttribute('type');
            if ('checkbox' === type || 'radio' === type) {
                var parent_1 = e.element.parentElement;
                classSet_1.default(e.iconElement, {
                    'fv-plugins-icon-check': true,
                });
                parent_1.parentElement.insertBefore(e.iconElement, parent_1.nextSibling);
            }
        };
        Semantic.prototype.onMessagePlaced = function (e) {
            var type = e.element.getAttribute('type');
            var numElements = e.elements.length;
            if (('checkbox' === type || 'radio' === type) && numElements > 1) {
                var last = e.elements[numElements - 1];
                var parent_2 = last.parentElement;
                if (hasClass_1.default(parent_2, type) && hasClass_1.default(parent_2, 'ui')) {
                    parent_2.parentElement.insertBefore(e.messageElement, parent_2.nextSibling);
                }
            }
        };
        return Semantic;
    }(Framework_1.default));
    exports.default = Semantic;
});
