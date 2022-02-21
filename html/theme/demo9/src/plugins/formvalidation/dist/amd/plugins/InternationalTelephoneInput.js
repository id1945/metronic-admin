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
    var InternationalTelephoneInput = (function (_super) {
        __extends(InternationalTelephoneInput, _super);
        function InternationalTelephoneInput(opts) {
            var _this = _super.call(this, opts) || this;
            _this.intlTelInstances = new Map();
            _this.countryChangeHandler = new Map();
            _this.fieldElements = new Map();
            _this.opts = Object.assign({}, {
                autoPlaceholder: 'polite',
                utilsScript: '',
            }, opts);
            _this.validatePhoneNumber = _this.checkPhoneNumber.bind(_this);
            _this.fields =
                typeof _this.opts.field === 'string'
                    ? _this.opts.field.split(',')
                    : _this.opts.field;
            return _this;
        }
        InternationalTelephoneInput.prototype.install = function () {
            var _this = this;
            this.core.registerValidator(InternationalTelephoneInput.INT_TEL_VALIDATOR, this.validatePhoneNumber);
            this.fields.forEach(function (field) {
                var _a;
                _this.core.addField(field, {
                    validators: (_a = {},
                        _a[InternationalTelephoneInput.INT_TEL_VALIDATOR] = {
                            message: _this.opts.message,
                        },
                        _a),
                });
                var ele = _this.core.getElements(field)[0];
                var handler = function () { return _this.core.revalidateField(field); };
                ele.addEventListener('countrychange', handler);
                _this.countryChangeHandler.set(field, handler);
                _this.fieldElements.set(field, ele);
                _this.intlTelInstances.set(field, intlTelInput(ele, _this.opts));
            });
        };
        InternationalTelephoneInput.prototype.uninstall = function () {
            var _this = this;
            this.fields.forEach(function (field) {
                var handler = _this.countryChangeHandler.get(field);
                var ele = _this.fieldElements.get(field);
                var intlTel = _this.intlTelInstances.get(field);
                if (handler && ele && intlTel) {
                    ele.removeEventListener('countrychange', handler);
                    _this.core.disableValidator(field, InternationalTelephoneInput.INT_TEL_VALIDATOR);
                    intlTel.destroy();
                }
            });
        };
        InternationalTelephoneInput.prototype.checkPhoneNumber = function () {
            var _this = this;
            return {
                validate: function (input) {
                    var value = input.value;
                    var intlTel = _this.intlTelInstances.get(input.field);
                    if (value === '' || !intlTel) {
                        return {
                            valid: true,
                        };
                    }
                    return {
                        valid: intlTel.isValidNumber(),
                    };
                },
            };
        };
        InternationalTelephoneInput.INT_TEL_VALIDATOR = '___InternationalTelephoneInputValidator';
        return InternationalTelephoneInput;
    }(Plugin_1.default));
    exports.default = InternationalTelephoneInput;
});
