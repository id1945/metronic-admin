/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import Plugin from '../core/Plugin';
import classSet from '../utils/classSet';
import Excluded from './Excluded';

export interface WizardOptions {
    stepSelector: string;
    prevButton: string;
    nextButton: string;
    onStepActive?: (WizardStepEvent) => void;
    onStepInvalid?: (WizardStepEvent) => void;
    onStepValid?: (WizardStepEvent) => void;
    onValid?: (WizardValidEvent) => void;
    activeStepClass?: string;
    stepClass?: string;
}
export interface WizardStepEvent {
    step: number;
    numSteps: number;
}
export interface WizardValidEvent {
    numSteps: number;
}

export default class Wizard extends Plugin<WizardOptions> {
    public static EXCLUDED_PLUGIN = '___wizardExcluded';

    private prevButton: HTMLElement;
    private nextButton: HTMLElement;
    private prevStepHandler: () => void;
    private nextStepHandler: () => void;
    private steps: HTMLElement[];
    private currentStep = 0;
    private numSteps = 0;

    constructor(opts?: WizardOptions) {
        super(opts);
        this.opts = Object.assign(
            {},
            {
                activeStepClass: 'fv-plugins-wizard--active',
                onStepActive: () => {},
                onStepInvalid: () => {},
                onStepValid: () => {},
                onValid: () => {},
                stepClass: 'fv-plugins-wizard--step',
            },
            opts
        );

        this.prevStepHandler = this.onClickPrev.bind(this);
        this.nextStepHandler = this.onClickNext.bind(this);
    }

    public install(): void {
        this.core.registerPlugin(Wizard.EXCLUDED_PLUGIN, new Excluded());

        const form = this.core.getFormElement();
        this.steps = [].slice.call(
            form.querySelectorAll(this.opts.stepSelector)
        ) as HTMLElement[];
        this.numSteps = this.steps.length;
        this.steps.forEach((s) => {
            classSet(s, {
                [this.opts.stepClass]: true,
            });
        });
        classSet(this.steps[0], {
            [this.opts.activeStepClass]: true,
        });

        this.prevButton = form.querySelector(this.opts.prevButton);
        this.nextButton = form.querySelector(this.opts.nextButton);

        this.prevButton.addEventListener('click', this.prevStepHandler);
        this.nextButton.addEventListener('click', this.nextStepHandler);
    }

    public uninstall(): void {
        this.core.deregisterPlugin(Wizard.EXCLUDED_PLUGIN);

        this.prevButton.removeEventListener('click', this.prevStepHandler);
        this.nextButton.removeEventListener('click', this.nextStepHandler);
    }

    /**
     * Get the current step index
     */
    public getCurrentStep(): number {
        return this.currentStep;
    }

    /**
     * Jump to the previous step
     */
    public goToPrevStep(): void {
        if (this.currentStep >= 1) {
            // Activate the previous step
            classSet(this.steps[this.currentStep], {
                [this.opts.activeStepClass]: false,
            });
            this.currentStep--;
            classSet(this.steps[this.currentStep], {
                [this.opts.activeStepClass]: true,
            });
            this.onStepActive();
        }
    }

    /**
     * Jump to the next step.
     * It's useful when users want to go to the next step automatically
     * when a checkbox/radio button is chosen
     */
    public goToNextStep(): void {
        // When click the Next button, we will validate the current step
        this.core.validate().then((status) => {
            if (status === 'Valid') {
                const nextStep = this.currentStep + 1;
                if (nextStep >= this.numSteps) {
                    // The last step are valid
                    this.currentStep = this.numSteps - 1;
                } else {
                    // Activate the next step
                    classSet(this.steps[this.currentStep], {
                        [this.opts.activeStepClass]: false,
                    });
                    this.currentStep = nextStep;
                    classSet(this.steps[this.currentStep], {
                        [this.opts.activeStepClass]: true,
                    });
                }
                this.onStepActive();
                this.onStepValid();

                if (nextStep === this.numSteps) {
                    this.onValid();
                }
            } else if (status === 'Invalid') {
                this.onStepInvalid();
            }
        });
    }

    private onClickPrev(): void {
        this.goToPrevStep();
    }

    private onClickNext(): void {
        this.goToNextStep();
    }

    private onStepActive() {
        const e = {
            numSteps: this.numSteps,
            step: this.currentStep,
        } as WizardStepEvent;
        this.core.emit('plugins.wizard.step.active', e);
        this.opts.onStepActive(e);
    }

    private onStepValid() {
        const e = {
            numSteps: this.numSteps,
            step: this.currentStep,
        } as WizardStepEvent;
        this.core.emit('plugins.wizard.step.valid', e);
        this.opts.onStepValid(e);
    }

    private onStepInvalid() {
        const e = {
            numSteps: this.numSteps,
            step: this.currentStep,
        } as WizardStepEvent;
        this.core.emit('plugins.wizard.step.invalid', e);
        this.opts.onStepInvalid(e);
    }

    private onValid() {
        const e = {
            numSteps: this.numSteps,
        } as WizardValidEvent;
        this.core.emit('plugins.wizard.valid', e);
        this.opts.onValid(e);
    }
}
