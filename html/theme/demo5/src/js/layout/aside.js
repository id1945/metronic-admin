"use strict";

// Class definition
var KTLayoutAside = function () {
    // Private variables
    var toggle;
    var aside;

    // Private functions
    var handleCategoriesCollapse = function () {
        document.querySelector('#kt_aside_categories_toggle').addEventListener('click', function (e) {
            e.preventDefault();
            
            if (this.innerHTML === "More Categories") {
                this.innerHTML = "Less Categories";
            } else {
                this.innerHTML = "More Categories";
            }
        })
    }

    // Public methods
    return {
        init: function () {
            handleCategoriesCollapse();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTLayoutAside.init();
});