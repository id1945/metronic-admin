"use strict";

// Class definition
var KTGeneralFullCalendarSelectDemos = function () {
    // Private functions

    var exampleSelect = function () {
        // Define variables
        var calendarEl = document.getElementById('kt_docs_fullcalendar_selectable');

        var calendar = new FullCalendar.Calendar(calendarEl, {
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            initialDate: '2020-09-12',
            navLinks: true, // can click day/week names to navigate views
            selectable: true,
            selectMirror: true,

            // Create new event
            select: function (arg) {
                Swal.fire({
                    html: '<div class="mb-7">Create new event?</div><div class="fw-bolder mb-5">Event Name:</div><input type="text" class="form-control" name="event_name" />',
                    icon: "info",
                    showCancelButton: true,
                    buttonsStyling: false,
                    confirmButtonText: "Yes, create it!",
                    cancelButtonText: "No, return",
                    customClass: {
                        confirmButton: "btn btn-primary",
                        cancelButton: "btn btn-active-light"
                    }
                }).then(function (result) {
                    if (result.value) {
                        var title = document.querySelector('input[name="event_name"]').value;
                        if (title) {
                            calendar.addEvent({
                                title: title,
                                start: arg.start,
                                end: arg.end,
                                allDay: arg.allDay
                            })
                        }
                        calendar.unselect()
                    } else if (result.dismiss === 'cancel') {
                        Swal.fire({
                            text: "Event creation was declined!.",
                            icon: "error",
                            buttonsStyling: false,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn btn-primary",
                            }
                        });
                    }
                });
            },

            // Delete event
            eventClick: function (arg) {
                Swal.fire({
                    text: 'Are you sure you want to delete this event?',
                    icon: "warning",
                    showCancelButton: true,
                    buttonsStyling: false,
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "No, return",
                    customClass: {
                        confirmButton: "btn btn-primary",
                        cancelButton: "btn btn-active-light"
                    }
                }).then(function (result) {
                    if (result.value) {
                        arg.event.remove()
                    } else if (result.dismiss === 'cancel') {
                        Swal.fire({
                            text: "Event was not deleted!.",
                            icon: "error",
                            buttonsStyling: false,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn btn-primary",
                            }
                        });
                    }
                });
            },
            editable: true,
            dayMaxEvents: true, // allow "more" link when too many events
            events: [
                {
                    title: 'All Day Event',
                    start: '2020-09-01'
                },
                {
                    title: 'Long Event',
                    start: '2020-09-07',
                    end: '2020-09-10'
                },
                {
                    groupId: 999,
                    title: 'Repeating Event',
                    start: '2020-09-09T16:00:00'
                },
                {
                    groupId: 999,
                    title: 'Repeating Event',
                    start: '2020-09-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: '2020-09-11',
                    end: '2020-09-13'
                },
                {
                    title: 'Meeting',
                    start: '2020-09-12T10:30:00',
                    end: '2020-09-12T12:30:00'
                },
                {
                    title: 'Lunch',
                    start: '2020-09-12T12:00:00'
                },
                {
                    title: 'Meeting',
                    start: '2020-09-12T14:30:00'
                },
                {
                    title: 'Happy Hour',
                    start: '2020-09-12T17:30:00'
                },
                {
                    title: 'Dinner',
                    start: '2020-09-12T20:00:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2020-09-13T07:00:00'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2020-09-28'
                }
            ]
        });

        calendar.render();
    }

    return {
        // Public Functions
        init: function () {
            exampleSelect();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTGeneralFullCalendarSelectDemos.init();
});
