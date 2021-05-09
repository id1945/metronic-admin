/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import Plugin from '../core/Plugin';
import FieldStatus from './FieldStatus';

export interface AutoFocusOptions {
    onPrefocus: (AutoFocusPrefocusEvent) => void;
}
export interface AutoFocusPrefocusEvent {
    field: string;
    firstElement: HTMLElement;
}

export default class AutoFocus extends Plugin<AutoFocusOptions> {
    private fieldStatusPluginName: string = '___autoFocusFieldStatus';

    private invalidFormHandler: () => void;

    constructor(opts?: AutoFocusOptions) {
        super(opts);
        this.opts = Object.assign({}, {
            onPrefocus: () => {}, // tslint:disable-line:no-empty
        }, opts);

        this.invalidFormHandler = this.onFormInvalid.bind(this);
    }

    public install(): void {
        this.core
            .on('core.form.invalid', this.invalidFormHandler)
            .registerPlugin(this.fieldStatusPluginName, new FieldStatus());
    }

    public uninstall(): void {
        this.core
            .off('core.form.invalid', this.invalidFormHandler)
            .deregisterPlugin(this.fieldStatusPluginName);
    }

    private onFormInvalid(): void {
        const plugin = this.core.getPlugin(this.fieldStatusPluginName) as FieldStatus;
        const statuses = plugin.getStatuses();
        const invalidFields = Object.keys(this.core.getFields()).filter((key) => statuses.get(key) === 'Invalid');
        if (invalidFields.length > 0) {
            const firstInvalidField = invalidFields[0];
            const elements = this.core.getElements(firstInvalidField);
            if (elements.length > 0) {
                const firstElement = elements[0];

                const e = { firstElement, field: firstInvalidField } as AutoFocusPrefocusEvent;
                this.core.emit('plugins.autofocus.prefocus', e);
                this.opts.onPrefocus(e);

                // Focus on the first invalid element
                firstElement.focus();
            }
        }
    }
}
