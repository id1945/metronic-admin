"use strict";

// Class definition
var KTJKanbanDemoRich = function() {
    // Private functions
    var exampleRich = function() {
        var kanban = new jKanban({
            element: '#kt_docs_jkanban_rich',
            gutter: '0',
            click: function(el) {
                alert(el.innerHTML);
            },
            boards: [{
                    'id': '_backlog',
                    'title': 'Backlog',
                    'class': 'light-dark',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success me-3">
                        	            <img alt="Pic" src="${hostUrl}media/avatars/150-1.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 fw-bold mb-1">SEO Optimization</span>
                        	            <span class="badge badge-light-success">In progress</span>
                        	        </div>
                        	    </div>
                            `,
                        },
                        {
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success me-3">
                        	            <span class="symbol-label fs-4">A.D</span>
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 fw-bold mb-1">Finance</span>
                        	            <span class="badge badge-light-danger">Pending</span>
                        	        </div>
                        	    </div>
                            `,
                        }
                    ]
                },
                {
                    'id': '_todo',
                    'title': 'To Do',
                    'class': 'light-danger',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success me-3">
                        	            <img alt="Pic" src="${hostUrl}media/avatars/150-2.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 fw-bold mb-1">Server Setup</span>
                        	            <span class="badge badge-light-info">Completed</span>
                        	        </div>
                        	    </div>
                            `,
                        },
                        {
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success me-3">
                        	            <img alt="Pic" src="${hostUrl}media/avatars/150-3.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 fw-bold mb-1">Report Generation</span>
                        	            <span class="badge badge-light-warning">Due</span>
                        	        </div>
                        	    </div>
                            `,
                        }
                    ]
                },
                {
                    'id': '_working',
                    'title': 'Working',
                    'class': 'light-primary',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success me-3">
                            	         <img alt="Pic" src="${hostUrl}media/avatars/150-1.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 fw-bold mb-1">Marketing</span>
                        	            <span class="badge badge-light-danger">Planning</span>
                        	        </div>
                        	    </div>
                            `,
                        },
                        {
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-light-info me-3">
                        	            <span class="symbol-label fs-4">A.P</span>
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 fw-bold mb-1">Finance</span>
                        	            <span class="badge badge-light-primary">Done</span>
                        	        </div>
                        	    </div>
                            `,
                        }
                    ]
                },
                {
                    'id': '_done',
                    'title': 'Done',
                    'class': 'light-success',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success me-3">
                        	            <img alt="Pic" src="${hostUrl}media/avatars/150-4.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 fw-bold mb-1">SEO Optimization</span>
                        	            <span class="badge badge-light-success">In progress</span>
                        	        </div>
                        	    </div>
                            `,
                        },
                        {
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success me-3">
                        	            <img alt="Pic" src="${hostUrl}media/avatars/150-5.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 fw-bold mb-1">Product Team</span>
                        	            <span class="badge badge-light-danger">In progress</span>
                        	        </div>
                        	    </div>
                            `,
                        }
                    ]
                },
                {
                    'id': '_deploy',
                    'title': 'Deploy',
                    'class': 'light-primary',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-light-warning me-3">
                        	            <span class="symbol-label fs-4">D.L</span>
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 fw-bold mb-1">SEO Optimization</span>
                        	            <span class="badge badge-light-success">In progress</span>
                        	        </div>
                        	    </div>
                            `,
                        },
                        {
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-light-danger me-3">
                        	            <span class="symbol-label fs-4">E.K</span>
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 fw-bold mb-1">Requirement Study</span>
                        	            <span class="badge badge-light-warning">Scheduled</span>
                        	        </div>
                        	    </div>
                            `,
                        }
                    ]
                }
            ]
        });

        var toDoButton = document.getElementById('addToDo');
        toDoButton.addEventListener('click', function() {
            kanban.addElement(
                '_todo', {
                    'title': `
                        <div class="d-flex align-items-center">
                            <div class="symbol symbol-light-primary me-3">
                                <img alt="Pic" src="${hostUrl}media/avatars/150-6.jpg" />
                            </div>
                            <div class="d-flex flex-column align-items-start">
                                <span class="text-dark-50 fw-bold mb-1">Requirement Study</span>
                                <span class="badge badge-light-success">Scheduled</span>
                            </div>
                        </div>
                    `
                }
            );
        });

        var addBoardDefault = document.getElementById('addDefault');
        addBoardDefault.addEventListener('click', function() {
            kanban.addBoards(
                [{
                    'id': '_default',
                    'title': 'New Board',
                    'class': 'light-primary',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                                    <div class="symbol symbol-success me-3">
                                        <img alt="Pic" src="${hostUrl}media/avatars/150-7.jpg" />
                                    </div>
                                    <div class="d-flex flex-column align-items-start">
                                        <span class="text-dark-50 fw-bold mb-1">Payment Modules</span>
                                        <span class="badge badge-light-primary">In development</span>
                                    </div>
                                </div>
                        `},{
                            'title': `
                                <div class="d-flex align-items-center">
                                    <div class="symbol symbol-success me-3">
                                        <img alt="Pic" src="${hostUrl}media/avatars/150-8.jpg" />
                                    </div>
                                    <div class="d-flex flex-column align-items-start">
                                    <span class="text-dark-50 fw-bold mb-1">New Project</span>
                                    <span class="badge badge-light-danger">Pending</span>
                                </div>
                            </div>
                        `}
                    ]
                }]
            )
        });

        var removeBoard = document.getElementById('removeBoard');
        removeBoard.addEventListener('click', function() {
            kanban.removeBoard('_done');
        });
    }

    return {
        // Public Functions
        init: function() {
            exampleRich();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTJKanbanDemoRich.init();
});
