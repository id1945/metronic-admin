/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ElementNotValidatedEvent, ElementValidatedEvent, ElementValidatingEvent } from '../core/Core';
import Plugin from '../core/Plugin';
import classSet from '../utils/classSet';
import { IconOptions, IconPlacedEvent, IconSetEvent } from './Icon';

export interface MandatoryIconOptions {
    icon: string;
}

export default class MandatoryIcon extends Plugin<MandatoryIconOptions> {
    private removedIcons = {
        Invalid: '',
        NotValidated: '',
        Valid: '',
        Validating: '',
    };
    // Map the field element with icon
    private icons: Map<HTMLElement, HTMLElement> = new Map();
    private iconClasses: IconOptions;

    private elementValidatingHandler: (e: ElementValidatingEvent) => void;
    private elementValidatedHandler: (e: ElementValidatedEvent) => void;
    private elementNotValidatedHandler: (e: ElementNotValidatedEvent) => void;
    private iconPlacedHandler: (e: IconPlacedEvent) => void;
    private iconSetHandler: (e: IconSetEvent) => void;

    constructor(opts?: MandatoryIconOptions) {
        super(opts);
        this.elementValidatingHandler = this.onElementValidating.bind(this);
        this.elementValidatedHandler = this.onElementValidated.bind(this);
        this.elementNotValidatedHandler = this.onElementNotValidated.bind(this);
        this.iconPlacedHandler = this.onIconPlaced.bind(this);
        this.iconSetHandler = this.onIconSet.bind(this);
    }

    public install(): void {
        this.core
            .on('core.element.validating', this.elementValidatingHandler)
            .on('core.element.validated', this.elementValidatedHandler)
            .on('core.element.notvalidated', this.elementNotValidatedHandler)
            .on('plugins.icon.placed', this.iconPlacedHandler)
            .on('plugins.icon.set', this.iconSetHandler);
    }

    public uninstall(): void {
        this.icons.clear();
        this.core
            .off('core.element.validating', this.elementValidatingHandler)
            .off('core.element.validated', this.elementValidatedHandler)
            .off('core.element.notvalidated', this.elementNotValidatedHandler)
            .off('plugins.icon.placed', this.iconPlacedHandler)
            .off('plugins.icon.set', this.iconSetHandler);
    }

    protected onIconPlaced(e: IconPlacedEvent): void {
        const validators = this.core.getFields()[e.field].validators;
        const elements = this.core.getElements(e.field);
        // tslint:disable-next-line:no-string-literal
        if (validators && validators['notEmpty'] && validators['notEmpty'].enabled !== false && elements.length) {
            this.icons.set(e.element, e.iconElement);

            const eleType = elements[0].getAttribute('type');
            const type = !eleType ? '' : eleType.toLowerCase();
            const elementArray = ('checkbox' === type || 'radio' === type) ? [elements[0]] : elements;
            for (const ele of elementArray) {
                if (this.core.getElementValue(e.field, ele) === '') {
                    // Add required icon
                    classSet(e.iconElement, {
                        [this.opts.icon]: true,
                    });
                }
            }
        }

        // Maybe the required icon consists of one which is in the list of valid/invalid/validating feedback icons
        // (for example, fa, glyphicon)
        this.iconClasses = e.classes;

        const icons = this.opts.icon.split(' ');
        const feedbackIcons = {
            Invalid: this.iconClasses.invalid ? this.iconClasses.invalid.split(' ') : [],
            Valid: this.iconClasses.valid ? this.iconClasses.valid.split(' ') : [],
            Validating: this.iconClasses.validating ? this.iconClasses.validating.split(' ') : [],
        };
        Object.keys(feedbackIcons).forEach((status) => {
            const classes = [];
            for (const clazz of icons) {
                if (feedbackIcons[status].indexOf(clazz) === -1) {
                    classes.push(clazz);
                }
            }

            this.removedIcons[status] = classes.join(' ');
        });
    }

    private onElementValidating(e: ElementValidatingEvent): void {
        this.updateIconClasses(e.element, 'Validating');
    }

    private onElementValidated(e: ElementValidatedEvent): void {
        this.updateIconClasses(e.element, e.valid ? 'Valid' : 'Invalid');
    }

    private onElementNotValidated(e: ElementNotValidatedEvent): void {
        this.updateIconClasses(e.element, 'NotValidated');
    }

    // Remove the required icon when the field updates its status
    private updateIconClasses(ele: HTMLElement, status: string): void {
        const icon = this.icons.get(ele);
        if (icon && this.iconClasses &&
            (this.iconClasses.valid || this.iconClasses.invalid || this.iconClasses.validating)
        ) {
            classSet(icon, {
                [this.removedIcons[status]]: false,
                [this.opts.icon]: false,
            });
        }
    }

    private onIconSet(e: IconSetEvent): void {
        // Show the icon when the field is empty after resetting
        const icon = this.icons.get(e.element);
        if (icon && e.status === 'NotValidated' && this.core.getElementValue(e.field, e.element) === '') {
            classSet(icon, {
                [this.opts.icon]: true,
            });
        }
    }
}
