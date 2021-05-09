define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function fetch(url, options) {
        var toQuery = function (obj) {
            return Object.keys(obj).map(function (k) { return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]); }).join('&');
        };
        return new Promise(function (resolve, reject) {
            var opts = Object.assign({}, {
                crossDomain: false,
                headers: {},
                method: 'GET',
                params: {},
            }, options);
            var params = Object.keys(opts.params)
                .map(function (k) { return encodeURIComponent(k) + "=" + encodeURIComponent(opts.params[k]); })
                .join('&');
            var hasQuery = url.indexOf('?');
            var requestUrl = ('GET' === opts.method) ? "" + url + (hasQuery ? '?' : '&') + params : url;
            if (opts.crossDomain) {
                var script_1 = document.createElement('script');
                var callback_1 = "___fetch" + Date.now() + "___";
                window[callback_1] = function (data) {
                    delete window[callback_1];
                    resolve(data);
                };
                script_1.src = "" + requestUrl + (hasQuery ? '&' : '?') + "callback=" + callback_1;
                script_1.async = true;
                script_1.addEventListener('load', function () {
                    script_1.parentNode.removeChild(script_1);
                });
                script_1.addEventListener('error', function () { return reject; });
                document.head.appendChild(script_1);
            }
            else {
                var request_1 = new XMLHttpRequest();
                request_1.open(opts.method, requestUrl);
                request_1.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                if ('POST' === opts.method) {
                    request_1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                }
                Object.keys(opts.headers).forEach(function (k) { return request_1.setRequestHeader(k, opts.headers[k]); });
                request_1.addEventListener('load', function () {
                    resolve(JSON.parse(this.responseText));
                });
                request_1.addEventListener('error', function () { return reject; });
                request_1.send(toQuery(opts.params));
            }
        });
    }
    exports.default = fetch;
});
