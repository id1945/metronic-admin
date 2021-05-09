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
    var Tooltip = (function (_super) {
        __extends(Tooltip, _super);
        function Tooltip(opts) {
            var _this = _super.call(this, opts) || this;
            _this.messages = new Map();
            _this.opts = Object.assign({}, {
                placement: 'top',
                trigger: 'click',
            }, opts);
            _this.iconPlacedHandler = _this.onIconPlaced.bind(_this);
            _this.validatorValidatedHandler = _this.onValidatorValidated.bind(_this);
            _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
            _this.documentClickHandler = _this.onDocumentClicked.bind(_this);
            return _this;
        }
        Tooltip.prototype.install = function () {
            var _a;
            this.tip = document.createElement('div');
            classSet_1.default(this.tip, (_a = {
                    'fv-plugins-tooltip': true
                },
                _a["fv-plugins-tooltip--" + this.opts.placement] = true,
                _a));
            document.body.appendChild(this.tip);
            this.core
                .on('plugins.icon.placed', this.iconPlacedHandler)
                .on('core.validator.validated', this.validatorValidatedHandler)
                .on('core.element.validated', this.elementValidatedHandler);
            if ('click' === this.opts.trigger) {
                document.addEventListener('click', this.documentClickHandler);
            }
        };
        Tooltip.prototype.uninstall = function () {
            this.messages.clear();
            document.body.removeChild(this.tip);
            this.core
                .off('plugins.icon.placed', this.iconPlacedHandler)
                .off('core.validator.validated', this.validatorValidatedHandler)
                .off('core.element.validated', this.elementValidatedHandler);
            if ('click' === this.opts.trigger) {
                document.removeEventListener('click', this.documentClickHandler);
            }
        };
        Tooltip.prototype.onIconPlaced = function (e) {
            var _this = this;
            classSet_1.default(e.iconElement, {
                'fv-plugins-tooltip-icon': true,
            });
            switch (this.opts.trigger) {
                case 'hover':
                    e.iconElement.addEventListener('mouseenter', function (evt) { return _this.show(e.element, evt); });
                    e.iconElement.addEventListener('mouseleave', function (evt) { return _this.hide(); });
                    break;
                case 'click':
                default:
                    e.iconElement.addEventListener('click', function (evt) { return _this.show(e.element, evt); });
                    break;
            }
        };
        Tooltip.prototype.onValidatorValidated = function (e) {
            if (!e.result.valid) {
                var elements = e.elements;
                var type = e.element.getAttribute('type');
                var ele = ('radio' === type || 'checkbox' === type) ? elements[0] : e.element;
                var message = (typeof e.result.message === 'string')
                    ? e.result.message
                    : e.result.message[this.core.getLocale()];
                this.messages.set(ele, message);
            }
        };
        Tooltip.prototype.onElementValidated = function (e) {
            if (e.valid) {
                var elements = e.elements;
                var type = e.element.getAttribute('type');
                var ele = ('radio' === type || 'checkbox' === type) ? elements[0] : e.element;
                this.messages.delete(ele);
            }
        };
        Tooltip.prototype.onDocumentClicked = function (e) {
            this.hide();
        };
        Tooltip.prototype.show = function (ele, e) {
            e.preventDefault();
            e.stopPropagation();
            if (!this.messages.has(ele)) {
                return;
            }
            classSet_1.default(this.tip, {
                'fv-plugins-tooltip--hide': false,
            });
            this.tip.innerHTML = "<span class=\"fv-plugins-tooltip__content\">" + this.messages.get(ele) + "</span>";
            var icon = e.target;
            var rect = icon.getBoundingClientRect();
            var top = 0;
            var left = 0;
            switch (this.opts.placement) {
                case 'top':
                default:
                    top = rect.top - rect.height;
                    left = rect.left + rect.width / 2 - this.tip.clientWidth / 2;
                    break;
                case 'top-left':
                    top = rect.top - rect.height;
                    left = rect.left;
                    break;
                case 'top-right':
                    top = rect.top - rect.height;
                    left = rect.left + rect.width - this.tip.clientWidth;
                    break;
                case 'bottom':
                    top = rect.top + rect.height;
                    left = rect.left + rect.width / 2 - this.tip.clientWidth / 2;
                    break;
                case 'bottom-left':
                    top = rect.top + rect.height;
                    left = rect.left;
                    break;
                case 'bottom-right':
                    top = rect.top + rect.height;
                    left = rect.left + rect.width - this.tip.clientWidth;
                    break;
                case 'left':
                    top = rect.top + rect.height / 2 - this.tip.clientHeight / 2;
                    left = rect.left - this.tip.clientWidth;
                    break;
                case 'right':
                    top = rect.top + rect.height / 2 - this.tip.clientHeight / 2;
                    left = rect.left + rect.width;
                    break;
            }
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
            top = top + scrollTop;
            left = left + scrollLeft;
            this.tip.setAttribute('style', "top: " + top + "px; left: " + left + "px");
        };
        Tooltip.prototype.hide = function () {
            classSet_1.default(this.tip, {
                'fv-plugins-tooltip--hide': true,
            });
        };
        return Tooltip;
    }(Plugin_1.default));
    exports.default = Tooltip;
});
