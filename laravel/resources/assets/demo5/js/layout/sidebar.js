"use strict";

// Class definition
var KTLayoutSidebar = function () {

    // Private functions
    var handleSearch = function () {
        var form = document.querySelector('#kt_sidebar_search_form');
        var input = form.querySelector('.form-control');

        input.addEventListener('keyup', function(e) {
            if (e.code === 'Enter') {
                e.preventDefault();

                window.location.href = form.getAttribute('action');
                //form.submit();
            }
        });
    }

    // Public methods
    return {
        init: function () {
            handleSearch();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTLayoutSidebar.init();
});