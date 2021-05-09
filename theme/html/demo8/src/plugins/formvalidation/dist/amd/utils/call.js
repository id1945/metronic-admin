define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function call(functionName, args) {
        if ('function' === typeof functionName) {
            return functionName.apply(this, args);
        }
        else if ('string' === typeof functionName) {
            var name_1 = functionName;
            if ('()' === name_1.substring(name_1.length - 2)) {
                name_1 = name_1.substring(0, name_1.length - 2);
            }
            var ns = name_1.split('.');
            var func = ns.pop();
            var context_1 = window;
            for (var _i = 0, ns_1 = ns; _i < ns_1.length; _i++) {
                var t = ns_1[_i];
                context_1 = context_1[t];
            }
            return (typeof context_1[func] === 'undefined') ? null : context_1[func].apply(this, args);
        }
    }
    exports.default = call;
});
