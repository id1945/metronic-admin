"use strict";

// Class definition
var KTGeneralFullCalendarDragDemos = function () {
    // Private functions

    var exampleDrag = function () {
        // Initialize the external events -- for more info please visit the official site: https://fullcalendar.io/demos
        var containerEl = document.getElementById('kt_docs_fullcalendar_events_list');
        new FullCalendar.Draggable(containerEl, {
          itemSelector: '.fc-event',
          eventData: function(eventEl) {
            return {
              title: eventEl.innerText.trim()
            }
          }
        });
    
        // initialize the calendar -- for more info please visit the official site: https://fullcalendar.io/demos
        var calendarEl = document.getElementById('kt_docs_fullcalendar_drag');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
          },
          editable: true,
          droppable: true, // this allows things to be dropped onto the calendar
          drop: function(arg) {
            // is the "remove after drop" checkbox checked?
            if (document.getElementById('drop-remove').checked) {
              // if so, remove the element from the "Draggable Events" list
              arg.draggedEl.parentNode.removeChild(arg.draggedEl);
            }
          }
        });

        calendar.render();
    }

    return {
        // Public Functions
        init: function () {
            exampleDrag();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTGeneralFullCalendarDragDemos.init();
});
