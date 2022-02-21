"use strict";

// Class definition
var KTGeneralFullCalendarTimezoneDemos = function () {
    // Private functions

    var exampleTimezone = function () {
        // Define variables
        var initialTimeZone = 'local';
        var timeZoneSelectorEl = document.getElementById('kt_docs_fullcalendar_timezone_selector');
        var calendarEl = document.getElementById('kt_docs_fullcalendar_timezone');
        var todayDate = moment().startOf('day');
        var YM = todayDate.format('YYYY-MM');
        var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
        var TODAY = todayDate.format('YYYY-MM-DD');
        var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');
        var eventsArray = [
            {
                title: 'All Day Event',
                start: YM + '-01',
                description: 'Toto lorem ipsum dolor sit incid idunt ut',
                className: "fc-event-danger fc-event-solid-warning"
            },
            {
                title: 'Reporting',
                start: YM + '-14T13:30:00',
                description: 'Lorem ipsum dolor incid idunt ut labore',
                end: YM + '-14',
                className: "fc-event-success"
            },
            {
                title: 'Company Trip',
                start: YM + '-02',
                description: 'Lorem ipsum dolor sit tempor incid',
                end: YM + '-03',
                className: "fc-event-primary"
            },
            {
                title: 'ICT Expo 2017 - Product Release',
                start: YM + '-03',
                description: 'Lorem ipsum dolor sit tempor inci',
                end: YM + '-05',
                className: "fc-event-light fc-event-solid-primary"
            },
            {
                title: 'Dinner',
                start: YM + '-12',
                description: 'Lorem ipsum dolor sit amet, conse ctetur',
                end: YM + '-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: YM + '-09T16:00:00',
                description: 'Lorem ipsum dolor sit ncididunt ut labore',
                className: "fc-event-danger"
            },
            {
                id: 1000,
                title: 'Repeating Event',
                description: 'Lorem ipsum dolor sit amet, labore',
                start: YM + '-16T16:00:00'
            },
            {
                title: 'Conference',
                start: YESTERDAY,
                end: TOMORROW,
                description: 'Lorem ipsum dolor eius mod tempor labore',
                className: "fc-event-primary"
            },
            {
                title: 'Meeting',
                start: TODAY + 'T10:30:00',
                end: TODAY + 'T12:30:00',
                description: 'Lorem ipsum dolor eiu idunt ut labore'
            },
            {
                title: 'Lunch',
                start: TODAY + 'T12:00:00',
                className: "fc-event-info",
                description: 'Lorem ipsum dolor sit amet, ut labore'
            },
            {
                title: 'Meeting',
                start: TODAY + 'T14:30:00',
                className: "fc-event-warning",
                description: 'Lorem ipsum conse ctetur adipi scing'
            },
            {
                title: 'Happy Hour',
                start: TODAY + 'T17:30:00',
                className: "fc-event-info",
                description: 'Lorem ipsum dolor sit amet, conse ctetur'
            },
            {
                title: 'Dinner',
                start: TOMORROW + 'T05:00:00',
                className: "fc-event-solid-danger fc-event-light",
                description: 'Lorem ipsum dolor sit ctetur adipi scing'
            },
            {
                title: 'Birthday Party',
                start: TOMORROW + 'T07:00:00',
                className: "fc-event-primary",
                description: 'Lorem ipsum dolor sit amet, scing'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: YM + '-28',
                className: "fc-event-solid-info fc-event-light",
                description: 'Lorem ipsum dolor sit amet, labore'
            }
        ];

        // Initialize the external events -- for more info please visit the official site: https://fullcalendar.io/demos
        var calendar = new FullCalendar.Calendar(calendarEl, {
            timeZone: initialTimeZone,
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            },
            initialDate: TODAY,
            navLinks: true, // can click day/week names to navigate views
            editable: true,
            selectable: true,
            dayMaxEvents: true, // allow "more" link when too many events

            eventTimeFormat: { hour: 'numeric', minute: '2-digit', timeZoneName: 'short' },
            events: eventsArray,
        });

        calendar.render();

        // when the timezone selector changes, dynamically change the calendar option -- more info on Select2 on Change event: https://select2.org/programmatic-control/events
        $(timeZoneSelectorEl).on('change', function () {
            calendar.setOption('timeZone', 'UTC');

            // Remove all events
            const removeEvents = calendar.getEvents();
            removeEvents.forEach(event => {
                event.remove();
            });

            // Add events with new timezone offset
            const newEvents = eventsArray;
            newEvents.forEach(event => {
                var start;
                var end;

                if(this.value < 0){
                    start = moment(event.start).subtract(this.value.replace(/\D/g,''), 'seconds').format(getFormat(event.start));
                    end = event.end ? moment(event.end).subtract(this.value.replace(/\D/g,''), 'seconds').format(getFormat(event.end)) : start;
                } else {
                    start = moment(event.start).add(this.value, 'seconds').format(getFormat(event.start));
                    end = event.end ? moment(event.end).add(this.value, 'seconds').format(getFormat(event.end)) : start;
                }               

                calendar.addEvent({
                    title: event.title,
                    start: start,
                    end: end
                });
            });

            calendar.render();
        });

        // Dynamic date format generator
        const getFormat = (d) => {
            if(d.includes('T')){
                return 'YYYY-MM-DDTHH:mm:ss';
            } else {
                return 'YYYY-MM-DD';
            }
        }
    }

    return {
        // Public Functions
        init: function () {
            exampleTimezone();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTGeneralFullCalendarTimezoneDemos.init();
});
