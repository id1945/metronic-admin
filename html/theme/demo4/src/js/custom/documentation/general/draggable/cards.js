"use strict";

// Class definition
var KTDraggableCards = function() {
    // Private functions
    var exampleCards = function() {
        var containers = document.querySelectorAll('.draggable-zone');

        if (containers.length === 0) {
            return false;
        }

        var swappable = new Sortable.default(containers, {
            draggable: '.draggable',
            handle: '.draggable .draggable-handle',
            mirror: {
                //appendTo: selector,
                appendTo: 'body',
                constrainDimensions: true
            }
        });
    }

    return {
        // Public Functions
        init: function() {
            exampleCards();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTDraggableCards.init();
});
