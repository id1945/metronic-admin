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
    var FieldStatus = (function (_super) {
        __extends(FieldStatus, _super);
        function FieldStatus(opts) {
            var _this = _super.call(this, opts) || this;
            _this.statuses = new Map();
            _this.opts = Object.assign({}, {
                onStatusChanged: function () { },
            }, opts);
            _this.elementValidatingHandler = _this.onElementValidating.bind(_this);
            _this.elementValidatedHandler = _this.onElementValidated.bind(_this);
            _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_this);
            _this.elementIgnoredHandler = _this.onElementIgnored.bind(_this);
            _this.fieldAddedHandler = _this.onFieldAdded.bind(_this);
            _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_this);
            return _this;
        }
        FieldStatus.prototype.install = function () {
            this.core
                .on('core.element.validating', this.elementValidatingHandler)
                .on('core.element.validated', this.elementValidatedHandler)
                .on('core.element.notvalidated', this.elementNotValidatedHandler)
                .on('core.element.ignored', this.elementIgnoredHandler)
                .on('core.field.added', this.fieldAddedHandler)
                .on('core.field.removed', this.fieldRemovedHandler);
        };
        FieldStatus.prototype.uninstall = function () {
            this.statuses.clear();
            this.core
                .off('core.element.validating', this.elementValidatingHandler)
                .off('core.element.validated', this.elementValidatedHandler)
                .off('core.element.notvalidated', this.elementNotValidatedHandler)
                .off('core.element.ignored', this.elementIgnoredHandler)
                .off('core.field.added', this.fieldAddedHandler)
                .off('core.field.removed', this.fieldRemovedHandler);
        };
        FieldStatus.prototype.areFieldsValid = function () {
            return Array.from(this.statuses.values()).every(function (value) {
                return (value === 'Valid' ||
                    value === 'NotValidated' ||
                    value === 'Ignored');
            });
        };
        FieldStatus.prototype.getStatuses = function () {
            return this.statuses;
        };
        FieldStatus.prototype.onFieldAdded = function (e) {
            this.statuses.set(e.field, 'NotValidated');
        };
        FieldStatus.prototype.onFieldRemoved = function (e) {
            if (this.statuses.has(e.field)) {
                this.statuses.delete(e.field);
            }
            this.opts.onStatusChanged(this.areFieldsValid());
        };
        FieldStatus.prototype.onElementValidating = function (e) {
            this.statuses.set(e.field, 'Validating');
            this.opts.onStatusChanged(false);
        };
        FieldStatus.prototype.onElementValidated = function (e) {
            this.statuses.set(e.field, e.valid ? 'Valid' : 'Invalid');
            if (e.valid) {
                this.opts.onStatusChanged(this.areFieldsValid());
            }
            else {
                this.opts.onStatusChanged(false);
            }
        };
        FieldStatus.prototype.onElementNotValidated = function (e) {
            this.statuses.set(e.field, 'NotValidated');
            this.opts.onStatusChanged(false);
        };
        FieldStatus.prototype.onElementIgnored = function (e) {
            this.statuses.set(e.field, 'Ignored');
            this.opts.onStatusChanged(this.areFieldsValid());
        };
        return FieldStatus;
    }(Plugin_1.default));
    exports.default = FieldStatus;
});
