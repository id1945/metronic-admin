define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function hasClass(element, clazz) {
        return element.classList
            ? element.classList.contains(clazz)
            : new RegExp("(^| )" + clazz + "( |$)", 'gi').test(element.className);
    }
    exports.default = hasClass;
});
