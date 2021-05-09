/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import Framework, { FrameworkOptions } from './Framework';
import { IconPlacedEvent } from './Icon';

export default class Foundation extends Framework {
    constructor(opts?: FrameworkOptions) {
        super(Object.assign({}, {
            formClass: 'fv-plugins-foundation',
            // See http://foundation.zurb.com/sites/docs/abide.html#form-errors
            messageClass: 'form-error',
            rowInvalidClass: 'fv-row__error',
            rowPattern: /^.*((small|medium|large)-[0-9]+)\s.*(cell).*$/,
            rowSelector: '.grid-x',
            rowValidClass: 'fv-row__success',
        }, opts));
    }

    protected onIconPlaced(e: IconPlacedEvent): void {
        const type = e.element.getAttribute('type');
        if ('checkbox' === type || 'radio' === type) {
            const nextEle = e.iconElement.nextSibling;
            if ('LABEL' === nextEle.nodeName) {
                nextEle.parentNode.insertBefore(e.iconElement, nextEle.nextSibling);
            } else if ('#text' === nextEle.nodeName) {
                // There's space between the input and label tags as
                // <input type="checkbox" id="agreeCheckbox" />
                // <label for="agreeCheckbox">Agree with the terms and conditions</label>
                const next = nextEle.nextSibling;
                if (next && 'LABEL' === next.nodeName) {
                    next.parentNode.insertBefore(e.iconElement, next.nextSibling);
                }
            }
        }
    }
}
