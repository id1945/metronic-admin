/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import Plugin from '../core/Plugin';

/**
 * This plugin will submit the form if all fields are valid after validating
 */
export default class DefaultSubmit extends Plugin<{}> {
    private onValidHandler: () => void;

    constructor() {
        super({});
        this.onValidHandler = this.onFormValid.bind(this);
    }

    public install(): void {
        const form = this.core.getFormElement();
        if (form.querySelectorAll('[type="submit"][name="submit"]').length) {
            throw new Error('Do not use `submit` for the name attribute of submit button');
        }

        this.core.on('core.form.valid', this.onValidHandler);
    }

    public uninstall(): void {
        this.core.off('core.form.valid', this.onValidHandler);
    }

    private onFormValid(): void {
        const form = this.core.getFormElement();
        if (form instanceof HTMLFormElement) {
            form.submit();
        }
    }
}
