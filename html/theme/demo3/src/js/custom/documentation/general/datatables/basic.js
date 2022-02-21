"use strict";

// Class definition
var KTDatatablesBasic = function () {
    // Private functions

    var _initExample1 = function() {
        $("#kt_datatable_example_1").DataTable();
    }

    var _initExample2 = function() {
        $("#kt_datatable_example_2").DataTable({
            "scrollY":        "500px",
            "scrollCollapse": true,
            "paging":         false,
            "dom":   "<'table-responsive'tr>" 
        });
    }

    var _initExample3 = function() {
        $("#kt_datatable_example_3").DataTable({
            "scrollX": true
        });
    }

    var _initExample4 = function() {
        $("#kt_datatable_example_4").DataTable({
            "scrollY": 300,
            "scrollX": true
        });
    }  

    // Public methods
    return {
        init: function () {
            _initExample1();
            _initExample2();
            _initExample3();
            _initExample4();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTDatatablesBasic.init();
});