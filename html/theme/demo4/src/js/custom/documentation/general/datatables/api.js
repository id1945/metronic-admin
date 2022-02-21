"use strict";

// Class definition
var KTDatatablesApi = function () {
    // Private functions

    var _initExample1 = function() {
        var t = $("#kt_datatable_example_1").DataTable();
        var counter = 1;
    
        $("#kt_datatable_example_1_addrow").on( "click", function () {
            t.row.add( [
                counter +".1",
                counter +".2",
                counter +".3",
                counter +".4",
                counter +".5",
            ] ).draw( false );
    
            counter++;
        } );
    
        // Automatically add a first row of data
        $("#kt_datatable_example_1_addrow").click();
    }

    var _initExample2 = function() {
        var table = $("#kt_datatable_example_2").DataTable({
            columnDefs: [{
                orderable: false,
                targets: [1,2,3]
            }]
        });
     
        $("#kt_datatable_example_2_submit").click( function() {
            var data = table.$("input, select").serialize();
            alert(
                "The following data would have been submitted to the server: \n\n"+
                data.substr( 0, 120 )+"..."
            );
            return false;
        });
    }

    // Public methods
    return {
        init: function () {
            _initExample1();
            _initExample2();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTDatatablesApi.init();
});
