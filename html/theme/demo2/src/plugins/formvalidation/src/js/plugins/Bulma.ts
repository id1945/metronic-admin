/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import classSet from '../utils/classSet';
import Framework, { FrameworkOptions } from './Framework';
import { IconPlacedEvent } from './Icon';

export default class Bulma extends Framework {
    constructor(opts?: FrameworkOptions) {
        // See http://bulma.io/documentation/elements/form/
        super(
            Object.assign(
                {},
                {
                    formClass: 'fv-plugins-bulma',
                    messageClass: 'help is-danger',
                    rowInvalidClass: 'fv-has-error',
                    rowPattern: /^.*field.*$/,
                    rowSelector: '.field',
                    rowValidClass: 'fv-has-success',
                },
                opts
            )
        );
    }

    protected onIconPlaced(e: IconPlacedEvent): void {
        classSet(e.iconElement, {
            'fv-plugins-icon': false,
        });

        // Wrap the icon inside a <span class="icon is-small is-right">
        const span = document.createElement('span');
        span.setAttribute('class', 'icon is-small is-right');
        e.iconElement.parentNode.insertBefore(span, e.iconElement);
        span.appendChild(e.iconElement);

        const type = e.element.getAttribute('type');
        const parent = e.element.parentElement;
        if ('checkbox' === type || 'radio' === type) {
            classSet(parent.parentElement, {
                'has-icons-right': true,
            });
            classSet(span, {
                'fv-plugins-icon-check': true,
            });
            parent.parentElement.insertBefore(span, parent.nextSibling);
        } else {
            classSet(parent, {
                'has-icons-right': true,
            });
        }
    }
}
