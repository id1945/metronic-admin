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
define(["require", "exports", "../core/Plugin", "./Alias"], function (require, exports, Plugin_1, Alias_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Mailgun = (function (_super) {
        __extends(Mailgun, _super);
        function Mailgun(opts) {
            var _this = _super.call(this, opts) || this;
            _this.opts = Object.assign({}, { suggestion: false }, opts);
            _this.messageDisplayedHandler = _this.onMessageDisplayed.bind(_this);
            return _this;
        }
        Mailgun.prototype.install = function () {
            if (this.opts.suggestion) {
                this.core.on('plugins.message.displayed', this.messageDisplayedHandler);
            }
            var aliasOpts = {
                mailgun: 'remote',
            };
            this.core
                .registerPlugin('___mailgunAlias', new Alias_1.default(aliasOpts))
                .addField(this.opts.field, {
                validators: {
                    mailgun: {
                        crossDomain: true,
                        data: {
                            api_key: this.opts.apiKey,
                        },
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        message: this.opts.message,
                        name: 'address',
                        url: 'https://api.mailgun.net/v3/address/validate',
                        validKey: 'is_valid',
                    },
                },
            });
        };
        Mailgun.prototype.uninstall = function () {
            if (this.opts.suggestion) {
                this.core.off('plugins.message.displayed', this.messageDisplayedHandler);
            }
            this.core.removeField(this.opts.field);
        };
        Mailgun.prototype.onMessageDisplayed = function (e) {
            if (e.field === this.opts.field && 'mailgun' === e.validator && e.meta && e.meta.did_you_mean) {
                e.messageElement.innerHTML = "Did you mean " + e.meta.did_you_mean + "?";
            }
        };
        return Mailgun;
    }(Plugin_1.default));
    exports.default = Mailgun;
});
