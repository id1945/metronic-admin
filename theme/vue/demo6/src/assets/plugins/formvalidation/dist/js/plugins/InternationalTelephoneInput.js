/**
 * FormValidation (https://formvalidation.io), v1.7.0 (71bbaaa)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, (global.FormValidation = global.FormValidation || {}, global.FormValidation.plugins = global.FormValidation.plugins || {}, global.FormValidation.plugins.InternationalTelephoneInput = factory()));
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  var e = FormValidation.Plugin;

  var t = /*#__PURE__*/function (_e) {
    _inherits(t, _e);

    var _super = _createSuper(t);

    function t(e) {
      var _this;

      _classCallCheck(this, t);

      _this = _super.call(this, e);
      _this.intlTelInstances = new Map();
      _this.countryChangeHandler = new Map();
      _this.fieldElements = new Map();
      _this.opts = Object.assign({}, {
        autoPlaceholder: "polite",
        utilsScript: ""
      }, e);
      _this.validatePhoneNumber = _this.checkPhoneNumber.bind(_assertThisInitialized(_this));
      _this.fields = typeof _this.opts.field === "string" ? _this.opts.field.split(",") : _this.opts.field;
      return _this;
    }

    _createClass(t, [{
      key: "install",
      value: function install() {
        var _this2 = this;

        this.core.registerValidator(t.INT_TEL_VALIDATOR, this.validatePhoneNumber);
        this.fields.forEach(function (e) {
          _this2.core.addField(e, {
            validators: _defineProperty({}, t.INT_TEL_VALIDATOR, {
              message: _this2.opts.message
            })
          });

          var s = _this2.core.getElements(e)[0];

          var i = function i() {
            return _this2.core.revalidateField(e);
          };

          s.addEventListener("countrychange", i);

          _this2.countryChangeHandler.set(e, i);

          _this2.fieldElements.set(e, s);

          _this2.intlTelInstances.set(e, intlTelInput(s, _this2.opts));
        });
      }
    }, {
      key: "uninstall",
      value: function uninstall() {
        var _this3 = this;

        this.fields.forEach(function (e) {
          var s = _this3.countryChangeHandler.get(e);

          var i = _this3.fieldElements.get(e);

          var n = _this3.intlTelInstances.get(e);

          if (s && i && n) {
            i.removeEventListener("countrychange", s);

            _this3.core.disableValidator(e, t.INT_TEL_VALIDATOR);

            n.destroy();
          }
        });
      }
    }, {
      key: "checkPhoneNumber",
      value: function checkPhoneNumber() {
        var _this4 = this;

        return {
          validate: function validate(e) {
            var t = e.value;

            var s = _this4.intlTelInstances.get(e.field);

            if (t === "" || !s) {
              return {
                valid: true
              };
            }

            return {
              valid: s.isValidNumber()
            };
          }
        };
      }
    }]);

    return t;
  }(e);
  t.INT_TEL_VALIDATOR = "___InternationalTelephoneInputValidator";

  return t;

})));
