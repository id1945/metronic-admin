/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import Plugin from '../core/Plugin';

export interface TransformerOptions {
    [field: string]: {
        [validator: string]: (field: string, element: HTMLElement, validator: string) => string,
    };
}

export default class Transformer extends Plugin<TransformerOptions> {
    private valueFilter: (defaultValue: string, field: string, element: HTMLElement, validator: string) => string;

    constructor(opts?: TransformerOptions) {
        super(opts);
        this.valueFilter = this.getElementValue.bind(this);
    }

    public install(): void {
        this.core.registerFilter('field-value', this.valueFilter);
    }

    public uninstall(): void {
        this.core.deregisterFilter('field-value', this.valueFilter);
    }

    private getElementValue(defaultValue: string, field: string, element: HTMLElement, validator: string): string {
        if (this.opts[field] && this.opts[field][validator] && 'function' === typeof this.opts[field][validator]) {
            return this.opts[field][validator].apply(this, [field, element, validator]);
        }
        return defaultValue;
    }
}
