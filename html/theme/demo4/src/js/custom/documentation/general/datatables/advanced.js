"use strict";

// Class definition
var KTDatatablesAdvanced = function () {
    // Private functions

    var _initExample1 = function() {
        var status = {
            1: {"title": "Pending", "state": "primary"},
            2: {"title": "Delivered", "state": "danger"},
            3: {"title": "Canceled", "state": "primary"},
            4: {"title": "Success", "state": "success"},
            5: {"title": "Info", "state": "info"},
            6: {"title": "Danger", "state": "danger"},
            7: {"title": "Warning", "state": "warning"},
        };

        $("#kt_datatable_example_1").DataTable({
            "columnDefs": [
                {
                    // The `data` parameter refers to the data for the cell (defined by the
                    // `data` option, which defaults to the column being worked with, in
                    // this case `data: 0`.
                    "render": function ( data, type, row ) {
                        var index = KTUtil.getRandomInt(1, 7);

                        return data + '<span class="ms-2 badge badge-light-' + status[index]['state'] + ' fw-bold">' + status[index]['title'] + '</span>';
                    },
                    "targets": 1
                }
            ]
        });
    }

    var _initExample2 = function() {
        $("#kt_datatable_example_2").DataTable({
            "columnDefs": [ {
                "visible": false,
                "targets": -1
            }]
        });
    }

    var _initExample3 = function() {
        var groupColumn = 2;

        var table = $('#kt_datatable_example_3').DataTable({
            "columnDefs": [{
                "visible": false,
                "targets": groupColumn
            }],
            "order": [
                [groupColumn, 'asc']
            ],
            "displayLength": 25,
            "drawCallback": function(settings) {
                var api = this.api();
                var rows = api.rows({
                    page: 'current'
                }).nodes();
                var last = null;

                api.column(groupColumn, {
                    page: 'current'
                }).data().each(function(group, i) {
                    if (last !== group) {
                        $(rows).eq(i).before(
                            '<tr class="group fs-5 fw-bolder"><td colspan="5">' + group + '</td></tr>'
                        );

                        last = group;
                    }
                });
            }
        });

        // Order by the grouping
        $('#kt_datatable_example_3 tbody').on('click', 'tr.group', function() {
            var currentOrder = table.order()[0];
            if (currentOrder[0] === groupColumn && currentOrder[1] === 'asc') {
                table.order([groupColumn, 'desc']).draw();
            } else {
                table.order([groupColumn, 'asc']).draw();
            }
        });
    }

    var _initExample4 = function() {
        $("#kt_datatable_example_4").DataTable({
            "footerCallback": function ( row, data, start, end, display ) {
                var api = this.api(), data;
     
                // Remove the formatting to get integer data for summation
                var intVal = function ( i ) {
                    return typeof i === "string" ?
                        i.replace(/[\$,]/g, "")*1 :
                        typeof i === "number" ?
                            i : 0;
                };
     
                // Total over all pages
                var total = api
                    .column( 4 )
                    .data()
                    .reduce( function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0 );
     
                // Total over this page
                var pageTotal = api
                    .column( 4, { page: "current"} )
                    .data()
                    .reduce( function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0 );
     
                // Update footer
                $( api.column( 4 ).footer() ).html(
                    "$"+pageTotal +" ( $"+ total +" total)"
                );
            }
        });
    }

    var _initExample5 = function() {
        $("#kt_datatable_example_5").DataTable({
            "language": {		
                "lengthMenu": "Show _MENU_",
            },
            "dom": 
                "<'row'" +
                "<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
                "<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
                ">" +
                
                "<'table-responsive'tr>" +
                
                "<'row'" + 
                "<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" + 
                "<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
                ">"
        });
    }

    // Public methods
    return {
        init: function () {
            _initExample1();
            _initExample2();
            _initExample3();
            _initExample4();
            _initExample5();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTDatatablesAdvanced.init();
});