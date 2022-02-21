define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function addClass(element, classes) {
        classes.split(' ').forEach(function (clazz) {
            if (element.classList) {
                element.classList.add(clazz);
            }
            else if ((" " + element.className + " ").indexOf(" " + clazz + " ")) {
                element.className += " " + clazz;
            }
        });
    }
    function removeClass(element, classes) {
        classes.split(' ').forEach(function (clazz) {
            element.classList
                ? element.classList.remove(clazz)
                : (element.className = element.className.replace(clazz, ''));
        });
    }
    function classSet(element, classes) {
        var adding = [];
        var removing = [];
        Object.keys(classes).forEach(function (clazz) {
            if (clazz) {
                classes[clazz] ? adding.push(clazz) : removing.push(clazz);
            }
        });
        removing.forEach(function (clazz) { return removeClass(element, clazz); });
        adding.forEach(function (clazz) { return addClass(element, clazz); });
    }
    exports.default = classSet;
});
