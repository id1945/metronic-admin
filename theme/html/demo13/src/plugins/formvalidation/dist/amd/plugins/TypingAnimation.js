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
define(["require", "exports", "../core/Plugin"], function (require, exports, Plugin_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TypingAnimation = (function (_super) {
        __extends(TypingAnimation, _super);
        function TypingAnimation(opts) {
            var _this = _super.call(this, opts) || this;
            _this.opts = Object.assign({}, {
                autoPlay: true,
            }, opts);
            return _this;
        }
        TypingAnimation.prototype.install = function () {
            this.fields = Object.keys(this.core.getFields());
            if (this.opts.autoPlay) {
                this.play();
            }
        };
        TypingAnimation.prototype.play = function () {
            return this.animate(0);
        };
        TypingAnimation.prototype.animate = function (fieldIndex) {
            var _this = this;
            if (fieldIndex >= this.fields.length) {
                return Promise.resolve(fieldIndex);
            }
            var field = this.fields[fieldIndex];
            var ele = this.core.getElements(field)[0];
            var inputType = ele.getAttribute('type');
            var samples = this.opts.data[field];
            if ('checkbox' === inputType || 'radio' === inputType) {
                ele.checked = true;
                ele.setAttribute('checked', 'true');
                return this.core.revalidateField(field).then(function (status) {
                    return _this.animate(fieldIndex + 1);
                });
            }
            else if (!samples) {
                return this.animate(fieldIndex + 1);
            }
            else {
                return new Promise(function (resolve) {
                    return new Typed(ele, {
                        attr: 'value',
                        autoInsertCss: true,
                        bindInputFocusEvents: true,
                        onComplete: function () {
                            resolve(fieldIndex + 1);
                        },
                        onStringTyped: function (arrayPos, self) {
                            ele.value = samples[arrayPos];
                            _this.core.revalidateField(field);
                        },
                        strings: samples,
                        typeSpeed: 100,
                    });
                }).then(function (nextFieldIndex) {
                    return _this.animate(nextFieldIndex);
                });
            }
        };
        return TypingAnimation;
    }(Plugin_1.default));
    exports.default = TypingAnimation;
});
