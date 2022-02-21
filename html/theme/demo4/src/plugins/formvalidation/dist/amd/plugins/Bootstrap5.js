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
    var Bootstrap5 = (function (_super) {
        __extends(Bootstrap5, _super);
        function Bootstrap5(opts) {
            var _this = _super.call(this, Object.assign({}, {
                eleInvalidClass: 'is-invalid',
                eleValidClass: 'is-valid',
                formClass: 'fv-plugins-bootstrap5',
                rowInvalidClass: 'fv-plugins-bootstrap5-row-invalid',
                rowPattern: /^(.*)(col|offset)(-(sm|md|lg|xl))*-[0-9]+(.*)$/,
                rowSelector: '.row',
                rowValidClass: 'fv-plugins-bootstrap5-row-valid',
            }, opts)) || this;
            _this.eleValidatedHandler = _this.handleElementValidated.bind(_this);
            return _this;
        }
        Bootstrap5.prototype.install = function () {
            _super.prototype.install.call(this);
            this.core.on('core.element.validated', this.eleValidatedHandler);
        };
        Bootstrap5.prototype.uninstall = function () {
            _super.prototype.install.call(this);
            this.core.off('core.element.validated', this.eleValidatedHandler);
        };
        Bootstrap5.prototype.handleElementValidated = function (e) {
            var type = e.element.getAttribute('type');
            if (('checkbox' === type || 'radio' === type) &&
                e.elements.length > 1 &&
                hasClass_1.default(e.element, 'form-check-input')) {
                var inputParent = e.element.parentElement;
                if (hasClass_1.default(inputParent, 'form-check') &&
                    hasClass_1.default(inputParent, 'form-check-inline')) {
                    classSet_1.default(inputParent, {
                        'is-invalid': !e.valid,
                        'is-valid': e.valid,
                    });
                }
            }
        };
        Bootstrap5.prototype.onIconPlaced = function (e) {
            classSet_1.default(e.element, {
                'fv-plugins-icon-input': true,
            });
            var parent = e.element.parentElement;
            if (hasClass_1.default(parent, 'input-group')) {
                parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
                if (e.element.nextElementSibling &&
                    hasClass_1.default(e.element.nextElementSibling, 'input-group-text')) {
                    classSet_1.default(e.iconElement, {
                        'fv-plugins-icon-input-group': true,
                    });
                }
            }
            var type = e.element.getAttribute('type');
            if ('checkbox' === type || 'radio' === type) {
                var grandParent = parent.parentElement;
                if (hasClass_1.default(parent, 'form-check')) {
                    classSet_1.default(e.iconElement, {
                        'fv-plugins-icon-check': true,
                    });
                    parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
                }
                else if (hasClass_1.default(parent.parentElement, 'form-check')) {
                    classSet_1.default(e.iconElement, {
                        'fv-plugins-icon-check': true,
                    });
                    grandParent.parentElement.insertBefore(e.iconElement, grandParent.nextSibling);
                }
            }
        };
        Bootstrap5.prototype.onMessagePlaced = function (e) {
            e.messageElement.classList.add('invalid-feedback');
            var inputParent = e.element.parentElement;
            if (hasClass_1.default(inputParent, 'input-group')) {
                inputParent.appendChild(e.messageElement);
                classSet_1.default(inputParent, {
                    'has-validation': true,
                });
                return;
            }
            var type = e.element.getAttribute('type');
            if (('checkbox' === type || 'radio' === type) &&
                hasClass_1.default(e.element, 'form-check-input') &&
                hasClass_1.default(inputParent, 'form-check') &&
                !hasClass_1.default(inputParent, 'form-check-inline')) {
                e.elements[e.elements.length - 1].parentElement.appendChild(e.messageElement);
            }
        };
        return Bootstrap5;
    }(Framework_1.default));
    exports.default = Bootstrap5;
});
