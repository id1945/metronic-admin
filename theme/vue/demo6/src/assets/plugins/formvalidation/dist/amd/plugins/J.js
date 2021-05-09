define(["require", "exports", "jquery", "../core/Core"], function (require, exports, jquery_1, Core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var version = jquery_1.default.fn.jquery.split(' ')[0].split('.');
    if ((+version[0] < 2 && +version[1] < 9) || (+version[0] === 1 && +version[1] === 9 && +version[2] < 1)) {
        throw new Error('The J plugin requires jQuery version 1.9.1 or higher');
    }
    jquery_1.default.fn['formValidation'] = function (options) {
        var params = arguments;
        return this.each(function () {
            var $this = jquery_1.default(this);
            var data = $this.data('formValidation');
            var opts = 'object' === typeof options && options;
            if (!data) {
                data = Core_1.default(this, opts);
                $this.data('formValidation', data)
                    .data('FormValidation', data);
            }
            if ('string' === typeof options) {
                data[options].apply(data, Array.prototype.slice.call(params, 1));
            }
        });
    };
});
