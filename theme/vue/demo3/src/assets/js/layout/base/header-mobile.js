"use strict";

var KTLayoutHeaderMobile = function() {
    // Private properties
    var _element;
    var _object;

    // Get height
    var _getHeight = function() {
        var height;

        height = KTUtil.actualHeight(_element);

        return height;
    }

    // Public methods
	return {
		init: function(id) {
            _element = KTUtil.getById(id);
		},

        isFixed: function() {
            return KTUtil.hasClass(KTUtil.getBody(), 'header-mobile-fixed')
        },

        getElement: function() {
            return _element;
        },

        getHeader: function() {
            return _object;
        },

        getHeight: function() {
            return _getHeight();
        }
	};
}();



export default KTLayoutHeaderMobile;