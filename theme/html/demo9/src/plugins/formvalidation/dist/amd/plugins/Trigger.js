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
    var Trigger = (function (_super) {
        __extends(Trigger, _super);
        function Trigger(opts) {
            var _this = _super.call(this, opts) || this;
            _this.handlers = [];
            _this.timers = new Map();
            _this.ieVersion = (function () {
                var v = 3;
                var div = document.createElement('div');
                var a = div['all'] || [];
                while (div.innerHTML = '<!--[if gt IE ' + (++v) + ']><br><![endif]-->', a[0]) { }
                return v > 4 ? v : document['documentMode'];
            })();
            var ele = document.createElement('div');
            _this.defaultEvent = (_this.ieVersion === 9 || !('oninput' in ele)) ? 'keyup' : 'input';
            _this.opts = Object.assign({}, {
                delay: 0,
                event: _this.defaultEvent,
                threshold: 0,
            }, opts);
            _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
            _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_this);
            return _this;
        }
        Trigger.prototype.install = function () {
            this.core
                .on('core.field.added', this.fieldAddedHandler)
                .on('core.field.removed', this.fieldRemovedHandler);
        };
        Trigger.prototype.uninstall = function () {
            this.handlers.forEach(function (item) { return item.element.removeEventListener(item.event, item.handler); });
            this.handlers = [];
            this.timers.forEach(function (t) { return window.clearTimeout(t); });
            this.timers.clear();
            this.core
                .off('core.field.added', this.fieldAddedHandler)
                .off('core.field.removed', this.fieldRemovedHandler);
        };
        Trigger.prototype.prepareHandler = function (field, elements) {
            var _this = this;
            elements.forEach(function (ele) {
                var events = [];
                switch (true) {
                    case (!!_this.opts.event && _this.opts.event[field] === false):
                        events = [];
                        break;
                    case (!!_this.opts.event && !!_this.opts.event[field]):
                        events = _this.opts.event[field].split(' ');
                        break;
                    case ('string' === typeof _this.opts.event && _this.opts.event !== _this.defaultEvent):
                        events = _this.opts.event.split(' ');
                        break;
                    default:
                        var type = ele.getAttribute('type');
                        var tagName = ele.tagName.toLowerCase();
                        var event_1 = ('radio' === type || 'checkbox' === type || 'file' === type || 'select' === tagName)
                            ? 'change'
                            : ((_this.ieVersion >= 10 && ele.getAttribute('placeholder') ? 'keyup' : _this.defaultEvent));
                        events = [event_1];
                        break;
                }
                events.forEach(function (evt) {
                    var evtHandler = function (e) { return _this.handleEvent(e, field, ele); };
                    _this.handlers.push({
                        element: ele,
                        event: evt,
                        field: field,
                        handler: evtHandler,
                    });
                    ele.addEventListener(evt, evtHandler);
                });
            });
        };
        Trigger.prototype.handleEvent = function (e, field, ele) {
            var _this = this;
            if (this.exceedThreshold(field, ele) &&
                this.core.executeFilter('plugins-trigger-should-validate', true, [field, ele])) {
                var handler = function () { return _this.core.validateElement(field, ele).then(function (_) {
                    _this.core.emit('plugins.trigger.executed', {
                        element: ele,
                        event: e,
                        field: field,
                    });
                }); };
                var delay = this.opts.delay[field] || this.opts.delay;
                if (delay === 0) {
                    handler();
                }
                else {
                    var timer = this.timers.get(ele);
                    if (timer) {
                        window.clearTimeout(timer);
                    }
                    this.timers.set(ele, window.setTimeout(handler, delay * 1000));
                }
            }
        };
        Trigger.prototype.onFieldAdded = function (e) {
            this.handlers
                .filter(function (item) { return item.field === e.field; })
                .forEach(function (item) { return item.element.removeEventListener(item.event, item.handler); });
            this.prepareHandler(e.field, e.elements);
        };
        Trigger.prototype.onFieldRemoved = function (e) {
            this.handlers
                .filter(function (item) { return item.field === e.field && e.elements.indexOf(item.element) >= 0; })
                .forEach(function (item) { return item.element.removeEventListener(item.event, item.handler); });
        };
        Trigger.prototype.exceedThreshold = function (field, element) {
            var threshold = (this.opts.threshold[field] === 0 || this.opts.threshold === 0)
                ? false
                : (this.opts.threshold[field] || this.opts.threshold);
            if (!threshold) {
                return true;
            }
            var type = element.getAttribute('type');
            if (['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'reset', 'submit'].indexOf(type) !== -1) {
                return true;
            }
            var value = this.core.getElementValue(field, element);
            return value.length >= threshold;
        };
        return Trigger;
    }(Plugin_1.default));
    exports.default = Trigger;
});
