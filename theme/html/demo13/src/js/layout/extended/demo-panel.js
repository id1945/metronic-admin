"use strict";

var KTLayoutDemoPanel = function() {
    // Private properties
    var _element;
    var _offcanvasObject;

    // Private functions
    var _init = function() {
        _offcanvasObject = new KTOffcanvas(_element, {
            overlay: true,
            baseClass: 'offcanvas',
            placement: 'right',
            closeBy: 'kt_demo_panel_close',
            toggleBy: 'kt_demo_panel_toggle'
        });

        var header = KTUtil.find(_element, '.offcanvas-header');
        var content = KTUtil.find(_element, '.offcanvas-content');
        var wrapper = KTUtil.find(_element, '.offcanvas-wrapper');
        var footer = KTUtil.find(_element, '.offcanvas-footer');

        KTUtil.scrollInit(wrapper, {
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

                if (wrapper) {
                    height = height - parseInt(KTUtil.css(wrapper, 'marginTop'));
                    height = height - parseInt(KTUtil.css(wrapper, 'marginBottom'));
                }

                if (footer) {
                    height = height - parseInt(KTUtil.actualHeight(footer));
                    height = height - parseInt(KTUtil.css(footer, 'marginTop'));
                    height = height - parseInt(KTUtil.css(footer, 'marginBottom'));
                }

                height = height - parseInt(KTUtil.css(_element, 'paddingTop'));
                height = height - parseInt(KTUtil.css(_element, 'paddingBottom'));

                height = height - 2;

                return height;
            }
        });

        if (typeof offcanvas !== 'undefined' && offcanvas.length === 0) {
            offcanvas.on('hide', function() {
                var expires = new Date(new Date().getTime() + 60 * 60 * 1000); // expire in 60 minutes from now
                KTCookie.setCookie('kt_demo_panel_shown', 1, {expires: expires});
            });
        }
    }

    var _remind = function() {
        if (!(encodeURI(window.location.hostname) == 'keenthemes.com' || encodeURI(window.location.hostname) == 'www.keenthemes.com')) {
            return;
        }

        setTimeout(function() {
            if (!KTCookie.getCookie('kt_demo_panel_shown')) {
                var expires = new Date(new Date().getTime() + 15 * 60 * 1000); // expire in 15 minutes from now
                KTCookie.setCookie('kt_demo_panel_shown', 1, { expires: expires });
                if (typeof _offcanvasObject !== 'undefined') {
                    _offcanvasObject.show();
                }
            }
        }, 4000);
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

            // Remind
            _remind();
        }
    };
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutDemoPanel;
}
