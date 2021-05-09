"use strict";

var KTLayoutAside = function() {
    // Private properties
    var _body;
    var _element;
    var _offcanvasObject;

    // Private functions
	// Initialize
	var _init = function() {
        // Initialize mobile aside offcanvas
		_offcanvasObject = new KTOffcanvas(_element, {
			baseClass: 'aside',
			overlay: true,
			closeBy: 'kt_aside_close_btn',
			toggleBy: {
				target: 'kt_aside_mobile_toggle',
				state: 'mobile-toggle-active'
			}
		});
	}

    var _initNav = function() {
        var asideNav = KTUtil.find(_element, '.aside-nav');

        if (!asideNav) {
            return;
        }

        KTUtil.scrollInit(asideNav, {
            disableForMobile: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                var height = parseInt(KTUtil.getViewPort().height);
                var asideBrand = KTUtil.find(_element, '.aside-brand');
                var asideFooter = KTUtil.find(_element, '.aside-footer');
                var aside = KTUtil.find(_element, 'aside');

                height = height - (parseInt(KTUtil.css(asideBrand, 'height')));
                height = height - (parseInt(KTUtil.css(asideBrand, 'marginBottom')) + parseInt(KTUtil.css(asideBrand, 'marginTop')));

                height = height - (parseInt(KTUtil.css(asideFooter, 'height')));
                height = height - (parseInt(KTUtil.css(asideFooter, 'marginBottom')) + parseInt(KTUtil.css(asideFooter, 'marginTop')));

                height = height - (parseInt(KTUtil.css(aside, 'marginTop')) + parseInt(KTUtil.css(aside, 'marginBottom')));

                return height;
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
            _initNav();
        },

        getElement: function() {
            return _element;
        },

        getOffcanvas: function() {
            return _offcanvasObject;
        }
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutAside;
}
