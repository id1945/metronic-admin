/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import Plugin from '../core/Plugin';

interface LiteralMessage {
    [locale: string]: string;
}
type CallbackMessage = (field: string, validator: string) => LiteralMessage;

export interface L10nOptions {
    [field: string]: {
        [validator: string]: LiteralMessage | CallbackMessage;
    };
}

export default class L10n extends Plugin<L10nOptions> {
    private messageFilter: (
        locale: string,
        field: string,
        validator: string
    ) => string;

    constructor(opts?: L10nOptions) {
        super(opts);
        this.messageFilter = this.getMessage.bind(this);
    }

    public install(): void {
        this.core.registerFilter('validator-message', this.messageFilter);
    }

    public uninstall(): void {
        this.core.deregisterFilter('validator-message', this.messageFilter);
    }

    private getMessage(
        locale: string,
        field: string,
        validator: string
    ): string {
        if (this.opts[field] && this.opts[field][validator]) {
            const message = this.opts[field][validator];
            const messageType = typeof message;

            if ('object' === messageType && message[locale]) {
                // message is a literal object
                return (message as LiteralMessage)[locale];
            } else if ('function' === messageType) {
                // message is defined by a function
                const result: LiteralMessage = (
                    message as CallbackMessage
                ).apply(this, [field, validator]);
                return result && result[locale] ? result[locale] : '';
            }
        }

        return '';
    }
}
