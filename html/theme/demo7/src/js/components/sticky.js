"use strict";

// Class definition
var KTSticky = function(element, options) {
    ////////////////////////////
    // ** Private Variables  ** //
    ////////////////////////////
    var the = this;
    var body = document.getElementsByTagName("BODY")[0];

    if ( typeof element === "undefined" || element === null ) {
        return;
    }

    // Default Options
    var defaultOptions = {
        offset: 200,
        flipOffset: 0,
        reverse: false,
        animation: true,
        animationSpeed: '0.3s',
        animationClass: 'animation-slide-in-down'
    };
    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var _construct = function() {
        if ( KTUtil.data(element).has('sticky') === true ) {
            the = KTUtil.data(element).get('sticky');
        } else {
            _init();
        }
    }

    var _init = function() {
        the.element = element;
        the.options = KTUtil.deepExtend({}, defaultOptions, options);
        the.uid = KTUtil.getUniqueId('sticky');
        the.name = the.element.getAttribute('data-kt-sticky-name');
        the.attributeName = 'data-kt-sticky-' + the.name;
        the.eventTriggerState = true;
        the.lastScrollTop = 0;
        the.scrollHandler;

        // Set initialized
        the.element.setAttribute('data-kt-sticky', 'true');

        // Event Handlers
        window.addEventListener('scroll', _scroll);

        // Initial Launch
        _scroll();

        // Bind Instance
        KTUtil.data(the.element).set('sticky', the);
    }

    var _scroll = function(e) {
        var offset = _getOption('offset');
        var reverse = _getOption('reverse');
        var st;
        var attrName;
        var diff;

        // Exit if false
        if ( offset === false ) {
            return;
        }

        offset = parseInt(offset);
        st = KTUtil.getScrollTop();

        if ( reverse === true ) {  // Release on reverse scroll mode
            if ( st > offset) {
                if ( body.hasAttribute(the.attributeName) === false) {
                    _enable();
                    body.setAttribute(the.attributeName, 'on');
                }

                if ( the.eventTriggerState === true ) {
                    KTEventHandler.trigger(the.element, 'kt.sticky.on', the);
                    KTEventHandler.trigger(the.element, 'kt.sticky.change', the);

                    the.eventTriggerState = false;
                }
            } else { // Back scroll mode
                if ( body.hasAttribute(the.attributeName) === true) {
                    _disable();
                    body.removeAttribute(the.attributeName);
                }

                if ( the.eventTriggerState === false ) {
                    KTEventHandler.trigger(the.element, 'kt.sticky.off', the);
                    KTEventHandler.trigger(the.element, 'kt.sticky.change', the);
                    the.eventTriggerState = true;
                }
            }

            the.lastScrollTop = st;
        } else { // Classic scroll mode
            if ( st > offset) {
                if ( body.hasAttribute(the.attributeName) === false) {
                    _enable();
                    body.setAttribute(the.attributeName, 'on');
                }

                if ( the.eventTriggerState === true ) {
                    KTEventHandler.trigger(the.element, 'kt.sticky.on', the);
                    KTEventHandler.trigger(the.element, 'kt.sticky.change', the);
                    the.eventTriggerState = false;
                }
            } else { // back scroll mode
                if ( body.hasAttribute(the.attributeName) === true ) {
                    _disable();
                    body.removeAttribute(the.attributeName);
                }

                if ( the.eventTriggerState === false ) {
                    KTEventHandler.trigger(the.element, 'kt.sticky.off', the);
                    KTEventHandler.trigger(the.element, 'kt.sticky.change', the);
                    the.eventTriggerState = true;
                }
            }
        }

        //_flip();
    }

    var _enable = function(update) {
        var top = _getOption('top');
        var left = _getOption('left');
        var right = _getOption('right');
        var width = _getOption('width');
        var zindex = _getOption('zindex');

        if ( update !== true && _getOption('animation') === true ) {
            KTUtil.css(the.element, 'animationDuration', _getOption('animationSpeed'));
            KTUtil.animateClass(the.element, 'animation ' + _getOption('animationClass'));
        }

        if ( zindex !== null ) {
            KTUtil.css(the.element, 'z-index', zindex);
            KTUtil.css(the.element, 'position', 'fixed');
        }

        if ( top !== null ) {
            KTUtil.css(the.element, 'top', top);
        }

        if ( width !== null ) {
            if (width['target']) {
                var targetElement = document.querySelector(width['target']);
                if (targetElement) {
                    width = KTUtil.css(targetElement, 'width');
                }
            }

            KTUtil.css(the.element, 'width', width);
        }

        if ( left !== null ) {
            if ( String(left).toLowerCase() === 'auto' ) {
                var offsetLeft = KTUtil.offset(the.element).left;

                if ( offsetLeft > 0 ) {
                    KTUtil.css(the.element, 'left', String(offsetLeft) + 'px');
                }
            }
        }
    }

    var _disable = function() {
        KTUtil.css(the.element, 'top', '');
        KTUtil.css(the.element, 'width', '');
        KTUtil.css(the.element, 'left', '');
        KTUtil.css(the.element, 'right', '');
        KTUtil.css(the.element, 'z-index', '');
        KTUtil.css(the.element, 'position', '');
    }

    var _flip = function() {        
        var flipOffset = _getOption('flip-offset');
        var flipBottom = _getOption('flip-bottom');
        var diff = document.documentElement.scrollHeight - window.innerHeight - KTUtil.getScrollTop();
        flipOffset = parseInt(flipOffset);

        if (flipOffset > 0) {
            if (diff >= flipOffset) {
                KTUtil.css(the.element, 'top', top);
                KTUtil.css(the.element, 'bottom', 'auto');
            } else {
                KTUtil.css(the.element, 'top', 'auto');
                KTUtil.css(the.element, 'bottom', flipBottom);
            }
        }
    } 

    var _getOption = function(name) {
        if ( the.element.hasAttribute('data-kt-sticky-' + name) === true ) {
            var attr = the.element.getAttribute('data-kt-sticky-' + name);
            var value = KTUtil.getResponsiveValue(attr);

            if ( value !== null && String(value) === 'true' ) {
                value = true;
            } else if ( value !== null && String(value) === 'false' ) {
                value = false;
            }

            return value;
        } else {
            var optionName = KTUtil.snakeToCamel(name);

            if ( the.options[optionName] ) {
                return KTUtil.getResponsiveValue(the.options[optionName]);
            } else {
                return null;
            }
        }
    }

    var _destroy = function() {
        window.removeEventListener('scroll', _scroll);
        KTUtil.data(the.element).remove('sticky');
    }

    // Construct Class
    _construct();

    ///////////////////////
    // ** Public API  ** //
    ///////////////////////

    // Methods
    the.update = function() {
        if ( body.hasAttribute(the.attributeName) === true ) {
            _disable();
            body.removeAttribute(the.attributeName);
            _enable(true);
            body.setAttribute(the.attributeName, 'on');
        }
    }

    the.destroy = function() {
        return _destroy();
    }

    // Event API
    the.on = function(name, handler) {
        return KTEventHandler.on(the.element, name, handler);
    }

    the.one = function(name, handler) {
        return KTEventHandler.one(the.element, name, handler);
    }

    the.off = function(name) {
        return KTEventHandler.off(the.element, name);
    }

    the.trigger = function(name, event) {
        return KTEventHandler.trigger(the.element, name, event, the, event);
    }
};

