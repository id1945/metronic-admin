"use strict";

// Class definition
var KTFormsCKEditorBalloonBlock = function () {
    // Private functions
    var exampleBalloonBlock = function () {
        BalloonEditor
            .create(document.querySelector('#kt_docs_ckeditor_balloon_block'))
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
            exampleBalloonBlock();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFormsCKEditorBalloonBlock.init();
});
