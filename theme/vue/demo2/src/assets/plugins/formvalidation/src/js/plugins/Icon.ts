/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import {
    DynamicFieldEvent,
    ElementIgnoredEvent,
    ElementNotValidatedEvent,
    ElementValidatedEvent,
    ElementValidatingEvent,
} from '../core/Core';
import Plugin from '../core/Plugin';
import classSet from '../utils/classSet';

export interface IconOptions {
    invalid?: string;
    valid?: string;
    validating?: string;
    onPlaced?: (IconPlacedEvent) => void;
    onSet?: (IconSetEvent) => void;
}
export interface IconPlacedEvent {
    element: HTMLElement;
    field: string;
    iconElement: HTMLElement;
    classes: IconOptions;
}
export interface IconSetEvent {
    element: HTMLElement;
    field: string;
    status: string;
    iconElement: HTMLElement;
}

export default class Icon extends Plugin<IconOptions> {
    // Map the field element with icon
    private icons: Map<HTMLElement, HTMLElement> = new Map();

    private elementValidatingHandler: (e: ElementValidatingEvent) => void;
    private elementValidatedHandler: (e: ElementValidatedEvent) => void;
    private elementNotValidatedHandler: (e: ElementNotValidatedEvent) => void;
    private elementIgnoredHandler: (e: ElementIgnoredEvent) => void;
    private fieldAddedHandler: (e: DynamicFieldEvent) => void;

    constructor(opts?: IconOptions) {
        super(opts);
        this.opts = Object.assign({}, {
            invalid: 'fv-plugins-icon--invalid',
            onPlaced: () => {}, // tslint:disable-line:no-empty
            onSet: () => {}, // tslint:disable-line:no-empty
            valid: 'fv-plugins-icon--valid',
            validating: 'fv-plugins-icon--validating',
        }, opts);

        this.elementValidatingHandler = this.onElementValidating.bind(this);
        this.elementValidatedHandler = this.onElementValidated.bind(this);
        this.elementNotValidatedHandler = this.onElementNotValidated.bind(this);
        this.elementIgnoredHandler = this.onElementIgnored.bind(this);
        this.fieldAddedHandler = this.onFieldAdded.bind(this);
    }

    public install(): void {
        this.core
            .on('core.element.validating', this.elementValidatingHandler)
            .on('core.element.validated', this.elementValidatedHandler)
            .on('core.element.notvalidated', this.elementNotValidatedHandler)
            .on('core.element.ignored', this.elementIgnoredHandler)
            .on('core.field.added', this.fieldAddedHandler);
    }

    public uninstall(): void {
        this.icons.forEach((icon) => icon.parentNode.removeChild(icon));
        this.icons.clear();

        this.core
            .off('core.element.validating', this.elementValidatingHandler)
            .off('core.element.validated', this.elementValidatedHandler)
            .off('core.element.notvalidated', this.elementNotValidatedHandler)
            .off('core.element.ignored', this.elementIgnoredHandler)
            .off('core.field.added', this.fieldAddedHandler);
    }

    private onFieldAdded(e: DynamicFieldEvent): void {
        const elements = e.elements;
        if (elements) {
            elements.forEach((ele) => {
                const icon = this.icons.get(ele);
                if (icon) {
                    icon.parentNode.removeChild(icon);
                    this.icons.delete(ele);
                }
            });

            this.prepareFieldIcon(e.field, elements);
        }
    }

    private prepareFieldIcon(field: string, elements: HTMLElement[]): void {
        if (elements.length) {
            const type = elements[0].getAttribute('type');
            if ('radio' === type || 'checkbox' === type) {
                this.prepareElementIcon(field, elements[0]);
            } else {
                elements.forEach((ele) => this.prepareElementIcon(field, ele));
            }
        }
    }

    private prepareElementIcon(field: string, ele: HTMLElement): void {
        const i = document.createElement('i');
        i.setAttribute('data-field', field);
        // Append the icon right after the field element
        ele.parentNode.insertBefore(i, ele.nextSibling);

        classSet(i, {
            'fv-plugins-icon': true,
        });
        const e = {
            classes: {
                invalid: this.opts.invalid,
                valid: this.opts.valid,
                validating: this.opts.validating,
            },
            element: ele,
            field,
            iconElement: i,
        } as IconPlacedEvent;
        this.core.emit('plugins.icon.placed', e);
        this.opts.onPlaced(e);

        this.icons.set(ele, i);
    }

    private onElementValidating(e: ElementValidatingEvent): void {
        const icon = this.setClasses(e.field, e.element, e.elements, {
            [this.opts.invalid]: false,
            [this.opts.valid]: false,
            [this.opts.validating]: true,
        });
        const evt = {
            element: e.element,
            field: e.field,
            iconElement: icon,
            status: 'Validating',
        } as IconSetEvent;
        this.core.emit('plugins.icon.set', evt);
        this.opts.onSet(evt);
    }

    private onElementValidated(e: ElementValidatedEvent): void {
        const icon = this.setClasses(e.field, e.element, e.elements, {
            [this.opts.invalid]: !e.valid,
            [this.opts.valid]: e.valid,
            [this.opts.validating]: false,
        });
        const evt = {
            element: e.element,
            field: e.field,
            iconElement: icon,
            status: e.valid ? 'Valid' : 'Invalid',
        } as IconSetEvent;
        this.core.emit('plugins.icon.set', evt);
        this.opts.onSet(evt);
    }

    private onElementNotValidated(e: ElementNotValidatedEvent): void {
        const icon = this.setClasses(e.field, e.element, e.elements, {
            [this.opts.invalid]: false,
            [this.opts.valid]: false,
            [this.opts.validating]: false,
        });
        const evt = {
            element: e.element,
            field: e.field,
            iconElement: icon,
            status: 'NotValidated',
        } as IconSetEvent;
        this.core.emit('plugins.icon.set', evt);
        this.opts.onSet(evt);
    }

    private onElementIgnored(e: ElementIgnoredEvent): void {
        const icon = this.setClasses(e.field, e.element, e.elements, {
            [this.opts.invalid]: false,
            [this.opts.valid]: false,
            [this.opts.validating]: false,
        });
        const evt = {
            element: e.element,
            field: e.field,
            iconElement: icon,
            status: 'Ignored',
        } as IconSetEvent;
        this.core.emit('plugins.icon.set', evt);
        this.opts.onSet(evt);
    }

    private setClasses(
        field: string,
        element: HTMLElement,
        elements: HTMLElement[],
        classes: { [clazz: string]: boolean },
    ): HTMLElement {
        const type = element.getAttribute('type');
        const ele = ('radio' === type || 'checkbox' === type) ? elements[0] : element;

        if (this.icons.has(ele)) {
            const icon = this.icons.get(ele);
            classSet(icon, classes);
            return icon;
        } else {
            return null;
        }
    }
}