// Static methods
KTSticky.getInstance = function(element) {
    if ( element !== null && KTUtil.data(element).has('sticky') ) {
        return KTUtil.data(element).get('sticky');
    } else {
        return null;
    }
}

// Create instances
KTSticky.createInstances = function(selector = '[data-kt-sticky="true"]') {
    var body = document.getElementsByTagName("BODY")[0];

    // Initialize Menus
    var elements = body.querySelectorAll(selector);
    var sticky;

    if ( elements && elements.length > 0 ) {
        for (var i = 0, len = elements.length; i < len; i++) {
            sticky = new KTSticky(elements[i]);
        }
    }
}

// Window resize handler
window.addEventListener('resize', function() {
    var timer;
    var body = document.getElementsByTagName("BODY")[0];

    KTUtil.throttle(timer, function() {
        // Locate and update Offcanvas instances on window resize
        var elements = body.querySelectorAll('[data-kt-sticky="true"]');

        if ( elements && elements.length > 0 ) {
            for (var i = 0, len = elements.length; i < len; i++) {
                var sticky = KTSticky.getInstance(elements[i]);
                if (sticky) {
                    sticky.update();
                }
            }
        }
    }, 200);
});

// Global initialization
KTSticky.init = function() {
    KTSticky.createInstances();
};

// On document ready
if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', KTSticky.init);
} else {
    KTSticky.init();
}

// Webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = KTSticky;
}
