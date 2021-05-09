"use strict";

// Component Definition
var KTWizard = function(elementId, options) {
    // Main object
    var the = this;
    var init = false;

    // Get element object
    var element = KTUtil.getById(elementId);
    var body = KTUtil.getBody();

    if (!element) {
        return;
    }

    // Default options
    var defaultOptions = {
        startStep: 1,
        clickableSteps: false, // to make steps clickable this set value true and add data-wizard-clickable="true" in HTML for class="wizard" element
        navigation: true
    };

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var Plugin = {
        /**
         * Construct
         */

        construct: function(options) {
            if (KTUtil.data(element).has('wizard')) {
                the = KTUtil.data(element).get('wizard');
            } else {
                // reset menu
                Plugin.init(options);

                // build menu
                Plugin.build();

                KTUtil.data(element).set('wizard', the);
            }

            return the;
        },

        /**
         * Init wizard
         */
        init: function(options) {
            the.element = element;
            the.events = [];

            // merge default and user defined options
            the.options = KTUtil.deepExtend({}, defaultOptions, options);

            // Elements
            the.steps = KTUtil.findAll(element, '[data-wizard-type="step"]');

            the.btnNext = KTUtil.find(element, '[data-wizard-type="action-next"]');
            the.btnPrev = KTUtil.find(element, '[data-wizard-type="action-prev"]');
            the.btnSubmit = KTUtil.find(element, '[data-wizard-type="action-submit"]');

            // Variables
            the.events = [];
            the.lastStep = 0;
            the.currentStep = 1;
            the.newStep = 0;
            the.stopped = false;
            the.totalSteps = the.steps.length;

            // Init current step
            if (the.options.startStep > 1) {
                Plugin.goTo(the.options.startStep);
            }

            // Init UI
            Plugin.updateUI();
        },

        /**
         * Build Form Wizard
         */
        build: function() {
            if (the.options.navigation) {
                // Next button event handler
                KTUtil.addEvent(the.btnNext, 'click', function(e) {
                    e.preventDefault();

                    // Set new step number
                    Plugin.setNewStep(Plugin.getNextStep());

                    // Trigger change event
                    if (Plugin.eventTrigger('change') !== false) {
                        Plugin.goTo(Plugin.getNextStep());
                    }
                });

                // Prev button event handler
                KTUtil.addEvent(the.btnPrev, 'click', function(e) {
                    e.preventDefault();

                    // Set new step number
                    Plugin.setNewStep(Plugin.getPrevStep());

                    // Trigger change event
                    if (Plugin.eventTrigger('change') !== false) {
                        Plugin.goTo(Plugin.getPrevStep());
                    }
                });

                // Submit button event handler
                KTUtil.addEvent(the.btnSubmit, 'click', function(e) {
                    e.preventDefault();

                    Plugin.eventTrigger('submit');
                });
            }

            if (the.options.clickableSteps === true) {
                KTUtil.on(element, '[data-wizard-type="step"]', 'click', function() {
                    var index = KTUtil.index(this) + 1;

                    if (index !== the.currentStep) {
                        Plugin.setNewStep(index);

                        // Trigger change event
                        if (Plugin.eventTrigger('change') !== false) {
                            Plugin.goTo(index);
                        }
                    }
                });
            }
        },

        /**
         * Handles wizard click wizard
         */
        goTo: function(number) {
            // Skip if stopped
            if (the.stopped === true) {
                the.stopped = false;
                return;
            }

            // Skip if this step is already shown
            if (number === the.currentStep || number > the.totalSteps || number < 0) {
                return;
            }

            // Validate step number
            number = parseInt(number);

            // Set current step
            the.lastStep = the.currentStep;
            the.currentStep = number;
            the.newStep = 0;

            Plugin.updateUI();

            Plugin.eventTrigger('changed');

            return the;
        },

        /**
         * Stop wizard
         */
        stop: function() {
            the.stopped = true;
        },

        /**
         * Resume wizard
         */
        resume: function() {
            the.stopped = false;
        },

        /**
         * Check last step
         */
        isLastStep: function() {
            return the.currentStep === the.totalSteps;
        },

        /**
         * Check first step
         */
        isFirstStep: function() {
            return the.currentStep === 1;
        },

        /**
         * Check between step
         */
        isBetweenStep: function() {
            return Plugin.isLastStep() === false && Plugin.isFirstStep() === false;
        },

        /**
         * Update wizard UI after step change
         */
        updateUI: function() {
            var stepType = '';
            var index = the.currentStep - 1;

            if (Plugin.isLastStep()) {
                stepType = 'last';
            } else if (Plugin.isFirstStep()) {
                stepType = 'first';
            } else {
                stepType = 'between';
            }

            KTUtil.attr(the.element, 'data-wizard-state', stepType);

            // Steps
            var steps = KTUtil.findAll(the.element, '[data-wizard-type="step"]');

            if (steps && steps.length > 0) {
                for (var i = 0, len = steps.length; i < len; i++) {
                    if (i == index) {
                        KTUtil.attr(steps[i], 'data-wizard-state', 'current');
                    } else {
                        if (i < index) {
                            KTUtil.attr(steps[i], 'data-wizard-state', 'done');
                        } else {
                            KTUtil.attr(steps[i], 'data-wizard-state', 'pending');
                        }
                    }
                }
            }

            // Steps Info
            var stepsInfo = KTUtil.findAll(the.element, '[data-wizard-type="step-info"]');
            if (stepsInfo &&stepsInfo.length > 0) {
                for (var i = 0, len = stepsInfo.length; i < len; i++) {
                    if (i == index) {
                        KTUtil.attr(stepsInfo[i], 'data-wizard-state', 'current');
                    } else {
                        KTUtil.removeAttr(stepsInfo[i], 'data-wizard-state');
                    }
                }
            }

            // Steps Content
            var stepsContent = KTUtil.findAll(the.element, '[data-wizard-type="step-content"]');
            if (stepsContent&& stepsContent.length > 0) {
                for (var i = 0, len = stepsContent.length; i < len; i++) {
                    if (i == index) {
                        KTUtil.attr(stepsContent[i], 'data-wizard-state', 'current');
                    } else {
                        KTUtil.removeAttr(stepsContent[i], 'data-wizard-state');
                    }
                }
            }
        },

        /**
         * Get next step number
         */
        getNextStep: function() {
            if (the.totalSteps >= (the.currentStep + 1)) {
                return the.currentStep + 1;
            } else {
                return the.totalSteps;
            }
        },

        /**
         * Get prev step number
         */
        getPrevStep: function() {
            if ((the.currentStep - 1) >= 1) {
                return the.currentStep - 1;
            } else {
                return 1;
            }
        },

        /**
         * Get new step number
         */
        getNewStep: function() {
            return the.newStep;
        },

        /**
         * Set new step
         */
        setNewStep: function(step) {
            the.newStep = step;
        },

        /**
         * Trigger events
         */
        eventTrigger: function(name, nested) {
            //KTUtil.triggerCustomEvent(name);
            for (var i = 0; i < the.events.length; i++) {
                var event = the.events[i];
                if (event.name == name) {
                    if (event.one == true) {
                        if (event.fired == false) {
                            the.events[i].fired = true;
                            return event.handler.call(this, the);
                        }
                    } else {
                        return event.handler.call(this, the);
                    }
                }
            }
        },

        addEvent: function(name, handler, one) {
            the.events.push({
                name: name,
                handler: handler,
                one: one,
                fired: false
            });

            return the;
        }
    };

    //////////////////////////
    // ** Public Methods ** //
    //////////////////////////

    /**
     * Set default options
     */

    the.setDefaults = function(options) {
        defaultOptions = options;
    };

    /**
     * Go to the next step
     */
    the.goNext = function() {
        return Plugin.goTo(Plugin.getNextStep());
    };

    /**
     * Go to the prev step
     */
    the.goPrev = function() {
        return Plugin.goTo(Plugin.getPrevStep());
    };

    /**
     * Go to the last step
     */
    the.goLast = function() {
        return Plugin.goTo(Plugin.getLastStep());
    };

    /**
     * Go to the first step
     */
    the.goFirst = function() {
        return Plugin.goTo(Plugin.getFirstStep());
    };

    /**
     * Go to a step
     */
    the.goTo = function(number) {
        return Plugin.goTo(number);
    };

    /**
     * Stop wizard
     */
    the.stop = function() {
        return Plugin.stop();
    };

    /**
     * Resume wizard
     */
    the.resume = function() {
        return Plugin.resume();
    };

    /**
     * Get current step number
     */
    the.getStep = function() {
        return the.currentStep;
    };

    /**
     * Get new step number
     */
    the.getNewStep = function() {
        return Plugin.getNewStep();
    };

    /**
     * Set new step number
     */
    the.setNewStep = function(number) {
        Plugin.setNewStep(number);
    };

    /**
     * Check last step
     */
    the.isLastStep = function() {
        return Plugin.isLastStep();
    };

    /**
     * Check first step
     */
    the.isFirstStep = function() {
        return Plugin.isFirstStep();
    };

    /**
     * Attach event("change", "changed", "submit")
     */
    the.on = function(name, handler) {
        return Plugin.addEvent(name, handler);
    };

    /**
     * Attach event that will be fired once
     */
    the.one = function(name, handler) {
        return Plugin.addEvent(name, handler, true);
    };

    // Construct plugin
    Plugin.construct.apply(the, [options]);

    return the;
};

// webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = KTWizard;
}
