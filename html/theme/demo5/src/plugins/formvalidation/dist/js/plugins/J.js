/**
 * FormValidation (https://formvalidation.io), v1.8.1 (1a099ec)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

(function (o) {
  'use strict';

  o = o && Object.prototype.hasOwnProperty.call(o, 'default') ? o['default'] : o;

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  var t = FormValidation.formValidation;

  var r = o.fn.jquery.split(" ")[0].split(".");

  if (+r[0] < 2 && +r[1] < 9 || +r[0] === 1 && +r[1] === 9 && +r[2] < 1) {
    throw new Error("The J plugin requires jQuery version 1.9.1 or higher");
  }

  o.fn["formValidation"] = function (r) {
    var i = arguments;
    return this.each(function () {
      var e = o(this);
      var n = e.data("formValidation");
      var a = "object" === _typeof(r) && r;

      if (!n) {
        n = t(this, a);
        e.data("formValidation", n).data("FormValidation", n);
      }

      if ("string" === typeof r) {
        n[r].apply(n, Array.prototype.slice.call(i, 1));
      }
    });
  };

}(jQuery));
