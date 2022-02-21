"use strict";

// Class definition
var KTFlotDemoPie = function () {
    // Private functions
    var examplePie = function () {
        var data = [
            { label: "CSS", data: 10, color: KTUtil.getCssVariableValue('--bs-active-primary') },
            { label: "HTML5", data: 40, color: KTUtil.getCssVariableValue('--bs-active-success') },
            { label: "PHP", data: 30, color: KTUtil.getCssVariableValue('--bs-active-danger') },
            { label: "Angular", data: 20, color: KTUtil.getCssVariableValue('--bs-active-warning') }
        ];

        $.plot($("#kt_docs_flot_pie"), data, {
            series: {
                pie: {
                    show: true
                }
            }
        });
    }

    return {
        // Public Functions
        init: function () {
            examplePie();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFlotDemoPie.init();
});
