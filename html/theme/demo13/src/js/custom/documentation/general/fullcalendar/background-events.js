"use strict";

// Class definition
var KTGeneralFullCalendarEventsDemos = function() {
	// Private functions

	var exampleBackgroundEvents = function() {
		// Define colors
		var green = KTUtil.getCssVariableValue('--bs-active-success');
		var red = KTUtil.getCssVariableValue('--bs-active-danger');

		// Initialize Fullcalendar -- for more info please visit the official site: https://fullcalendar.io/demos
		var calendarEl = document.getElementById('kt_docs_fullcalendar_background_events');

		var calendar = new FullCalendar.Calendar(calendarEl, {
			headerToolbar: {
				left: 'prev,next today',
				center: 'title',
				right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
			},
			initialDate: '2020-09-12',
			navLinks: true, // can click day/week names to navigate views
			businessHours: true, // display business hours
			editable: true,
			selectable: true,
			events: [{
					title: 'Business Lunch',
					start: '2020-09-03T13:00:00',
					constraint: 'businessHours'
				},
				{
					title: 'Meeting',
					start: '2020-09-13T11:00:00',
					constraint: 'availableForMeeting', // defined below
					color: green
				},
				{
					title: 'Conference',
					start: '2020-09-18',
					end: '2020-09-20'
				},
				{
					title: 'Party',
					start: '2020-09-29T20:00:00'
				},

				// areas where "Meeting" must be dropped
				{
					groupId: 'availableForMeeting',
					start: '2020-09-11',
					end: '2020-09-11',
					display: 'background',
				},
				{
					groupId: 'availableForMeeting',
					start: '2020-09-13',
					end: '2020-09-13',
					display: 'background',
				},

				// red areas where no events can be dropped
				{
					start: '2020-09-24',
					end: '2020-09-28',
					overlap: false,
					display: 'background',
					color: red
				},
				{
					start: '2020-09-06',
					end: '2020-09-08',
					overlap: false,
					display: 'background',
					color: red
				}
			]
		});

		calendar.render();
	}

	return {
		// Public Functions
		init: function() {
			exampleBackgroundEvents();
		}
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
	KTGeneralFullCalendarEventsDemos.init();
});