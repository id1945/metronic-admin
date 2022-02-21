/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import {
    DynamicFieldEvent,
    ElementIgnoredEvent,
    ValidateResult,
    ValidatorNotValidatedEvent,
    ValidatorValidatedEvent,
} from '../core/Core';
import Plugin from '../core/Plugin';
import classSet from '../utils/classSet';

type ContainerCallback = (field: string, element: HTMLElement) => HTMLElement;

export interface MessageOptions {
    clazz?: string;
    container?: string | ContainerCallback;
}
export interface MessageDisplayedEvent {
    element: HTMLElement;
    field: string;
    message: string;
    messageElement: HTMLElement;
    meta: unknown;
    validator: string;
}
export interface MessagePlacedEvent {
    element: HTMLElement;
    elements: HTMLElement[];
    field: string;
    messageElement: HTMLElement;
}

export default class Message extends Plugin<MessageOptions> {
    /**
     * Determine the closest element that its class matches with given pattern.
     * In popular cases, all the fields might follow the same markup, so that closest element
     * can be used as message container.
     *
     * For example, if we use the Bootstrap framework then the field often be placed inside a
     * `col-{size}-{numberOfColumns}` class, we can register the plugin as following:
     * ```
     *  formValidation(form, {
     *      plugins: {
     *          message: new Message({
     *              container: function(field, element) {
     *                  return Message.getClosestContainer(element, form, /^(.*)(col|offset)-(xs|sm|md|lg)-[0-9]+(.*)$/)
     *              }
     *          })
     *      }
     *  })
     * ```
     *
     * @param element The field element
     * @param upper The upper element, so we don't have to look for the entire page
     * @param pattern The pattern
     * @return {HTMLElement}
     */
    public static getClosestContainer(
        element: HTMLElement,
        upper: HTMLElement,
        pattern: RegExp
    ): HTMLElement {
        let ele = element;
        while (ele) {
            if (ele === upper) {
                break;
            }
            ele = ele.parentElement;
            if (pattern.test(ele.className)) {
                break;
            }
        }
        return ele;
    }

    private defaultContainer: HTMLElement;

    // Map the field element to message container
    private messages: Map<HTMLElement, HTMLElement> = new Map();
    private elementIgnoredHandler: (e: ElementIgnoredEvent) => void;
    private fieldAddedHandler: (e: DynamicFieldEvent) => void;
    private fieldRemovedHandler: (e: DynamicFieldEvent) => void;
    private validatorValidatedHandler: (e: ValidatorValidatedEvent) => void;
    private validatorNotValidatedHandler: (
        e: ValidatorNotValidatedEvent
    ) => void;

    constructor(opts?: MessageOptions) {
        super(opts);

        // By default, we will display error messages at the bottom of form
        this.defaultContainer = document.createElement('div');
        this.opts = Object.assign(
            {},
            {
                container: (_field: string, _element: HTMLElement) =>
                    this.defaultContainer,
            },
            opts
        );

        this.elementIgnoredHandler = this.onElementIgnored.bind(this);
        this.fieldAddedHandler = this.onFieldAdded.bind(this);
        this.fieldRemovedHandler = this.onFieldRemoved.bind(this);
        this.validatorValidatedHandler = this.onValidatorValidated.bind(this);
        this.validatorNotValidatedHandler =
            this.onValidatorNotValidated.bind(this);
    }

    public install(): void {
        this.core.getFormElement().appendChild(this.defaultContainer);
        this.core
            .on('core.element.ignored', this.elementIgnoredHandler)
            .on('core.field.added', this.fieldAddedHandler)
            .on('core.field.removed', this.fieldRemovedHandler)
            .on('core.validator.validated', this.validatorValidatedHandler)
            .on(
                'core.validator.notvalidated',
                this.validatorNotValidatedHandler
            );
    }

    public uninstall(): void {
        this.core.getFormElement().removeChild(this.defaultContainer);

        this.messages.forEach((message) =>
            message.parentNode.removeChild(message)
        );
        this.messages.clear();

        this.core
            .off('core.element.ignored', this.elementIgnoredHandler)
            .off('core.field.added', this.fieldAddedHandler)
            .off('core.field.removed', this.fieldRemovedHandler)
            .off('core.validator.validated', this.validatorValidatedHandler)
            .off(
                'core.validator.notvalidated',
                this.validatorNotValidatedHandler
            );
    }

    // Prepare message container for new added field
    private onFieldAdded(e: DynamicFieldEvent): void {
        const elements = e.elements;
        if (elements) {
            elements.forEach((ele) => {
                const msg = this.messages.get(ele);
                if (msg) {
                    msg.parentNode.removeChild(msg);
                    this.messages.delete(ele);
                }
            });

            this.prepareFieldContainer(e.field, elements);
        }
    }

