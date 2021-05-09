/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ElementValidatedEvent, ValidatorValidatedEvent } from '../core/Core';
import Plugin from '../core/Plugin';
import classSet from '../utils/classSet';
import { IconPlacedEvent } from './Icon';

export interface TooltipOptions {
    placement: string;
    trigger: string;
}

export default class Tooltip extends Plugin<TooltipOptions> {
    // Map the element with message
    private messages: Map<HTMLElement, string> = new Map();
    private tip: HTMLElement;
    private iconPlacedHandler: (e: IconPlacedEvent) => void;
    private validatorValidatedHandler: (e: ValidatorValidatedEvent) => void;
    private elementValidatedHandler: (e: ElementValidatedEvent) => void;
    private documentClickHandler: EventListener;

    constructor(opts?: TooltipOptions) {
        super(opts);
        this.opts = Object.assign({}, {
            placement: 'top',
            trigger: 'click',
        }, opts);

        this.iconPlacedHandler = this.onIconPlaced.bind(this);
        this.validatorValidatedHandler = this.onValidatorValidated.bind(this);
        this.elementValidatedHandler = this.onElementValidated.bind(this);
        this.documentClickHandler = this.onDocumentClicked.bind(this);
    }

    public install(): void {
        this.tip = document.createElement('div');
        classSet(this.tip, {
            'fv-plugins-tooltip': true,
            [`fv-plugins-tooltip--${this.opts.placement}`]: true,
        });
        document.body.appendChild(this.tip);

        this.core
            .on('plugins.icon.placed', this.iconPlacedHandler)
            .on('core.validator.validated', this.validatorValidatedHandler)
            .on('core.element.validated', this.elementValidatedHandler);

        if ('click' === this.opts.trigger) {
            document.addEventListener('click', this.documentClickHandler);
        }
    }

    public uninstall(): void {
        this.messages.clear();
        document.body.removeChild(this.tip);

        this.core
            .off('plugins.icon.placed', this.iconPlacedHandler)
            .off('core.validator.validated', this.validatorValidatedHandler)
            .off('core.element.validated', this.elementValidatedHandler);

        if ('click' === this.opts.trigger) {
            document.removeEventListener('click', this.documentClickHandler);
        }
    }

    private onIconPlaced(e: IconPlacedEvent): void {
        classSet(e.iconElement, {
            'fv-plugins-tooltip-icon': true,
        });
        switch (this.opts.trigger) {
            case 'hover':
                e.iconElement.addEventListener('mouseenter', (evt) => this.show(e.element, evt));
                e.iconElement.addEventListener('mouseleave', (evt) => this.hide());
                break;

            case 'click':
            default:
                e.iconElement.addEventListener('click', (evt) => this.show(e.element, evt));
                break;
        }
    }

    private onValidatorValidated(e: ValidatorValidatedEvent): void {
        if (!e.result.valid) {
            const elements = e.elements;
            const type = e.element.getAttribute('type');
            const ele = ('radio' === type || 'checkbox' === type) ? elements[0] : e.element;

            // Get the message
            const message = (typeof e.result.message === 'string')
                        ? e.result.message
                        : e.result.message[this.core.getLocale()];

            this.messages.set(ele, message);
        }
    }

    private onElementValidated(e: ElementValidatedEvent): void {
        if (e.valid) {
            // Clear the message
            const elements = e.elements;
            const type = e.element.getAttribute('type');
            const ele = ('radio' === type || 'checkbox' === type) ? elements[0] : e.element;
            this.messages.delete(ele);
        }
    }

    private onDocumentClicked(e: MouseEvent): void {
        this.hide();
    }

    private show(ele: HTMLElement, e: MouseEvent): void {
        e.preventDefault();
        e.stopPropagation();

        if (!this.messages.has(ele)) {
            return;
        }

        classSet(this.tip, {
            'fv-plugins-tooltip--hide': false,
        });
        this.tip.innerHTML = `<span class="fv-plugins-tooltip__content">${this.messages.get(ele)}</span>`;

        // Calculate position of the icon element
        const icon = e.target as HTMLElement;
        const rect = icon.getBoundingClientRect();
        let top = 0;
        let left = 0;
        switch (this.opts.placement) {
            case 'top':
            default:
                top = rect.top - rect.height;
                left = rect.left + rect.width / 2 - this.tip.clientWidth / 2;
                break;

            case 'top-left':
                top = rect.top - rect.height;
                left = rect.left;
                break;

            case 'top-right':
                top = rect.top - rect.height;
                left = rect.left + rect.width - this.tip.clientWidth;
                break;

            case 'bottom':
                top = rect.top + rect.height;
                left = rect.left + rect.width / 2 - this.tip.clientWidth / 2;
                break;

            case 'bottom-left':
                top = rect.top + rect.height;
                left = rect.left;
                break;

            case 'bottom-right':
                top = rect.top + rect.height;
                left = rect.left + rect.width - this.tip.clientWidth;
                break;

            case 'left':
                top = rect.top + rect.height / 2 - this.tip.clientHeight / 2;
                left = rect.left - this.tip.clientWidth;
                break;

            case 'right':
                top = rect.top + rect.height / 2 - this.tip.clientHeight / 2;
                left = rect.left + rect.width;
                break;
        }

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;

        top = top + scrollTop;
        left = left + scrollLeft;
        this.tip.setAttribute('style', `top: ${top}px; left: ${left}px`);
    }

    private hide(): void {
        classSet(this.tip, {
            'fv-plugins-tooltip--hide': true,
        });
    }
}
