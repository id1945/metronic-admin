"use strict";

// Class definition
var KTLayoutAside = function () {
    // Private variables
    var toggle;
    var aside;

    // Private functions
    var handleToggle = function () {
       var toggleObj = KTToggle.getInstance(toggle);

       // Add a class to prevent aside hover effect after toggle click
       toggleObj.on('kt.toggle.change', function() {
           aside.classList.add('animating');

           setTimeout(function() {
                aside.classList.remove('animating');
           }, 300);
       })
    }

    // Public methods
    return {
        init: function () {
            // Elements
            aside = document.querySelector('#kt_aside');
            toggle = document.querySelector('#kt_aside_toggle');

            if (!aside || !toggle) {
                return;
            }

            handleToggle();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTLayoutAside.init();
});