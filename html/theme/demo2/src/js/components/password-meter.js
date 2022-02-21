"use strict";

// Class definition
var KTPasswordMeter = function(element, options) {
    ////////////////////////////
    // ** Private variables  ** //
    ////////////////////////////
    var the = this;

    if (!element) {
        return;
    }

    // Default Options
    var defaultOptions = {
        minLength: 8,
        checkUppercase: true,        
        checkLowercase: true,
        checkDigit: true,
        checkChar: true,
        scoreHighlightClass: 'active'
    };

    ////////////////////////////
    // ** Private methods  ** //
    ////////////////////////////

    // Constructor
    var _construct = function() {
        if ( KTUtil.data(element).has('password-meter') === true ) {
            the = KTUtil.data(element).get('password-meter');
        } else {
            _init();
        }
    }

    // Initialize
    var _init = function() {
        // Variables
        the.options = KTUtil.deepExtend({}, defaultOptions, options);
        the.score = 0;
        the.checkSteps = 5;

        // Elements
        the.element = element;
        the.inputElement = the.element.querySelector('input[type]');
        the.visibilityElement = the.element.querySelector('[data-kt-password-meter-control="visibility"]');
        the.highlightElement = the.element.querySelector('[data-kt-password-meter-control="highlight"]'); 

        // Set initialized
        the.element.setAttribute('data-kt-password-meter', 'true');
        
        // Event Handlers
        _handlers();

        // Bind Instance
        KTUtil.data(the.element).set('password-meter', the);
    }

    // Handlers
    var _handlers = function() {
        the.inputElement.addEventListener('input', function() {
            _check();
        });

        if (the.visibilityElement) {
            the.visibilityElement.addEventListener('click', function() {
                _visibility();
            });
        }
    }   

    // Event handlers
    var _check = function() {
        var score = 0;
        var checkScore = _getCheckScore();
        
        if (_checkLength() === true) {
            score = score + checkScore;
        }

        if (the.options.checkUppercase === true && _checkLowercase() === true) {
            score = score + checkScore;
        }

        if (the.options.checkLowercase === true && _checkUppercase() === true ) {
            score = score + checkScore;
        }

        if (the.options.checkDigit === true && _checkDigit() === true ) {
            score = score + checkScore;
        }

        if (the.options.checkChar === true && _checkChar() === true ) {
            score = score + checkScore;
        }

        the.score = score;

        _highlight();
    }

    var _checkLength = function() {
        return the.inputElement.value.length >= the.options.minLength;  // 20 score
    }

    var _checkLowercase = function() {
        return /[a-z]/.test(the.inputElement.value);  // 20 score
    }

    var _checkUppercase = function() {
        return /[A-Z]/.test(the.inputElement.value);  // 20 score
    }

    var _checkDigit = function() {
        return /[0-9]/.test(the.inputElement.value);  // 20 score
    }

    var _checkChar = function() {
        return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(the.inputElement.value);  // 20 score
    }    

    var _getCheckScore = function() {
        var count = 1;
        
        if (the.options.checkUppercase === true) {
            count++;
        }

        if (the.options.checkLowercase === true) {
            count++;
        }

        if (the.options.checkDigit === true) {
            count++;
        }

        if (the.options.checkChar === true) {
            count++;
        }

        the.checkSteps = count;

        return 100 / the.checkSteps;
    }
    
    var _highlight = function() {
        var items = [].slice.call(the.highlightElement.querySelectorAll('div'));
        var total = items.length;
        var index = 0;
        var checkScore = _getCheckScore();
        var score = _getScore();

        items.map(function (item) {
            index++;

            if ( (checkScore * index * (the.checkSteps / total)) <= score ) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }            
        });
    }

    var _visibility = function() {
        var visibleIcon = the.visibilityElement.querySelector('i:not(.d-none), .svg-icon:not(.d-none)');
        var hiddenIcon = the.visibilityElement.querySelector('i.d-none, .svg-icon.d-none');
        
        if (the.inputElement.getAttribute('type').toLowerCase() === 'password' ) {
            the.inputElement.setAttribute('type', 'text');
        }  else {
            the.inputElement.setAttribute('type', 'password');
        }        

        visibleIcon.classList.add('d-none');
        hiddenIcon.classList.remove('d-none');

        the.inputElement.focus();
    }

    var _reset = function() {
        the.score = 0;

        _highlight();
    }

    // Gets current password score
    var _getScore = function() {
       return the.score;
    }

    var _destroy = function() {
        KTUtil.data(the.element).remove('password-meter');
    }

    // Construct class
    _construct();

    ///////////////////////
    // ** Public API  ** //
    ///////////////////////

    // Plugin API
    the.check = function() {
        return _check();
    }

    the.getScore = function() {
        return _getScore();
    }

    the.reset = function() {
        return _reset();
    }

    the.destroy = function() {
        return _destroy();
    }
};

// Static methods
KTPasswordMeter.getInstance = function(element) {
    if ( element !== null && KTUtil.data(element).has('password-meter') ) {
        return KTUtil.data(element).get('password-meter');
    } else {
        return null;
    }
}

// Create instances
KTPasswordMeter.createInstances = function(selector = '[data-kt-password-meter]') {
    // Get instances
    var elements = document.body.querySelectorAll(selector);

    if ( elements && elements.length > 0 ) {
        for (var i = 0, len = elements.length; i < len; i++) {
            // Initialize instances
            new KTPasswordMeter(elements[i]);
        }
    }
}

// Global initialization
KTPasswordMeter.init = function() {
    KTPasswordMeter.createInstances();
};

// On document ready
if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', KTPasswordMeter.init);
} else {
    KTPasswordMeter.init();
}

// Webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = KTPasswordMeter;
}