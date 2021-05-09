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
define(["require", "exports", "../core/Plugin", "./FieldStatus"], function (require, exports, Plugin_1, FieldStatus_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AutoFocus = (function (_super) {
        __extends(AutoFocus, _super);
        function AutoFocus(opts) {
            var _this = _super.call(this, opts) || this;
            _this.fieldStatusPluginName = '___autoFocusFieldStatus';
            _this.opts = Object.assign({}, {
                onPrefocus: function () { },
            }, opts);
            _this.invalidFormHandler = _this.onFormInvalid.bind(_this);
            return _this;
        }
        AutoFocus.prototype.install = function () {
            this.core
                .on('core.form.invalid', this.invalidFormHandler)
                .registerPlugin(this.fieldStatusPluginName, new FieldStatus_1.default());
        };
        AutoFocus.prototype.uninstall = function () {
            this.core
                .off('core.form.invalid', this.invalidFormHandler)
                .deregisterPlugin(this.fieldStatusPluginName);
        };
        AutoFocus.prototype.onFormInvalid = function () {
            var plugin = this.core.getPlugin(this.fieldStatusPluginName);
            var statuses = plugin.getStatuses();
            var invalidFields = Object.keys(this.core.getFields()).filter(function (key) { return statuses.get(key) === 'Invalid'; });
            if (invalidFields.length > 0) {
                var firstInvalidField = invalidFields[0];
                var elements = this.core.getElements(firstInvalidField);
                if (elements.length > 0) {
                    var firstElement = elements[0];
                    var e = { firstElement: firstElement, field: firstInvalidField };
                    this.core.emit('plugins.autofocus.prefocus', e);
                    this.opts.onPrefocus(e);
                    firstElement.focus();
                }
            }
        };
        return AutoFocus;
    }(Plugin_1.default));
    exports.default = AutoFocus;
});
