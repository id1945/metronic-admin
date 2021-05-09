/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import classSet from '../utils/classSet';
import Framework, { FrameworkOptions } from './Framework';
import { IconPlacedEvent } from './Icon';

// This plugin supports validating the form made with https://shoelace.style
export default class Shoelace extends Framework {
    constructor(opts?: FrameworkOptions) {
        // See https://shoelace.style/#forms
        super(Object.assign({}, {
            formClass: 'fv-plugins-shoelace',
            messageClass: 'fv-help-block',
            rowInvalidClass: 'input-invalid',
            rowPattern: /^(.*)(col|offset)-[0-9]+(.*)$/,
            rowSelector: '.input-field',
            rowValidClass: 'input-valid',
        }, opts));
    }

    protected onIconPlaced(e: IconPlacedEvent): void {
        const parent = e.element.parentElement;
        const type = e.element.getAttribute('type');
        if ('checkbox' === type || 'radio' === type) {
            classSet(e.iconElement, {
                'fv-plugins-icon-check': true,
            });
            if ('LABEL' === parent.tagName) {
                // Place it after the container of checkbox/radio
                parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
            }
        }
    }
}
