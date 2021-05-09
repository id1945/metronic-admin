"use strict";

var KTLayoutHeader = function() {
    // Private properties
    var _element;
    var _elementForMobile;
    var _object;

	// Private functions
    // Get Height
    var _getHeight = function() {
        var height = 0;

        if (_element) {
            height = KTUtil.actualHeight(_element) + 1;
        }

        return height;
    }

    // Get Height
    var _getHeightForMobile = function() {
        var height;

        height = KTUtil.actualHeight(_elementForMobile);

        return height;
    }

    // Public Methods
	return {
		init: function(id, idForMobile) {
            _element = KTUtil.getById(id);
            _elementForMobile = KTUtil.getById(idForMobile);

            if (!_element) {
                return;
            }
		},

        isFixed: function() {
            return KTUtil.hasClass(KTUtil.getBody(), 'header-fixed')
        },

        isFixedForMobile: function() {
            return KTUtil.hasClass(KTUtil.getBody(), 'header-mobile-fixed')
        },

        getElement: function() {
            return _element;
        },

        getElementForMobile: function() {
            return _elementForMobile;
        },

        getHeader: function() {
            return _object;
        },

        getHeight: function() {
            return _getHeight();
        },

        getHeightForMobile: function() {
            return _getHeightForMobile();
        }
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutHeader;
}
