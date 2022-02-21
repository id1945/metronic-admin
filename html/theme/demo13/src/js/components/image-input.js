"use strict";

// Class definition
var KTImageInput = function(element, options) {
    ////////////////////////////
    // ** Private Variables  ** //
    ////////////////////////////
    var the = this;

    if ( typeof element === "undefined" || element === null ) {
        return;
    }

    // Default Options
    var defaultOptions = {
        
    };

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var _construct = function() {
        if ( KTUtil.data(element).has('image-input') === true ) {
            the = KTUtil.data(element).get('image-input');
        } else {
            _init();
        }
    }

    var _init = function() {
        // Variables
        the.options = KTUtil.deepExtend({}, defaultOptions, options);
        the.uid = KTUtil.getUniqueId('image-input');

        // Elements
        the.element = element;
        the.inputElement = KTUtil.find(element, 'input[type="file"]');
        the.wrapperElement = KTUtil.find(element, '.image-input-wrapper');
        the.cancelElement = KTUtil.find(element, '[data-kt-image-input-action="cancel"]');
        the.removeElement = KTUtil.find(element, '[data-kt-image-input-action="remove"]');
        the.hiddenElement = KTUtil.find(element, 'input[type="hidden"]');
        the.src = KTUtil.css(the.wrapperElement, 'backgroundImage');

        // Set initialized
        the.element.setAttribute('data-kt-image-input', 'true');

        // Event Handlers
        _handlers();

        // Bind Instance
        KTUtil.data(the.element).set('image-input', the);
    }

    // Init Event Handlers
    var _handlers = function() {
        KTUtil.addEvent(the.inputElement, 'change', _change);
        KTUtil.addEvent(the.cancelElement, 'click', _cancel);
        KTUtil.addEvent(the.removeElement, 'click', _remove);
    }

    // Event Handlers
    var _change = function(e) {
        e.preventDefault();

        if ( the.inputElement !== null && the.inputElement.files && the.inputElement.files[0] ) {
            // Fire change event
            if ( KTEventHandler.trigger(the.element, 'kt.imageinput.change', the) === false ) {
                return;
            }

            var reader = new FileReader();

            reader.onload = function(e) {
                KTUtil.css(the.wrapperElement, 'background-image', 'url('+ e.target.result +')');
            }

            reader.readAsDataURL(the.inputElement.files[0]);

            KTUtil.addClass(the.element, 'image-input-changed');
            KTUtil.removeClass(the.element, 'image-input-empty');

            // Fire removed event
            KTEventHandler.trigger(the.element, 'kt.imageinput.changed', the);
        }
    }

    var _cancel = function(e) {
        e.preventDefault();

        // Fire cancel event
        if ( KTEventHandler.trigger(the.element, 'kt.imageinput.cancel', the) === false ) {
            return;
        }

        KTUtil.removeClass(the.element, 'image-input-changed');
        KTUtil.removeClass(the.element, 'image-input-empty');
        KTUtil.css(the.wrapperElement, 'background-image', the.src);
        the.inputElement.value = "";

        if ( the.hiddenElement !== null ) {
            the.hiddenElement.value = "0";
        }

        // Fire canceled event
        KTEventHandler.trigger(the.element, 'kt.imageinput.canceled', the);
    }

    var _remove = function(e) {
        e.preventDefault();

        // Fire remove event
        if ( KTEventHandler.trigger(the.element, 'kt.imageinput.remove', the) === false ) {
            return;
        }

        KTUtil.removeClass(the.element, 'image-input-changed');
        KTUtil.addClass(the.element, 'image-input-empty');
        KTUtil.css(the.wrapperElement, 'background-image', "none");
        the.inputElement.value = "";

        if ( the.hiddenElement !== null ) {
            the.hiddenElement.value = "1";
        }

        // Fire removed event
        KTEventHandler.trigger(the.element, 'kt.imageinput.removed', the);
    }

    var _destroy = function() {
        KTUtil.data(the.element).remove('image-input');
    }

    // Construct Class
    _construct();

    ///////////////////////
    // ** Public API  ** //
    ///////////////////////

    // Plugin API
    the.getInputElement = function() {
        return the.inputElement;
    }

    the.goElement = function() {
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

// Static methods
KTImageInput.getInstance = function(element) {
    if ( element !== null && KTUtil.data(element).has('image-input') ) {
        return KTUtil.data(element).get('image-input');
    } else {
        return null;
    }
}

// Create instances
KTImageInput.createInstances = function(selector = '[data-kt-image-input]') {
    // Initialize Menus
    var elements = document.querySelectorAll(selector);

    if ( elements && elements.length > 0 ) {
        for (var i = 0, len = elements.length; i < len; i++) {
            new KTImageInput(elements[i]);
        }
    }
}

// Global initialization
KTImageInput.init = function() {
    KTImageInput.createInstances();
};

// On document ready
if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', KTImageInput.init);
} else {
    KTImageInput.init();
}

// Webpack Support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = KTImageInput;
}
