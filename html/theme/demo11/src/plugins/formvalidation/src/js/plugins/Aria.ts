/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ElementValidatedEvent } from '../core/Core';
import Plugin from '../core/Plugin';
import { MessageDisplayedEvent } from './Message';

/**
 * This plugin adds ARIA attributes based on the field validity.
 * The list include:
 *  - `aria-invalid`, `aria-describedby` for field element
 *  - `aria-hidden`, `role` for associated message element
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques
 */
export default class Aria extends Plugin<Record<string, never>> {
    private elementValidatedHandler: (e: ElementValidatedEvent) => void;
    private fieldValidHandler: (field: string) => void;
    private fieldInvalidHandler: (field: string) => void;
    private messageDisplayedHandler: (e: MessageDisplayedEvent) => void;

    constructor() {
        super({});
        this.elementValidatedHandler = this.onElementValidated.bind(this);
        this.fieldValidHandler = this.onFieldValid.bind(this);
        this.fieldInvalidHandler = this.onFieldInvalid.bind(this);
        this.messageDisplayedHandler = this.onMessageDisplayed.bind(this);
    }

    public install(): void {
        this.core
            .on('core.field.valid', this.fieldValidHandler)
            .on('core.field.invalid', this.fieldInvalidHandler)
            .on('core.element.validated', this.elementValidatedHandler)
            .on('plugins.message.displayed', this.messageDisplayedHandler);
    }

    public uninstall(): void {
        this.core
            .off('core.field.valid', this.fieldValidHandler)
            .off('core.field.invalid', this.fieldInvalidHandler)
            .off('core.element.validated', this.elementValidatedHandler)
            .off('plugins.message.displayed', this.messageDisplayedHandler);
    }

    private onElementValidated(e: ElementValidatedEvent): void {
        if (e.valid) {
            e.element.setAttribute('aria-invalid', 'false');
            e.element.removeAttribute('aria-describedby');
        }
    }

    private onFieldValid(field: string): void {
        const elements = this.core.getElements(field);
        if (elements) {
            elements.forEach((ele) => {
                ele.setAttribute('aria-invalid', 'false');
                ele.removeAttribute('aria-describedby');
            });
        }
    }

    private onFieldInvalid(field: string): void {
        const elements = this.core.getElements(field);
        if (elements) {
            elements.forEach((ele) => ele.setAttribute('aria-invalid', 'true'));
        }
    }

    private onMessageDisplayed(e: MessageDisplayedEvent): void {
        e.messageElement.setAttribute('role', 'alert');
        e.messageElement.setAttribute('aria-hidden', 'false');

        const elements = this.core.getElements(e.field);
        const index = elements.indexOf(e.element);

        const id = `js-fv-${e.field}-${index}-${Date.now()}-message`;
        e.messageElement.setAttribute('id', id);
        e.element.setAttribute('aria-describedby', id);

        const type = e.element.getAttribute('type');
        if ('radio' === type || 'checkbox' === type) {
            elements.forEach((ele) => ele.setAttribute('aria-describedby', id));
        }
    }
}
