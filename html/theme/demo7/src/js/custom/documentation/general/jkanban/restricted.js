"use strict";

// Class definition
var KTJKanbanDemoRestricted = function() {
    // Private functions
    var exampleRestricted = function() {
        var kanban = new jKanban({
            element: '#kt_docs_jkanban_restricted',
            gutter: '0',
            widthBoard: '250px',
            click: function(el) {
                alert(el.innerHTML);
            },
            boards: [{
                    'id': '_todo',
                    'title': 'To Do',
                    'class': 'light-primary',
                    'dragTo': ['_working'],
                    'item': [{
                            'title': 'My Task Test',
                            'class': 'primary'
                        },
                        {
                            'title': 'Buy Milk',
                            'class': 'primary'
                        }
                    ]
                },
                {
                    'id': '_working',
                    'title': 'Working',
                    'class': 'light-warning',
                    'item': [{
                            'title': 'Do Something!',
                            'class': 'warning'
                        },
                        {
                            'title': 'Run?',
                            'class': 'warning'
                        }
                    ]
                },
                {
                    'id': '_done',
                    'title': 'Done',
                    'class': 'light-success',
                    'dragTo': ['_working'],
                    'item': [{
                            'title': 'All right',
                            'class': 'success'
                        },
                        {
                            'title': 'Ok!',
                            'class': 'success'
                        }
                    ]
                },
                {
                    'id': '_notes',
                    'title': 'Notes',
                    'class': 'light-danger',
                    'item': [{
                            'title': 'Warning Task',
                            'class': 'danger'
                        },
                        {
                            'title': 'Do not enter',
                            'class': 'danger'
                        }
                    ]
                }
            ]
        });
    }

    return {
        // Public Functions
        init: function() {
            exampleRestricted();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTJKanbanDemoRestricted.init();
});
