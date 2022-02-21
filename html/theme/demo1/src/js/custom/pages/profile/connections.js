"use strict";

// Class definition
var KTProfileConnections = function () {
    // init variables
    var showMoreButton = document.getElementById('kt_connections_show_more_button');
    var showMoreCards = document.getElementById('kt_connections_show_more_cards');

    // Private functions
    var handleShowMore = function () {
        // Show more click
        showMoreButton.addEventListener('click', function (e) {
            showMoreButton.setAttribute('data-kt-indicator', 'on');

            // Disable button to avoid multiple click 
            showMoreButton.disabled = true;

            setTimeout(function() {
                // Hide loading indication
                showMoreButton.removeAttribute('data-kt-indicator');

                // Enable button
				showMoreButton.disabled = false;

                // Hide button
                showMoreButton.classList.add('d-none');

                // Show card
                showMoreCards.classList.remove('d-none');

                // Scroll to card
                KTUtil.scrollTo(showMoreCards, 200);
            }, 2000);
        });
    }

    // Public methods
    return {
        init: function () {
            handleShowMore();
        }
    }
}();


// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTProfileConnections.init();
});