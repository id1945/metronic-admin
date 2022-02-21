/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import classSet from '../utils/classSet';
import Framework, { FrameworkOptions } from './Framework';
import { IconPlacedEvent } from './Icon';

// Support Turretcss framework (https://turretcss.com/)
export default class Turret extends Framework {
    constructor(opts?: FrameworkOptions) {
        // See https://turretcss.com/docs/form/
        super(
            Object.assign(
                {},
                {
                    formClass: 'fv-plugins-turret',
                    messageClass: 'form-message',
                    rowInvalidClass: 'fv-invalid-row',
                    rowPattern: /^field$/,
                    rowSelector: '.field',
                    rowValidClass: 'fv-valid-row',
                },
                opts
            )
        );
    }

    protected onIconPlaced(e: IconPlacedEvent): void {
        const type = e.element.getAttribute('type');
        const parent = e.element.parentElement;
        if ('checkbox' === type || 'radio' === type) {
            // Place it after the container of checkbox/radio
            parent.parentElement.insertBefore(
                e.iconElement,
                parent.nextSibling
            );

            classSet(e.iconElement, {
                'fv-plugins-icon-check': true,
            });
        }
    }
}
