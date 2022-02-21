"use strict";

// Class definition
var KTJSTreeCheckable = function() {
    // Private functions
    var exampleCheckable = function() {
        $('#kt_docs_jstree_checkable').jstree({
            'plugins': ["wholerow", "checkbox", "types"],
            'core': {
                "themes" : {
                    "responsive": false
                },
                'data': [{
                        "text": "Same but with checkboxes",
                        "children": [{
                            "text": "initially selected",
                            "state": {
                                "selected": true
                            }
                        }, {
                            "text": "custom icon",
                            "icon": "fa fa-warning text-danger"
                        }, {
                            "text": "initially open",
                            "icon" : "fa fa-folder text-default",
                            "state": {
                                "opened": true
                            },
                            "children": ["Another node"]
                        }, {
                            "text": "custom icon",
                            "icon": "fa fa-warning text-waring"
                        }, {
                            "text": "disabled node",
                            "icon": "fa fa-check text-success",
                            "state": {
                                "disabled": true
                            }
                        }]
                    },
                    "And wholerow selection"
                ]
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder text-warning"
                },
                "file" : {
                    "icon" : "fa fa-file  text-warning"
                }
            },
        });
    }

    return {
        // Public Functions
        init: function() {
            exampleCheckable();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTJSTreeCheckable.init();
});
