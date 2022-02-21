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
    var Tachyons = (function (_super) {
        __extends(Tachyons, _super);
        function Tachyons(opts) {
            return _super.call(this, Object.assign({}, {
                formClass: 'fv-plugins-tachyons',
                messageClass: 'small',
                rowInvalidClass: 'red',
                rowPattern: /^(.*)fl(.*)$/,
                rowSelector: '.fl',
                rowValidClass: 'green',
            }, opts)) || this;
        }
        Tachyons.prototype.onIconPlaced = function (e) {
            var type = e.element.getAttribute('type');
            var parent = e.element.parentElement;
            if ('checkbox' === type || 'radio' === type) {
                parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
                classSet_1.default(e.iconElement, {
                    'fv-plugins-icon-check': true,
                });
            }
        };
        return Tachyons;
    }(Framework_1.default));
    exports.default = Tachyons;
});
