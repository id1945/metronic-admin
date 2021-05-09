/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import classSet from '../utils/classSet';
import hasClass from '../utils/hasClass';
import Framework, { FrameworkOptions } from './Framework';
import { IconPlacedEvent } from './Icon';

export default class Bootstrap3 extends Framework {
    constructor(opts?: FrameworkOptions) {
        super(Object.assign({}, {
            formClass: 'fv-plugins-bootstrap3',
            messageClass: 'help-block',
            rowClasses: 'has-feedback',
            rowInvalidClass: 'has-error',
            rowPattern: /^(.*)(col|offset)-(xs|sm|md|lg)-[0-9]+(.*)$/,
            rowSelector: '.form-group',
            rowValidClass: 'has-success',
        }, opts));
    }

    protected onIconPlaced(e: IconPlacedEvent): void {
        classSet(e.iconElement, {
            'form-control-feedback': true,
        });

        // Adjust icon place if the field belongs to a `input-group`
        const parent = e.element.parentElement;
        if (hasClass(parent, 'input-group')) {
            parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
        }

        const type = e.element.getAttribute('type');
        if ('checkbox' === type || 'radio' === type) {
            const grandParent = parent.parentElement;
            // Place it after the container of checkbox/radio
            if (hasClass(parent, type)) {
                parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
            } else if (hasClass(parent.parentElement, type)) {
                grandParent.parentElement.insertBefore(e.iconElement, grandParent.nextSibling);
            }
        }
    }
}
