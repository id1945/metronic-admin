"use strict";

// Class definition
var KTFormsDialerDemos = function() {
    // Private functions
    var example1 = function(element) {
        // Dialer container element
        var dialerElement = document.querySelector("#kt_dialer_example_1");

        // Create dialer object and initialize a new instance
        var dialerObject = new KTDialer(dialerElement, {
            min: 1000,
            max: 50000,
            step: 1000,
            prefix: "$",
            decimals: 2
        });
    }

    return {
        // Public Functions
        init: function(element) {
            example1();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTFormsDialerDemos.init();
});
