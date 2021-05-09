"use strict";

var KTLayoutFooter = function() {
    // Private properties
    var _element;

	// Private functions
	var _getHeight = function() {
		var height = 0;

        if (_element) {
            height = KTUtil.actualHeight(_element);
        }

		return height;
	}

    // Public methods
	return {
		init: function(id) {
            _element = KTUtil.getById(id);
		},

		getHeight: function() {
			return _getHeight();
		},

        getElement: function() {
            return _element;
        }
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutFooter;
}
