"use strict";

// Class definition
var KTGeneralWizard = function () {
	// Elements
	var modal;	
	var modalEl;

	var stepper;
	var form;
	var formSubmitButton;

	// Variables
	var stepperObj;
	var validations = [];

	// Private Functions
	var initStepper = function () {
		// Initialize Stepper
		stepperObj = new KTStepper(stepper);

		// Validation before going to next page
		stepperObj.on('kt.stepper.next', function (stepper) {
			console.log('stepper.next');

			// Validate form before change stepper step
			var validator = validations[stepper.getCurrentStepIndex() - 1]; // get validator for currnt step

			if (validator) {
				validator.validate().then(function (status) {
					console.log('validated!');

					if (status == 'Valid') {
						stepper.goNext();

						KTUtil.scrollTop();
					} else {
						Swal.fire({
							text: "Sorry, looks like there are some errors detected, please try again.",
							icon: "error",
							buttonsStyling: false,
							confirmButtonText: "Ok, got it!",
							customClass: {
								confirmButton: "btn btn-light"
							}
						}).then(function () {
							KTUtil.scrollTop();
						});
					}
				});
			} else {
				stepper.goNext();

				KTUtil.scrollTop();
			}
		});

		// Prev event
		stepperObj.on('kt.stepper.previous', function (stepper) {
			console.log('stepper.previous');

			stepper.goPrevious();
			KTUtil.scrollTop();
		});
	}

	var handleForm = function() {
		formSubmitButton.addEventListener('click', function (e) {
			// Prevent default button action
			e.preventDefault();

			// Disable button to avoid multiple click 
			formSubmitButton.disabled = true;

			// Show loading indication
			formSubmitButton.setAttribute('data-kt-indicator', 'on');

			// Simulate form submission
			setTimeout(function() {
				// Hide loading indication
				formSubmitButton.removeAttribute('data-kt-indicator');

				// Enable button
				formSubmitButton.disabled = false;
				
				// Show popup confirmation. For more info check the plugin's official documentation: https://sweetalert2.github.io/
				Swal.fire({
					text: "Form has been successfully submitted!",
					icon: "success",
					buttonsStyling: false,
					confirmButtonText: "Ok, got it!",
					customClass: {
						confirmButton: "btn btn-primary"
					}
				}).then(function (result) {
					if (result.isConfirmed) {
						if (modal) {
							modal.hide(); // close modal
						}
						//form.submit(); // Submit form
					}
				});				
			}, 2000);   
		});

		// Expiry month. For more info, plase visit the official plugin site: https://select2.org/
        $(form.querySelector('[name="card_expiry_month"]')).on('change', function() {
            // Revalidate the field when an option is chosen
            validations[3].revalidateField('card_expiry_month');
        });

		// Expiry year. For more info, plase visit the official plugin site: https://select2.org/
        $(form.querySelector('[name="card_expiry_year"]')).on('change', function() {
            // Revalidate the field when an option is chosen
            validations[3].revalidateField('card_expiry_year');
        });

		// Expiry year. For more info, plase visit the official plugin site: https://select2.org/
        $(form.querySelector('[name="business_type"]')).on('change', function() {
            // Revalidate the field when an option is chosen
            validations[2].revalidateField('business_type');
        });
	}

	var initValidation = function () {
		// Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
		// Step 1
		validations.push(FormValidation.formValidation(
			form,
			{
				fields: {
					account_type: {
						validators: {
							notEmpty: {
								message: 'Account type is required'
							}
						}
					}
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger(),
					bootstrap: new FormValidation.plugins.Bootstrap5({
						rowSelector: '.fv-row',
                        eleInvalidClass: '',
                        eleValidClass: ''
					})
				}
			}
		));

		// Step 2
		validations.push(FormValidation.formValidation(
			form,
			{
				fields: {
					'account_team_size': {
						validators: {
							notEmpty: {
								message: 'Time size is required'
							}
						}
					},
					'account_name': {
						validators: {
							notEmpty: {
								message: 'Account name is required'
							}
						}
					},
					'account_plan': {
						validators: {
							notEmpty: {
								message: 'Account plan is required'
							}
						}
					}
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger(),
					// Bootstrap Framework Integration
					bootstrap: new FormValidation.plugins.Bootstrap5({
						rowSelector: '.fv-row',
                        eleInvalidClass: '',
                        eleValidClass: ''
					})
				}
			}
		));

		// Step 3
		validations.push(FormValidation.formValidation(
			form,
			{
				fields: {
					'business_name': {
						validators: {
							notEmpty: {
								message: 'Busines name is required'
							}
						}
					},
					'business_descriptor': {
						validators: {
							notEmpty: {
								message: 'Busines descriptor is required'
							}
						}
					},
					'business_type': {
						validators: {
							notEmpty: {
								message: 'Busines type is required'
							}
						}
					},
					'business_description': {
						validators: {
							notEmpty: {
								message: 'Busines description is required'
							}
						}
					},
					'business_email': {
						validators: {
							notEmpty: {
								message: 'Busines email is required'
							},
							emailAddress: {
								message: 'The value is not a valid email address'
							}
						}
					}
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger(),
					// Bootstrap Framework Integration
					bootstrap: new FormValidation.plugins.Bootstrap5({
						rowSelector: '.fv-row',
                        eleInvalidClass: '',
                        eleValidClass: ''
					})
				}
			}
		));

		// Step 4
		validations.push(FormValidation.formValidation(
			form,
			{
				fields: {
					'card_name': {
						validators: {
							notEmpty: {
								message: 'Name on card is required'
							}
						}
					},
					'card_number': {
						validators: {
							notEmpty: {
								message: 'Card member is required'
							},
                            creditCard: {
                                message: 'Card number is not valid'
                            }
						}
					},
					'card_expiry_month': {
						validators: {
							notEmpty: {
								message: 'Month is required'
							}
						}
					},
					'card_expiry_year': {
						validators: {
							notEmpty: {
								message: 'Year is required'
							}
						}
					},
					'card_cvv': {
						validators: {
							notEmpty: {
								message: 'CVV is required'
							},
							digits: {
								message: 'CVV must contain only digits'
							},
							stringLength: {
								min: 3,
								max: 4,
								message: 'CVV must contain 3 to 4 digits only'
							}
						}
					}
				},

				plugins: {
					trigger: new FormValidation.plugins.Trigger(),
					// Bootstrap Framework Integration
					bootstrap: new FormValidation.plugins.Bootstrap5({
						rowSelector: '.fv-row',
                        eleInvalidClass: '',
                        eleValidClass: ''
					})
				}
			}
		));
	}

	return {
		// Public Functions
		init: function () {
			// Elements
			stepper = document.querySelector('#kt_wizard_stepper');

			form = stepper.querySelector('#kt_wizard_form');
			formSubmitButton = stepper.querySelector('[data-kt-stepper-action="submit"]');

			initStepper();
			initValidation();
			handleForm();
		}
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTGeneralWizard.init();
});