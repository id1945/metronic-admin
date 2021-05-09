/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import classSet from '../utils/classSet';
import Framework, { FrameworkOptions } from './Framework';
import { IconPlacedEvent } from './Icon';

// Support materialize CSS framework (https://materializecss.com/)
export default class Materialize extends Framework {
    constructor(opts?: FrameworkOptions) {
        super(Object.assign({}, {
            eleInvalidClass: 'validate invalid',
            eleValidClass: 'validate valid',
            formClass: 'fv-plugins-materialize',
            messageClass: 'helper-text',
            rowInvalidClass: 'fv-invalid-row',
            rowPattern: /^(.*)col(\s+)s[0-9]+(.*)$/,
            rowSelector: '.row',
            rowValidClass: 'fv-valid-row',
        }, opts));
    }

    protected onIconPlaced(e: IconPlacedEvent): void {
        const type = e.element.getAttribute('type');
        const parent = e.element.parentElement;
        if ('checkbox' === type || 'radio' === type) {
            // Place it after the container of checkbox/radio
            parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);

            classSet(e.iconElement, {
                'fv-plugins-icon-check': true,
            });
        }
    }
}
