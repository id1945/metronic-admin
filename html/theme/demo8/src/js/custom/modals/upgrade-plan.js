"use strict";

// Class definition
var KTModalUpgradePlan = function () {
    // Private variables
    var modal;
	var planPeriodMonthButton;
	var planPeriodAnnualButton;

	var changePlanPrices = function(type) {
		var items = [].slice.call(modal.querySelectorAll('[data-kt-plan-price-month]'));

		items.map(function (item) {
			var monthPrice = item.getAttribute('data-kt-plan-price-month');
			var annualPrice = item.getAttribute('data-kt-plan-price-annual');

			if ( type === 'month' ) {
				item.innerHTML = monthPrice;
			} else if ( type === 'annual' ) {
				item.innerHTML = annualPrice;
			}
		});
	}

    var handlePlanPeriodSelection = function() {
        // Handle period change
        planPeriodMonthButton.addEventListener('click', function (e) {
            changePlanPrices('month');
        });

		planPeriodAnnualButton.addEventListener('click', function (e) {
            changePlanPrices('annual');
        });
    }

    var handleTabs = function() {
        KTUtil.on(modal, '[data-bs-toggle="tab"]', 'click', function(e) {
            this.querySelector('[type="radio"]').checked = true;
        });
    }

    // Public methods
    return {
        init: function () {
            // Elements
            modal = document.querySelector('#kt_modal_upgrade_plan');

            if (!modal) {
				return;
			}

			planPeriodMonthButton = modal.querySelector('[data-kt-plan="month"]');
			planPeriodAnnualButton = modal.querySelector('[data-kt-plan="annual"]');

            // Handlers
            handlePlanPeriodSelection();
            handleTabs();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTModalUpgradePlan.init();
});
