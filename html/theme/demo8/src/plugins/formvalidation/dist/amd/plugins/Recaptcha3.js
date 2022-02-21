var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../core/Plugin", "../utils/fetch"], function (require, exports, Plugin_1, fetch_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Recaptcha3 = (function (_super) {
        __extends(Recaptcha3, _super);
        function Recaptcha3(opts) {
            var _this = _super.call(this, opts) || this;
            _this.opts = Object.assign({}, { minimumScore: 0 }, opts);
            _this.iconPlacedHandler = _this.onIconPlaced.bind(_this);
            return _this;
        }
        Recaptcha3.prototype.install = function () {
            var _this = this;
            this.core.on('plugins.icon.placed', this.iconPlacedHandler);
            var loadPrevCaptcha = typeof window[Recaptcha3.LOADED_CALLBACK] === 'undefined'
                ? function () { }
                : window[Recaptcha3.LOADED_CALLBACK];
            window[Recaptcha3.LOADED_CALLBACK] = function () {
                loadPrevCaptcha();
                var tokenField = document.createElement('input');
                tokenField.setAttribute('type', 'hidden');
                tokenField.setAttribute('name', Recaptcha3.CAPTCHA_FIELD);
                document.getElementById(_this.opts.element).appendChild(tokenField);
                _this.core.addField(Recaptcha3.CAPTCHA_FIELD, {
                    validators: {
                        promise: {
                            message: _this.opts.message,
                            promise: function (_input) {
                                return new Promise(function (resolve, reject) {
                                    window['grecaptcha']
                                        .execute(_this.opts.siteKey, {
                                        action: _this.opts.action,
                                    })
                                        .then(function (token) {
                                        var _a;
                                        fetch_1.default(_this.opts.backendVerificationUrl, {
                                            method: 'POST',
                                            params: (_a = {},
                                                _a[Recaptcha3.CAPTCHA_FIELD] = token,
                                                _a),
                                        })
                                            .then(function (response) {
                                            var isValid = "" + response.success ===
                                                'true' &&
                                                response.score >=
                                                    _this.opts
                                                        .minimumScore;
                                            resolve({
                                                message: response.message ||
                                                    _this.opts.message,
                                                meta: response,
                                                valid: isValid,
                                            });
                                        })
                                            .catch(function (_) {
                                            reject({
                                                valid: false,
                                            });
                                        });
                                    });
                                });
                            },
                        },
                    },
                });
            };
            var src = this.getScript();
            if (!document.body.querySelector("script[src=\"" + src + "\"]")) {
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.async = true;
                script.defer = true;
                script.src = src;
                document.body.appendChild(script);
            }
        };
        Recaptcha3.prototype.uninstall = function () {
            this.core.off('plugins.icon.placed', this.iconPlacedHandler);
            var src = this.getScript();
            var scripts = [].slice.call(document.body.querySelectorAll("script[src=\"" + src + "\"]"));
            scripts.forEach(function (s) { return s.parentNode.removeChild(s); });
            this.core.removeField(Recaptcha3.CAPTCHA_FIELD);
        };
        Recaptcha3.prototype.getScript = function () {
            var lang = this.opts.language ? "&hl=" + this.opts.language : '';
            return ('https://www.google.com/recaptcha/api.js?' +
                ("onload=" + Recaptcha3.LOADED_CALLBACK + "&render=" + this.opts.siteKey + lang));
        };
        Recaptcha3.prototype.onIconPlaced = function (e) {
            if (e.field === Recaptcha3.CAPTCHA_FIELD) {
                e.iconElement.style.display = 'none';
            }
        };
        Recaptcha3.CAPTCHA_FIELD = '___g-recaptcha-token___';
        Recaptcha3.LOADED_CALLBACK = '___reCaptcha3Loaded___';
        return Recaptcha3;
    }(Plugin_1.default));
    exports.default = Recaptcha3;
});
