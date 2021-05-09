"use strict";

var KTLayoutStretchedCard = function() {
    // Private properties
	var _element;

	// Private functions
	var _init = function() {
		var scroll = KTUtil.find(_element, '.card-scroll');
		var cardBody = KTUtil.find(_element, '.card-body');
		var cardHeader = KTUtil.find(_element, '.card-header');

		var height = KTLayoutContent.getHeight();

		height = height - parseInt(KTUtil.actualHeight(cardHeader));

		height = height - parseInt(KTUtil.css(_element, 'marginTop')) - parseInt(KTUtil.css(_element, 'marginBottom'));
		height = height - parseInt(KTUtil.css(_element, 'paddingTop')) - parseInt(KTUtil.css(_element, 'paddingBottom'));

		height = height - parseInt(KTUtil.css(cardBody, 'paddingTop')) - parseInt(KTUtil.css(cardBody, 'paddingBottom'));
		height = height - parseInt(KTUtil.css(cardBody, 'marginTop')) - parseInt(KTUtil.css(cardBody, 'marginBottom'));

		height = height - 3;

		KTUtil.css(scroll, 'height', height + 'px');
	}

    // Public methods
	return {
		init: function(id) {
            _element = KTUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize
			_init();

            // Re-calculate on window resize
            KTUtil.addResizeHandler(function() {
				_init();
			});
		},

		update: function() {
			_init();
		}
	};
}();



export default KTLayoutStretchedCard;