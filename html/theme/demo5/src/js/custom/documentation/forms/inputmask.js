"use strict";

// Class definition
var KTFormsInputmaskDemos = function() {
    // Private functions
    var _examples = function() {
        // Date
        Inputmask({
            "mask" : "99/99/9999"
        }).mask("#kt_inputmask_1");

        // Phone 
        Inputmask({
            "mask" : "(999) 999-9999"
        }).mask("#kt_inputmask_2");

        // Placeholder 
        Inputmask({
            "mask" : "(999) 999-9999",
            "placeholder": "(999) 999-9999",
        }).mask("#kt_inputmask_3");

        // Repeating 
        Inputmask({
            "mask": "9",
            "repeat": 10,
            "greedy": false
        }).mask("#kt_inputmask_4");

        // Right aligned 
        Inputmask("decimal", {
            "rightAlignNumerics": false
        }).mask("#kt_inputmask_5");

        // Currency
        Inputmask("€ 999.999.999,99", {
            "numericInput": true
        }).mask("#kt_inputmask_6");

        // Ip address
        Inputmask({
            "mask": "999.999.999.999"
        }).mask("#kt_inputmask_7");

        // Email address
        Inputmask({
            mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
            greedy: false,
            onBeforePaste: function (pastedValue, opts) {
                pastedValue = pastedValue.toLowerCase();
                return pastedValue.replace("mailto:", "");
            },
            definitions: {
                "*": {
                    validator: '[0-9A-Za-z!#$%&"*+/=?^_`{|}~\-]',
                    cardinality: 1,
                    casing: "lower"
                }
            }
        }).mask("#kt_inputmask_8");
    }

    return {
        // Public Functions
        init: function(element) {
            _examples();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTFormsInputmaskDemos.init();
});
