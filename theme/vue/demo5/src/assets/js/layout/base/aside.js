"use strict";

var KTLayoutAside = function() {
    // Private properties
    var _body;
    var _element;
    var _asideMenuWrapperElement;
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
			toggleBy: ['kt_aside_desktop_toggle', 'kt_aside_tablet_and_mobile_toggle']
		});
	}

    var _initScroll = function() {
        KTUtil.scrollInit(_asideMenuWrapperElement, {
            disableForMobile: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                var height = parseInt(KTUtil.getViewPort().height);

                height = height - (parseInt(KTUtil.css(_asideMenuWrapperElement , 'marginBottom')) + parseInt(KTUtil.css(_asideMenuWrapperElement, 'marginTop')));

                return height;
            }
        });
    }

    // Public methods
	return {
		init: function(id) {
            _element = KTUtil.getById(id);
            _asideMenuWrapperElement =  KTUtil.getById('kt_aside_menu_wrapper');
            _body = KTUtil.getBody();

            if (!_element) {
                return;
            }

            // Initialize
            _init();
            _initScroll();
        },

        getElement: function() {
            return _element;
        },

        getOffcanvas: function() {
            return _offcanvasObject;
        }
	};
}();



export default KTLayoutAside;