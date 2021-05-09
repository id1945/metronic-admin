define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getFieldValue(form, field, element, elements) {
        var type = (element.getAttribute('type') || '').toLowerCase();
        var tagName = element.tagName.toLowerCase();
        switch (tagName) {
            case 'textarea':
                return element.value;
            case 'select':
                var select = element;
                var index = select.selectedIndex;
                return (index >= 0) ? select.options.item(index).value : '';
            case 'input':
                if ('radio' === type || 'checkbox' === type) {
                    var checked = elements.filter(function (ele) { return ele.checked; }).length;
                    return checked === 0 ? '' : checked + '';
                }
                else {
                    return element.value;
                }
            default:
                return '';
        }
    }
    exports.default = getFieldValue;
});
