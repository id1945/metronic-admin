define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function integer() {
        return {
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                var opts = Object.assign({}, {
                    decimalSeparator: '.',
                    thousandsSeparator: '',
                }, input.options);
                var decimalSeparator = opts.decimalSeparator === '.' ? '\\.' : opts.decimalSeparator;
                var thousandsSeparator = opts.thousandsSeparator === '.'
                    ? '\\.'
                    : opts.thousandsSeparator;
                var testRegexp = new RegExp("^-?[0-9]{1,3}(" + thousandsSeparator + "[0-9]{3})*(" + decimalSeparator + "[0-9]+)?$");
                var thousandsReplacer = new RegExp(thousandsSeparator, 'g');
                var v = "" + input.value;
                if (!testRegexp.test(v)) {
                    return { valid: false };
                }
                if (thousandsSeparator) {
                    v = v.replace(thousandsReplacer, '');
                }
                if (decimalSeparator) {
                    v = v.replace(decimalSeparator, '.');
                }
                var n = parseFloat(v);
                return { valid: !isNaN(n) && isFinite(n) && Math.floor(n) === n };
            },
        };
    }
    exports.default = integer;
});
