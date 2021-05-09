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
    var Message = (function (_super) {
        __extends(Message, _super);
        function Message(opts) {
            var _this = _super.call(this, opts) || this;
            _this.messages = new Map();
            _this.defaultContainer = document.createElement('div');
            _this.opts = Object.assign({}, {
                container: function (field, element) { return _this.defaultContainer; },
            }, opts);
            _this.elementIgnoredHandler = _this.onElementIgnored.bind(_this);
            _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
            _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_this);
            _this.validatorValidatedHandler = _this.onValidatorValidated.bind(_this);
            _this.validatorNotValidatedHandler = _this.onValidatorNotValidated.bind(_this);
            return _this;
        }
        Message.getClosestContainer = function (element, upper, pattern) {
            var ele = element;
            while (ele) {
                if (ele === upper) {
                    break;
                }
                ele = ele.parentElement;
                if (pattern.test(ele.className)) {
                    break;
                }
            }
            return ele;
        };
        Message.prototype.install = function () {
            this.core.getFormElement().appendChild(this.defaultContainer);
            this.core
                .on('core.element.ignored', this.elementIgnoredHandler)
                .on('core.field.added', this.fieldAddedHandler)
                .on('core.field.removed', this.fieldRemovedHandler)
                .on('core.validator.validated', this.validatorValidatedHandler)
                .on('core.validator.notvalidated', this.validatorNotValidatedHandler);
        };
        Message.prototype.uninstall = function () {
            this.core.getFormElement().removeChild(this.defaultContainer);
            this.messages.forEach(function (message) { return message.parentNode.removeChild(message); });
            this.messages.clear();
            this.core
                .off('core.element.ignored', this.elementIgnoredHandler)
                .off('core.field.added', this.fieldAddedHandler)
                .off('core.field.removed', this.fieldRemovedHandler)
                .off('core.validator.validated', this.validatorValidatedHandler)
                .off('core.validator.notvalidated', this.validatorNotValidatedHandler);
        };
        Message.prototype.onFieldAdded = function (e) {
            var _this = this;
            var elements = e.elements;
            if (elements) {
                elements.forEach(function (ele) {
                    var msg = _this.messages.get(ele);
                    if (msg) {
                        msg.parentNode.removeChild(msg);
                        _this.messages.delete(ele);
                    }
                });
                this.prepareFieldContainer(e.field, elements);
            }
        };
        Message.prototype.onFieldRemoved = function (e) {
            var _this = this;
            if (!e.elements.length || !e.field) {
                return;
            }
            var type = e.elements[0].getAttribute('type');
            var elements = ('radio' === type || 'checkbox' === type) ? [e.elements[0]] : e.elements;
            elements.forEach(function (ele) {
                if (_this.messages.has(ele)) {
                    var container = _this.messages.get(ele);
                    container.parentNode.removeChild(container);
                    _this.messages.delete(ele);
                }
            });
        };
        Message.prototype.prepareFieldContainer = function (field, elements) {
            var _this = this;
            if (elements.length) {
                var type = elements[0].getAttribute('type');
                if ('radio' === type || 'checkbox' === type) {
                    this.prepareElementContainer(field, elements[0], elements);
                }
                else {
                    elements.forEach(function (ele) { return _this.prepareElementContainer(field, ele, elements); });
                }
            }
        };
        Message.prototype.prepareElementContainer = function (field, element, elements) {
            var container;
            switch (true) {
                case ('string' === typeof this.opts.container):
                    var selector = this.opts.container;
                    selector = '#' === selector.charAt(0) ? "[id=\"" + selector.substring(1) + "\"]" : selector;
                    container = this.core.getFormElement().querySelector(selector);
                    break;
                default:
                    container = this.opts.container(field, element);
                    break;
            }
            var message = document.createElement('div');
            container.appendChild(message);
            classSet_1.default(message, {
                'fv-plugins-message-container': true,
            });
            this.core.emit('plugins.message.placed', {
                element: element,
                elements: elements,
                field: field,
                messageElement: message,
            });
            this.messages.set(element, message);
        };
        Message.prototype.getMessage = function (result) {
            return (typeof result.message === 'string')
                ? result.message
                : result.message[this.core.getLocale()];
        };
        Message.prototype.onValidatorValidated = function (e) {
            var _a;
            var elements = e.elements;
            var type = e.element.getAttribute('type');
            var element = ('radio' === type || 'checkbox' === type) ? elements[0] : e.element;
            if (this.messages.has(element)) {
                var container = this.messages.get(element);
                var messageEle = container.querySelector("[data-field=\"" + e.field + "\"][data-validator=\"" + e.validator + "\"]");
                if (!messageEle && !e.result.valid) {
                    var ele = document.createElement('div');
                    ele.innerHTML = this.getMessage(e.result);
                    ele.setAttribute('data-field', e.field);
                    ele.setAttribute('data-validator', e.validator);
                    if (this.opts.clazz) {
                        classSet_1.default(ele, (_a = {},
                            _a[this.opts.clazz] = true,
                            _a));
                    }
                    container.appendChild(ele);
                    this.core.emit('plugins.message.displayed', {
                        element: e.element,
                        field: e.field,
                        message: e.result.message,
                        messageElement: ele,
                        meta: e.result.meta,
                        validator: e.validator,
                    });
                }
                else if (messageEle && !e.result.valid) {
                    messageEle.innerHTML = this.getMessage(e.result);
                    this.core.emit('plugins.message.displayed', {
                        element: e.element,
                        field: e.field,
                        message: e.result.message,
                        messageElement: messageEle,
                        meta: e.result.meta,
                        validator: e.validator,
                    });
                }
                else if (messageEle && e.result.valid) {
                    container.removeChild(messageEle);
                }
            }
        };
        Message.prototype.onValidatorNotValidated = function (e) {
            var elements = e.elements;
            var type = e.element.getAttribute('type');
            var element = ('radio' === type || 'checkbox' === type) ? elements[0] : e.element;
            if (this.messages.has(element)) {
                var container = this.messages.get(element);
                var messageEle = container.querySelector("[data-field=\"" + e.field + "\"][data-validator=\"" + e.validator + "\"]");
                if (messageEle) {
                    container.removeChild(messageEle);
                }
            }
        };
        Message.prototype.onElementIgnored = function (e) {
            var elements = e.elements;
            var type = e.element.getAttribute('type');
            var element = ('radio' === type || 'checkbox' === type) ? elements[0] : e.element;
            if (this.messages.has(element)) {
                var container_1 = this.messages.get(element);
                var messageElements = [].slice.call(container_1.querySelectorAll("[data-field=\"" + e.field + "\"]"));
                messageElements.forEach(function (messageEle) {
                    container_1.removeChild(messageEle);
                });
            }
        };
        return Message;
    }(Plugin_1.default));
    exports.default = Message;
});
