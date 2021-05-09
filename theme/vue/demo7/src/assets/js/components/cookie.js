"use strict";

import KTUtil from "./util";
// DOCS: https://javascript.info/cookie

// Component Definition
var KTCookie = function() {
  return {
    // returns the cookie with the given name,
    // or undefined if not found
    getCookie: function(name) {
      var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    },
    // Please note that a cookie value is encoded,
    // so getCookie uses a built-in decodeURIComponent function to decode it.
    setCookie: function(name, value, options) {
      if (!options) {
          options = {};
      }

      options = Object.assign({}, {path: '/'}, options);

      if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
      }

      var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

      for (var optionKey in options) {
        if (!options.hasOwnProperty(optionKey)) {
          continue;
        }
        updatedCookie += "; " + optionKey;
        var optionValue = options[optionKey];
        if (optionValue !== true) {
          updatedCookie += "=" + optionValue;
        }
      }

      document.cookie = updatedCookie;
    },
    // To delete a cookie, we can call it with a negative expiration date:
    deleteCookie: function(name) {
      setCookie(name, "", {
        'max-age': -1
      })
    }
  }
}();

// webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = KTCookie;
}

export default KTCookie;