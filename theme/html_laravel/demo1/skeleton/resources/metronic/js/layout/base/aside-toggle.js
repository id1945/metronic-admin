"use strict";

var KTLayoutAsideToggle = function() {
    // Private properties
    var _body;
    var _element;
    var _toggleObject;

	// Initialize
	var _init = function() {
		_toggleObject = new KTToggle(_element, _body, {
			targetState: 'aside-minimize',
			toggleState: 'active'
		});

		_toggleObject.on('toggle', function(toggle) {
            // Update sticky card
            if (typeof KTLayoutStickyCard !== 'undefined') {
                KTLayoutStickyCard.update();
            }

            // Pause header menu dropdowns
            if (typeof KTLayoutHeaderMenu !== 'undefined') {
                KTLayoutHeaderMenu.pauseDropdownHover(800);
            }

            // Pause aside menu dropdowns
            if (typeof KTLayoutAsideMenu !== 'undefined') {
                KTLayoutAsideMenu.pauseDropdownHover(800);
            }

            // Remember state in cookie
			KTCookie.setCookie('kt_aside_toggle_state', toggle.getState());
			// to set default minimized left aside use this cookie value in your
			// server side code and add "kt-primary--minimize aside-minimize" classes to
			// the body tag in order to initialize the minimized left aside mode during page loading.
		});

		_toggleObject.on('beforeToggle', function(toggle) {
			if (KTUtil.hasClass(_body, 'aside-minimize') === false && KTUtil.hasClass(_body, 'aside-minimize-hover')) {
				KTUtil.removeClass(_body, 'aside-minimize-hover');
			}
		});
	}

    // Public methods
	return {
		init: function(id) {
            _element = KTUtil.getById(id);
            _body = KTUtil.getBody();

            if (!_element) {
                return;
            }

            // Initialize
            _init();
		},

        getElement: function() {
            return _element;
        },

        getToggle: function() {
			return _toggleObject;
		},

		onToggle: function(handler) {
			if (typeof _toggleObject.element !== 'undefined') {
				_toggleObject.on('toggle', handler);
			}
		}
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutAsideToggle;
}
