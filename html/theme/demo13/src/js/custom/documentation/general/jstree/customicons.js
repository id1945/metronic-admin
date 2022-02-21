"use strict";

// Class definition
var KTJSTreeCustomIcons = function() {
    // Private functions
    var exampleCustomIcons = function() {
        $('#kt_docs_jstree_customicons').jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                }
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder text-warning"
                },
                "file" : {
                    "icon" : "fa fa-file  text-warning"
                }
            },
            "plugins": ["types"]
        });

        // handle link clicks in tree nodes(support target="_blank" as well)
        $('#kt_docs_jstree_customicons').on('select_node.jstree', function(e,data) {
            var link = $('#' + data.selected).find('a');
            if (link.attr("href") != "#" && link.attr("href") != "javascript:;" && link.attr("href") != "") {
                if (link.attr("target") == "_blank") {
                    link.attr("href").target = "_blank";
                }
                document.location.href = link.attr("href");
                return false;
            }
        });
    }

    return {
        // Public Functions
        init: function() {
            exampleCustomIcons();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTJSTreeCustomIcons.init();
});
