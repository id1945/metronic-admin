"use strict";

// Class definition
var KTEventHandler = function() {
    ////////////////////////////
    // ** Private Variables  ** //
    ////////////////////////////
    var _handlers = {};

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////
    var _triggerEvent = function(element, name, target, e) {
        if ( KTUtil.data(element).has(name) === true ) {
            var handlerId = KTUtil.data(element).get(name);

            if ( _handlers[name] && _handlers[name][handlerId] ) {
                var handler = _handlers[name][handlerId];

                if ( handler.name === name ) {
                    if ( handler.one == true ) {
                        if ( handler.fired == false ) {
                            _handlers[name][handlerId].fired = true;

                            return handler.callback.call(this, target, e);
                        }
                    } else {
                        return handler.callback.call(this, target, e);
                    }
                }
            }
        }

        return null;
    }

    var _addEvent = function(element, name, callback, one) {
        var handlerId = KTUtil.getUniqueId('event');

        KTUtil.data(element).set(name, handlerId);

        if ( !_handlers[name] ) {
            _handlers[name] = {};
        }

        _handlers[name][handlerId] = {
            name: name,
            callback: callback,
            one: one,
            fired: false
        };
    }

    var _removeEvent = function(element, name) {
        var handlerId = KTUtil.data(element).get(name);

        if (_handlers[name] && _handlers[name][handlerId]) {
            delete _handlers[name][handlerId];
        }
    }

    ////////////////////////////
    // ** Public Methods  ** //
    ////////////////////////////
    return {
        trigger: function(element, name, target, e) {
            return _triggerEvent(element, name, target, e);
        },

        on: function(element, name, handler) {
            return _addEvent(element, name, handler);
        },

        one: function(element, name, handler) {
            return _addEvent(element, name, handler, true);
        },

        off: function(element, name) {
            return _removeEvent(element, name);
        },

        debug: function() {
            for (var b in _handlers) {
                if ( _handlers.hasOwnProperty(b) ) console.log(b);
            }
        }
    }
}();

// Webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = KTEventHandler;
}
