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
define(["require", "exports", "../core/Plugin", "../utils/classSet"], function (require, exports, Plugin_1, classSet_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MandatoryIcon = (function (_super) {
        __extends(MandatoryIcon, _super);
        function MandatoryIcon(opts) {
            var _this = _super.call(this, opts) || this;
            _this.removedIcons = {
                Invalid: '',
                NotValidated: '',
                Valid: '',
                Validating: '',
            };
            _this.icons = new Map();
            _this.elementValidatingHandler = _this.onElementValidating.bind(_this);
            _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
            _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_this);
            _this.iconPlacedHandler = _this.onIconPlaced.bind(_this);
            _this.iconSetHandler = _this.onIconSet.bind(_this);
            return _this;
        }
        MandatoryIcon.prototype.install = function () {
            this.core
                .on('core.element.validating', this.elementValidatingHandler)
                .on('core.element.validated', this.elementValidatedHandler)
                .on('core.element.notvalidated', this.elementNotValidatedHandler)
                .on('plugins.icon.placed', this.iconPlacedHandler)
                .on('plugins.icon.set', this.iconSetHandler);
        };
        MandatoryIcon.prototype.uninstall = function () {
            this.icons.clear();
            this.core
                .off('core.element.validating', this.elementValidatingHandler)
                .off('core.element.validated', this.elementValidatedHandler)
                .off('core.element.notvalidated', this.elementNotValidatedHandler)
                .off('plugins.icon.placed', this.iconPlacedHandler)
                .off('plugins.icon.set', this.iconSetHandler);
        };
        MandatoryIcon.prototype.onIconPlaced = function (e) {
            var _a;
            var _this = this;
            var validators = this.core.getFields()[e.field].validators;
            var elements = this.core.getElements(e.field);
            if (validators &&
                validators['notEmpty'] &&
                validators['notEmpty'].enabled !== false &&
                elements.length) {
                this.icons.set(e.element, e.iconElement);
                var eleType = elements[0].getAttribute('type');
                var type = !eleType ? '' : eleType.toLowerCase();
                var elementArray = 'checkbox' === type || 'radio' === type
                    ? [elements[0]]
                    : elements;
                for (var _i = 0, elementArray_1 = elementArray; _i < elementArray_1.length; _i++) {
                    var ele = elementArray_1[_i];
                    if (this.core.getElementValue(e.field, ele) === '') {
                        classSet_1.default(e.iconElement, (_a = {},
                            _a[this.opts.icon] = true,
                            _a));
                    }
                }
            }
            this.iconClasses = e.classes;
            var icons = this.opts.icon.split(' ');
            var feedbackIcons = {
                Invalid: this.iconClasses.invalid
                    ? this.iconClasses.invalid.split(' ')
                    : [],
                Valid: this.iconClasses.valid
                    ? this.iconClasses.valid.split(' ')
                    : [],
                Validating: this.iconClasses.validating
                    ? this.iconClasses.validating.split(' ')
                    : [],
            };
            Object.keys(feedbackIcons).forEach(function (status) {
                var classes = [];
                for (var _i = 0, icons_1 = icons; _i < icons_1.length; _i++) {
                    var clazz = icons_1[_i];
                    if (feedbackIcons[status].indexOf(clazz) === -1) {
                        classes.push(clazz);
                    }
                }
                _this.removedIcons[status] = classes.join(' ');
            });
        };
        MandatoryIcon.prototype.onElementValidating = function (e) {
            this.updateIconClasses(e.element, 'Validating');
        };
        MandatoryIcon.prototype.onElementValidated = function (e) {
            this.updateIconClasses(e.element, e.valid ? 'Valid' : 'Invalid');
        };
        MandatoryIcon.prototype.onElementNotValidated = function (e) {
            this.updateIconClasses(e.element, 'NotValidated');
        };
        MandatoryIcon.prototype.updateIconClasses = function (ele, status) {
            var _a;
            var icon = this.icons.get(ele);
            if (icon &&
                this.iconClasses &&
                (this.iconClasses.valid ||
                    this.iconClasses.invalid ||
                    this.iconClasses.validating)) {
                classSet_1.default(icon, (_a = {},
                    _a[this.removedIcons[status]] = false,
                    _a[this.opts.icon] = false,
                    _a));
            }
        };
        MandatoryIcon.prototype.onIconSet = function (e) {
            var _a;
            var icon = this.icons.get(e.element);
            if (icon &&
                e.status === 'NotValidated' &&
                this.core.getElementValue(e.field, e.element) === '') {
                classSet_1.default(icon, (_a = {},
                    _a[this.opts.icon] = true,
                    _a));
            }
        };
        return MandatoryIcon;
    }(Plugin_1.default));
    exports.default = MandatoryIcon;
});
