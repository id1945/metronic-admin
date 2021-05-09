/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import Plugin from '../core/Plugin';

export interface SubmitButtonOptions {
    aspNetButton?: boolean;
    // Allow to query the submit button(s)
    // It's useful in case the submit button is outside of form
    buttons?: (form: HTMLFormElement) => Element[];
}

export default class SubmitButton extends Plugin<SubmitButtonOptions> {
    private submitHandler: EventListener;
    private buttonClickHandler: EventListener;
    private isFormValid: boolean = false;
    private submitButtons: Element[];
    private clickedButton?: HTMLElement;

    // A hidden input to send the clicked button to the server
    private hiddenClickedEle?: HTMLElement;

    constructor(opts?: SubmitButtonOptions) {
        super(opts);
        this.opts = Object.assign({}, {
            // Set it to `true` to support classical ASP.Net form
            aspNetButton: false,
            // By default, don't perform validation when clicking on
            // the submit button/input which have `formnovalidate` attribute
            buttons: (form: HTMLFormElement) => [].slice.call(form.querySelectorAll('[type="submit"]:not([formnovalidate])')) as Element[],
        }, opts);

        this.submitHandler = this.handleSubmitEvent.bind(this);
        this.buttonClickHandler = this.handleClickEvent.bind(this);
    }

    public install(): void {
        if (!(this.core.getFormElement() instanceof HTMLFormElement)) {
            return;
        }
        const form = this.core.getFormElement() as HTMLFormElement;
        this.submitButtons = this.opts.buttons(form);

        // Disable client side validation in HTML 5
        form.setAttribute('novalidate', 'novalidate');

        // Disable the default submission first
        form.addEventListener('submit', this.submitHandler);

        this.hiddenClickedEle = document.createElement('input');
        this.hiddenClickedEle.setAttribute('type', 'hidden');
        form.appendChild(this.hiddenClickedEle);

        this.submitButtons.forEach((button) => {
            button.addEventListener('click', this.buttonClickHandler);
        });
    }

    public uninstall(): void {
        const form = this.core.getFormElement();
        if (form instanceof HTMLFormElement) {
            form.removeEventListener('submit', this.submitHandler);
        }
        this.submitButtons.forEach((button) => {
            button.removeEventListener('click', this.buttonClickHandler);
        });
        this.hiddenClickedEle.parentElement.removeChild(this.hiddenClickedEle);
    }

    private handleSubmitEvent(e: Event): void {
        this.validateForm(e);
    }

    private handleClickEvent(e: Event): void {
        const target = e.currentTarget;
        if (target instanceof HTMLElement) {
            if (this.opts.aspNetButton && this.isFormValid === true) {
                // Do nothing
            } else {
                const form = this.core.getFormElement();
                form.removeEventListener('submit', this.submitHandler);

                this.clickedButton = e.target as HTMLElement;
                const name = this.clickedButton.getAttribute('name');
                const value = this.clickedButton.getAttribute('value');
                if (name && value) {
                    this.hiddenClickedEle.setAttribute('name', name);
                    this.hiddenClickedEle.setAttribute('value', value);
                }
                this.validateForm(e);
            }
        }
    }

    private validateForm(e: Event): void {
        e.preventDefault();
        this.core.validate().then((result) => {
            if (result === 'Valid' && this.opts.aspNetButton && !this.isFormValid && this.clickedButton) {
                this.isFormValid = true;
                this.clickedButton.removeEventListener('click', this.buttonClickHandler);

                // It's the time for ASP.Net submit button to do its own submission
                this.clickedButton.click();
            }
        });
    }
}
