"use strict";

// Class definition
var KTFormsFlatpickrDemos = function() {
    // Private functions
    var example1 = function(element) {
        $("#kt_datepicker_1").flatpickr();

        $("#kt_datepicker_2").flatpickr();
    }

    var example2 = function(element) {
        $("#kt_datepicker_3").flatpickr({
            enableTime: true,
            dateFormat: "Y-m-d H:i",
        });
    }

    var example3 = function(element) {
        $("#kt_datepicker_4").flatpickr({
            onReady: function () {
                this.jumpToDate("2025-01")
            },
            disable: ["2025-01-10", "22025-01-11", "2025-01-12", "2025-01-13", "2025-01-14", "2025-01-15", "2025-01-16", "2025-01-17"],
            dateFormat: "Y-m-d",
        });

        $("#kt_datepicker_5").flatpickr({
            onReady: function () {
                this.jumpToDate("2025-01")
            },
            dateFormat: "Y-m-d",
            disable: [
                {
                    from: "2025-01-05",
                    to: "2025-01-25"
                },
                {
                    from: "2025-02-03",
                    to: "2025-02-15"
                }
            ]
        });
    }

    var example4 = function(element) {
        $("#kt_datepicker_6").flatpickr({
            onReady: function () {
                this.jumpToDate("2025-01")
            },
            mode: "multiple",
            dateFormat: "Y-m-d",
            defaultDate: ["2025-01-05", "2025-01-10"]
        });
    }

    var example5 = function(element) {
        $("#kt_datepicker_7").flatpickr({
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
            mode: "range"
        });
    }

    var example6 = function(element) {
        $("#kt_datepicker_8").flatpickr({
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
        });
    }

    var example7 = function(element) {
        $("#kt_datepicker_9").flatpickr({
            weekNumbers: true
        });
    }

    var example8 = function(element) {
        $("#kt_datepicker_10").flatpickr();
    }
    

    return {
        // Public Functions
        init: function(element) {
            example1();
            example2();
            example3();
            example4();
            example5();
            example6();
            example7();
            example8();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTFormsFlatpickrDemos.init();
});