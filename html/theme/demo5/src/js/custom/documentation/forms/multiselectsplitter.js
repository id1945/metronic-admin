"use strict";

// Class definition
var KTFormsMultiselectsplitterDemos = function() {
    // Private functions
    var example1 = function() {
        $("#kt_multiselectsplitter_example_1").multiselectsplitter();
    }

    var example2 = function() {
        $('#kt_multiselectsplitter_example_2').multiselectsplitter({
    		selectSize: 7,
            clearOnFirstChange: true,
    		groupCounter: true
        });
    }

    var example3 = function() {
        $('#kt_multiselectsplitter_example_3').multiselectsplitter({
    		groupCounter: true,
            maximumSelected: 2
        });
    }

    var example4 = function() {
        $('#kt_multiselectsplitter_example_4').multiselectsplitter({
    		groupCounter: true,
            maximumSelected: 3,
            onlySameGroup: true
        });
    }

    var example5 = function() {
        $('#kt_multiselectsplitter_example_5').multiselectsplitter({
    		size: 6,
    		groupCounter: true,
            maximumSelected: 2,
            maximumAlert: function(maximumSelected) {
                alert("You choose " + ( maximumSelected + 1 ) + " options. Are you crazy ?");
            },
            createFirstSelect: function (label, $originalSelect) { 
                return "<option class=\"text-success\">prefix - " + label + "</option>";
            },
            createSecondSelect: function (label, $firstSelect) { 
                return "<option class=\"text-danger\"> ??? </option>";
            }
        });
    }

    return {
        // Public Functions
        init: function() {
            example1();
            example2();
            example3();
            example4();
            example5();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTFormsMultiselectsplitterDemos.init();
});
