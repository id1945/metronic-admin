$(document).ready(function () {
	var hireus = {
		hireUsForm: null,
		init: function () {
			hireus.formInit();
		},
		formInit: function () {
			hireus.hireUsForm = $('#hireus-form');

			$(hireus.hireUsForm).find('#submit').click(function (e) {
				e.preventDefault();

				var errorMsg = {
					'name': 'Your name is required',
					'email': 'Your email is required',
					'budget': 'Your budget is required',
					'message': 'Your project details is required',
					'g-recaptcha-response': 'reCaptcha is required',
				};

				var errors = [];
				$(hireus.hireUsForm).find(':input').each(function (i, input) {
					if ($(input).val() === '' && typeof errorMsg[$(input).attr('name')] !== 'undefined') {
						errors.push(errorMsg[$(input).attr('name')]);
					}
				});
				if (errors.length > 0) {
					alert(errors.join('\n'));
					return;
				}

				hireus.submitRegister();
			});
		},
		submitRegister: function () {
			var data = hireus.objectifyForm($(hireus.hireUsForm).serializeArray());
			$(hireus.hireUsForm).find(':input').prop('disabled', true).addClass('disabled');

			return $.ajax({
				url: 'tools/preview/docs/lib/send-email.php',
				method: 'POST',
				headers: ['Content-Type', 'application/json'],
				data: data,
			}).done(function (result) {
				if (result) {
					if ($.isEmptyObject(result.errors)) {
						hireus.showAlert('Your email successfully sent.', 'alert-success');
					} else {
						hireus.showAlert(result.errors.join('\n'), 'alert-danger');
					}
				}
			}).always(function () {
				$(hireus.hireUsForm).find(':input').prop('disabled', false).removeClass('disabled');
				grecaptcha.reset();
			});
		},
		objectifyForm: function (serialized) {
			var obj = {};
			for (var i = 0; i < serialized.length; i++) {
				obj[serialized[i]['name']] = serialized[i]['value'];
			}
			return obj;
		},
		showAlert: function (message, alert, element) {
			if (typeof element === 'undefined') element = '#alert-message';
			$(element).show().removeAttr('class').addClass('alert ' + alert).html(message);
			$('html,body').animate({
				scrollTop: $('.main__menu_wrap').offset().top
			});
		},
	};

	hireus.init();

});