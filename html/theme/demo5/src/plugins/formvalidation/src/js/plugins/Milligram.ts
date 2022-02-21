/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import classSet from '../utils/classSet';
import Framework, { FrameworkOptions } from './Framework';
import { IconPlacedEvent } from './Icon';

// Support Milligram framework (https://milligram.io/)
export default class Milligram extends Framework {
    constructor(opts?: FrameworkOptions) {
        super(
            Object.assign(
                {},
                {
                    formClass: 'fv-plugins-milligram',
                    messageClass: 'fv-help-block',
                    rowInvalidClass: 'fv-invalid-row',
                    rowPattern: /^(.*)column(-offset)*-[0-9]+(.*)$/,
                    rowSelector: '.row',
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
