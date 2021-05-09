"use strict";
var defaults = {
	"language": {
		"paginate": {
			"first": '<i class="ki ki-double-arrow-back"></i>',
			"last": '<i class="ki ki-double-arrow-next"></i>',
			"next": '<i class="ki ki-arrow-next"></i>',
			"previous": '<i class="ki ki-arrow-back"></i>'
		}
	}
};

if (KTUtil.isRTL()) {
	defaults = {
		"language": {
			"paginate": {
				"first": '<i class="ki ki-double-arrow-next"></i>',
				"last": '<i class="ki ki-double-arrow-back"></i>',
				"next": '<i class="ki ki-arrow-back"></i>',
				"previous": '<i class="ki ki-arrow-next"></i>'
			}
		}
	}
}

$.extend(true, $.fn.dataTable.defaults, defaults);


