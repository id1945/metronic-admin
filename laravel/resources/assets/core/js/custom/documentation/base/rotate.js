"use strict";

// Class definition
var KTBaseRotateDemos = function() {
    // Private functions
    var _example1 = function(element) {
        // Element to indecate
        var button = document.querySelector("#kt_button_1");

        // Handle button click event
        button.addEventListener("click", function() {
            button.classList.toggle("active");              
        });
    }

    var _example2 = function(element) {
        // Element to indecate
        var button = document.querySelector("#kt_button_2");

        // Handle button click event
        button.addEventListener("click", function() {
            button.classList.toggle("active");               
        });
    }

    var _example3 = function(element) {
        // Element to indecate
        var button = document.querySelector("#kt_button_3");

        // Handle button click event
        button.addEventListener("click", function() {
            button.classList.toggle("active");              
        });
    }
    

    return {
        // Public Functions
        init: function(element) {
            _example1();
            _example2();
            _example3();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTBaseRotateDemos.init();
});