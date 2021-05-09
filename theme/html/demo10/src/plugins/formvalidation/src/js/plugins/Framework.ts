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
import closest from '../utils/closest';
import { IconPlacedEvent } from './Icon';
import Message from './Message';

type RowSelector = (field: string, element: HTMLElement) => string;

export interface FrameworkOptions {
    defaultMessageContainer?: boolean;
    formClass: string;
    messageClass?: string;
    rowInvalidClass: string;
    // A list of CSS classes (separated by a space) that will be added to the row
    rowClasses?: string;
    rowPattern: RegExp;
    rowSelector: string | RowSelector;
    rowValidatingClass?: string;
    rowValidClass: string;
    // A CSS class added to valid element
    eleValidClass?: string;
    // A CSS class added to invalid element
    eleInvalidClass?: string;
}

export default class Framework extends Plugin<FrameworkOptions> {
    private results: Map<HTMLElement, boolean> = new Map();
    private containers: Map<HTMLElement, HTMLElement> = new Map();
    private elementIgnoredHandler: (e: ElementIgnoredEvent) => void;
    private elementValidatingHandler: (e: ElementValidatingEvent) => void;
    private elementValidatedHandler: (e: ElementValidatedEvent) => void;
    private elementNotValidatedHandler: (e: ElementNotValidatedEvent) => void;
    private iconPlacedHandler: (e: IconPlacedEvent) => void;
    private fieldAddedHandler: (e: DynamicFieldEvent) => void;
    private fieldRemovedHandler: (e: DynamicFieldEvent) => void;

    constructor(opts?: FrameworkOptions) {
        super(opts);
        this.opts = Object.assign({}, {
            defaultMessageContainer: true,
            eleInvalidClass: '',
            eleValidClass: '',
            rowClasses: '',
            rowValidatingClass: '',
        }, opts);

        this.elementIgnoredHandler = this.onElementIgnored.bind(this);
        this.elementValidatingHandler = this.onElementValidating.bind(this);
        this.elementValidatedHandler = this.onElementValidated.bind(this);
        this.elementNotValidatedHandler = this.onElementNotValidated.bind(this);
        this.iconPlacedHandler = this.onIconPlaced.bind(this);
        this.fieldAddedHandler = this.onFieldAdded.bind(this);
        this.fieldRemovedHandler = this.onFieldRemoved.bind(this);
    }

    public install(): void {
        classSet(this.core.getFormElement(), {
            [this.opts.formClass]: true,
            'fv-plugins-framework': true,
        });
        this.core
            .on('core.element.ignored', this.elementIgnoredHandler)
            .on('core.element.validating', this.elementValidatingHandler)
            .on('core.element.validated', this.elementValidatedHandler)
            .on('core.element.notvalidated', this.elementNotValidatedHandler)
            .on('plugins.icon.placed', this.iconPlacedHandler)
            .on('core.field.added', this.fieldAddedHandler)
            .on('core.field.removed', this.fieldRemovedHandler);

        if (this.opts.defaultMessageContainer) {
            this.core.registerPlugin('___frameworkMessage', new Message({
                clazz: this.opts.messageClass,
                container: (field, element) => {
                    const selector = ('string' === typeof this.opts.rowSelector)
                        ? this.opts.rowSelector
                        : this.opts.rowSelector(field, element);
                    const groupEle = closest(element, selector);
                    return Message.getClosestContainer(element, groupEle, this.opts.rowPattern);
                },
            }));
        }
    }

    public uninstall(): void {
        this.results.clear();
        this.containers.clear();
        classSet(this.core.getFormElement(), {
            [this.opts.formClass]: false,
            'fv-plugins-framework': false,
        });

        this.core
            .off('core.element.ignored', this.elementIgnoredHandler)
            .off('core.element.validating', this.elementValidatingHandler)
            .off('core.element.validated', this.elementValidatedHandler)
            .off('core.element.notvalidated', this.elementNotValidatedHandler)
            .off('plugins.icon.placed', this.iconPlacedHandler)
            .off('core.field.added', this.fieldAddedHandler)
            .off('core.field.removed', this.fieldRemovedHandler);
    }

    protected onIconPlaced(e: IconPlacedEvent): void {} // tslint:disable-line:no-empty

