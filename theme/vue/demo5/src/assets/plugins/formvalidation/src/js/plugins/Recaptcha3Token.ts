/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import Plugin from '../core/Plugin';

export interface Recaptcha3TokenOptions {
    action: string;
    hiddenTokenName: string;
    language?: string;
    siteKey: string;
}

export default class Recaptcha3Token extends Plugin<Recaptcha3TokenOptions> {
    // The name of callback that will be executed after reCaptcha script is loaded
    public static LOADED_CALLBACK = '___reCaptcha3Loaded___';

    private hiddenTokenEle?: HTMLInputElement;
    private onValidHandler: () => void;

    constructor(opts?: Recaptcha3TokenOptions) {
        super(opts);
        this.opts = Object.assign({}, {
            action: 'submit',
            hiddenTokenName: '___hidden-token___',
        }, opts);
        this.onValidHandler = this.onFormValid.bind(this);
    }

    public install(): void {
        this.core.on('core.form.valid', this.onValidHandler);

        // Add a hidden field to the form
        this.hiddenTokenEle = document.createElement('input');
        this.hiddenTokenEle.setAttribute('type', 'hidden');
        this.core.getFormElement().appendChild(this.hiddenTokenEle);

        const loadPrevCaptcha = (typeof window[Recaptcha3Token.LOADED_CALLBACK] === 'undefined')
            ? () => {} // tslint:disable-line:no-empty
            : window[Recaptcha3Token.LOADED_CALLBACK];
        window[Recaptcha3Token.LOADED_CALLBACK] = () => {
            // Call the previous loaded function
            // to support multiple recaptchas on the same page
            loadPrevCaptcha();
        };

        const src = this.getScript();
        if (!document.body.querySelector(`script[src="${src}"]`)) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.src = src;
            document.body.appendChild(script);
        }
    }

    public uninstall(): void {
        this.core.off('core.form.valid', this.onValidHandler);

        // Remove script
        const src = this.getScript();
        const scripts = [].slice.call(document.body.querySelectorAll(`script[src="${src}"]`)) as HTMLScriptElement[];
        scripts.forEach((s) => s.parentNode.removeChild(s));

        // Remove hidden field from the form element
        this.core.getFormElement().removeChild(this.hiddenTokenEle);
    }

    private onFormValid(): void {
        // Send recaptcha request
        // tslint:disable-next-line:no-string-literal
        window['grecaptcha']
            .execute(this.opts.siteKey, { action: this.opts.action })
            .then((token: string) => {
                this.hiddenTokenEle.setAttribute('name', this.opts.hiddenTokenName);
                this.hiddenTokenEle.value = token;

                // Submit the form
                const form = this.core.getFormElement();
                if (form instanceof HTMLFormElement) {
                    form.submit();
                }
            });
    }

    private getScript(): string {
        const lang = this.opts.language ? `&hl=${this.opts.language}` : '';
        return 'https://www.google.com/recaptcha/api.js?' +
                `onload=${Recaptcha3Token.LOADED_CALLBACK}&render=${this.opts.siteKey}${lang}`;
    }
}
