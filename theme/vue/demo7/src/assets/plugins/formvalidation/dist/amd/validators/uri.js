define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function uri() {
        var DEFAULT_OPTIONS = {
            allowEmptyProtocol: false,
            allowLocal: false,
            protocol: 'http, https, ftp',
        };
        return {
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                var opts = Object.assign({}, DEFAULT_OPTIONS, input.options);
                var allowLocal = opts.allowLocal === true || "" + opts.allowLocal === 'true';
                var allowEmptyProtocol = opts.allowEmptyProtocol === true || "" + opts.allowEmptyProtocol === 'true';
                var protocol = opts.protocol.split(',').join('|').replace(/\s/g, '');
                var urlExp = new RegExp("^" +
                    "(?:(?:" + protocol + ")://)" +
                    (allowEmptyProtocol ? '?' : '') +
                    "(?:\\S+(?::\\S*)?@)?" +
                    "(?:" +
                    (allowLocal
                        ? ''
                        : ("(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
                            "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
                            "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})")) +
                    "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
                    "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
                    "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
                    "|" +
                    "(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)" +
                    "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*" +
                    "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
                    (allowLocal ? '?' : '') +
                    ")" +
                    "(?::\\d{2,5})?" +
                    "(?:/[^\\s]*)?$", "i");
                return { valid: urlExp.test(input.value) };
            },
        };
    }
    exports.default = uri;
});
