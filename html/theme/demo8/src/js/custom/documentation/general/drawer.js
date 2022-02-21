"use strict";

// Class definition
var KTGeneralDrawerDemos = function() {
    // Private functions
    var _exampleBasic = function() {
    }

    return {
        // Public Functions
        init: function() {
            _exampleBasic();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTGeneralDrawerDemos.init();
});
