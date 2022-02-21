/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { DynamicFieldEvent } from '../core/Core';
import Plugin from '../core/Plugin';

export interface TriggerOptions {
    delay?:
        | number
        | {
              [field: string]: number;
          };
    event:
        | string
        | {
              [field: string]: boolean | string;
          };
    // Only perform the validation if the field value exceed this number of characters
    threshold?:
        | number
        | {
              [field: string]: number;
          };
}

export interface EventHandler {
    element: HTMLElement;
    event: string;
    field: string;
    handler: EventListener;
}
export interface TriggerExecutedEvent {
    element: HTMLElement;
    event: Event;
    field: string;
}

/**
 * Indicate the events which the validation will be executed when these events are triggered
 *
 * ```
 *  const fv = formValidation(form, {
 *      fields: {
 *          fullName: {},
 *          email: {},
 *      },
 *  });
 *
 *  // Validate fields when the `blur` events are triggered
 *  fv.registerPlugin(Trigger, {
 *      event: 'blur',
 *  });
 *
 *  // We can indicate different events for each particular field
 *  fv.registerPlugin(Trigger, {
 *      event: {
 *          fullName: 'blur',
 *          email: 'change',
 *      },
 *  });
 *
 *  // If we don't want the field to be validated automatically, set the associate value to `false`
 *  fv.registerPlugin(Trigger, {
 *      event: {
 *          email: false,    // The field is only validated when we click the submit button of form
 *      },
 *  });
 * ```
 */
export default class Trigger extends Plugin<TriggerOptions> {
    private ieVersion?: number;
    private defaultEvent: string;
    private handlers: EventHandler[] = [];
    private fieldAddedHandler: (e: DynamicFieldEvent) => void;
    private fieldRemovedHandler: (e: DynamicFieldEvent) => void;
    private timers: Map<HTMLElement, number> = new Map();

    constructor(opts?: TriggerOptions) {
        super(opts);

        const ele = document.createElement('div');
        this.defaultEvent = !('oninput' in ele) ? 'keyup' : 'input';
        this.opts = Object.assign(
            {},
            {
                delay: 0,
                event: this.defaultEvent,
                threshold: 0,
            },
            opts
        );

        this.fieldAddedHandler = this.onFieldAdded.bind(this);
        this.fieldRemovedHandler = this.onFieldRemoved.bind(this);
    }

    public install(): void {
        this.core
            .on('core.field.added', this.fieldAddedHandler)
            .on('core.field.removed', this.fieldRemovedHandler);
    }

    public uninstall(): void {
        this.handlers.forEach((item) =>
            item.element.removeEventListener(item.event, item.handler)
        );
        this.handlers = [];

        this.timers.forEach((t) => window.clearTimeout(t));
        this.timers.clear();

        this.core
            .off('core.field.added', this.fieldAddedHandler)
            .off('core.field.removed', this.fieldRemovedHandler);
    }

    private prepareHandler(field: string, elements: HTMLElement[]): void {
        elements.forEach((ele) => {
            let events = [];

            if (!!this.opts.event && this.opts.event[field] === false) {
                events = [];
            } else if (!!this.opts.event && !!this.opts.event[field]) {
                events = this.opts.event[field].split(' ');
            } else if (
                'string' === typeof this.opts.event &&
                this.opts.event !== this.defaultEvent
            ) {
                events = (this.opts.event as string).split(' ');
            } else {
                const type = ele.getAttribute('type');
                const tagName = ele.tagName.toLowerCase();

                // IE10/11 fires the `input` event when focus on the field having a placeholder
                const event =
                    'radio' === type ||
                    'checkbox' === type ||
                    'file' === type ||
                    'select' === tagName
                        ? 'change'
                        : this.ieVersion >= 10 &&
                          ele.getAttribute('placeholder')
                        ? 'keyup'
                        : this.defaultEvent;
                events = [event];
            }

            events.forEach((evt) => {
                const evtHandler = (e: Event) =>
                    this.handleEvent(e, field, ele);
                this.handlers.push({
                    element: ele,
                    event: evt,
                    field,
                    handler: evtHandler,
                });

                ele.addEventListener(evt, evtHandler);
            });
        });
    }

    private handleEvent(e: Event, field: string, ele: HTMLElement): void {
        if (
            this.exceedThreshold(field, ele) &&
            this.core.executeFilter('plugins-trigger-should-validate', true, [
                field,
                ele,
            ])
        ) {
            const handler = () =>
                this.core.validateElement(field, ele).then((_) => {
                    this.core.emit('plugins.trigger.executed', {
                        element: ele,
                        event: e,
                        field,
                    });
                });

            const delay = this.opts.delay[field] || this.opts.delay;
            if (delay === 0) {
                handler();
            } else {
                const timer = this.timers.get(ele);
                if (timer) {
                    window.clearTimeout(timer);
                }
                this.timers.set(ele, window.setTimeout(handler, delay * 1000));
            }
        }
    }

    private onFieldAdded(e: DynamicFieldEvent): void {
        this.handlers
            .filter((item) => item.field === e.field)
            .forEach((item) =>
                item.element.removeEventListener(item.event, item.handler)
            );
        this.prepareHandler(e.field, e.elements);
    }

    private onFieldRemoved(e: DynamicFieldEvent): void {
        this.handlers
            .filter(
                (item) =>
                    item.field === e.field &&
                    e.elements.indexOf(item.element) >= 0
            )
            .forEach((item) =>
                item.element.removeEventListener(item.event, item.handler)
            );
    }

    private exceedThreshold(field: string, element: HTMLElement): boolean {
        const threshold =
            this.opts.threshold[field] === 0 || this.opts.threshold === 0
                ? false
                : this.opts.threshold[field] || this.opts.threshold;
        if (!threshold) {
            return true;
        }

        // List of input type which user can't type in
        const type = element.getAttribute('type');
        if (
            [
                'button',
                'checkbox',
                'file',
                'hidden',
                'image',
                'radio',
                'reset',
                'submit',
            ].indexOf(type) !== -1
        ) {
            return true;
        }

        const value = this.core.getElementValue(field, element);
        return value.length >= threshold;
    }
}
