"use strict";

// Class definition
var KTFormsCKEditorInline = function () {
    // Private functions
    var exampleInline = function () {
        InlineEditor
            .create(document.querySelector('#kt_docs_ckeditor_inline'))
            .then(editor => {
                console.log(editor);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return {
        // Public Functions
        init: function () {
            exampleInline();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFormsCKEditorInline.init();
});
