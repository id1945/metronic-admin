"use strict";

var KTLayoutSidebar = function() {
    // Private properties
    var _element;
    var _offcanvasObject;

    // Private functions
    var _init = function() {
        var header = KTUtil.find(_element, '.sidebar-header');
        var content = KTUtil.find(_element, '.sidebar-content');

        _offcanvasObject = new KTOffcanvas(_element, {
            overlay: true,
            baseClass: 'sidebar',
            placement: 'right',
            closeBy: 'kt_sidebar_mobile_close',
            toggleBy: 'kt_sidebar_mobile_toggle'
        });

        KTUtil.scrollInit(content, {
            disableForMobile: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                // Destroy for tablet and mobile modes
                if (KTUtil.isBreakpointUp('lg')) {
                    return false;
                }

                var height = parseInt(KTUtil.getViewPort().height);

                if (header) {
                    height = height - parseInt(KTUtil.actualHeight(header));
                    height = height - parseInt(KTUtil.css(header, 'marginTop'));
                    height = height - parseInt(KTUtil.css(header, 'marginBottom'));
                }

                if (content) {
                    height = height - parseInt(KTUtil.css(content, 'marginTop'));
                    height = height - parseInt(KTUtil.css(content, 'marginBottom'));
                }

                height = height - parseInt(KTUtil.css(_element, 'paddingTop'));
                height = height - parseInt(KTUtil.css(_element, 'paddingBottom'));

                height = height - 2;

                return height;
            }
        });
    }

    // Public methods
    return {
        init: function(id) {
            _element = KTUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize
            _init();
        },

        getElement: function() {
            return _element;
        }
    };
}();



export default KTLayoutSidebar;