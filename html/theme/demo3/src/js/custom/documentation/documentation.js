"use strict";

var KTLayoutDocumentation = function() {
    var _init = function(element) {
        var elements = element;

        if ( typeof elements === 'undefined' ) {
            elements = document.querySelectorAll('.highlight');
        }

        if ( elements && elements.length > 0 ) {
            for ( var i = 0; i < elements.length; ++i ) {
                var highlight = elements[i];
                var copy = highlight.querySelector('.highlight-copy');

                if ( copy ) {
                    var clipboard = new ClipboardJS(copy, {
                        target: function(trigger) {
                            var highlight = trigger.closest('.highlight');
                            var el = highlight.querySelector('.tab-pane.active');

                            if ( el == null ) {
                                el = highlight.querySelector('.highlight-code');
                            }

                            return el;
                        }
                    });

                    clipboard.on('success', function(e) {
                        var caption = e.trigger.innerHTML;

                        e.trigger.innerHTML = 'copied';
                        e.clearSelection();

                        setTimeout(function() {
                            e.trigger.innerHTML = caption;
                        }, 2000);
                    });
                }
            }
        }
    }

    return {
        init: function(element) {
            _init(element);
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTLayoutDocumentation.init();
});