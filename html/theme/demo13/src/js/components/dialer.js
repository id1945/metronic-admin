"use strict";

// Class definition
var KTDialer = function(element, options) {
    ////////////////////////////
    // ** Private variables  ** //
    ////////////////////////////
    var the = this;

    if (!element) {
        return;
    }

    // Default options
    var defaultOptions = {
        min: null,
        max: null,
        step: 1,
        decimals: 0,
        prefix: "",
        suffix: ""
    };

    ////////////////////////////
    // ** Private methods  ** //
    ////////////////////////////

    // Constructor
    var _construct = function() {
        if ( KTUtil.data(element).has('dialer') === true ) {
            the = KTUtil.data(element).get('dialer');
        } else {
            _init();
        }
    }

    // Initialize
    var _init = function() {
        // Variables
        the.options = KTUtil.deepExtend({}, defaultOptions, options);

        // Elements
        the.element = element;
        the.incElement = the.element.querySelector('[data-kt-dialer-control="increase"]');
        the.decElement = the.element.querySelector('[data-kt-dialer-control="decrease"]');
        the.inputElement = the.element.querySelector('input[type]'); 
        
        // Set Values
        if (_getOption('decimals')) {
            the.options.decimals = parseInt(_getOption('decimals'));
        }
        
        if (_getOption('prefix')) {
            the.options.prefix = _getOption('prefix');
        }
        
        if (_getOption('suffix')) {
            the.options.suffix = _getOption('suffix');
        }
        
        if (_getOption('step')) {
            the.options.step = parseFloat(_getOption('step'));
        }

        if (_getOption('min')) {
            the.options.min = parseFloat(_getOption('min'));
        }

        if (_getOption('max')) {
            the.options.max = parseFloat(_getOption('max'));
        }

        the.value = parseFloat(the.inputElement.value.replace(/[^\d.]/g, ''));  

        _setValue();

        // Event Handlers
        _handlers();

        // Bind Instance
        KTUtil.data(the.element).set('dialer', the);
    }

    // Handlers
    var _handlers = function() {
        KTUtil.addEvent(the.incElement, 'click', function(e) {
            e.preventDefault();
        
            _increase();
        });

        KTUtil.addEvent(the.decElement, 'click', function(e) {
            e.preventDefault();

            _decrease();
        });

        KTUtil.addEvent(the.inputElement, 'change', function(e) {
            e.preventDefault();

            _setValue();
        });
    }

    // Event handlers
    var _increase = function() {
        // Trigger "after.dialer" event
        KTEventHandler.trigger(the.element, 'kt.dialer.increase', the);

        the.inputElement.value = the.value + the.options.step;
        _setValue();

        // Trigger "before.dialer" event
        KTEventHandler.trigger(the.element, 'kt.dialer.increased', the);

        return the;
    }

    var _decrease = function() {
        // Trigger "after.dialer" event
        KTEventHandler.trigger(the.element, 'kt.dialer.decrease', the);

        the.inputElement.value = the.value - the.options.step;        
        _setValue();

        // Trigger "before.dialer" event
        KTEventHandler.trigger(the.element, 'kt.dialer.decreased', the);

        return the;
    }

    // Set Input Value
    var _setValue = function() {
        // Trigger "after.dialer" event
        KTEventHandler.trigger(the.element, 'kt.dialer.change', the);

        the.value = parseFloat(the.inputElement.value.replace(/[^\d.]/g, '')); 
        
        if (the.value < the.options.min) {
            the.value = the.options.min;
        }

        if (the.value > the.options.max) {
            the.value = the.options.max;
        }

        the.inputElement.value = _format(the.value);

        // Trigger "after.dialer" event
        KTEventHandler.trigger(the.element, 'kt.dialer.changed', the);
    }

    // Format
    var _format = function(val){
        return the.options.prefix + parseFloat(val).toFixed(the.options.decimals) + the.options.suffix;              
    }

    // Get option
    var _getOption = function(name) {
        if ( the.element.hasAttribute('data-kt-dialer-' + name) === true ) {
            var attr = the.element.getAttribute('data-kt-dialer-' + name);
            var value = attr;            

            return value;
        } else {
            return null;
        }
    }

    var _destroy = function() {
        KTUtil.data(the.element).remove('dialer');
    }

    // Construct class
    _construct();

    ///////////////////////
    // ** Public API  ** //
    ///////////////////////

    // Plugin API
    the.increase = function() {
        return _increase();
    }

    the.decrease = function() {
        return _decrease();
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

// Static methods
KTDialer.getInstance = function(element) {
    if ( element !== null && KTUtil.data(element).has('dialer') ) {
        return KTUtil.data(element).get('dialer');
    } else {
        return null;
    }
}

// Create instances
KTDialer.createInstances = function(selector = '[data-kt-dialer="true"]') {
    // Get instances
    var elements = document.body.querySelectorAll(selector);

    if ( elements && elements.length > 0 ) {
        for (var i = 0, len = elements.length; i < len; i++) {
            // Initialize instances
            new KTDialer(elements[i]);
        }
    }
}

// Global initialization
KTDialer.init = function() {
    KTDialer.createInstances();
};

// On document ready
if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', KTDialer.init);
} else {
    KTDialer.init();
}

// Webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = KTDialer;
}