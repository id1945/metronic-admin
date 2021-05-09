"use strict";

var KTLayoutQuickSearch = function() {
    // Private properties
    var _element;
    var _offcanvasObject;

    // Private functions
    var _init = function() {
        var header = KTUtil.find(_element, '.offcanvas-header');
        var content = KTUtil.find(_element, '.offcanvas-content');
        var form = KTUtil.find(_element, '.quick-search-form');
        var results = KTUtil.find(_element, '.quick-search-wrapper');

        _offcanvasObject = new KTOffcanvas(_element, {
            overlay: true,
            baseClass: 'offcanvas',
            placement: 'right',
            closeBy: 'kt_quick_search_close',
            toggleBy: 'kt_quick_search_toggle'
        });

        KTUtil.scrollInit(results, {
            disableForMobile: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
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

                if (results) {
                    height = height - parseInt(KTUtil.actualHeight(form));
                    height = height - parseInt(KTUtil.css(form, 'marginTop'));
                    height = height - parseInt(KTUtil.css(form, 'marginBottom'));

                    height = height - parseInt(KTUtil.css(results, 'marginTop'));
                    height = height - parseInt(KTUtil.css(results, 'marginBottom'));
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



export default KTLayoutQuickSearch;