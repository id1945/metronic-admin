define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function format(message, parameters) {
        var params = Array.isArray(parameters) ? parameters : [parameters];
        var output = message;
        params.forEach(function (p) {
            output = output.replace('%s', p);
        });
        return output;
    }
    exports.default = format;
});
