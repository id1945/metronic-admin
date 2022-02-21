define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getFieldValue(form, field, element, elements) {
        var type = (element.getAttribute('type') || '').toLowerCase();
        var tagName = element.tagName.toLowerCase();
        if (tagName === 'textarea') {
            return element.value;
        }
        if (tagName === 'select') {
            var select = element;
            var index = select.selectedIndex;
            return index >= 0 ? select.options.item(index).value : '';
        }
        if (tagName === 'input') {
            if ('radio' === type || 'checkbox' === type) {
                var checked = elements.filter(function (ele) { return ele.checked; }).length;
                return checked === 0 ? '' : checked + '';
            }
            else {
                return element.value;
            }
        }
        return '';
    }
    exports.default = getFieldValue;
});
