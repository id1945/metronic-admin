"use strict";

// Class definition
var KTFeedback = function(options) {
    ////////////////////////////
    // ** Private Variables  ** //
    ////////////////////////////
    var the = this;
    var body = document.getElementsByTagName("BODY")[0];

    // Default options
    var defaultOptions = {
        'width' : 100,
        'placement' : 'top-center',
        'content' : '',
        'type': 'popup'
    };

    ////////////////////////////
    // ** Private methods  ** //
    ////////////////////////////

    var _construct = function() {
        _init();
    }

    var _init = function() {
        // Variables
        the.options = KTUtil.deepExtend({}, defaultOptions, options);
        the.uid = KTUtil.getUniqueId('feedback');
        the.element;
        the.shown = false;

        // Event Handlers
        _handlers();

        // Bind Instance
        KTUtil.data(the.element).set('feedback', the);
    }

    var _handlers = function() {
        KTUtil.addEvent(the.element, 'click', function(e) {
            e.preventDefault();

            _go();
        });
    }

    var _show = function() {
        if ( KTEventHandler.trigger(the.element, 'kt.feedback.show', the) === false ) {
            return;
        }

        if ( the.options.type === 'popup') {
            _showPopup();
        }

        KTEventHandler.trigger(the.element, 'kt.feedback.shown', the);

        return the;
    }

    var _hide = function() {
        if ( KTEventHandler.trigger(the.element, 'kt.feedback.hide', the) === false ) {
            return;
        }

        if ( the.options.type === 'popup') {
            _hidePopup();
        }

        the.shown = false;

        KTEventHandler.trigger(the.element, 'kt.feedback.hidden', the);

        return the;
    }

    var _showPopup = function() {
        the.element = document.createElement("DIV");

        KTUtil.addClass(the.element, 'feedback feedback-popup');
        KTUtil.setHTML(the.element, the.options.content);

        if (the.options.placement == 'top-center') {
            _setPopupTopCenterPosition();
        }

        body.appendChild(the.element);

        KTUtil.addClass(the.element, 'feedback-shown');

        the.shown = true;
    }

    var _setPopupTopCenterPosition = function() {
        var width = KTUtil.getResponsiveValue(the.options.width);
        var height = KTUtil.css(the.element, 'height');

        KTUtil.addClass(the.element, 'feedback-top-center');

        KTUtil.css(the.element, 'width', width);
        KTUtil.css(the.element, 'left', '50%');
        KTUtil.css(the.element, 'top', '-' + height);
    }

    var _hidePopup = function() {
        the.element.remove();
    }

    var _destroy = function() {
        KTUtil.data(the.element).remove('feedback');
    }

    // Construct class
    _construct();

    ///////////////////////
    // ** Public API  ** //
    ///////////////////////

    // Plugin API
    the.show = function() {
        return _show();
    }

    the.hide = function() {
        return _hide();
    }

    the.isShown = function() {
        return the.shown;
    }

    the.getElement = function() {
        return the.element;
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

// Webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = KTFeedback;
}
