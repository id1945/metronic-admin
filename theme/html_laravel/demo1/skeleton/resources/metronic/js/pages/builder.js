"use strict";

// Class definition
var KTLayoutBuilder = function() {

	var formAction;

	var exporter = {
		init: function() {
			formAction = $('#form-builder').attr('action');
		},
		startLoad: function(options) {
			$('#builder_export').
					addClass('spinner spinner-right spinner-primary').
					find('span').text('Exporting...').
					closest('.card-footer').
					find('.btn').
					attr('disabled', true);
			toastr.info(options.title, options.message);
		},
		doneLoad: function() {
			$('#builder_export').
					removeClass('spinner spinner-right spinner-primary').
					find('span').text('Export').
					closest('.card-footer').
					find('.btn').
					attr('disabled', false);
		},
		exportHtml: function(demo) {
			exporter.startLoad({
				title: 'Generate HTML Partials',
				message: 'Process started and it may take a while.',
			});

			$.ajax(formAction, {
				method: 'POST',
				data: {
					builder_export: 1,
					export_type: 'partial',
					demo: demo,
					theme: 'metronic',
				},
			}).done(function(r) {
				var result = JSON.parse(r);
				if (result.message) {
					exporter.stopWithNotify(result.message);
					return;
				}

				var timer = setInterval(function() {
					$.ajax(formAction, {
						method: 'POST',
						data: {
							builder_export: 1,
							demo: demo,
							builder_check: result.id,
						},
					}).done(function(r) {
						var result = JSON.parse(r);
						if (typeof result === 'undefined') return;
						// export status 1 is completed
						if (result.export_status !== 1) return;

						$('<iframe/>').attr({
							src: formAction + '?builder_export&builder_download&id=' + result.id + '&demo=' + demo,
							style: 'visibility:hidden;display:none',
						}).ready(function() {
							toastr.success('Export HTML Version Layout', 'HTML version exported.');
							exporter.doneLoad();
							// stop the timer
							clearInterval(timer);
						}).appendTo('body');
					});
				}, 15000);
			});
		},
		stopWithNotify: function(message, type) {
			type = type || 'danger';
			if (typeof toastr[type] !== 'undefined') {
				toastr[type]('Verification failed', message);
			}
			exporter.doneLoad();
		},
	};

	// Private functions
	var preview = function() {
		$('[name="builder_submit"]').click(function(e) {
			e.preventDefault();
			var _self = $(this);
			$(_self).
					addClass('spinner spinner-right spinner-white').
					closest('.card-footer').
					find('.btn').
					attr('disabled', true);

			// keep remember tab id
			$('.nav[data-remember-tab]').each(function() {
				var tab = $(this).data('remember-tab');
				var tabId = $(this).find('.nav-link.active[data-toggle="tab"]').attr('href');
				$('#' + tab).val(tabId);
			});

			$.ajax(formAction + '?demo=' + $(_self).data('demo'), {
				method: 'POST',
				data: $('[name]').serialize(),
			}).done(function(r) {
				toastr.success('Preview updated', 'Preview has been updated with current configured layout.');
			}).always(function() {
				setTimeout(function() {
					location.reload();
				}, 600);
			});
		});
	};

	var reset = function() {
		$('[name="builder_reset"]').click(function(e) {
			e.preventDefault();
			var _self = $(this);
			$(_self).
					addClass('spinner spinner-right spinner-primary').
					closest('.card-footer').
					find('.btn').
					attr('disabled', true);

			$.ajax(formAction + '?demo=' + $(_self).data('demo'), {
				method: 'POST',
				data: {
					builder_reset: 1,
					demo: $(_self).data('demo'),
				},
			}).done(function(r) {}).always(function() {
				location.reload();
			});
		});
	};

	var verify = {
		reCaptchaVerified: function() {
			return $.ajax('/metronic/theme/html/tools/builder/recaptcha.php?recaptcha', {
				method: 'POST',
				data: {
					response: $('#g-recaptcha-response').val(),
				},
			}).fail(function() {
				grecaptcha.reset();
				$('#alert-message').
						removeClass('alert-success d-hide').
						addClass('alert-danger').
						html('Invalid reCaptcha validation');
			});
		},
		init: function() {
			var exportReadyTrigger;
			// click event
			$('#builder_export').click(function(e) {
				e.preventDefault();
				exportReadyTrigger = $(this);

				$('#kt-modal-purchase').modal('show');
				$('#alert-message').addClass('d-hide');
				grecaptcha.reset();
			});

			$('#submit-verify').click(function(e) {
				e.preventDefault();
				if (!$('#g-recaptcha-response').val()) {
					$('#alert-message').
							removeClass('alert-success d-hide').
							addClass('alert-danger').
							html('Invalid reCaptcha validation');
					return;
				}

				verify.reCaptchaVerified().done(function(response) {
					if (response.success) {
						$('[data-dismiss="modal"]').trigger('click');

						var demo = $(exportReadyTrigger).data('demo');
						switch ($(exportReadyTrigger).attr('id')) {
							case 'builder_export':
								exporter.exportHtml(demo);
								break;
							case 'builder_export_html':
								exporter.exportHtml(demo);
								break;
						}
					} else {
						grecaptcha.reset();
						$('#alert-message').
								removeClass('alert-success d-hide').
								addClass('alert-danger').
								html('Invalid reCaptcha validation');
					}
				});
			});
		},
	};

	// basic demo
	var init = function() {
		exporter.init();
		preview();
		reset();
	};

	return {
		// public functions
		init: function() {
			verify.init();
			init();
		}
	};
}();

jQuery(document).ready(function() {
	KTLayoutBuilder.init();
});
