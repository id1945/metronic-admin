/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import classSet from '../utils/classSet';
import Framework, { FrameworkOptions } from './Framework';
import { IconPlacedEvent } from './Icon';

export default class Uikit extends Framework {
    constructor(opts?: FrameworkOptions) {
        super(Object.assign({}, {
            formClass: 'fv-plugins-uikit',
            // See https://getuikit.com/docs/text#text-color
            messageClass: 'uk-text-danger',
            rowInvalidClass: 'uk-form-danger',
            rowPattern: /^.*(uk-form-controls|uk-width-[\d+]-[\d+]).*$/,
            rowSelector: '.uk-margin',
            // See https://getuikit.com/docs/form
            rowValidClass: 'uk-form-success',
        }, opts));
    }

    protected onIconPlaced(e: IconPlacedEvent): void {
        const type = e.element.getAttribute('type');
        if ('checkbox' === type || 'radio' === type) {
            const parent = e.element.parentElement;
            classSet(e.iconElement, {
                'fv-plugins-icon-check': true,
            });
            parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
        }
    }
}
