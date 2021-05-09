"use strict";

var KTLayoutAside = function() {
    // Private properties
    var _body;
    var _element;
    var _offcanvasObject;

    // Private functions
	// Initialize
	var _init = function() {
		var offcanvasClass = KTUtil.hasClass(_element, 'aside-offcanvas-default') ? 'aside-offcanvas-default' : 'aside';

        // Initialize mobile aside offcanvas
		_offcanvasObject = new KTOffcanvas(_element, {
			baseClass: offcanvasClass,
			overlay: true,
			closeBy: 'kt_aside_close_btn',
			toggleBy: {
				target: 'kt_aside_mobile_toggle',
				state: 'mobile-toggle-active'
			}
		});

		// Handle Minimized Aside Hover
		if (KTUtil.hasClass(_body, 'aside-fixed') && KTUtil.hasClass(_body, 'aside-minimize-hoverable')) {
			var insideTm;
			var outsideTm;

            // Handle Aside Hover Mode
			KTUtil.addEvent(_element, 'mouseenter', function(e) {
				e.preventDefault();

				if (KTUtil.isBreakpointUp('lg') === false) {
					return;
				}

				if (outsideTm) {
					clearTimeout(outsideTm);
					outsideTm = null;
				}

				insideTm = setTimeout(function() {
					if (KTUtil.hasClass(_body, 'aside-minimize') && KTUtil.isBreakpointUp('lg')) {
						KTUtil.removeClass(_body, 'aside-minimize');

						// Hover class
						KTUtil.addClass(_body, 'aside-minimize-hover');

						KTLayoutAsideMenu.getMenu().scrollUpdate();
						KTLayoutAsideMenu.getMenu().scrollTop();
					}
				}, 50);
			});

			KTUtil.addEvent(_element, 'mouseleave', function(e) {
				e.preventDefault();

				if (KTUtil.isBreakpointUp('lg') === false) {
					return;
				}

				if (insideTm) {
					clearTimeout(insideTm);
					insideTm = null;
				}

				outsideTm = setTimeout(function() {
				    if (KTUtil.hasClass(_body, 'aside-minimize-hover') && KTUtil.isBreakpointUp('lg')) {
					    KTUtil.removeClass(_body, 'aside-minimize-hover');
					    KTUtil.addClass(_body, 'aside-minimize');

						// Hover class
                        KTLayoutAsideMenu.getMenu().scrollUpdate();
						KTLayoutAsideMenu.getMenu().scrollTop();
					}
				}, 100);
			});
		}
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

        getOffcanvas: function() {
            return _offcanvasObject;
        },

        isFixed: function() {
            return KTUtil.hasClass(_body, 'aside-fixed');
        },

        isMinimized: function() {
            return (KTUtil.hasClass(_body, 'aside-fixed') && KTUtil.hasClass(_body, 'aside-minimize'));
        },

        isHoverable: function() {
            return (KTUtil.hasClass(_body, 'aside-fixed') && KTUtil.hasClass(_body, 'aside-minimize-hoverable'));
        }
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutAside;
}
