define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function emitter() {
        return {
            fns: {},
            clear: function () {
                this.fns = {};
            },
            emit: function (event) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                (this.fns[event] || []).map(function (handler) { return handler.apply(handler, args); });
            },
            off: function (event, func) {
                if (this.fns[event]) {
                    var index = this.fns[event].indexOf(func);
                    if (index >= 0) {
                        this.fns[event].splice(index, 1);
                    }
                }
            },
            on: function (event, func) {
                (this.fns[event] = this.fns[event] || []).push(func);
            },
        };
    }
    exports.default = emitter;
});
