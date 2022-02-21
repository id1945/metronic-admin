/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import classSet from '../utils/classSet';
import hasClass from '../utils/hasClass';
import Framework, { FrameworkOptions } from './Framework';
import { IconPlacedEvent } from './Icon';
import { MessagePlacedEvent } from './Message';

export default class Semantic extends Framework {
    constructor(opts?: FrameworkOptions) {
        super(
            Object.assign(
                {},
                {
                    formClass: 'fv-plugins-semantic',
                    // See https://semantic-ui.com/elements/label.html#pointing
                    messageClass: 'ui pointing red label',
                    rowInvalidClass: 'error',
                    rowPattern: /^.*(field|column).*$/,
                    rowSelector: '.fields',
                    rowValidClass: 'fv-has-success',
                },
                opts
            )
        );
    }

    protected onIconPlaced(e: IconPlacedEvent): void {
        const type = e.element.getAttribute('type');
        if ('checkbox' === type || 'radio' === type) {
            const parent = e.element.parentElement;
            classSet(e.iconElement, {
                'fv-plugins-icon-check': true,
            });
            parent.parentElement.insertBefore(
                e.iconElement,
                parent.nextSibling
            );
        }
    }

    protected onMessagePlaced(e: MessagePlacedEvent): void {
        const type = e.element.getAttribute('type');
        const numElements = e.elements.length;
        if (('checkbox' === type || 'radio' === type) && numElements > 1) {
            // Put the message at the end when there are multiple checkboxes/radios
            //  <div class="field">
            //      <div class="ui checkbox">
            //          <input type="checkbox" /><label>...</label>
            //      </div>
            //  </div>
            //  ...
            //  <div class="field">
            //      <div class="ui checkbox">
            //          <input type="checkbox" /><label>...</label>
            //      </div>
            //      <-- The error message will be placed here -->
            //  </div>

            // Get the last checkbox
            const last = e.elements[numElements - 1];
            const parent = last.parentElement;
            if (hasClass(parent, type) && hasClass(parent, 'ui')) {
                parent.parentElement.insertBefore(
                    e.messageElement,
                    parent.nextSibling
                );
            }
        }
    }
}
