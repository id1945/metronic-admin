"use strict";

// Class definition
var KTJSTreeAjax = function() {
    // Private functions
    var exampleAjax = function() {
        $("#kt_docs_jstree_ajax").jstree({
            "core": {
                "themes": {
                    "responsive": false
                },
                // so that create works
                "check_callback": true,
                'data': {
                    'url': function(node) {
                        return 'https://preview.keenthemes.com/api/jstree/ajax_data.php'; // Demo API endpoint -- Replace this URL with your set endpoint
                    },
                    'data': function(node) {
                        return {
                            'parent': node.id
                        };
                    }
                }
            },
            "types": {
                "default": {
                    "icon": "fa fa-folder text-primary"
                },
                "file": {
                    "icon": "fa fa-file  text-primary"
                }
            },
            "state": {
                "key": "demo3"
            },
            "plugins": ["dnd", "state", "types"]
        });
    }

    return {
        // Public Functions
        init: function() {
            exampleAjax();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTJSTreeAjax.init();
});
