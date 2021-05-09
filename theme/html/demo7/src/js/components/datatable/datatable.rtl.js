var defaults = {
	layout: {
		icons: {
			pagination: {
				next: 'flaticon2-next',
				prev: 'flaticon2-back',
				first: 'flaticon2-fast-back',
				last: 'flaticon2-fast-next',
				more: 'flaticon-more-1',
			},
			rowDetail: {expand: 'fa fa-caret-down', collapse: 'fa fa-caret-right'},
		}
	}
};

if (KTUtil.isRTL()) {
	defaults = {
		layout: {
			icons: {
				pagination: {
					next: 'flaticon2-back',
					prev: 'flaticon2-next',
					first: 'flaticon2-fast-next',
					last: 'flaticon2-fast-back',
				},
				rowDetail: {collapse: 'fa fa-caret-down', expand: 'fa fa-caret-right'},
			}
		}
	}
}

$.extend(true, $.fn.KTDatatable.defaults, defaults);
