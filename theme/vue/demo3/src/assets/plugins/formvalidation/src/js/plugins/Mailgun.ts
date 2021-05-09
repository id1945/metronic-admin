/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import Plugin from '../core/Plugin';
import Alias, { AliasOptions } from './Alias';
import { MessageDisplayedEvent } from './Message';

export interface MailgunOptions {
    // The API key provided by Mailgun
    apiKey: string;
    // The field name that will be validated
    field: string;
    // Error message indicates the input is not valid
    message: string;
    // Show suggestion if the email is not valid
    suggestion?: boolean;
}

/**
 * This plugin is used to validate an email address by using Mailgun API
 */
export default class Mailgun extends Plugin<MailgunOptions> {
    private messageDisplayedHandler: (e: MessageDisplayedEvent) => void;

    constructor(opts?: MailgunOptions) {
        super(opts);
        this.opts = Object.assign({}, { suggestion: false }, opts);
        this.messageDisplayedHandler = this.onMessageDisplayed.bind(this);
    }

    public install(): void {
        if (this.opts.suggestion) {
            this.core.on('plugins.message.displayed', this.messageDisplayedHandler);
        }

        const aliasOpts: AliasOptions = {
            mailgun: 'remote',
        };
        this.core
            .registerPlugin('___mailgunAlias', new Alias(aliasOpts))
            .addField(this.opts.field, {
                validators: {
                    mailgun: {
                        crossDomain: true,
                        data: {
                            api_key: this.opts.apiKey,
                        },
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        message: this.opts.message,
                        name: 'address',
                        url: 'https://api.mailgun.net/v3/address/validate',
                        validKey: 'is_valid',
                    },
                },
            });
    }

    public uninstall(): void {
        if (this.opts.suggestion) {
            this.core.off('plugins.message.displayed', this.messageDisplayedHandler);
        }
        this.core.removeField(this.opts.field);
    }

    private onMessageDisplayed(e: MessageDisplayedEvent): void {
        if (e.field === this.opts.field && 'mailgun' === e.validator && e.meta && e.meta.did_you_mean) {
            e.messageElement.innerHTML = `Did you mean ${e.meta.did_you_mean}?`;
        }
    }
}
