"use strict";

var KTLayoutHeaderTopbar = function() {
    // Private properties
	var _offcanvasElement;
    var _offcanvasObject;

    // Private functions
    var _init = function() {
		_offcanvasObject = new KTOffcanvas(_offcanvasElement, {
			overlay: true,
			baseClass: 'topbar',
			closeBy: 'kt_header_mobile_topbar_close',
			toggleBy: {
				target: 'kt_header_mobile_topbar_toggle',
				state: 'active'
			}
		});
    }

    // Public methods
	return {
		init: function(id) {
            _offcanvasElement = KTUtil.getById(id);

			if (!_offcanvasElement) {
                return;
            }

            // Initialize
            _init();
		},

		getOffcanvasElement: function() {
			return _offcanvasElement;
		},

		getOffcanvas: function() {
			return _offcanvasObject;
		},
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutHeaderTopbar;
}
