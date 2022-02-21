define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function matches(element, selector) {
        var nativeMatches = element.matches ||
            element.webkitMatchesSelector ||
            element['mozMatchesSelector'] ||
            element['msMatchesSelector'];
        if (nativeMatches) {
            return nativeMatches.call(element, selector);
        }
        var nodes = [].slice.call(element.parentElement.querySelectorAll(selector));
        return nodes.indexOf(element) >= 0;
    }
    function closest(element, selector) {
        var ele = element;
        while (ele) {
            if (matches(ele, selector)) {
                break;
            }
            ele = ele.parentElement;
        }
        return ele;
    }
    exports.default = closest;
});
