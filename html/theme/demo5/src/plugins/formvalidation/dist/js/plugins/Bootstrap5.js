/**
 * FormValidation (https://formvalidation.io), v1.8.1 (1a099ec)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, (global.FormValidation = global.FormValidation || {}, global.FormValidation.plugins = global.FormValidation.plugins || {}, global.FormValidation.plugins.Bootstrap5 = factory()));
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

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var e = FormValidation.utils.classSet;

  var t = FormValidation.utils.hasClass;

  var n = FormValidation.plugins.Framework;

  var l = /*#__PURE__*/function (_n) {
    _inherits(l, _n);

    var _super = _createSuper(l);

    function l(e) {
      var _this;

      _classCallCheck(this, l);

      _this = _super.call(this, Object.assign({}, {
        eleInvalidClass: "is-invalid",
        eleValidClass: "is-valid",
        formClass: "fv-plugins-bootstrap5",
        rowInvalidClass: "fv-plugins-bootstrap5-row-invalid",
        rowPattern: /^(.*)(col|offset)(-(sm|md|lg|xl))*-[0-9]+(.*)$/,
        rowSelector: ".row",
        rowValidClass: "fv-plugins-bootstrap5-row-valid"
      }, e));
      _this.eleValidatedHandler = _this.handleElementValidated.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(l, [{
      key: "install",
      value: function install() {
        _get(_getPrototypeOf(l.prototype), "install", this).call(this);

        this.core.on("core.element.validated", this.eleValidatedHandler);
      }
    }, {
      key: "uninstall",
      value: function uninstall() {
        _get(_getPrototypeOf(l.prototype), "install", this).call(this);

        this.core.off("core.element.validated", this.eleValidatedHandler);
      }
    }, {
      key: "handleElementValidated",
      value: function handleElementValidated(n) {
        var l = n.element.getAttribute("type");

        if (("checkbox" === l || "radio" === l) && n.elements.length > 1 && t(n.element, "form-check-input")) {
          var _l = n.element.parentElement;

          if (t(_l, "form-check")) {
            e(_l, {
              "is-invalid": !n.valid,
              "is-valid": n.valid
            });
          }
        }
      }
    }, {
      key: "onIconPlaced",
      value: function onIconPlaced(n) {
        e(n.element, {
          "fv-plugins-icon-input": true
        });
        var l = n.element.parentElement;

        if (t(l, "input-group")) {
          l.parentElement.insertBefore(n.iconElement, l.nextSibling);

          if (n.element.nextElementSibling && t(n.element.nextElementSibling, "input-group-text")) {
            e(n.iconElement, {
              "fv-plugins-icon-input-group": true
            });
          }
        }

        var i = n.element.getAttribute("type");

        if ("checkbox" === i || "radio" === i) {
          var _i = l.parentElement;

          if (t(l, "form-check")) {
            e(n.iconElement, {
              "fv-plugins-icon-check": true
            });
            l.parentElement.insertBefore(n.iconElement, l.nextSibling);
          } else if (t(l.parentElement, "form-check")) {
            e(n.iconElement, {
              "fv-plugins-icon-check": true
            });

            _i.parentElement.insertBefore(n.iconElement, _i.nextSibling);
          }
        }
      }
    }, {
      key: "onMessagePlaced",
      value: function onMessagePlaced(n) {
        n.messageElement.classList.add("invalid-feedback");
        var l = n.element.parentElement;

        if (t(l, "input-group")) {
          l.appendChild(n.messageElement);
          e(l, {
            "has-validation": true
          });
          return;
        }

        var i = n.element.getAttribute("type");

        if (("checkbox" === i || "radio" === i) && t(n.element, "form-check-input") && !t(l, "form-check")) {
          n.elements[n.elements.length - 1].parentElement.appendChild(n.messageElement);
        }
      }
    }]);

    return l;
  }(n);

  return l;

})));