    // When a field is removed, we remove all error messages that associates with the field
    private onFieldRemoved(e: DynamicFieldEvent): void {
        if (!e.elements.length || !e.field) {
            return;
        }

        const type = e.elements[0].getAttribute('type');
        const elements =
            'radio' === type || 'checkbox' === type
                ? [e.elements[0]]
                : e.elements;
        elements.forEach((ele) => {
            if (this.messages.has(ele)) {
                const container = this.messages.get(ele);
                container.parentNode.removeChild(container);
                this.messages.delete(ele);
            }
        });
    }

    private prepareFieldContainer(
        field: string,
        elements: HTMLElement[]
    ): void {
        if (elements.length) {
            const type = elements[0].getAttribute('type');
            if ('radio' === type || 'checkbox' === type) {
                this.prepareElementContainer(field, elements[0], elements);
            } else {
                elements.forEach((ele) =>
                    this.prepareElementContainer(field, ele, elements)
                );
            }
        }
    }

    private prepareElementContainer(
        field: string,
        element: HTMLElement,
        elements: HTMLElement[]
    ): void {
        let container;

        if ('string' === typeof this.opts.container) {
            const selector =
                '#' === this.opts.container.charAt(0)
                    ? `[id="${this.opts.container.substring(1)}"]`
                    : this.opts.container;
            container = this.core
                .getFormElement()
                .querySelector(selector) as HTMLElement;
        } else {
            container = this.opts.container(field, element);
        }

        const message = document.createElement('div');
        container.appendChild(message);
        classSet(message, {
            'fv-plugins-message-container': true,
        });

        this.core.emit('plugins.message.placed', {
            element,
            elements,
            field,
            messageElement: message,
        });

        this.messages.set(element, message);
    }

    private getMessage(result: ValidateResult): string {
        return typeof result.message === 'string'
            ? result.message
            : result.message[this.core.getLocale()];
    }

    private onValidatorValidated(e: ValidatorValidatedEvent): void {
        const elements = e.elements;
        const type = e.element.getAttribute('type');

        const element =
            'radio' === type || 'checkbox' === type ? elements[0] : e.element;
        if (this.messages.has(element)) {
            const container = this.messages.get(element);
            const messageEle = container.querySelector(
                `[data-field="${e.field}"][data-validator="${e.validator}"]`
            );
            if (!messageEle && !e.result.valid) {
                const ele = document.createElement('div');
                ele.innerHTML = this.getMessage(e.result);
                ele.setAttribute('data-field', e.field);
                ele.setAttribute('data-validator', e.validator);
                if (this.opts.clazz) {
                    classSet(ele, {
                        [this.opts.clazz]: true,
                    });
                }
                container.appendChild(ele);

                this.core.emit('plugins.message.displayed', {
                    element: e.element,
                    field: e.field,
                    message: e.result.message,
                    messageElement: ele,
                    meta: e.result.meta,
                    validator: e.validator,
                });
            } else if (messageEle && !e.result.valid) {
                // The validator returns new message
                messageEle.innerHTML = this.getMessage(e.result);
                this.core.emit('plugins.message.displayed', {
                    element: e.element,
                    field: e.field,
                    message: e.result.message,
                    messageElement: messageEle,
                    meta: e.result.meta,
                    validator: e.validator,
                });
            } else if (messageEle && e.result.valid) {
                // Field is valid
                container.removeChild(messageEle);
            }
        }
    }

    private onValidatorNotValidated(e: ValidatorNotValidatedEvent): void {
        const elements = e.elements;
        const type = e.element.getAttribute('type');

        const element =
            'radio' === type || 'checkbox' === type ? elements[0] : e.element;
        if (this.messages.has(element)) {
            const container = this.messages.get(element);
            const messageEle = container.querySelector(
                `[data-field="${e.field}"][data-validator="${e.validator}"]`
            );
            if (messageEle) {
                container.removeChild(messageEle);
            }
        }
    }

    private onElementIgnored(e: ElementIgnoredEvent): void {
        const elements = e.elements;
        const type = e.element.getAttribute('type');

        const element =
            'radio' === type || 'checkbox' === type ? elements[0] : e.element;
        if (this.messages.has(element)) {
            const container = this.messages.get(element);
            const messageElements = [].slice.call(
                container.querySelectorAll(`[data-field="${e.field}"]`)
            ) as Element[];
            messageElements.forEach((messageEle) => {
                container.removeChild(messageEle);
            });
        }
    }
}
