"use strict";

// Class definition
var KTFormsTinyMCEBasic = function() {
    // Private functions
    var exampleBasic = function() {
        var options = {selector: '#kt_docs_tinymce_basic'};
        
        if (KTApp.isDarkMode()) {
            options['skin'] = 'oxide-dark';
            options['content_css'] = 'dark';
        }
        
        tinymce.init(options);
    }

    return {
        // Public Functions
        init: function() {
            exampleBasic();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTFormsTinyMCEBasic.init();
});
