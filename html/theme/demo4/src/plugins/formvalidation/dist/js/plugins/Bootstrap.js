/**
 * FormValidation (https://formvalidation.io), v1.8.1 (1a099ec)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, (global.FormValidation = global.FormValidation || {}, global.FormValidation.plugins = global.FormValidation.plugins || {}, global.FormValidation.plugins.Bootstrap = factory()));
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

  var e = FormValidation.utils.classSet;

  var t = FormValidation.utils.hasClass;

  var n = FormValidation.plugins.Framework;

  var s = /*#__PURE__*/function (_n) {
    _inherits(s, _n);

    var _super = _createSuper(s);

    function s(e) {
      _classCallCheck(this, s);

      return _super.call(this, Object.assign({}, {
        eleInvalidClass: "is-invalid",
        eleValidClass: "is-valid",
        formClass: "fv-plugins-bootstrap",
        messageClass: "fv-help-block",
        rowInvalidClass: "has-danger",
        rowPattern: /^(.*)(col|offset)(-(sm|md|lg|xl))*-[0-9]+(.*)$/,
        rowSelector: ".form-group",
        rowValidClass: "has-success"
      }, e));
    }

    _createClass(s, [{
      key: "onIconPlaced",
      value: function onIconPlaced(n) {
        var s = n.element.parentElement;

        if (t(s, "input-group")) {
          s.parentElement.insertBefore(n.iconElement, s.nextSibling);
        }

        var l = n.element.getAttribute("type");

        if ("checkbox" === l || "radio" === l) {
          var _l = s.parentElement;

          if (t(s, "form-check")) {
            e(n.iconElement, {
              "fv-plugins-icon-check": true
            });
            s.parentElement.insertBefore(n.iconElement, s.nextSibling);
          } else if (t(s.parentElement, "form-check")) {
            e(n.iconElement, {
              "fv-plugins-icon-check": true
            });

            _l.parentElement.insertBefore(n.iconElement, _l.nextSibling);
          }
        }
      }
    }]);

    return s;
  }(n);

  return s;

})));
