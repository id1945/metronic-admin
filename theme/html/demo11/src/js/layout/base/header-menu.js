"use strict";

var KTLayoutHeaderMenu = function() {
    // Private properties
	var _menuElement;
    var _menuObject;
    var _offcanvasElement;
    var _offcanvasObject;
	var _mobileTabPanes;

    // Private functions
	var _init = function() {
		_offcanvasObject = new KTOffcanvas(_offcanvasElement, {
			overlay: true,
			baseClass: 'header-bottom',
			closeBy: 'kt_header_mobile_close',
			toggleBy: {
				target: 'kt_header_mobile_toggle',
				state: 'burge-icon-active'
			}
		});

		_menuObject = new KTMenu(_menuElement, {
			submenu: {
				desktop: 'dropdown',
				tablet: 'accordion',
				mobile: 'accordion'
			},
			accordion: {
				slideSpeed: 200, // accordion toggle slide speed in milliseconds
				expandAll: false // allow having multiple expanded accordions in the menu
			}
		});
	}

	var _initTabPanesForMobile = function() {
		if ( _mobileTabPanes ) {
			for (var i = 0, len = _mobileTabPanes.length; i < len; i++) {
				var mobileTabPane = _mobileTabPanes[i];
				var tabs = KTUtil.find(_offcanvasElement, '.header-tabs');

				KTUtil.scrollInit(mobileTabPane, {
		            disableForMobile: true,
		            resetHeightOnDestroy: true,
		            handleWindowResize: true,
		            height: function() {
						// Destroy for tablet and mobile modes
						if (KTUtil.isBreakpointUp('lg')) {
							return false;
						}

		                var height = parseInt(KTUtil.getViewPort().height);

		                if (tabs) {
		                    height = height - parseInt(KTUtil.css(tabs, 'height'));
		                    height = height - parseInt(KTUtil.css(tabs, 'marginTop'));
		                    height = height - parseInt(KTUtil.css(tabs, 'marginBottom'));
		                }

		                if (mobileTabPane) {
		                    height = height - parseInt(KTUtil.css(mobileTabPane, 'marginTop'));
		                    height = height - parseInt(KTUtil.css(mobileTabPane, 'marginBottom'));
		                }

		                height = height - parseInt(KTUtil.css(_offcanvasElement, 'paddingTop'));
		                height = height - parseInt(KTUtil.css(_offcanvasElement, 'paddingBottom'));

		                return height;
		            }
		        });

				$(_offcanvasElement).find('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
					// Tablet & Mobile Modes Only
					if (KTUtil.isBreakpointUp('lg')) {
						KTUtil.scrollUpdate(mobileTabPane);
					}
		        });
			}
		}
	}

    // Public methods
	return {
        init: function(menuId, offcanvasId) {
            _menuElement = KTUtil.getById(menuId);
            _offcanvasElement = KTUtil.getById(offcanvasId);
			_mobileTabPanes = KTUtil.findAll(_offcanvasElement, '.tab-pane');

            if (!_menuElement) {
                return;
            }

            // Initialize menu
            _init();
			_initTabPanesForMobile();
		},

		getMenuElement: function() {
			return _menuElement;
		},

        getOffcanvasElement: function() {
			return _offcanvasElement;
		},

        getMenu: function() {
			return _menuObject;
		},

		pauseDropdownHover: function(time) {
			if (_menuObject) {
				_menuObject.pauseDropdownHover(time);
			}
		},

        getOffcanvas: function() {
			return _offcanvasObject;
		},

		closeMobileOffcanvas: function() {
			if (_menuObject && KTUtil.isMobileDevice()) {
				_offcanvasObject.hide();
			}
		}
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutHeaderMenu;
}
