/**
 * FormValidation (https://formvalidation.io), v1.8.1 (1a099ec)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.FormValidation = {}));
}(this, (function (exports) { 'use strict';

  function t(t) {
    var e = t.length;
    var l = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]];
    var n = 0;
    var r = 0;

    while (e--) {
      r += l[n][parseInt(t.charAt(e), 10)];
      n = 1 - n;
    }

    return r % 10 === 0 && r > 0;
  }

  function t$1(t) {
    var e = t.length;
    var n = 5;

    for (var r = 0; r < e; r++) {
      n = ((n || 10) * 2 % 11 + parseInt(t.charAt(r), 10)) % 10;
    }

    return n === 1;
  }

  function t$2(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var n = t.length;
    var o = e.length;
    var l = Math.floor(o / 2);

    for (var r = 0; r < n; r++) {
      l = ((l || o) * 2 % (o + 1) + e.indexOf(t.charAt(r))) % o;
    }

    return l === 1;
  }

  function t$3(t) {
    var e = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];
    var n = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]];
    var o = t.reverse();
    var r = 0;

    for (var _t = 0; _t < o.length; _t++) {
      r = e[r][n[_t % 8][o[_t]]];
    }

    return r === 0;
  }

  var index = {
    luhn: t,
    mod11And10: t$1,
    mod37And36: t$2,
    verhoeff: t$3
  };

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

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  function s() {
    return {
      fns: {},
      clear: function clear() {
        this.fns = {};
      },
      emit: function emit(s) {
        for (var _len = arguments.length, f = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          f[_key - 1] = arguments[_key];
        }

        (this.fns[s] || []).map(function (s) {
          return s.apply(s, f);
        });
      },
      off: function off(s, f) {
        if (this.fns[s]) {
          var n = this.fns[s].indexOf(f);

          if (n >= 0) {
            this.fns[s].splice(n, 1);
          }
        }
      },
      on: function on(s, f) {
        (this.fns[s] = this.fns[s] || []).push(f);
      }
    };
  }

  function t$4() {
    return {
      filters: {},
      add: function add(t, e) {
        (this.filters[t] = this.filters[t] || []).push(e);
      },
      clear: function clear() {
        this.filters = {};
      },
      execute: function execute(t, e, i) {
        if (!this.filters[t] || !this.filters[t].length) {
          return e;
        }

        var s = e;
        var r = this.filters[t];
        var l = r.length;

        for (var _t = 0; _t < l; _t++) {
          s = r[_t].apply(s, i);
        }

        return s;
      },
      remove: function remove(t, e) {
        if (this.filters[t]) {
          this.filters[t] = this.filters[t].filter(function (t) {
            return t !== e;
          });
        }
      }
    };
  }

  function e(e, t, r, n) {
    var o = (r.getAttribute("type") || "").toLowerCase();
    var c = r.tagName.toLowerCase();

    if (c === "textarea") {
      return r.value;
    }

    if (c === "select") {
      var _e = r;
      var _t = _e.selectedIndex;
      return _t >= 0 ? _e.options.item(_t).value : "";
    }

    if (c === "input") {
      if ("radio" === o || "checkbox" === o) {
        var _e2 = n.filter(function (e) {
          return e.checked;
        }).length;
        return _e2 === 0 ? "" : _e2 + "";
      } else {
        return r.value;
      }
    }

    return "";
  }

  function r(r, e) {
    var t = Array.isArray(e) ? e : [e];
    var a = r;
    t.forEach(function (r) {
      a = a.replace("%s", r);
    });
    return a;
  }

  function s$1() {
    var s = function s(e) {
      return parseFloat("".concat(e).replace(",", "."));
    };

    return {
      validate: function validate(a) {
        var t = a.value;

        if (t === "") {
          return {
            valid: true
          };
        }

        var n = Object.assign({}, {
          inclusive: true,
          message: ""
        }, a.options);
        var l = s(n.min);
        var o = s(n.max);
        return n.inclusive ? {
          message: r(a.l10n ? n.message || a.l10n.between["default"] : n.message, ["".concat(l), "".concat(o)]),
          valid: parseFloat(t) >= l && parseFloat(t) <= o
        } : {
          message: r(a.l10n ? n.message || a.l10n.between.notInclusive : n.message, ["".concat(l), "".concat(o)]),
          valid: parseFloat(t) > l && parseFloat(t) < o
        };
      }
    };
  }

  function t$5() {
    return {
      validate: function validate(t) {
        return {
          valid: true
        };
      }
    };
  }

  function t$6(t, n) {
    if ("function" === typeof t) {
      return t.apply(this, n);
    } else if ("string" === typeof t) {
      var e = t;

      if ("()" === e.substring(e.length - 2)) {
        e = e.substring(0, e.length - 2);
      }

      var i = e.split(".");
      var o = i.pop();
      var f = window;

      var _iterator = _createForOfIteratorHelper(i),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _t = _step.value;
          f = f[_t];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return typeof f[o] === "undefined" ? null : f[o].apply(this, n);
    }
  }

  function o() {
    return {
      validate: function validate(o) {
        var l = t$6(o.options.callback, [o]);
        return "boolean" === typeof l ? {
          valid: l
        } : l;
      }
    };
  }

  function t$7() {
    return {
      validate: function validate(t) {
        var o = "select" === t.element.tagName.toLowerCase() ? t.element.querySelectorAll("option:checked").length : t.elements.filter(function (e) {
          return e.checked;
        }).length;
        var s = t.options.min ? "".concat(t.options.min) : "";
        var n = t.options.max ? "".concat(t.options.max) : "";
        var a = t.l10n ? t.options.message || t.l10n.choice["default"] : t.options.message;
        var l = !(s && o < parseInt(s, 10) || n && o > parseInt(n, 10));

        switch (true) {
          case !!s && !!n:
            a = r(t.l10n ? t.l10n.choice.between : t.options.message, [s, n]);
            break;

          case !!s:
            a = r(t.l10n ? t.l10n.choice.more : t.options.message, s);
            break;

          case !!n:
            a = r(t.l10n ? t.l10n.choice.less : t.options.message, n);
            break;
        }

        return {
          message: a,
          valid: l
        };
      }
    };
  }

  var t$8 = {
    AMERICAN_EXPRESS: {
      length: [15],
      prefix: ["34", "37"]
    },
    DANKORT: {
      length: [16],
      prefix: ["5019"]
    },
    DINERS_CLUB: {
      length: [14],
      prefix: ["300", "301", "302", "303", "304", "305", "36"]
    },
    DINERS_CLUB_US: {
      length: [16],
      prefix: ["54", "55"]
    },
    DISCOVER: {
      length: [16],
      prefix: ["6011", "622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925", "644", "645", "646", "647", "648", "649", "65"]
    },
    ELO: {
      length: [16],
      prefix: ["4011", "4312", "4389", "4514", "4573", "4576", "5041", "5066", "5067", "509", "6277", "6362", "6363", "650", "6516", "6550"]
    },
    FORBRUGSFORENINGEN: {
      length: [16],
      prefix: ["600722"]
    },
    JCB: {
      length: [16],
      prefix: ["3528", "3529", "353", "354", "355", "356", "357", "358"]
    },
    LASER: {
      length: [16, 17, 18, 19],
      prefix: ["6304", "6706", "6771", "6709"]
    },
    MAESTRO: {
      length: [12, 13, 14, 15, 16, 17, 18, 19],
      prefix: ["5018", "5020", "5038", "5868", "6304", "6759", "6761", "6762", "6763", "6764", "6765", "6766"]
    },
    MASTERCARD: {
      length: [16],
      prefix: ["51", "52", "53", "54", "55"]
    },
    SOLO: {
      length: [16, 18, 19],
      prefix: ["6334", "6767"]
    },
    UNIONPAY: {
      length: [16, 17, 18, 19],
      prefix: ["622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925"]
    },
    VISA: {
      length: [16],
      prefix: ["4"]
    },
    VISA_ELECTRON: {
      length: [16],
      prefix: ["4026", "417500", "4405", "4508", "4844", "4913", "4917"]
    }
  };
  function l() {
    return {
      validate: function validate(l) {
        if (l.value === "") {
          return {
            meta: {
              type: null
            },
            valid: true
          };
        }

        if (/[^0-9-\s]+/.test(l.value)) {
          return {
            meta: {
              type: null
            },
            valid: false
          };
        }

        var r = l.value.replace(/\D/g, "");

        if (!t(r)) {
          return {
            meta: {
              type: null
            },
            valid: false
          };
        }

        for (var _i = 0, _Object$keys = Object.keys(t$8); _i < _Object$keys.length; _i++) {
          var _e = _Object$keys[_i];

          for (var n in t$8[_e].prefix) {
            if (l.value.substr(0, t$8[_e].prefix[n].length) === t$8[_e].prefix[n] && t$8[_e].length.indexOf(r.length) !== -1) {
              return {
                meta: {
                  type: _e
                },
                valid: true
              };
            }
          }
        }

        return {
          meta: {
            type: null
          },
          valid: false
        };
      }
    };
  }

  function t$9(t, e, n, r) {
    if (isNaN(t) || isNaN(e) || isNaN(n)) {
      return false;
    }

    if (t < 1e3 || t > 9999 || e <= 0 || e > 12) {
      return false;
    }

    var s = [31, t % 400 === 0 || t % 100 !== 0 && t % 4 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (n <= 0 || n > s[e - 1]) {
      return false;
    }

    if (r === true) {
      var _r = new Date();

      var _s = _r.getFullYear();

      var a = _r.getMonth();

      var u = _r.getDate();

      return t < _s || t === _s && e - 1 < a || t === _s && e - 1 === a && n < u;
    }

    return true;
  }

  function n() {
    var n = function n(t, e, _n) {
      var s = e.indexOf("YYYY");
      var a = e.indexOf("MM");
      var l = e.indexOf("DD");

      if (s === -1 || a === -1 || l === -1) {
        return null;
      }

      var o = t.split(" ");
      var r = o[0].split(_n);

      if (r.length < 3) {
        return null;
      }

      var c = new Date(parseInt(r[s], 10), parseInt(r[a], 10) - 1, parseInt(r[l], 10));

      if (o.length > 1) {
        var _t = o[1].split(":");

        c.setHours(_t.length > 0 ? parseInt(_t[0], 10) : 0);
        c.setMinutes(_t.length > 1 ? parseInt(_t[1], 10) : 0);
        c.setSeconds(_t.length > 2 ? parseInt(_t[2], 10) : 0);
      }

      return c;
    };

    var s = function s(t, e) {
      var n = e.replace(/Y/g, "y").replace(/M/g, "m").replace(/D/g, "d").replace(/:m/g, ":M").replace(/:mm/g, ":MM").replace(/:S/, ":s").replace(/:SS/, ":ss");
      var s = t.getDate();
      var a = s < 10 ? "0".concat(s) : s;
      var l = t.getMonth() + 1;
      var o = l < 10 ? "0".concat(l) : l;
      var r = "".concat(t.getFullYear()).substr(2);
      var c = t.getFullYear();
      var i = t.getHours() % 12 || 12;
      var g = i < 10 ? "0".concat(i) : i;
      var u = t.getHours();
      var m = u < 10 ? "0".concat(u) : u;
      var d = t.getMinutes();
      var f = d < 10 ? "0".concat(d) : d;
      var p = t.getSeconds();
      var h = p < 10 ? "0".concat(p) : p;
      var $ = {
        H: "".concat(u),
        HH: "".concat(m),
        M: "".concat(d),
        MM: "".concat(f),
        d: "".concat(s),
        dd: "".concat(a),
        h: "".concat(i),
        hh: "".concat(g),
        m: "".concat(l),
        mm: "".concat(o),
        s: "".concat(p),
        ss: "".concat(h),
        yy: "".concat(r),
        yyyy: "".concat(c)
      };
      return n.replace(/d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g, function (t) {
        return $[t] ? $[t] : t.slice(1, t.length - 1);
      });
    };

    return {
      validate: function validate(a) {
        if (a.value === "") {
          return {
            meta: {
              date: null
            },
            valid: true
          };
        }

        var l = Object.assign({}, {
          format: a.element && a.element.getAttribute("type") === "date" ? "YYYY-MM-DD" : "MM/DD/YYYY",
          message: ""
        }, a.options);
        var o = a.l10n ? a.l10n.date["default"] : l.message;
        var r$1 = {
          message: "".concat(o),
          meta: {
            date: null
          },
          valid: false
        };
        var c = l.format.split(" ");
        var i = c.length > 1 ? c[1] : null;
        var g = c.length > 2 ? c[2] : null;
        var u = a.value.split(" ");
        var m = u[0];
        var d = u.length > 1 ? u[1] : null;

        if (c.length !== u.length) {
          return r$1;
        }

        var f = l.separator || (m.indexOf("/") !== -1 ? "/" : m.indexOf("-") !== -1 ? "-" : m.indexOf(".") !== -1 ? "." : "/");

        if (f === null || m.indexOf(f) === -1) {
          return r$1;
        }

        var p = m.split(f);
        var h = c[0].split(f);

        if (p.length !== h.length) {
          return r$1;
        }

        var $ = p[h.indexOf("YYYY")];
        var M = p[h.indexOf("MM")];
        var Y = p[h.indexOf("DD")];

        if (!/^\d+$/.test($) || !/^\d+$/.test(M) || !/^\d+$/.test(Y) || $.length > 4 || M.length > 2 || Y.length > 2) {
          return r$1;
        }

        var D = parseInt($, 10);
        var x = parseInt(M, 10);
        var y = parseInt(Y, 10);

        if (!t$9(D, x, y)) {
          return r$1;
        }

        var I = new Date(D, x - 1, y);

        if (i) {
          var _t2 = d.split(":");

          if (i.split(":").length !== _t2.length) {
            return r$1;
          }

          var _e = _t2.length > 0 ? _t2[0].length <= 2 && /^\d+$/.test(_t2[0]) ? parseInt(_t2[0], 10) : -1 : 0;

          var _n2 = _t2.length > 1 ? _t2[1].length <= 2 && /^\d+$/.test(_t2[1]) ? parseInt(_t2[1], 10) : -1 : 0;

          var _s = _t2.length > 2 ? _t2[2].length <= 2 && /^\d+$/.test(_t2[2]) ? parseInt(_t2[2], 10) : -1 : 0;

          if (_e === -1 || _n2 === -1 || _s === -1) {
            return r$1;
          }

          if (_s < 0 || _s > 60) {
            return r$1;
          }

          if (_e < 0 || _e >= 24 || g && _e > 12) {
            return r$1;
          }

          if (_n2 < 0 || _n2 > 59) {
            return r$1;
          }

          I.setHours(_e);
          I.setMinutes(_n2);
          I.setSeconds(_s);
        }

        var O = typeof l.min === "function" ? l.min() : l.min;
        var v = O instanceof Date ? O : O ? n(O, h, f) : I;
        var H = typeof l.max === "function" ? l.max() : l.max;
        var T = H instanceof Date ? H : H ? n(H, h, f) : I;
        var S = O instanceof Date ? s(v, l.format) : O;
        var b = H instanceof Date ? s(T, l.format) : H;

        switch (true) {
          case !!S && !b:
            return {
              message: r(a.l10n ? a.l10n.date.min : o, S),
              meta: {
                date: I
              },
              valid: I.getTime() >= v.getTime()
            };

          case !!b && !S:
            return {
              message: r(a.l10n ? a.l10n.date.max : o, b),
              meta: {
                date: I
              },
              valid: I.getTime() <= T.getTime()
            };

          case !!b && !!S:
            return {
              message: r(a.l10n ? a.l10n.date.range : o, [S, b]),
              meta: {
                date: I
              },
              valid: I.getTime() <= T.getTime() && I.getTime() >= v.getTime()
            };

          default:
            return {
              message: "".concat(o),
              meta: {
                date: I
              },
              valid: true
            };
        }
      }
    };
  }

  function o$1() {
    return {
      validate: function validate(o) {
        var t = "function" === typeof o.options.compare ? o.options.compare.call(this) : o.options.compare;
        return {
          valid: t === "" || o.value !== t
        };
      }
    };
  }

  function e$1() {
    return {
      validate: function validate(e) {
        return {
          valid: e.value === "" || /^\d+$/.test(e.value)
        };
      }
    };
  }

  function t$a() {
    var t = function t(_t3, e) {
      var s = _t3.split(/"/);

      var l = s.length;
      var n = [];
      var r = "";

      for (var _t = 0; _t < l; _t++) {
        if (_t % 2 === 0) {
          var _l = s[_t].split(e);

          var a = _l.length;

          if (a === 1) {
            r += _l[0];
          } else {
            n.push(r + _l[0]);

            for (var _t2 = 1; _t2 < a - 1; _t2++) {
              n.push(_l[_t2]);
            }

            r = _l[a - 1];
          }
        } else {
          r += '"' + s[_t];

          if (_t < l - 1) {
            r += '"';
          }
        }
      }

      n.push(r);
      return n;
    };

    return {
      validate: function validate(e) {
        if (e.value === "") {
          return {
            valid: true
          };
        }

        var s = Object.assign({}, {
          multiple: false,
          separator: /[,;]/
        }, e.options);
        var l = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        var n = s.multiple === true || "".concat(s.multiple) === "true";

        if (n) {
          var _n = s.separator || /[,;]/;

          var r = t(e.value, _n);
          var a = r.length;

          for (var _t4 = 0; _t4 < a; _t4++) {
            if (!l.test(r[_t4])) {
              return {
                valid: false
              };
            }
          }

          return {
            valid: true
          };
        } else {
          return {
            valid: l.test(e.value)
          };
        }
      }
    };
  }

  function e$2() {
    return {
      validate: function validate(e) {
        if (e.value === "") {
          return {
            valid: true
          };
        }

        var t;
        var i = e.options.extension ? e.options.extension.toLowerCase().split(",") : null;
        var s = e.options.type ? e.options.type.toLowerCase().split(",") : null;
        var n = window["File"] && window["FileList"] && window["FileReader"];

        if (n) {
          var _n = e.element.files;
          var o = _n.length;
          var a = 0;

          if (e.options.maxFiles && o > parseInt("".concat(e.options.maxFiles), 10)) {
            return {
              meta: {
                error: "INVALID_MAX_FILES"
              },
              valid: false
            };
          }

          if (e.options.minFiles && o < parseInt("".concat(e.options.minFiles), 10)) {
            return {
              meta: {
                error: "INVALID_MIN_FILES"
              },
              valid: false
            };
          }

          var r = {};

          for (var l = 0; l < o; l++) {
            a += _n[l].size;
            t = _n[l].name.substr(_n[l].name.lastIndexOf(".") + 1);
            r = {
              ext: t,
              file: _n[l],
              size: _n[l].size,
              type: _n[l].type
            };

            if (e.options.minSize && _n[l].size < parseInt("".concat(e.options.minSize), 10)) {
              return {
                meta: Object.assign({}, {
                  error: "INVALID_MIN_SIZE"
                }, r),
                valid: false
              };
            }

            if (e.options.maxSize && _n[l].size > parseInt("".concat(e.options.maxSize), 10)) {
              return {
                meta: Object.assign({}, {
                  error: "INVALID_MAX_SIZE"
                }, r),
                valid: false
              };
            }

            if (i && i.indexOf(t.toLowerCase()) === -1) {
              return {
                meta: Object.assign({}, {
                  error: "INVALID_EXTENSION"
                }, r),
                valid: false
              };
            }

            if (_n[l].type && s && s.indexOf(_n[l].type.toLowerCase()) === -1) {
              return {
                meta: Object.assign({}, {
                  error: "INVALID_TYPE"
                }, r),
                valid: false
              };
            }
          }

          if (e.options.maxTotalSize && a > parseInt("".concat(e.options.maxTotalSize), 10)) {
            return {
              meta: Object.assign({}, {
                error: "INVALID_MAX_TOTAL_SIZE",
                totalSize: a
              }, r),
              valid: false
            };
          }

          if (e.options.minTotalSize && a < parseInt("".concat(e.options.minTotalSize), 10)) {
            return {
              meta: Object.assign({}, {
                error: "INVALID_MIN_TOTAL_SIZE",
                totalSize: a
              }, r),
              valid: false
            };
          }
        } else {
          t = e.value.substr(e.value.lastIndexOf(".") + 1);

          if (i && i.indexOf(t.toLowerCase()) === -1) {
            return {
              meta: {
                error: "INVALID_EXTENSION",
                ext: t
              },
              valid: false
            };
          }
        }

        return {
          valid: true
        };
      }
    };
  }

  function a() {
    return {
      validate: function validate(a) {
        if (a.value === "") {
          return {
            valid: true
          };
        }

        var s = Object.assign({}, {
          inclusive: true,
          message: ""
        }, a.options);
        var t = parseFloat("".concat(s.min).replace(",", "."));
        return s.inclusive ? {
          message: r(a.l10n ? s.message || a.l10n.greaterThan["default"] : s.message, "".concat(t)),
          valid: parseFloat(a.value) >= t
        } : {
          message: r(a.l10n ? s.message || a.l10n.greaterThan.notInclusive : s.message, "".concat(t)),
          valid: parseFloat(a.value) > t
        };
      }
    };
  }

  function o$2() {
    return {
      validate: function validate(o) {
        var t = "function" === typeof o.options.compare ? o.options.compare.call(this) : o.options.compare;
        return {
          valid: t === "" || o.value === t
        };
      }
    };
  }

  function a$1() {
    return {
      validate: function validate(a) {
        if (a.value === "") {
          return {
            valid: true
          };
        }

        var e = Object.assign({}, {
          decimalSeparator: ".",
          thousandsSeparator: ""
        }, a.options);
        var t = e.decimalSeparator === "." ? "\\." : e.decimalSeparator;
        var r = e.thousandsSeparator === "." ? "\\." : e.thousandsSeparator;
        var o = new RegExp("^-?[0-9]{1,3}(".concat(r, "[0-9]{3})*(").concat(t, "[0-9]+)?$"));
        var n = new RegExp(r, "g");
        var s = "".concat(a.value);

        if (!o.test(s)) {
          return {
            valid: false
          };
        }

        if (r) {
          s = s.replace(n, "");
        }

        if (t) {
          s = s.replace(t, ".");
        }

        var i = parseFloat(s);
        return {
          valid: !isNaN(i) && isFinite(i) && Math.floor(i) === i
        };
      }
    };
  }

  function d() {
    return {
      validate: function validate(d) {
        if (d.value === "") {
          return {
            valid: true
          };
        }

        var a = Object.assign({}, {
          ipv4: true,
          ipv6: true
        }, d.options);
        var e = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))?$/;
        var s = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*(\/(\d|\d\d|1[0-1]\d|12[0-8]))?$/;

        switch (true) {
          case a.ipv4 && !a.ipv6:
            return {
              message: d.l10n ? a.message || d.l10n.ip.ipv4 : a.message,
              valid: e.test(d.value)
            };

          case !a.ipv4 && a.ipv6:
            return {
              message: d.l10n ? a.message || d.l10n.ip.ipv6 : a.message,
              valid: s.test(d.value)
            };

          case a.ipv4 && a.ipv6:
          default:
            return {
              message: d.l10n ? a.message || d.l10n.ip["default"] : a.message,
              valid: e.test(d.value) || s.test(d.value)
            };
        }
      }
    };
  }

  function s$2() {
    return {
      validate: function validate(s) {
        if (s.value === "") {
          return {
            valid: true
          };
        }

        var a = Object.assign({}, {
          inclusive: true,
          message: ""
        }, s.options);
        var l = parseFloat("".concat(a.max).replace(",", "."));
        return a.inclusive ? {
          message: r(s.l10n ? a.message || s.l10n.lessThan["default"] : a.message, "".concat(l)),
          valid: parseFloat(s.value) <= l
        } : {
          message: r(s.l10n ? a.message || s.l10n.lessThan.notInclusive : a.message, "".concat(l)),
          valid: parseFloat(s.value) < l
        };
      }
    };
  }

  function t$b() {
    return {
      validate: function validate(t) {
        var n = !!t.options && !!t.options.trim;
        var o = t.value;
        return {
          valid: !n && o !== "" || n && o !== "" && o.trim() !== ""
        };
      }
    };
  }

  function a$2() {
    return {
      validate: function validate(a) {
        if (a.value === "") {
          return {
            valid: true
          };
        }

        var e = Object.assign({}, {
          decimalSeparator: ".",
          thousandsSeparator: ""
        }, a.options);
        var t = "".concat(a.value);

        if (t.substr(0, 1) === e.decimalSeparator) {
          t = "0".concat(e.decimalSeparator).concat(t.substr(1));
        } else if (t.substr(0, 2) === "-".concat(e.decimalSeparator)) {
          t = "-0".concat(e.decimalSeparator).concat(t.substr(2));
        }

        var r = e.decimalSeparator === "." ? "\\." : e.decimalSeparator;
        var s = e.thousandsSeparator === "." ? "\\." : e.thousandsSeparator;
        var i = new RegExp("^-?[0-9]{1,3}(".concat(s, "[0-9]{3})*(").concat(r, "[0-9]+)?$"));
        var o = new RegExp(s, "g");

        if (!i.test(t)) {
          return {
            valid: false
          };
        }

        if (s) {
          t = t.replace(o, "");
        }

        if (r) {
          t = t.replace(r, ".");
        }

        var l = parseFloat(t);
        return {
          valid: !isNaN(l) && isFinite(l)
        };
      }
    };
  }

  function r$1() {
    return {
      validate: function validate(r) {
        return t$6(r.options.promise, [r]);
      }
    };
  }

  function e$3() {
    return {
      validate: function validate(e) {
        if (e.value === "") {
          return {
            valid: true
          };
        }

        var t = e.options.regexp;

        if (t instanceof RegExp) {
          return {
            valid: t.test(e.value)
          };
        } else {
          var n = t.toString();
          var o = e.options.flags ? new RegExp(n, e.options.flags) : new RegExp(n);
          return {
            valid: o.test(e.value)
          };
        }
      }
    };
  }

  function e$4(e, t) {
    var n = function n(e) {
      return Object.keys(e).map(function (t) {
        return "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(e[t]));
      }).join("&");
    };

    return new Promise(function (o, s) {
      var d = Object.assign({}, {
        crossDomain: false,
        headers: {},
        method: "GET",
        params: {}
      }, t);
      var a = Object.keys(d.params).map(function (e) {
        return "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(d.params[e]));
      }).join("&");
      var r = e.indexOf("?");
      var c = "GET" === d.method ? "".concat(e).concat(r ? "?" : "&").concat(a) : e;

      if (d.crossDomain) {
        var _e = document.createElement("script");

        var _t = "___fetch".concat(Date.now(), "___");

        window[_t] = function (e) {
          delete window[_t];
          o(e);
        };

        _e.src = "".concat(c).concat(r ? "&" : "?", "callback=").concat(_t);
        _e.async = true;

        _e.addEventListener("load", function () {
          _e.parentNode.removeChild(_e);
        });

        _e.addEventListener("error", function () {
          return s;
        });

        document.head.appendChild(_e);
      } else {
        var _e2 = new XMLHttpRequest();

        _e2.open(d.method, c);

        _e2.setRequestHeader("X-Requested-With", "XMLHttpRequest");

        if ("POST" === d.method) {
          _e2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }

        Object.keys(d.headers).forEach(function (t) {
          return _e2.setRequestHeader(t, d.headers[t]);
        });

        _e2.addEventListener("load", function () {
          o(JSON.parse(this.responseText));
        });

        _e2.addEventListener("error", function () {
          return s;
        });

        _e2.send(n(d.params));
      }
    });
  }

  function a$3() {
    var a = {
      crossDomain: false,
      data: {},
      headers: {},
      method: "GET",
      validKey: "valid"
    };
    return {
      validate: function validate(t) {
        if (t.value === "") {
          return Promise.resolve({
            valid: true
          });
        }

        var s = Object.assign({}, a, t.options);
        var r = s.data;

        if ("function" === typeof s.data) {
          r = s.data.call(this, t);
        }

        if ("string" === typeof r) {
          r = JSON.parse(r);
        }

        r[s.name || t.field] = t.value;
        var o = "function" === typeof s.url ? s.url.call(this, t) : s.url;
        return e$4(o, {
          crossDomain: s.crossDomain,
          headers: s.headers,
          method: s.method,
          params: r
        }).then(function (e) {
          return Promise.resolve({
            message: e["message"],
            meta: e,
            valid: "".concat(e[s.validKey]) === "true"
          });
        })["catch"](function (e) {
          return Promise.reject({
            valid: false
          });
        });
      }
    };
  }

  function e$5() {
    return {
      validate: function validate(e) {
        if (e.value === "") {
          return {
            valid: true
          };
        }

        var a = Object.assign({}, {
          "case": "lower"
        }, e.options);
        var s = (a["case"] || "lower").toLowerCase();
        return {
          message: a.message || (e.l10n ? "upper" === s ? e.l10n.stringCase.upper : e.l10n.stringCase["default"] : a.message),
          valid: "upper" === s ? e.value === e.value.toUpperCase() : e.value === e.value.toLowerCase()
        };
      }
    };
  }

  function t$c() {
    var t = function t(e) {
      var t = e.length;

      for (var s = e.length - 1; s >= 0; s--) {
        var n = e.charCodeAt(s);

        if (n > 127 && n <= 2047) {
          t++;
        } else if (n > 2047 && n <= 65535) {
          t += 2;
        }

        if (n >= 56320 && n <= 57343) {
          s--;
        }
      }

      return "".concat(t);
    };

    return {
      validate: function validate(s) {
        var n = Object.assign({}, {
          message: "",
          trim: false,
          utf8Bytes: false
        }, s.options);
        var a = n.trim === true || "".concat(n.trim) === "true" ? s.value.trim() : s.value;

        if (a === "") {
          return {
            valid: true
          };
        }

        var r$1 = n.min ? "".concat(n.min) : "";
        var l = n.max ? "".concat(n.max) : "";
        var i = n.utf8Bytes ? t(a) : a.length;
        var g = true;
        var m = s.l10n ? n.message || s.l10n.stringLength["default"] : n.message;

        if (r$1 && i < parseInt(r$1, 10) || l && i > parseInt(l, 10)) {
          g = false;
        }

        switch (true) {
          case !!r$1 && !!l:
            m = r(s.l10n ? n.message || s.l10n.stringLength.between : n.message, [r$1, l]);
            break;

          case !!r$1:
            m = r(s.l10n ? n.message || s.l10n.stringLength.more : n.message, "".concat(parseInt(r$1, 10)));
            break;

          case !!l:
            m = r(s.l10n ? n.message || s.l10n.stringLength.less : n.message, "".concat(parseInt(l, 10)));
            break;
        }

        return {
          message: m,
          valid: g
        };
      }
    };
  }

  function t$d() {
    var t = {
      allowEmptyProtocol: false,
      allowLocal: false,
      protocol: "http, https, ftp"
    };
    return {
      validate: function validate(o) {
        if (o.value === "") {
          return {
            valid: true
          };
        }

        var a = Object.assign({}, t, o.options);
        var l = a.allowLocal === true || "".concat(a.allowLocal) === "true";
        var f = a.allowEmptyProtocol === true || "".concat(a.allowEmptyProtocol) === "true";
        var u = a.protocol.split(",").join("|").replace(/\s/g, "");
        var e = new RegExp("^" + "(?:(?:" + u + ")://)" + (f ? "?" : "") + "(?:\\S+(?::\\S*)?@)?" + "(?:" + (l ? "" : "(?!(?:10|127)(?:\\.\\d{1,3}){3})" + "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" + "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})") + "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" + "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" + "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" + "|" + "(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)" + "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*" + "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" + (l ? "?" : "") + ")" + "(?::\\d{2,5})?" + "(?:/[^\\s]*)?$", "i");
        return {
          valid: e.test(o.value)
        };
      }
    };
  }

  var s$3 = {
    between: s$1,
    blank: t$5,
    callback: o,
    choice: t$7,
    creditCard: l,
    date: n,
    different: o$1,
    digits: e$1,
    emailAddress: t$a,
    file: e$2,
    greaterThan: a,
    identical: o$2,
    integer: a$1,
    ip: d,
    lessThan: s$2,
    notEmpty: t$b,
    numeric: a$2,
    promise: r$1,
    regexp: e$3,
    remote: a$3,
    stringCase: e$5,
    stringLength: t$c,
    uri: t$d
  };

  var l$1 = /*#__PURE__*/function () {
    function l(i, s$1) {
      _classCallCheck(this, l);

      this.elements = {};
      this.ee = s();
      this.filter = t$4();
      this.plugins = {};
      this.results = new Map();
      this.validators = {};
      this.form = i;
      this.fields = s$1;
    }

    _createClass(l, [{
      key: "on",
      value: function on(e, t) {
        this.ee.on(e, t);
        return this;
      }
    }, {
      key: "off",
      value: function off(e, t) {
        this.ee.off(e, t);
        return this;
      }
    }, {
      key: "emit",
      value: function emit(e) {
        var _this$ee;

        for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          t[_key - 1] = arguments[_key];
        }

        (_this$ee = this.ee).emit.apply(_this$ee, [e].concat(t));

        return this;
      }
    }, {
      key: "registerPlugin",
      value: function registerPlugin(e, t) {
        if (this.plugins[e]) {
          throw new Error("The plguin ".concat(e, " is registered"));
        }

        t.setCore(this);
        t.install();
        this.plugins[e] = t;
        return this;
      }
    }, {
      key: "deregisterPlugin",
      value: function deregisterPlugin(e) {
        var t = this.plugins[e];

        if (t) {
          t.uninstall();
        }

        delete this.plugins[e];
        return this;
      }
    }, {
      key: "registerValidator",
      value: function registerValidator(e, t) {
        if (this.validators[e]) {
          throw new Error("The validator ".concat(e, " is registered"));
        }

        this.validators[e] = t;
        return this;
      }
    }, {
      key: "registerFilter",
      value: function registerFilter(e, t) {
        this.filter.add(e, t);
        return this;
      }
    }, {
      key: "deregisterFilter",
      value: function deregisterFilter(e, t) {
        this.filter.remove(e, t);
        return this;
      }
    }, {
      key: "executeFilter",
      value: function executeFilter(e, t, i) {
        return this.filter.execute(e, t, i);
      }
    }, {
      key: "addField",
      value: function addField(e, t) {
        var i = Object.assign({}, {
          selector: "",
          validators: {}
        }, t);
        this.fields[e] = this.fields[e] ? {
          selector: i.selector || this.fields[e].selector,
          validators: Object.assign({}, this.fields[e].validators, i.validators)
        } : i;
        this.elements[e] = this.queryElements(e);
        this.emit("core.field.added", {
          elements: this.elements[e],
          field: e,
          options: this.fields[e]
        });
        return this;
      }
    }, {
      key: "removeField",
      value: function removeField(e) {
        if (!this.fields[e]) {
          throw new Error("The field ".concat(e, " validators are not defined. Please ensure the field is added first"));
        }

        var t = this.elements[e];
        var i = this.fields[e];
        delete this.elements[e];
        delete this.fields[e];
        this.emit("core.field.removed", {
          elements: t,
          field: e,
          options: i
        });
        return this;
      }
    }, {
      key: "validate",
      value: function validate() {
        var _this = this;

        this.emit("core.form.validating");
        return this.filter.execute("validate-pre", Promise.resolve(), []).then(function () {
          return Promise.all(Object.keys(_this.fields).map(function (e) {
            return _this.validateField(e);
          })).then(function (e) {
            switch (true) {
              case e.indexOf("Invalid") !== -1:
                _this.emit("core.form.invalid");

                return Promise.resolve("Invalid");

              case e.indexOf("NotValidated") !== -1:
                _this.emit("core.form.notvalidated");

                return Promise.resolve("NotValidated");

              default:
                _this.emit("core.form.valid");

                return Promise.resolve("Valid");
            }
          });
        });
      }
    }, {
      key: "validateField",
      value: function validateField(e) {
        var _this2 = this;

        var t = this.results.get(e);

        if (t === "Valid" || t === "Invalid") {
          return Promise.resolve(t);
        }

        this.emit("core.field.validating", e);
        var i = this.elements[e];

        if (i.length === 0) {
          this.emit("core.field.valid", e);
          return Promise.resolve("Valid");
        }

        var s = i[0].getAttribute("type");

        if ("radio" === s || "checkbox" === s || i.length === 1) {
          return this.validateElement(e, i[0]);
        } else {
          return Promise.all(i.map(function (t) {
            return _this2.validateElement(e, t);
          })).then(function (t) {
            switch (true) {
              case t.indexOf("Invalid") !== -1:
                _this2.emit("core.field.invalid", e);

                _this2.results.set(e, "Invalid");

                return Promise.resolve("Invalid");

              case t.indexOf("NotValidated") !== -1:
                _this2.emit("core.field.notvalidated", e);

                _this2.results["delete"](e);

                return Promise.resolve("NotValidated");

              default:
                _this2.emit("core.field.valid", e);

                _this2.results.set(e, "Valid");

                return Promise.resolve("Valid");
            }
          });
        }
      }
    }, {
      key: "validateElement",
      value: function validateElement(e, t) {
        var _this3 = this;

        this.results["delete"](e);
        var i = this.elements[e];
        var s = this.filter.execute("element-ignored", false, [e, t, i]);

        if (s) {
          this.emit("core.element.ignored", {
            element: t,
            elements: i,
            field: e
          });
          return Promise.resolve("Ignored");
        }

        var l = this.fields[e].validators;
        this.emit("core.element.validating", {
          element: t,
          elements: i,
          field: e
        });
        var r = Object.keys(l).map(function (i) {
          return function () {
            return _this3.executeValidator(e, t, i, l[i]);
          };
        });
        return this.waterfall(r).then(function (s) {
          var l = s.indexOf("Invalid") === -1;

          _this3.emit("core.element.validated", {
            element: t,
            elements: i,
            field: e,
            valid: l
          });

          var r = t.getAttribute("type");

          if ("radio" === r || "checkbox" === r || i.length === 1) {
            _this3.emit(l ? "core.field.valid" : "core.field.invalid", e);
          }

          return Promise.resolve(l ? "Valid" : "Invalid");
        })["catch"](function (s) {
          _this3.emit("core.element.notvalidated", {
            element: t,
            elements: i,
            field: e
          });

          return Promise.resolve(s);
        });
      }
    }, {
      key: "executeValidator",
      value: function executeValidator(e, t, i, s) {
        var _this4 = this;

        var l = this.elements[e];
        var r = this.filter.execute("validator-name", i, [i, e]);
        s.message = this.filter.execute("validator-message", s.message, [this.locale, e, r]);

        if (!this.validators[r] || s.enabled === false) {
          this.emit("core.validator.validated", {
            element: t,
            elements: l,
            field: e,
            result: this.normalizeResult(e, r, {
              valid: true
            }),
            validator: r
          });
          return Promise.resolve("Valid");
        }

        var a = this.validators[r];
        var d = this.getElementValue(e, t, r);
        var o = this.filter.execute("field-should-validate", true, [e, t, d, i]);

        if (!o) {
          this.emit("core.validator.notvalidated", {
            element: t,
            elements: l,
            field: e,
            validator: i
          });
          return Promise.resolve("NotValidated");
        }

        this.emit("core.validator.validating", {
          element: t,
          elements: l,
          field: e,
          validator: i
        });
        var n = a().validate({
          element: t,
          elements: l,
          field: e,
          l10n: this.localization,
          options: s,
          value: d
        });
        var h = "function" === typeof n["then"];

        if (h) {
          return n.then(function (s) {
            var r = _this4.normalizeResult(e, i, s);

            _this4.emit("core.validator.validated", {
              element: t,
              elements: l,
              field: e,
              result: r,
              validator: i
            });

            return r.valid ? "Valid" : "Invalid";
          });
        } else {
          var _s = this.normalizeResult(e, i, n);

          this.emit("core.validator.validated", {
            element: t,
            elements: l,
            field: e,
            result: _s,
            validator: i
          });
          return Promise.resolve(_s.valid ? "Valid" : "Invalid");
        }
      }
    }, {
      key: "getElementValue",
      value: function getElementValue(e$1, t, s) {
        var l = e(this.form, e$1, t, this.elements[e$1]);
        return this.filter.execute("field-value", l, [l, e$1, t, s]);
      }
    }, {
      key: "getElements",
      value: function getElements(e) {
        return this.elements[e];
      }
    }, {
      key: "getFields",
      value: function getFields() {
        return this.fields;
      }
    }, {
      key: "getFormElement",
      value: function getFormElement() {
        return this.form;
      }
    }, {
      key: "getLocale",
      value: function getLocale() {
        return this.locale;
      }
    }, {
      key: "getPlugin",
      value: function getPlugin(e) {
        return this.plugins[e];
      }
    }, {
      key: "updateFieldStatus",
      value: function updateFieldStatus(e, t, i) {
        var _this5 = this;

        var s = this.elements[e];
        var l = s[0].getAttribute("type");
        var r = "radio" === l || "checkbox" === l ? [s[0]] : s;
        r.forEach(function (s) {
          return _this5.updateElementStatus(e, s, t, i);
        });

        if (!i) {
          switch (t) {
            case "NotValidated":
              this.emit("core.field.notvalidated", e);
              this.results["delete"](e);
              break;

            case "Validating":
              this.emit("core.field.validating", e);
              this.results["delete"](e);
              break;

            case "Valid":
              this.emit("core.field.valid", e);
              this.results.set(e, "Valid");
              break;

            case "Invalid":
              this.emit("core.field.invalid", e);
              this.results.set(e, "Invalid");
              break;
          }
        }

        return this;
      }
    }, {
      key: "updateElementStatus",
      value: function updateElementStatus(e, t, i, s) {
        var _this6 = this;

        var l = this.elements[e];
        var r = this.fields[e].validators;
        var a = s ? [s] : Object.keys(r);

        switch (i) {
          case "NotValidated":
            a.forEach(function (i) {
              return _this6.emit("core.validator.notvalidated", {
                element: t,
                elements: l,
                field: e,
                validator: i
              });
            });
            this.emit("core.element.notvalidated", {
              element: t,
              elements: l,
              field: e
            });
            break;

          case "Validating":
            a.forEach(function (i) {
              return _this6.emit("core.validator.validating", {
                element: t,
                elements: l,
                field: e,
                validator: i
              });
            });
            this.emit("core.element.validating", {
              element: t,
              elements: l,
              field: e
            });
            break;

          case "Valid":
            a.forEach(function (i) {
              return _this6.emit("core.validator.validated", {
                element: t,
                field: e,
                result: {
                  message: r[i].message,
                  valid: true
                },
                validator: i
              });
            });
            this.emit("core.element.validated", {
              element: t,
              elements: l,
              field: e,
              valid: true
            });
            break;

          case "Invalid":
            a.forEach(function (i) {
              return _this6.emit("core.validator.validated", {
                element: t,
                field: e,
                result: {
                  message: r[i].message,
                  valid: false
                },
                validator: i
              });
            });
            this.emit("core.element.validated", {
              element: t,
              elements: l,
              field: e,
              valid: false
            });
            break;
        }

        return this;
      }
    }, {
      key: "resetForm",
      value: function resetForm(e) {
        var _this7 = this;

        Object.keys(this.fields).forEach(function (t) {
          return _this7.resetField(t, e);
        });
        this.emit("core.form.reset", {
          reset: e
        });
        return this;
      }
    }, {
      key: "resetField",
      value: function resetField(e, t) {
        if (t) {
          var _t = this.elements[e];

          var _i = _t[0].getAttribute("type");

          _t.forEach(function (e) {
            if ("radio" === _i || "checkbox" === _i) {
              e.removeAttribute("selected");
              e.removeAttribute("checked");
              e.checked = false;
            } else {
              e.setAttribute("value", "");

              if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) {
                e.value = "";
              }
            }
          });
        }

        this.updateFieldStatus(e, "NotValidated");
        this.emit("core.field.reset", {
          field: e,
          reset: t
        });
        return this;
      }
    }, {
      key: "revalidateField",
      value: function revalidateField(e) {
        this.updateFieldStatus(e, "NotValidated");
        return this.validateField(e);
      }
    }, {
      key: "disableValidator",
      value: function disableValidator(e, t) {
        return this.toggleValidator(false, e, t);
      }
    }, {
      key: "enableValidator",
      value: function enableValidator(e, t) {
        return this.toggleValidator(true, e, t);
      }
    }, {
      key: "updateValidatorOption",
      value: function updateValidatorOption(e, t, i, s) {
        if (this.fields[e] && this.fields[e].validators && this.fields[e].validators[t]) {
          this.fields[e].validators[t][i] = s;
        }

        return this;
      }
    }, {
      key: "setFieldOptions",
      value: function setFieldOptions(e, t) {
        this.fields[e] = t;
        return this;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this8 = this;

        Object.keys(this.plugins).forEach(function (e) {
          return _this8.plugins[e].uninstall();
        });
        this.ee.clear();
        this.filter.clear();
        this.results.clear();
        this.plugins = {};
        return this;
      }
    }, {
      key: "setLocale",
      value: function setLocale(e, t) {
        this.locale = e;
        this.localization = t;
        return this;
      }
    }, {
      key: "waterfall",
      value: function waterfall(e) {
        return e.reduce(function (e, t) {
          return e.then(function (e) {
            return t().then(function (t) {
              e.push(t);
              return e;
            });
          });
        }, Promise.resolve([]));
      }
    }, {
      key: "queryElements",
      value: function queryElements(e) {
        var t = this.fields[e].selector ? "#" === this.fields[e].selector.charAt(0) ? "[id=\"".concat(this.fields[e].selector.substring(1), "\"]") : this.fields[e].selector : "[name=\"".concat(e, "\"]");
        return [].slice.call(this.form.querySelectorAll(t));
      }
    }, {
      key: "normalizeResult",
      value: function normalizeResult(e, t, i) {
        var s = this.fields[e].validators[t];
        return Object.assign({}, i, {
          message: i.message || (s ? s.message : "") || (this.localization && this.localization[t] && this.localization[t]["default"] ? this.localization[t]["default"] : "") || "The field ".concat(e, " is not valid")
        });
      }
    }, {
      key: "toggleValidator",
      value: function toggleValidator(e, t, i) {
        var _this9 = this;

        var s = this.fields[t].validators;

        if (i && s && s[i]) {
          this.fields[t].validators[i].enabled = e;
        } else if (!i) {
          Object.keys(s).forEach(function (i) {
            return _this9.fields[t].validators[i].enabled = e;
          });
        }

        return this.updateFieldStatus(t, "NotValidated", i);
      }
    }]);

    return l;
  }();

  function r$2(e, t) {
    var i = Object.assign({}, {
      fields: {},
      locale: "en_US",
      plugins: {}
    }, t);
    var r = new l$1(e, i.fields);
    r.setLocale(i.locale, i.localization);
    Object.keys(i.plugins).forEach(function (e) {
      return r.registerPlugin(e, i.plugins[e]);
    });
    Object.keys(s$3).forEach(function (e) {
      return r.registerValidator(e, s$3[e]);
    });
    Object.keys(i.fields).forEach(function (e) {
      return r.addField(e, i.fields[e]);
    });
    return r;
  }

  var t$e = /*#__PURE__*/function () {
    function t(_t) {
      _classCallCheck(this, t);

      this.opts = _t;
    }

    _createClass(t, [{
      key: "setCore",
      value: function setCore(t) {
        this.core = t;
        return this;
      }
    }, {
      key: "install",
      value: function install() {}
    }, {
      key: "uninstall",
      value: function uninstall() {}
    }]);

    return t;
  }();

  var index$1 = {
    getFieldValue: e
  };

  var e$6 = /*#__PURE__*/function (_t) {
    _inherits(e, _t);

    var _super = _createSuper(e);

    function e(t) {
      var _this;

      _classCallCheck(this, e);

      _this = _super.call(this, t);
      _this.opts = t || {};
      _this.validatorNameFilter = _this.getValidatorName.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(e, [{
      key: "install",
      value: function install() {
        this.core.registerFilter("validator-name", this.validatorNameFilter);
      }
    }, {
      key: "uninstall",
      value: function uninstall() {
        this.core.deregisterFilter("validator-name", this.validatorNameFilter);
      }
    }, {
      key: "getValidatorName",
      value: function getValidatorName(t, e) {
        return this.opts[t] || t;
      }
    }]);

    return e;
  }(t$e);

  var i = /*#__PURE__*/function (_e) {
    _inherits(i, _e);

    var _super = _createSuper(i);

    function i() {
      var _this;

      _classCallCheck(this, i);

      _this = _super.call(this, {});
      _this.elementValidatedHandler = _this.onElementValidated.bind(_assertThisInitialized(_this));
      _this.fieldValidHandler = _this.onFieldValid.bind(_assertThisInitialized(_this));
      _this.fieldInvalidHandler = _this.onFieldInvalid.bind(_assertThisInitialized(_this));
      _this.messageDisplayedHandler = _this.onMessageDisplayed.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(i, [{
      key: "install",
      value: function install() {
        this.core.on("core.field.valid", this.fieldValidHandler).on("core.field.invalid", this.fieldInvalidHandler).on("core.element.validated", this.elementValidatedHandler).on("plugins.message.displayed", this.messageDisplayedHandler);
      }
    }, {
      key: "uninstall",
      value: function uninstall() {
        this.core.off("core.field.valid", this.fieldValidHandler).off("core.field.invalid", this.fieldInvalidHandler).off("core.element.validated", this.elementValidatedHandler).off("plugins.message.displayed", this.messageDisplayedHandler);
      }
    }, {
      key: "onElementValidated",
      value: function onElementValidated(e) {
        if (e.valid) {
          e.element.setAttribute("aria-invalid", "false");
          e.element.removeAttribute("aria-describedby");
        }
      }
    }, {
      key: "onFieldValid",
      value: function onFieldValid(e) {
        var i = this.core.getElements(e);

        if (i) {
          i.forEach(function (e) {
            e.setAttribute("aria-invalid", "false");
            e.removeAttribute("aria-describedby");
          });
        }
      }
    }, {
      key: "onFieldInvalid",
      value: function onFieldInvalid(e) {
        var i = this.core.getElements(e);

        if (i) {
          i.forEach(function (e) {
            return e.setAttribute("aria-invalid", "true");
          });
        }
      }
    }, {
      key: "onMessageDisplayed",
      value: function onMessageDisplayed(e) {
        e.messageElement.setAttribute("role", "alert");
        e.messageElement.setAttribute("aria-hidden", "false");
        var i = this.core.getElements(e.field);
        var t = i.indexOf(e.element);
        var l = "js-fv-".concat(e.field, "-").concat(t, "-").concat(Date.now(), "-message");
        e.messageElement.setAttribute("id", l);
        e.element.setAttribute("aria-describedby", l);
        var a = e.element.getAttribute("type");

        if ("radio" === a || "checkbox" === a) {
          i.forEach(function (e) {
            return e.setAttribute("aria-describedby", l);
          });
        }
      }
    }]);

    return i;
  }(t$e);

  var t$f = /*#__PURE__*/function (_e) {
    _inherits(t, _e);

    var _super = _createSuper(t);

    function t(e) {
      var _this;

      _classCallCheck(this, t);

      _this = _super.call(this, e);
      _this.addedFields = new Map();
      _this.opts = Object.assign({}, {
        html5Input: false,
        pluginPrefix: "data-fvp-",
        prefix: "data-fv-"
      }, e);
      _this.fieldAddedHandler = _this.onFieldAdded.bind(_assertThisInitialized(_this));
      _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(t, [{
      key: "install",
      value: function install() {
        var _this2 = this;

        this.parsePlugins();
        var e = this.parseOptions();
        Object.keys(e).forEach(function (t) {
          if (!_this2.addedFields.has(t)) {
            _this2.addedFields.set(t, true);
          }

          _this2.core.addField(t, e[t]);
        });
        this.core.on("core.field.added", this.fieldAddedHandler).on("core.field.removed", this.fieldRemovedHandler);
      }
    }, {
      key: "uninstall",
      value: function uninstall() {
        this.addedFields.clear();
        this.core.off("core.field.added", this.fieldAddedHandler).off("core.field.removed", this.fieldRemovedHandler);
      }
    }, {
      key: "onFieldAdded",
      value: function onFieldAdded(e) {
        var _this3 = this;

        var t = e.elements;

        if (!t || t.length === 0 || this.addedFields.has(e.field)) {
          return;
        }

        this.addedFields.set(e.field, true);
        t.forEach(function (t) {
          var s = _this3.parseElement(t);

          if (!_this3.isEmptyOption(s)) {
            var _t = {
              selector: e.options.selector,
              validators: Object.assign({}, e.options.validators || {}, s.validators)
            };

            _this3.core.setFieldOptions(e.field, _t);
          }
        });
      }
    }, {
      key: "onFieldRemoved",
      value: function onFieldRemoved(e) {
        if (e.field && this.addedFields.has(e.field)) {
          this.addedFields["delete"](e.field);
        }
      }
    }, {
      key: "parseOptions",
      value: function parseOptions() {
        var _this4 = this;

        var e = this.opts.prefix;
        var t = {};
        var s = this.core.getFields();
        var a = this.core.getFormElement();
        var i = [].slice.call(a.querySelectorAll("[name], [".concat(e, "field]")));
        i.forEach(function (s) {
          var a = _this4.parseElement(s);

          if (!_this4.isEmptyOption(a)) {
            var _i = s.getAttribute("name") || s.getAttribute("".concat(e, "field"));

            t[_i] = Object.assign({}, t[_i], a);
          }
        });
        Object.keys(t).forEach(function (e) {
          Object.keys(t[e].validators).forEach(function (a) {
            t[e].validators[a].enabled = t[e].validators[a].enabled || false;

            if (s[e] && s[e].validators && s[e].validators[a]) {
              Object.assign(t[e].validators[a], s[e].validators[a]);
            }
          });
        });
        return Object.assign({}, s, t);
      }
    }, {
      key: "createPluginInstance",
      value: function createPluginInstance(e, t) {
        var s = e.split(".");
        var a = window || this;

        for (var _e2 = 0, _t2 = s.length; _e2 < _t2; _e2++) {
          a = a[s[_e2]];
        }

        if (typeof a !== "function") {
          throw new Error("the plugin ".concat(e, " doesn't exist"));
        }

        return new a(t);
      }
    }, {
      key: "parsePlugins",
      value: function parsePlugins() {
        var _this5 = this;

        var e = this.core.getFormElement();
        var t = new RegExp("^".concat(this.opts.pluginPrefix, "([a-z0-9-]+)(___)*([a-z0-9-]+)*$"));
        var s = e.attributes.length;
        var a = {};

        for (var i = 0; i < s; i++) {
          var _s = e.attributes[i].name;
          var n = e.attributes[i].value;
          var r = t.exec(_s);

          if (r && r.length === 4) {
            var _e3 = this.toCamelCase(r[1]);

            a[_e3] = Object.assign({}, r[3] ? _defineProperty({}, this.toCamelCase(r[3]), n) : {
              enabled: "" === n || "true" === n
            }, a[_e3]);
          }
        }

        Object.keys(a).forEach(function (e) {
          var t = a[e];
          var s = t["enabled"];
          var i = t["class"];

          if (s && i) {
            delete t["enabled"];
            delete t["clazz"];

            var _s2 = _this5.createPluginInstance(i, t);

            _this5.core.registerPlugin(e, _s2);
          }
        });
      }
    }, {
      key: "isEmptyOption",
      value: function isEmptyOption(e) {
        var t = e.validators;
        return Object.keys(t).length === 0 && t.constructor === Object;
      }
    }, {
      key: "parseElement",
      value: function parseElement(e) {
        var t = new RegExp("^".concat(this.opts.prefix, "([a-z0-9-]+)(___)*([a-z0-9-]+)*$"));
        var s = e.attributes.length;
        var a = {};
        var i = e.getAttribute("type");

        for (var n = 0; n < s; n++) {
          var _s3 = e.attributes[n].name;
          var r = e.attributes[n].value;

          if (this.opts.html5Input) {
            switch (true) {
              case "minlength" === _s3:
                a["stringLength"] = Object.assign({}, {
                  enabled: true,
                  min: parseInt(r, 10)
                }, a["stringLength"]);
                break;

              case "maxlength" === _s3:
                a["stringLength"] = Object.assign({}, {
                  enabled: true,
                  max: parseInt(r, 10)
                }, a["stringLength"]);
                break;

              case "pattern" === _s3:
                a["regexp"] = Object.assign({}, {
                  enabled: true,
                  regexp: r
                }, a["regexp"]);
                break;

              case "required" === _s3:
                a["notEmpty"] = Object.assign({}, {
                  enabled: true
                }, a["notEmpty"]);
                break;

              case "type" === _s3 && "color" === r:
                a["color"] = Object.assign({}, {
                  enabled: true,
                  type: "hex"
                }, a["color"]);
                break;

              case "type" === _s3 && "email" === r:
                a["emailAddress"] = Object.assign({}, {
                  enabled: true
                }, a["emailAddress"]);
                break;

              case "type" === _s3 && "url" === r:
                a["uri"] = Object.assign({}, {
                  enabled: true
                }, a["uri"]);
                break;

              case "type" === _s3 && "range" === r:
                a["between"] = Object.assign({}, {
                  enabled: true,
                  max: parseFloat(e.getAttribute("max")),
                  min: parseFloat(e.getAttribute("min"))
                }, a["between"]);
                break;

              case "min" === _s3 && i !== "date" && i !== "range":
                a["greaterThan"] = Object.assign({}, {
                  enabled: true,
                  min: parseFloat(r)
                }, a["greaterThan"]);
                break;

              case "max" === _s3 && i !== "date" && i !== "range":
                a["lessThan"] = Object.assign({}, {
                  enabled: true,
                  max: parseFloat(r)
                }, a["lessThan"]);
                break;
            }
          }

          var l = t.exec(_s3);

          if (l && l.length === 4) {
            var _e4 = this.toCamelCase(l[1]);

            a[_e4] = Object.assign({}, l[3] ? _defineProperty({}, this.toCamelCase(l[3]), this.normalizeValue(r)) : {
              enabled: "" === r || "true" === r
            }, a[_e4]);
          }
        }

        return {
          validators: a
        };
      }
    }, {
      key: "normalizeValue",
      value: function normalizeValue(e) {
        return e === "true" ? true : e === "false" ? false : e;
      }
    }, {
      key: "toUpperCase",
      value: function toUpperCase(e) {
        return e.charAt(1).toUpperCase();
      }
    }, {
      key: "toCamelCase",
      value: function toCamelCase(e) {
        return e.replace(/-./g, this.toUpperCase);
      }
    }]);

    return t;
  }(t$e);

  var o$3 = /*#__PURE__*/function (_t) {
    _inherits(o, _t);

    var _super = _createSuper(o);

    function o() {
      var _this;

      _classCallCheck(this, o);

      _this = _super.call(this, {});
      _this.onValidHandler = _this.onFormValid.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(o, [{
      key: "install",
      value: function install() {
        var t = this.core.getFormElement();

        if (t.querySelectorAll('[type="submit"][name="submit"]').length) {
          throw new Error("Do not use `submit` for the name attribute of submit button");
        }

        this.core.on("core.form.valid", this.onValidHandler);
      }
    }, {
      key: "uninstall",
      value: function uninstall() {
        this.core.off("core.form.valid", this.onValidHandler);
      }
    }, {
      key: "onFormValid",
      value: function onFormValid() {
        var t = this.core.getFormElement();

        if (t instanceof HTMLFormElement) {
          t.submit();
        }
      }
    }]);

    return o;
  }(t$e);

  var e$7 = /*#__PURE__*/function (_t) {
    _inherits(e, _t);

    var _super = _createSuper(e);

    function e(t) {
      var _this;

      _classCallCheck(this, e);

      _this = _super.call(this, t);
      _this.opts = t || {};
      _this.triggerExecutedHandler = _this.onTriggerExecuted.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(e, [{
      key: "install",
      value: function install() {
        this.core.on("plugins.trigger.executed", this.triggerExecutedHandler);
      }
    }, {
      key: "uninstall",
      value: function uninstall() {
        this.core.off("plugins.trigger.executed", this.triggerExecutedHandler);
      }
    }, {
      key: "onTriggerExecuted",
      value: function onTriggerExecuted(t) {
        if (this.opts[t.field]) {
          var _e = this.opts[t.field].split(" ");

          var _iterator = _createForOfIteratorHelper(_e),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _t2 = _step.value;

              var _e2 = _t2.trim();

              if (this.opts[_e2]) {
                this.core.revalidateField(_e2);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
    }]);

    return e;
  }(t$e);

  var e$8 = /*#__PURE__*/function (_t) {
    _inherits(e, _t);

    var _super = _createSuper(e);

    function e(t) {
      var _this;

      _classCallCheck(this, e);

      _this = _super.call(this, t);
      _this.opts = Object.assign({}, {
        excluded: e.defaultIgnore
      }, t);
      _this.ignoreValidationFilter = _this.ignoreValidation.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(e, [{
      key: "install",
      value: function install() {
        this.core.registerFilter("element-ignored", this.ignoreValidationFilter);
      }
    }, {
      key: "uninstall",
      value: function uninstall() {
        this.core.deregisterFilter("element-ignored", this.ignoreValidationFilter);
      }
    }, {
      key: "ignoreValidation",
      value: function ignoreValidation(t, e, i) {
        return this.opts.excluded.apply(this, [t, e, i]);
      }
    }], [{
      key: "defaultIgnore",
      value: function defaultIgnore(t, e, i) {
        var r = !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        var n = e.getAttribute("disabled");
        return n === "" || n === "disabled" || e.getAttribute("type") === "hidden" || !r;
      }
    }]);

    return e;
  }(t$e);

  var t$g = /*#__PURE__*/function (_e) {
    _inherits(t, _e);

    var _super = _createSuper(t);

    function t(e) {
      var _this;

      _classCallCheck(this, t);

      _this = _super.call(this, e);
      _this.statuses = new Map();
      _this.opts = Object.assign({}, {
        onStatusChanged: function onStatusChanged() {}
      }, e);
      _this.elementValidatingHandler = _this.onElementValidating.bind(_assertThisInitialized(_this));
      _this.elementValidatedHandler = _this.onElementValidated.bind(_assertThisInitialized(_this));
      _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_assertThisInitialized(_this));
      _this.elementIgnoredHandler = _this.onElementIgnored.bind(_assertThisInitialized(_this));
      _this.fieldAddedHandler = _this.onFieldAdded.bind(_assertThisInitialized(_this));
      _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(t, [{
      key: "install",
      value: function install() {
        this.core.on("core.element.validating", this.elementValidatingHandler).on("core.element.validated", this.elementValidatedHandler).on("core.element.notvalidated", this.elementNotValidatedHandler).on("core.element.ignored", this.elementIgnoredHandler).on("core.field.added", this.fieldAddedHandler).on("core.field.removed", this.fieldRemovedHandler);
      }
    }, {
      key: "uninstall",
      value: function uninstall() {
        this.statuses.clear();
        this.core.off("core.element.validating", this.elementValidatingHandler).off("core.element.validated", this.elementValidatedHandler).off("core.element.notvalidated", this.elementNotValidatedHandler).off("core.element.ignored", this.elementIgnoredHandler).off("core.field.added", this.fieldAddedHandler).off("core.field.removed", this.fieldRemovedHandler);
      }
    }, {
      key: "areFieldsValid",
      value: function areFieldsValid() {
        return Array.from(this.statuses.values()).every(function (e) {
          return e === "Valid" || e === "NotValidated" || e === "Ignored";
        });
      }
    }, {
      key: "getStatuses",
      value: function getStatuses() {
        return this.statuses;
      }
    }, {
      key: "onFieldAdded",
      value: function onFieldAdded(e) {
        this.statuses.set(e.field, "NotValidated");
      }
    }, {
      key: "onFieldRemoved",
      value: function onFieldRemoved(e) {
        if (this.statuses.has(e.field)) {
          this.statuses["delete"](e.field);
        }

        this.opts.onStatusChanged(this.areFieldsValid());
      }
    }, {
      key: "onElementValidating",
      value: function onElementValidating(e) {
        this.statuses.set(e.field, "Validating");
        this.opts.onStatusChanged(false);
      }
    }, {
      key: "onElementValidated",
      value: function onElementValidated(e) {
        this.statuses.set(e.field, e.valid ? "Valid" : "Invalid");

        if (e.valid) {
          this.opts.onStatusChanged(this.areFieldsValid());
        } else {
          this.opts.onStatusChanged(false);
        }
      }
    }, {
      key: "onElementNotValidated",
      value: function onElementNotValidated(e) {
        this.statuses.set(e.field, "NotValidated");
        this.opts.onStatusChanged(false);
      }
    }, {
      key: "onElementIgnored",
      value: function onElementIgnored(e) {
        this.statuses.set(e.field, "Ignored");
        this.opts.onStatusChanged(this.areFieldsValid());
      }
    }]);

    return t;
  }(t$e);

  function s$4(s, a) {
    a.split(" ").forEach(function (a) {
      if (s.classList) {
        s.classList.add(a);
      } else if (" ".concat(s.className, " ").indexOf(" ".concat(a, " "))) {
        s.className += " ".concat(a);
      }
    });
  }

  function a$4(s, a) {
    a.split(" ").forEach(function (a) {
      s.classList ? s.classList.remove(a) : s.className = s.className.replace(a, "");
    });
  }

  function c(c, e) {
    var t = [];
    var f = [];
    Object.keys(e).forEach(function (s) {
      if (s) {
        e[s] ? t.push(s) : f.push(s);
      }
    });
    f.forEach(function (s) {
      return a$4(c, s);
    });
    t.forEach(function (a) {
      return s$4(c, a);
    });
  }

  function e$9(e, t) {
    var l = e.matches || e.webkitMatchesSelector || e["mozMatchesSelector"] || e["msMatchesSelector"];

    if (l) {
      return l.call(e, t);
    }

    var c = [].slice.call(e.parentElement.querySelectorAll(t));
    return c.indexOf(e) >= 0;
  }

  function t$h(t, l) {
    var c = t;

    while (c) {
      if (e$9(c, l)) {
        break;
      }

      c = c.parentElement;
    }

    return c;
  }

  var s$5 = /*#__PURE__*/function (_e) {
    _inherits(s, _e);

    var _super = _createSuper(s);

    function s(e) {
      var _this;

      _classCallCheck(this, s);

      _this = _super.call(this, e);
      _this.messages = new Map();
      _this.defaultContainer = document.createElement("div");
      _this.opts = Object.assign({}, {
        container: function container(e, t) {
          return _this.defaultContainer;
        }
      }, e);
      _this.elementIgnoredHandler = _this.onElementIgnored.bind(_assertThisInitialized(_this));
      _this.fieldAddedHandler = _this.onFieldAdded.bind(_assertThisInitialized(_this));
      _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_assertThisInitialized(_this));
      _this.validatorValidatedHandler = _this.onValidatorValidated.bind(_assertThisInitialized(_this));
      _this.validatorNotValidatedHandler = _this.onValidatorNotValidated.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(s, [{
      key: "install",
      value: function install() {
        this.core.getFormElement().appendChild(this.defaultContainer);
        this.core.on("core.element.ignored", this.elementIgnoredHandler).on("core.field.added", this.fieldAddedHandler).on("core.field.removed", this.fieldRemovedHandler).on("core.validator.validated", this.validatorValidatedHandler).on("core.validator.notvalidated", this.validatorNotValidatedHandler);
      }
    }, {
      key: "uninstall",
      value: function uninstall() {
        this.core.getFormElement().removeChild(this.defaultContainer);
        this.messages.forEach(function (e) {
          return e.parentNode.removeChild(e);
        });
        this.messages.clear();
        this.core.off("core.element.ignored", this.elementIgnoredHandler).off("core.field.added", this.fieldAddedHandler).off("core.field.removed", this.fieldRemovedHandler).off("core.validator.validated", this.validatorValidatedHandler).off("core.validator.notvalidated", this.validatorNotValidatedHandler);
      }
    }, {
      key: "onFieldAdded",
      value: function onFieldAdded(e) {
        var _this2 = this;

        var t = e.elements;

        if (t) {
          t.forEach(function (e) {
            var t = _this2.messages.get(e);

            if (t) {
              t.parentNode.removeChild(t);

              _this2.messages["delete"](e);
            }
          });
          this.prepareFieldContainer(e.field, t);
        }
      }
    }, {
      key: "onFieldRemoved",
      value: function onFieldRemoved(e) {
        var _this3 = this;

        if (!e.elements.length || !e.field) {
          return;
        }

        var t = e.elements[0].getAttribute("type");
        var s = "radio" === t || "checkbox" === t ? [e.elements[0]] : e.elements;
        s.forEach(function (e) {
          if (_this3.messages.has(e)) {
            var _t = _this3.messages.get(e);

            _t.parentNode.removeChild(_t);

            _this3.messages["delete"](e);
          }
        });
      }
    }, {
      key: "prepareFieldContainer",
      value: function prepareFieldContainer(e, t) {
        var _this4 = this;

        if (t.length) {
          var _s = t[0].getAttribute("type");

          if ("radio" === _s || "checkbox" === _s) {
            this.prepareElementContainer(e, t[0], t);
          } else {
            t.forEach(function (s) {
              return _this4.prepareElementContainer(e, s, t);
            });
          }
        }
      }
    }, {
      key: "prepareElementContainer",
      value: function prepareElementContainer(e, s, i) {
        var a;

        if ("string" === typeof this.opts.container) {
          var _e2 = "#" === this.opts.container.charAt(0) ? "[id=\"".concat(this.opts.container.substring(1), "\"]") : this.opts.container;

          a = this.core.getFormElement().querySelector(_e2);
        } else {
          a = this.opts.container(e, s);
        }

        var l = document.createElement("div");
        a.appendChild(l);
        c(l, {
          "fv-plugins-message-container": true
        });
        this.core.emit("plugins.message.placed", {
          element: s,
          elements: i,
          field: e,
          messageElement: l
        });
        this.messages.set(s, l);
      }
    }, {
      key: "getMessage",
      value: function getMessage(e) {
        return typeof e.message === "string" ? e.message : e.message[this.core.getLocale()];
      }
    }, {
      key: "onValidatorValidated",
      value: function onValidatorValidated(e) {
        var s = e.elements;
        var i = e.element.getAttribute("type");
        var a = "radio" === i || "checkbox" === i ? s[0] : e.element;

        if (this.messages.has(a)) {
          var _s2 = this.messages.get(a);

          var _i = _s2.querySelector("[data-field=\"".concat(e.field, "\"][data-validator=\"").concat(e.validator, "\"]"));

          if (!_i && !e.result.valid) {
            var _i2 = document.createElement("div");

            _i2.innerHTML = this.getMessage(e.result);

            _i2.setAttribute("data-field", e.field);

            _i2.setAttribute("data-validator", e.validator);

            if (this.opts.clazz) {
              c(_i2, _defineProperty({}, this.opts.clazz, true));
            }

            _s2.appendChild(_i2);

            this.core.emit("plugins.message.displayed", {
              element: e.element,
              field: e.field,
              message: e.result.message,
              messageElement: _i2,
              meta: e.result.meta,
              validator: e.validator
            });
          } else if (_i && !e.result.valid) {
            _i.innerHTML = this.getMessage(e.result);
            this.core.emit("plugins.message.displayed", {
              element: e.element,
              field: e.field,
              message: e.result.message,
              messageElement: _i,
              meta: e.result.meta,
              validator: e.validator
            });
          } else if (_i && e.result.valid) {
            _s2.removeChild(_i);
          }
        }
      }
    }, {
      key: "onValidatorNotValidated",
      value: function onValidatorNotValidated(e) {
        var t = e.elements;
        var s = e.element.getAttribute("type");
        var i = "radio" === s || "checkbox" === s ? t[0] : e.element;

        if (this.messages.has(i)) {
          var _t3 = this.messages.get(i);

          var _s3 = _t3.querySelector("[data-field=\"".concat(e.field, "\"][data-validator=\"").concat(e.validator, "\"]"));

          if (_s3) {
            _t3.removeChild(_s3);
          }
        }
      }
    }, {
      key: "onElementIgnored",
      value: function onElementIgnored(e) {
        var t = e.elements;
        var s = e.element.getAttribute("type");
        var i = "radio" === s || "checkbox" === s ? t[0] : e.element;

        if (this.messages.has(i)) {
          var _t4 = this.messages.get(i);

          var _s4 = [].slice.call(_t4.querySelectorAll("[data-field=\"".concat(e.field, "\"]")));

          _s4.forEach(function (e) {
            _t4.removeChild(e);
          });
        }
      }
    }], [{
      key: "getClosestContainer",
      value: function getClosestContainer(e, t, s) {
        var i = e;

        while (i) {
          if (i === t) {
            break;
          }

          i = i.parentElement;

          if (s.test(i.className)) {
            break;
          }
        }

        return i;
      }
    }]);

    return s;
  }(t$e);

  var l$2 = /*#__PURE__*/function (_e) {
    _inherits(l, _e);

    var _super = _createSuper(l);

    function l(e) {
      var _this;

      _classCallCheck(this, l);

      _this = _super.call(this, e);
      _this.results = new Map();
      _this.containers = new Map();
      _this.opts = Object.assign({}, {
        defaultMessageContainer: true,
        eleInvalidClass: "",
        eleValidClass: "",
        rowClasses: "",
        rowValidatingClass: ""
      }, e);
      _this.elementIgnoredHandler = _this.onElementIgnored.bind(_assertThisInitialized(_this));
      _this.elementValidatingHandler = _this.onElementValidating.bind(_assertThisInitialized(_this));
      _this.elementValidatedHandler = _this.onElementValidated.bind(_assertThisInitialized(_this));
      _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_assertThisInitialized(_this));
      _this.iconPlacedHandler = _this.onIconPlaced.bind(_assertThisInitialized(_this));
      _this.fieldAddedHandler = _this.onFieldAdded.bind(_assertThisInitialized(_this));
      _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_assertThisInitialized(_this));
      _this.messagePlacedHandler = _this.onMessagePlaced.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(l, [{
      key: "install",
      value: function install() {
        var _t,
            _this2 = this;

        c(this.core.getFormElement(), (_t = {}, _defineProperty(_t, this.opts.formClass, true), _defineProperty(_t, "fv-plugins-framework", true), _t));
        this.core.on("core.element.ignored", this.elementIgnoredHandler).on("core.element.validating", this.elementValidatingHandler).on("core.element.validated", this.elementValidatedHandler).on("core.element.notvalidated", this.elementNotValidatedHandler).on("plugins.icon.placed", this.iconPlacedHandler).on("core.field.added", this.fieldAddedHandler).on("core.field.removed", this.fieldRemovedHandler);

        if (this.opts.defaultMessageContainer) {
          this.core.registerPlugin("___frameworkMessage", new s$5({
            clazz: this.opts.messageClass,
            container: function container(e, t) {
              var l = "string" === typeof _this2.opts.rowSelector ? _this2.opts.rowSelector : _this2.opts.rowSelector(e, t);
              var a = t$h(t, l);
              return s$5.getClosestContainer(t, a, _this2.opts.rowPattern);
            }
          }));
          this.core.on("plugins.message.placed", this.messagePlacedHandler);
        }
      }
    }, {
      key: "uninstall",
      value: function uninstall() {
        var _t2;

        this.results.clear();
        this.containers.clear();
        c(this.core.getFormElement(), (_t2 = {}, _defineProperty(_t2, this.opts.formClass, false), _defineProperty(_t2, "fv-plugins-framework", false), _t2));
        this.core.off("core.element.ignored", this.elementIgnoredHandler).off("core.element.validating", this.elementValidatingHandler).off("core.element.validated", this.elementValidatedHandler).off("core.element.notvalidated", this.elementNotValidatedHandler).off("plugins.icon.placed", this.iconPlacedHandler).off("core.field.added", this.fieldAddedHandler).off("core.field.removed", this.fieldRemovedHandler);

        if (this.opts.defaultMessageContainer) {
          this.core.off("plugins.message.placed", this.messagePlacedHandler);
        }
      }
    }, {
      key: "onIconPlaced",
      value: function onIconPlaced(e) {}
    }, {
      key: "onMessagePlaced",
      value: function onMessagePlaced(e) {}
    }, {
      key: "onFieldAdded",
      value: function onFieldAdded(e) {
        var _this3 = this;

        var s = e.elements;

        if (s) {
          s.forEach(function (e) {
            var s = _this3.containers.get(e);

            if (s) {
              var _t3;

              c(s, (_t3 = {}, _defineProperty(_t3, _this3.opts.rowInvalidClass, false), _defineProperty(_t3, _this3.opts.rowValidatingClass, false), _defineProperty(_t3, _this3.opts.rowValidClass, false), _defineProperty(_t3, "fv-plugins-icon-container", false), _t3));

              _this3.containers["delete"](e);
            }
          });
          this.prepareFieldContainer(e.field, s);
        }
      }
    }, {
      key: "onFieldRemoved",
      value: function onFieldRemoved(e) {
        var _this4 = this;

        e.elements.forEach(function (e) {
          var s = _this4.containers.get(e);

          if (s) {
            var _t4;

            c(s, (_t4 = {}, _defineProperty(_t4, _this4.opts.rowInvalidClass, false), _defineProperty(_t4, _this4.opts.rowValidatingClass, false), _defineProperty(_t4, _this4.opts.rowValidClass, false), _t4));
          }
        });
      }
    }, {
      key: "prepareFieldContainer",
      value: function prepareFieldContainer(e, t) {
        var _this5 = this;

        if (t.length) {
          var _s = t[0].getAttribute("type");

          if ("radio" === _s || "checkbox" === _s) {
            this.prepareElementContainer(e, t[0]);
          } else {
            t.forEach(function (t) {
              return _this5.prepareElementContainer(e, t);
            });
          }
        }
      }
    }, {
      key: "prepareElementContainer",
      value: function prepareElementContainer(e, i) {
        var l = "string" === typeof this.opts.rowSelector ? this.opts.rowSelector : this.opts.rowSelector(e, i);
        var a = t$h(i, l);

        if (a !== i) {
          var _t5;

          c(a, (_t5 = {}, _defineProperty(_t5, this.opts.rowClasses, true), _defineProperty(_t5, "fv-plugins-icon-container", true), _t5));
          this.containers.set(i, a);
        }
      }
    }, {
      key: "onElementValidating",
      value: function onElementValidating(e) {
        var s = e.elements;
        var i = e.element.getAttribute("type");
        var l = "radio" === i || "checkbox" === i ? s[0] : e.element;
        var a = this.containers.get(l);

        if (a) {
          var _t6;

          c(a, (_t6 = {}, _defineProperty(_t6, this.opts.rowInvalidClass, false), _defineProperty(_t6, this.opts.rowValidatingClass, true), _defineProperty(_t6, this.opts.rowValidClass, false), _t6));
        }
      }
    }, {
      key: "onElementNotValidated",
      value: function onElementNotValidated(e) {
        this.removeClasses(e.element, e.elements);
      }
    }, {
      key: "onElementIgnored",
      value: function onElementIgnored(e) {
        this.removeClasses(e.element, e.elements);
      }
    }, {
      key: "removeClasses",
      value: function removeClasses(e, s) {
        var _t7;

        var i = e.getAttribute("type");
        var l = "radio" === i || "checkbox" === i ? s[0] : e;
        c(l, (_t7 = {}, _defineProperty(_t7, this.opts.eleValidClass, false), _defineProperty(_t7, this.opts.eleInvalidClass, false), _t7));
        var a = this.containers.get(l);

        if (a) {
          var _t8;

          c(a, (_t8 = {}, _defineProperty(_t8, this.opts.rowInvalidClass, false), _defineProperty(_t8, this.opts.rowValidatingClass, false), _defineProperty(_t8, this.opts.rowValidClass, false), _t8));
        }
      }
    }, {
      key: "onElementValidated",
      value: function onElementValidated(e) {
        var _this6 = this;

        var s = e.elements;
        var i = e.element.getAttribute("type");
        var l = "radio" === i || "checkbox" === i ? s[0] : e.element;
        s.forEach(function (s) {
          var _t9;

          c(s, (_t9 = {}, _defineProperty(_t9, _this6.opts.eleValidClass, e.valid), _defineProperty(_t9, _this6.opts.eleInvalidClass, !e.valid), _t9));
        });
        var a = this.containers.get(l);

        if (a) {
          if (!e.valid) {
            var _t10;

            this.results.set(l, false);
            c(a, (_t10 = {}, _defineProperty(_t10, this.opts.rowInvalidClass, true), _defineProperty(_t10, this.opts.rowValidatingClass, false), _defineProperty(_t10, this.opts.rowValidClass, false), _t10));
          } else {
            this.results["delete"](l);
            var _e2 = true;
            this.containers.forEach(function (t, s) {
              if (t === a && _this6.results.get(s) === false) {
                _e2 = false;
              }
            });

            if (_e2) {
              var _t11;

              c(a, (_t11 = {}, _defineProperty(_t11, this.opts.rowInvalidClass, false), _defineProperty(_t11, this.opts.rowValidatingClass, false), _defineProperty(_t11, this.opts.rowValidClass, true), _t11));
            }
          }
        }
      }
    }]);

    return l;
  }(t$e);

  var i$1 = /*#__PURE__*/function (_e) {
    _inherits(i, _e);

    var _super = _createSuper(i);

    function i(e) {
      var _this;

      _classCallCheck(this, i);

      _this = _super.call(this, e);
      _this.icons = new Map();
      _this.opts = Object.assign({}, {
        invalid: "fv-plugins-icon--invalid",
        onPlaced: function onPlaced() {},
        onSet: function onSet() {},
        valid: "fv-plugins-icon--valid",
        validating: "fv-plugins-icon--validating"
      }, e);
      _this.elementValidatingHandler = _this.onElementValidating.bind(_assertThisInitialized(_this));
      _this.elementValidatedHandler = _this.onElementValidated.bind(_assertThisInitialized(_this));
      _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_assertThisInitialized(_this));
      _this.elementIgnoredHandler = _this.onElementIgnored.bind(_assertThisInitialized(_this));
      _this.fieldAddedHandler = _this.onFieldAdded.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(i, [{
      key: "install",
      value: function install() {
        this.core.on("core.element.validating", this.elementValidatingHandler).on("core.element.validated", this.elementValidatedHandler).on("core.element.notvalidated", this.elementNotValidatedHandler).on("core.element.ignored", this.elementIgnoredHandler).on("core.field.added", this.fieldAddedHandler);
      }
    }, {
      key: "uninstall",
      value: function uninstall() {
        this.icons.forEach(function (e) {
          return e.parentNode.removeChild(e);
        });
        this.icons.clear();
        this.core.off("core.element.validating", this.elementValidatingHandler).off("core.element.validated", this.elementValidatedHandler).off("core.element.notvalidated", this.elementNotValidatedHandler).off("core.element.ignored", this.elementIgnoredHandler).off("core.field.added", this.fieldAddedHandler);
      }
    }, {
      key: "onFieldAdded",
      value: function onFieldAdded(e) {
        var _this2 = this;

        var t = e.elements;

        if (t) {
          t.forEach(function (e) {
            var t = _this2.icons.get(e);

            if (t) {
              t.parentNode.removeChild(t);

              _this2.icons["delete"](e);
            }
          });
          this.prepareFieldIcon(e.field, t);
        }
      }
    }, {
      key: "prepareFieldIcon",
      value: function prepareFieldIcon(e, t) {
        var _this3 = this;

        if (t.length) {
          var _i = t[0].getAttribute("type");

          if ("radio" === _i || "checkbox" === _i) {
            this.prepareElementIcon(e, t[0]);
          } else {
            t.forEach(function (t) {
              return _this3.prepareElementIcon(e, t);
            });
          }
        }
      }
    }, {
      key: "prepareElementIcon",
      value: function prepareElementIcon(e, i) {
        var n = document.createElement("i");
        n.setAttribute("data-field", e);
        i.parentNode.insertBefore(n, i.nextSibling);
        c(n, {
          "fv-plugins-icon": true
        });
        var l = {
          classes: {
            invalid: this.opts.invalid,
            valid: this.opts.valid,
            validating: this.opts.validating
          },
          element: i,
          field: e,
          iconElement: n
        };
        this.core.emit("plugins.icon.placed", l);
        this.opts.onPlaced(l);
        this.icons.set(i, n);
      }
    }, {
      key: "onElementValidating",
      value: function onElementValidating(e) {
        var _this$setClasses;

        var t = this.setClasses(e.field, e.element, e.elements, (_this$setClasses = {}, _defineProperty(_this$setClasses, this.opts.invalid, false), _defineProperty(_this$setClasses, this.opts.valid, false), _defineProperty(_this$setClasses, this.opts.validating, true), _this$setClasses));
        var i = {
          element: e.element,
          field: e.field,
          iconElement: t,
          status: "Validating"
        };
        this.core.emit("plugins.icon.set", i);
        this.opts.onSet(i);
      }
    }, {
      key: "onElementValidated",
      value: function onElementValidated(e) {
        var _this$setClasses2;

        var t = this.setClasses(e.field, e.element, e.elements, (_this$setClasses2 = {}, _defineProperty(_this$setClasses2, this.opts.invalid, !e.valid), _defineProperty(_this$setClasses2, this.opts.valid, e.valid), _defineProperty(_this$setClasses2, this.opts.validating, false), _this$setClasses2));
        var i = {
          element: e.element,
          field: e.field,
          iconElement: t,
          status: e.valid ? "Valid" : "Invalid"
        };
        this.core.emit("plugins.icon.set", i);
        this.opts.onSet(i);
      }
    }, {
      key: "onElementNotValidated",
      value: function onElementNotValidated(e) {
        var _this$setClasses3;

        var t = this.setClasses(e.field, e.element, e.elements, (_this$setClasses3 = {}, _defineProperty(_this$setClasses3, this.opts.invalid, false), _defineProperty(_this$setClasses3, this.opts.valid, false), _defineProperty(_this$setClasses3, this.opts.validating, false), _this$setClasses3));
        var i = {
          element: e.element,
          field: e.field,
          iconElement: t,
          status: "NotValidated"
        };
        this.core.emit("plugins.icon.set", i);
        this.opts.onSet(i);
      }
    }, {
      key: "onElementIgnored",
      value: function onElementIgnored(e) {
        var _this$setClasses4;

        var t = this.setClasses(e.field, e.element, e.elements, (_this$setClasses4 = {}, _defineProperty(_this$setClasses4, this.opts.invalid, false), _defineProperty(_this$setClasses4, this.opts.valid, false), _defineProperty(_this$setClasses4, this.opts.validating, false), _this$setClasses4));
        var i = {
          element: e.element,
          field: e.field,
          iconElement: t,
          status: "Ignored"
        };
        this.core.emit("plugins.icon.set", i);
        this.opts.onSet(i);
      }
    }, {
      key: "setClasses",
      value: function setClasses(e, i, n, l) {
        var s = i.getAttribute("type");
        var d = "radio" === s || "checkbox" === s ? n[0] : i;

        if (this.icons.has(d)) {
          var _e2 = this.icons.get(d);

          c(_e2, l);
          return _e2;
        } else {
          return null;
        }
      }
    }]);

    return i;
  }(t$e);

  var i$2 = /*#__PURE__*/function (_e) {
    _inherits(i, _e);

    var _super = _createSuper(i);

    function i(e) {
      var _this;

      _classCallCheck(this, i);

      _this = _super.call(this, e);
      _this.invalidFields = new Map();
      _this.opts = Object.assign({}, {
        enabled: true
      }, e);
      _this.validatorHandler = _this.onValidatorValidated.bind(_assertThisInitialized(_this));
      _this.shouldValidateFilter = _this.shouldValidate.bind(_assertThisInitialized(_this));
      _this.fieldAddedHandler = _this.onFieldAdded.bind(_assertThisInitialized(_this));
      _this.elementNotValidatedHandler = _this.onElementNotValidated.bind(_assertThisInitialized(_this));
      _this.elementValidatingHandler = _this.onElementValidating.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(i, [{
      key: "install",
      value: function install() {
        this.core.on("core.validator.validated", this.validatorHandler).on("core.field.added", this.fieldAddedHandler).on("core.element.notvalidated", this.elementNotValidatedHandler).on("core.element.validating", this.elementValidatingHandler).registerFilter("field-should-validate", this.shouldValidateFilter);
      }
    }, {
      key: "uninstall",
      value: function uninstall() {
        this.invalidFields.clear();
        this.core.off("core.validator.validated", this.validatorHandler).off("core.field.added", this.fieldAddedHandler).off("core.element.notvalidated", this.elementNotValidatedHandler).off("core.element.validating", this.elementValidatingHandler).deregisterFilter("field-should-validate", this.shouldValidateFilter);
      }
    }, {
      key: "shouldValidate",
      value: function shouldValidate(e, i, t, l) {
        var d = (this.opts.enabled === true || this.opts.enabled[e] === true) && this.invalidFields.has(i) && !!this.invalidFields.get(i).length && this.invalidFields.get(i).indexOf(l) === -1;
        return !d;
      }
    }, {
      key: "onValidatorValidated",
      value: function onValidatorValidated(e) {
        var i = this.invalidFields.has(e.element) ? this.invalidFields.get(e.element) : [];
        var t = i.indexOf(e.validator);

        if (e.result.valid && t >= 0) {
          i.splice(t, 1);
        } else if (!e.result.valid && t === -1) {
          i.push(e.validator);
        }

        this.invalidFields.set(e.element, i);
      }
    }, {
      key: "onFieldAdded",
      value: function onFieldAdded(e) {
        if (e.elements) {
          this.clearInvalidFields(e.elements);
        }
      }
    }, {
      key: "onElementNotValidated",
      value: function onElementNotValidated(e) {
        this.clearInvalidFields(e.elements);
      }
    }, {
      key: "onElementValidating",
      value: function onElementValidating(e) {
        this.clearInvalidFields(e.elements);
      }
    }, {
      key: "clearInvalidFields",
      value: function clearInvalidFields(e) {
        var _this2 = this;

        e.forEach(function (e) {
          return _this2.invalidFields["delete"](e);
        });
      }
    }]);

    return i;
  }(t$e);

  var e$a = /*#__PURE__*/function (_t) {
    _inherits(e, _t);

    var _super = _createSuper(e);

    function e(t) {
      var _this;

      _classCallCheck(this, e);

      _this = _super.call(this, t);
      _this.isFormValid = false;
      _this.opts = Object.assign({}, {
        aspNetButton: false,
        buttons: function buttons(t) {
          return [].slice.call(t.querySelectorAll('[type="submit"]:not([formnovalidate])'));
        }
      }, t);
      _this.submitHandler = _this.handleSubmitEvent.bind(_assertThisInitialized(_this));
      _this.buttonClickHandler = _this.handleClickEvent.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(e, [{
      key: "install",
      value: function install() {
        var _this2 = this;

        if (!(this.core.getFormElement() instanceof HTMLFormElement)) {
          return;
        }

        var t = this.core.getFormElement();
        this.submitButtons = this.opts.buttons(t);
        t.setAttribute("novalidate", "novalidate");
        t.addEventListener("submit", this.submitHandler);
        this.hiddenClickedEle = document.createElement("input");
        this.hiddenClickedEle.setAttribute("type", "hidden");
        t.appendChild(this.hiddenClickedEle);
        this.submitButtons.forEach(function (t) {
          t.addEventListener("click", _this2.buttonClickHandler);
        });
      }
    }, {
      key: "uninstall",
      value: function uninstall() {
        var _this3 = this;

        var t = this.core.getFormElement();

        if (t instanceof HTMLFormElement) {
          t.removeEventListener("submit", this.submitHandler);
        }

        this.submitButtons.forEach(function (t) {
          t.removeEventListener("click", _this3.buttonClickHandler);
        });
        this.hiddenClickedEle.parentElement.removeChild(this.hiddenClickedEle);
      }
    }, {
      key: "handleSubmitEvent",
      value: function handleSubmitEvent(t) {
        this.validateForm(t);
      }
    }, {
      key: "handleClickEvent",
      value: function handleClickEvent(t) {
        var e = t.currentTarget;

        if (e instanceof HTMLElement) {
          if (this.opts.aspNetButton && this.isFormValid === true) ; else {
            var _e = this.core.getFormElement();

            _e.removeEventListener("submit", this.submitHandler);

            this.clickedButton = t.target;
            var i = this.clickedButton.getAttribute("name");
            var s = this.clickedButton.getAttribute("value");

            if (i && s) {
              this.hiddenClickedEle.setAttribute("name", i);
              this.hiddenClickedEle.setAttribute("value", s);
            }

            this.validateForm(t);
          }
        }
      }
    }, {
      key: "validateForm",
      value: function validateForm(t) {
        var _this4 = this;

        t.preventDefault();
        this.core.validate().then(function (t) {
          if (t === "Valid" && _this4.opts.aspNetButton && !_this4.isFormValid && _this4.clickedButton) {
            _this4.isFormValid = true;

            _this4.clickedButton.removeEventListener("click", _this4.buttonClickHandler);

            _this4.clickedButton.click();
          }
        });
      }
    }]);

    return e;
  }(t$e);

  var i$3 = /*#__PURE__*/function (_t) {
    _inherits(i, _t);

    var _super = _createSuper(i);

    function i(t) {
      var _this;

      _classCallCheck(this, i);

      _this = _super.call(this, t);
      _this.messages = new Map();
      _this.opts = Object.assign({}, {
        placement: "top",
        trigger: "click"
      }, t);
      _this.iconPlacedHandler = _this.onIconPlaced.bind(_assertThisInitialized(_this));
      _this.validatorValidatedHandler = _this.onValidatorValidated.bind(_assertThisInitialized(_this));
      _this.elementValidatedHandler = _this.onElementValidated.bind(_assertThisInitialized(_this));
      _this.documentClickHandler = _this.onDocumentClicked.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(i, [{
      key: "install",
      value: function install() {
        this.tip = document.createElement("div");
        c(this.tip, _defineProperty({
          "fv-plugins-tooltip": true
        }, "fv-plugins-tooltip--".concat(this.opts.placement), true));
        document.body.appendChild(this.tip);
        this.core.on("plugins.icon.placed", this.iconPlacedHandler).on("core.validator.validated", this.validatorValidatedHandler).on("core.element.validated", this.elementValidatedHandler);

        if ("click" === this.opts.trigger) {
          document.addEventListener("click", this.documentClickHandler);
        }
      }
    }, {
      key: "uninstall",
      value: function uninstall() {
        this.messages.clear();
        document.body.removeChild(this.tip);
        this.core.off("plugins.icon.placed", this.iconPlacedHandler).off("core.validator.validated", this.validatorValidatedHandler).off("core.element.validated", this.elementValidatedHandler);

        if ("click" === this.opts.trigger) {
          document.removeEventListener("click", this.documentClickHandler);
        }
      }
    }, {
      key: "onIconPlaced",
      value: function onIconPlaced(t) {
        var _this2 = this;

        c(t.iconElement, {
          "fv-plugins-tooltip-icon": true
        });

        switch (this.opts.trigger) {
          case "hover":
            t.iconElement.addEventListener("mouseenter", function (e) {
              return _this2.show(t.element, e);
            });
            t.iconElement.addEventListener("mouseleave", function (t) {
              return _this2.hide();
            });
            break;

          case "click":
          default:
            t.iconElement.addEventListener("click", function (e) {
              return _this2.show(t.element, e);
            });
            break;
        }
      }
    }, {
      key: "onValidatorValidated",
      value: function onValidatorValidated(t) {
        if (!t.result.valid) {
          var _e2 = t.elements;

          var _i = t.element.getAttribute("type");

          var s = "radio" === _i || "checkbox" === _i ? _e2[0] : t.element;
          var o = typeof t.result.message === "string" ? t.result.message : t.result.message[this.core.getLocale()];
          this.messages.set(s, o);
        }
      }
    }, {
      key: "onElementValidated",
      value: function onElementValidated(t) {
        if (t.valid) {
          var _e3 = t.elements;

          var _i2 = t.element.getAttribute("type");

          var s = "radio" === _i2 || "checkbox" === _i2 ? _e3[0] : t.element;
          this.messages["delete"](s);
        }
      }
    }, {
      key: "onDocumentClicked",
      value: function onDocumentClicked(t) {
        this.hide();
      }
    }, {
      key: "show",
      value: function show(t, i) {
        i.preventDefault();
        i.stopPropagation();

        if (!this.messages.has(t)) {
          return;
        }

        c(this.tip, {
          "fv-plugins-tooltip--hide": false
        });
        this.tip.innerHTML = "<div class=\"fv-plugins-tooltip__content\">".concat(this.messages.get(t), "</div>");
        var s = i.target;
        var o = s.getBoundingClientRect();

        var _this$tip$getBounding = this.tip.getBoundingClientRect(),
            l = _this$tip$getBounding.height,
            n = _this$tip$getBounding.width;

        var a = 0;
        var d = 0;

        switch (this.opts.placement) {
          case "bottom":
            a = o.top + o.height;
            d = o.left + o.width / 2 - n / 2;
            break;

          case "bottom-left":
            a = o.top + o.height;
            d = o.left;
            break;

          case "bottom-right":
            a = o.top + o.height;
            d = o.left + o.width - n;
            break;

          case "left":
            a = o.top + o.height / 2 - l / 2;
            d = o.left - n;
            break;

          case "right":
            a = o.top + o.height / 2 - l / 2;
            d = o.left + o.width;
            break;

          case "top-left":
            a = o.top - l;
            d = o.left;
            break;

          case "top-right":
            a = o.top - l;
            d = o.left + o.width - n;
            break;

          case "top":
          default:
            a = o.top - l;
            d = o.left + o.width / 2 - n / 2;
            break;
        }

        var c$1 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        var r = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
        a = a + c$1;
        d = d + r;
        this.tip.setAttribute("style", "top: ".concat(a, "px; left: ").concat(d, "px"));
      }
    }, {
      key: "hide",
      value: function hide() {
        c(this.tip, {
          "fv-plugins-tooltip--hide": true
        });
      }
    }]);

    return i;
  }(t$e);

  var t$i = /*#__PURE__*/function (_e) {
    _inherits(t, _e);

    var _super = _createSuper(t);

    function t(e) {
      var _this;

      _classCallCheck(this, t);

      _this = _super.call(this, e);
      _this.handlers = [];
      _this.timers = new Map();

      var _t = document.createElement("div");

      _this.defaultEvent = !("oninput" in _t) ? "keyup" : "input";
      _this.opts = Object.assign({}, {
        delay: 0,
        event: _this.defaultEvent,
        threshold: 0
      }, e);
      _this.fieldAddedHandler = _this.onFieldAdded.bind(_assertThisInitialized(_this));
      _this.fieldRemovedHandler = _this.onFieldRemoved.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(t, [{
      key: "install",
      value: function install() {
        this.core.on("core.field.added", this.fieldAddedHandler).on("core.field.removed", this.fieldRemovedHandler);
      }
    }, {
      key: "uninstall",
      value: function uninstall() {
        this.handlers.forEach(function (e) {
          return e.element.removeEventListener(e.event, e.handler);
        });
        this.handlers = [];
        this.timers.forEach(function (e) {
          return window.clearTimeout(e);
        });
        this.timers.clear();
        this.core.off("core.field.added", this.fieldAddedHandler).off("core.field.removed", this.fieldRemovedHandler);
      }
    }, {
      key: "prepareHandler",
      value: function prepareHandler(e, t) {
        var _this2 = this;

        t.forEach(function (t) {
          var i = [];

          if (!!_this2.opts.event && _this2.opts.event[e] === false) {
            i = [];
          } else if (!!_this2.opts.event && !!_this2.opts.event[e]) {
            i = _this2.opts.event[e].split(" ");
          } else if ("string" === typeof _this2.opts.event && _this2.opts.event !== _this2.defaultEvent) {
            i = _this2.opts.event.split(" ");
          } else {
            var _e2 = t.getAttribute("type");

            var s = t.tagName.toLowerCase();
            var n = "radio" === _e2 || "checkbox" === _e2 || "file" === _e2 || "select" === s ? "change" : _this2.ieVersion >= 10 && t.getAttribute("placeholder") ? "keyup" : _this2.defaultEvent;
            i = [n];
          }

          i.forEach(function (i) {
            var s = function s(i) {
              return _this2.handleEvent(i, e, t);
            };

            _this2.handlers.push({
              element: t,
              event: i,
              field: e,
              handler: s
            });

            t.addEventListener(i, s);
          });
        });
      }
    }, {
      key: "handleEvent",
      value: function handleEvent(e, t, i) {
        var _this3 = this;

        if (this.exceedThreshold(t, i) && this.core.executeFilter("plugins-trigger-should-validate", true, [t, i])) {
          var s = function s() {
            return _this3.core.validateElement(t, i).then(function (s) {
              _this3.core.emit("plugins.trigger.executed", {
                element: i,
                event: e,
                field: t
              });
            });
          };

          var n = this.opts.delay[t] || this.opts.delay;

          if (n === 0) {
            s();
          } else {
            var _e3 = this.timers.get(i);

            if (_e3) {
              window.clearTimeout(_e3);
            }

            this.timers.set(i, window.setTimeout(s, n * 1e3));
          }
        }
      }
    }, {
      key: "onFieldAdded",
      value: function onFieldAdded(e) {
        this.handlers.filter(function (t) {
          return t.field === e.field;
        }).forEach(function (e) {
          return e.element.removeEventListener(e.event, e.handler);
        });
        this.prepareHandler(e.field, e.elements);
      }
    }, {
      key: "onFieldRemoved",
      value: function onFieldRemoved(e) {
        this.handlers.filter(function (t) {
          return t.field === e.field && e.elements.indexOf(t.element) >= 0;
        }).forEach(function (e) {
          return e.element.removeEventListener(e.event, e.handler);
        });
      }
    }, {
      key: "exceedThreshold",
      value: function exceedThreshold(e, t) {
        var i = this.opts.threshold[e] === 0 || this.opts.threshold === 0 ? false : this.opts.threshold[e] || this.opts.threshold;

        if (!i) {
          return true;
        }

        var s = t.getAttribute("type");

        if (["button", "checkbox", "file", "hidden", "image", "radio", "reset", "submit"].indexOf(s) !== -1) {
          return true;
        }

        var n = this.core.getElementValue(e, t);
        return n.length >= i;
      }
    }]);

    return t;
  }(t$e);

  var index$2 = {
    Alias: e$6,
    Aria: i,
    Declarative: t$f,
    DefaultSubmit: o$3,
    Dependency: e$7,
    Excluded: e$8,
    FieldStatus: t$g,
    Framework: l$2,
    Icon: i$1,
    Message: s$5,
    Sequence: i$2,
    SubmitButton: e$a,
    Tooltip: i$3,
    Trigger: t$i
  };

  function s$6(s, t) {
    return s.classList ? s.classList.contains(t) : new RegExp("(^| )".concat(t, "( |$)"), "gi").test(s.className);
  }

  var index$3 = {
    call: t$6,
    classSet: c,
    closest: t$h,
    fetch: e$4,
    format: r,
    hasClass: s$6,
    isValidDate: t$9
  };

  var p = {};

  exports.Plugin = t$e;
  exports.algorithms = index;
  exports.filters = index$1;
  exports.formValidation = r$2;
  exports.locales = p;
  exports.plugins = index$2;
  exports.utils = index$3;
  exports.validators = s$3;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
