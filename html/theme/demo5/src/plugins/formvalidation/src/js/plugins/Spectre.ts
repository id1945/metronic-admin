/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import classSet from '../utils/classSet';
import hasClass from '../utils/hasClass';
import Framework, { FrameworkOptions } from './Framework';
import { IconPlacedEvent } from './Icon';

export default class Spectre extends Framework {
    constructor(opts?: FrameworkOptions) {
        // See https://picturepan2.github.io/spectre/elements.html#forms
        super(
            Object.assign(
                {},
                {
                    formClass: 'fv-plugins-spectre',
                    messageClass: 'form-input-hint',
                    rowInvalidClass: 'has-error',
                    rowPattern: /^(.*)(col)(-(xs|sm|md|lg))*-[0-9]+(.*)$/,
                    rowSelector: '.form-group',
                    rowValidClass: 'has-success',
                },
                opts
            )
        );
    }

    protected onIconPlaced(e: IconPlacedEvent): void {
        const type = e.element.getAttribute('type');
        const parent = e.element.parentElement;
        if ('checkbox' === type || 'radio' === type) {
            classSet(e.iconElement, {
                'fv-plugins-icon-check': true,
            });
            // Place it after the container of checkbox/radio
            if (hasClass(parent, `form-${type}`)) {
                parent.parentElement.insertBefore(
                    e.iconElement,
                    parent.nextSibling
                );
            }
        }
    }
}
