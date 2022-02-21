/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import classSet from '../utils/classSet';
import hasClass from '../utils/hasClass';
import Framework, { FrameworkOptions } from './Framework';
import { IconPlacedEvent } from './Icon';

export default class Bootstrap extends Framework {
    // See https://getbootstrap.com/docs/4.1/components/forms/#custom-styles
    constructor(opts?: FrameworkOptions) {
        super(
            Object.assign(
                {},
                {
                    eleInvalidClass: 'is-invalid',
                    eleValidClass: 'is-valid',
                    formClass: 'fv-plugins-bootstrap',
                    messageClass: 'fv-help-block',
                    rowInvalidClass: 'has-danger',
                    rowPattern:
                        /^(.*)(col|offset)(-(sm|md|lg|xl))*-[0-9]+(.*)$/,
                    rowSelector: '.form-group',
                    rowValidClass: 'has-success',
                },
                opts
            )
        );
    }

    protected onIconPlaced(e: IconPlacedEvent): void {
        // Adjust icon place if the field belongs to a `input-group`
        const parent = e.element.parentElement;
        if (hasClass(parent, 'input-group')) {
            parent.parentElement.insertBefore(
                e.iconElement,
                parent.nextSibling
            );
        }

        const type = e.element.getAttribute('type');
        if ('checkbox' === type || 'radio' === type) {
            const grandParent = parent.parentElement;
            // Place it after the container of checkbox/radio
            if (hasClass(parent, 'form-check')) {
                classSet(e.iconElement, {
                    'fv-plugins-icon-check': true,
                });
                parent.parentElement.insertBefore(
                    e.iconElement,
                    parent.nextSibling
                );
            } else if (hasClass(parent.parentElement, 'form-check')) {
                classSet(e.iconElement, {
                    'fv-plugins-icon-check': true,
                });
                grandParent.parentElement.insertBefore(
                    e.iconElement,
                    grandParent.nextSibling
                );
            }
        }
    }
}
