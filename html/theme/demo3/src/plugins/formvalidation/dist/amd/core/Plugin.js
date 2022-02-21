define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Plugin = (function () {
        function Plugin(opts) {
            this.opts = opts;
        }
        Plugin.prototype.setCore = function (core) {
            this.core = core;
            return this;
        };
        Plugin.prototype.install = function () { };
        Plugin.prototype.uninstall = function () { };
        return Plugin;
    }());
    exports.default = Plugin;
});
