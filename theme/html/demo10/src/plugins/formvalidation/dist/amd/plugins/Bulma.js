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
    var Bulma = (function (_super) {
        __extends(Bulma, _super);
        function Bulma(opts) {
            return _super.call(this, Object.assign({}, {
                formClass: 'fv-plugins-bulma',
                messageClass: 'help is-danger',
                rowInvalidClass: 'fv-has-error',
                rowPattern: /^.*field.*$/,
                rowSelector: '.field',
                rowValidClass: 'fv-has-success',
            }, opts)) || this;
        }
        Bulma.prototype.onIconPlaced = function (e) {
            classSet_1.default(e.iconElement, {
                'fv-plugins-icon': false,
            });
            var span = document.createElement('span');
            span.setAttribute('class', 'icon is-small is-right');
            e.iconElement.parentNode.insertBefore(span, e.iconElement);
            span.appendChild(e.iconElement);
            var type = e.element.getAttribute('type');
            var parent = e.element.parentElement;
            if ('checkbox' === type || 'radio' === type) {
                classSet_1.default(parent.parentElement, {
                    'has-icons-right': true,
                });
                classSet_1.default(span, {
                    'fv-plugins-icon-check': true,
                });
                parent.parentElement.insertBefore(span, parent.nextSibling);
            }
            else {
                classSet_1.default(parent, {
                    'has-icons-right': true,
                });
            }
        };
        return Bulma;
    }(Framework_1.default));
    exports.default = Bulma;
});
