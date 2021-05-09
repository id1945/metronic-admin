"use strict";

var KTLayoutBrand = function() {
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

            if (!_element) {
                return;
            }
		},

        getElement: function() {
            return _element;
        },

        getHeight: function() {
            return _getHeight();
        }
	};
}();



export default KTLayoutBrand;