/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ElementValidatedEvent } from '../core/Core';
import classSet from '../utils/classSet';
import hasClass from '../utils/hasClass';
import Framework, { FrameworkOptions } from './Framework';
import { IconPlacedEvent } from './Icon';
import { MessagePlacedEvent } from './Message';

export default class Bootstrap5 extends Framework {
    private eleValidatedHandler: (e: ElementValidatedEvent) => void;

    constructor(opts?: FrameworkOptions) {
        super(
            Object.assign(
                {},
                {
                    eleInvalidClass: 'is-invalid',
                    eleValidClass: 'is-valid',
                    formClass: 'fv-plugins-bootstrap5',
                    rowInvalidClass: 'fv-plugins-bootstrap5-row-invalid',
                    rowPattern:
                        /^(.*)(col|offset)(-(sm|md|lg|xl))*-[0-9]+(.*)$/,
                    rowSelector: '.row',
                    rowValidClass: 'fv-plugins-bootstrap5-row-valid',
                },
                opts
            )
        );

        this.eleValidatedHandler = this.handleElementValidated.bind(this);
    }

    public install(): void {
        super.install();
        this.core.on('core.element.validated', this.eleValidatedHandler);
    }

    public uninstall(): void {
        super.install();
        this.core.off('core.element.validated', this.eleValidatedHandler);
    }

    private handleElementValidated(e: ElementValidatedEvent): void {
        const type = e.element.getAttribute('type');

        // If we use more than 1 inline checkbox/radio, we need to add `is-invalid` for the `form-check` container
        // so the error messages are displayed properly.
        // The markup looks like as following:
        //  <div class="form-check form-check-inline is-invalid">
        //      <input type="checkbox" class="form-check-input is-invalid" />
        //      <label class="form-check-label">...</label>
        //  <div>
        //  <!-- Other inline checkboxes/radios go here -->
        //  <!-- Then message element -->
        //  <div class="fv-plugins-message-container invalid-feedback">...</div>

        if (
            ('checkbox' === type || 'radio' === type) &&
            e.elements.length > 1 &&
            hasClass(e.element, 'form-check-input')
        ) {
            const inputParent = e.element.parentElement;
            if (
                hasClass(inputParent, 'form-check') &&
                hasClass(inputParent, 'form-check-inline')
            ) {
                classSet(inputParent, {
                    'is-invalid': !e.valid,
                    'is-valid': e.valid,
                });
            }
        }
    }

    protected onIconPlaced(e: IconPlacedEvent): void {
        // Disable the default icon of Bootstrap 5
        classSet(e.element, {
            'fv-plugins-icon-input': true,
        });

        // Adjust icon place if the field belongs to a `input-group`
        const parent = e.element.parentElement;
        if (hasClass(parent, 'input-group')) {
            parent.parentElement.insertBefore(
                e.iconElement,
                parent.nextSibling
            );

            if (
                e.element.nextElementSibling &&
                hasClass(e.element.nextElementSibling, 'input-group-text')
            ) {
                classSet(e.iconElement, {
                    'fv-plugins-icon-input-group': true,
                });
            }
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

    protected onMessagePlaced(e: MessagePlacedEvent): void {
        e.messageElement.classList.add('invalid-feedback');

        // Check if the input is placed inside an `input-group` element
        const inputParent = e.element.parentElement;
        if (hasClass(inputParent, 'input-group')) {
            // The markup looks like
            //  <div class="input-group">
            //      <span class="input-group-text">...</span>
            //      <input type="text" class="form-control" />
            //      <!-- We will place the error message here, at the end of parent -->
            //  </div>
            inputParent.appendChild(e.messageElement);
            // Keep the border radius of the right corners
            classSet(inputParent, {
                'has-validation': true,
            });
            return;
        }

        const type = e.element.getAttribute('type');
        if (
            ('checkbox' === type || 'radio' === type) &&
            hasClass(e.element, 'form-check-input') &&
            hasClass(inputParent, 'form-check') &&
            !hasClass(inputParent, 'form-check-inline')
        ) {
            // Place the message inside the `form-check` container of the last checkbox/radio
            e.elements[e.elements.length - 1].parentElement.appendChild(
                e.messageElement
            );
        }
    }
}