    private onFieldAdded(e: DynamicFieldEvent): void {
        const elements = e.elements;
        if (elements) {
            elements.forEach((ele) => {
                const groupEle = this.containers.get(ele);
                if (groupEle) {
                    classSet(groupEle, {
                        [this.opts.rowInvalidClass]: false,
                        [this.opts.rowValidatingClass]: false,
                        [this.opts.rowValidClass]: false,
                        'fv-plugins-icon-container': false,
                    });
                    this.containers.delete(ele);
                }
            });

            this.prepareFieldContainer(e.field, elements);
        }
    }

    private onFieldRemoved(e: DynamicFieldEvent): void {
        e.elements.forEach((ele) => {
            const groupEle = this.containers.get(ele);
            if (groupEle) {
                classSet(groupEle, {
                    [this.opts.rowInvalidClass]: false,
                    [this.opts.rowValidatingClass]: false,
                    [this.opts.rowValidClass]: false,
                });
            }
        });
    }

    private prepareFieldContainer(field: string, elements: HTMLElement[]): void {
        if (elements.length) {
            const type = elements[0].getAttribute('type');
            if ('radio' === type || 'checkbox' === type) {
                this.prepareElementContainer(field, elements[0]);
            } else {
                elements.forEach((ele) => this.prepareElementContainer(field, ele));
            }
        }
    }

    private prepareElementContainer(field: string, element: HTMLElement): void {
        const selector = ('string' === typeof this.opts.rowSelector)
            ? this.opts.rowSelector
            : this.opts.rowSelector(field, element);
        const groupEle = closest(element, selector);
        if (groupEle !== element) {
            classSet(groupEle, {
                [this.opts.rowClasses]: true,
                'fv-plugins-icon-container': true,
            });
            this.containers.set(element, groupEle);
        }
    }

    private onElementValidating(e: ElementValidatingEvent): void {
        const elements = e.elements;
        const type = e.element.getAttribute('type');
        const element = ('radio' === type || 'checkbox' === type) ? elements[0] : e.element;

        const groupEle = this.containers.get(element);
        if (groupEle) {
            classSet(groupEle, {
                [this.opts.rowInvalidClass]: false,
                [this.opts.rowValidatingClass]: true,
                [this.opts.rowValidClass]: false,
            });
        }
    }

    private onElementNotValidated(e: ElementNotValidatedEvent): void {
        this.removeClasses(e.element, e.elements);
    }

    private onElementIgnored(e: ElementIgnoredEvent): void {
        this.removeClasses(e.element, e.elements);
    }

    private removeClasses(element: HTMLElement, elements: HTMLElement[]): void {
        const type = element.getAttribute('type');
        const ele = ('radio' === type || 'checkbox' === type) ? elements[0] : element;

        classSet(ele, {
            [this.opts.eleValidClass]: false,
            [this.opts.eleInvalidClass]: false,
        });

        const groupEle = this.containers.get(ele);
        if (groupEle) {
            classSet(groupEle, {
                [this.opts.rowInvalidClass]: false,
                [this.opts.rowValidatingClass]: false,
                [this.opts.rowValidClass]: false,
            });
        }
    }

    private onElementValidated(e: ElementValidatedEvent): void {
        const elements = e.elements;
        const type = e.element.getAttribute('type');
        const element = ('radio' === type || 'checkbox' === type) ? elements[0] : e.element;

        classSet(element, {
            [this.opts.eleValidClass]: e.valid,
            [this.opts.eleInvalidClass]: !e.valid,
        });

        const groupEle = this.containers.get(element);
        if (groupEle) {
            if (!e.valid) {
                this.results.set(element, false);
                classSet(groupEle, {
                    [this.opts.rowInvalidClass]: true,
                    [this.opts.rowValidatingClass]: false,
                    [this.opts.rowValidClass]: false,
                });
            } else {
                this.results.delete(element);

                // Maybe there're multiple fields belong to the same row
                let isValid = true;
                this.containers.forEach((value, key) => {
                    if (value === groupEle && this.results.get(key) === false) {
                        isValid = false;
                    }
                });

                // If all field(s) belonging to the row are valid
                if (isValid) {
                    classSet(groupEle, {
                        [this.opts.rowInvalidClass]: false,
                        [this.opts.rowValidatingClass]: false,
                        [this.opts.rowValidClass]: true,
                    });
                }
            }
        }
    }
}
