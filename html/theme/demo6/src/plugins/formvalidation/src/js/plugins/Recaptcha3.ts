/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import Plugin from '../core/Plugin';
import fetch from '../utils/fetch';
import { IconPlacedEvent } from './Icon';

export interface Recaptcha3Options {
    // The ID of element showing the captcha error
    element: string;
    // The language code defined by reCAPTCHA
    // See https://developers.google.com/recaptcha/docs/language
    language?: string;
    // Minimum score, between 0 and 1
    minimumScore?: number;
    // The invalid message that will be shown in case the captcha is not valid
    // You don't need to define it if the back-end URL above returns the message
    message: string;
    // The site key provided by Google
    siteKey: string;
    backendVerificationUrl: string;
    action: string;
}

interface VerificationResponse {
    message: string;
    // See https://developers.google.com/recaptcha/docs/v3#site_verify_response
    score: number;
    success: boolean;
}

export default class Recaptcha3 extends Plugin<Recaptcha3Options> {
    // The captcha field name
    public static CAPTCHA_FIELD = '___g-recaptcha-token___';

    // The name of callback that will be executed after reCaptcha script is loaded
    public static LOADED_CALLBACK = '___reCaptcha3Loaded___';

    private iconPlacedHandler: (e: IconPlacedEvent) => void;

    constructor(opts?: Recaptcha3Options) {
        super(opts);
        this.opts = Object.assign({}, { minimumScore: 0 }, opts);
        this.iconPlacedHandler = this.onIconPlaced.bind(this);
    }

    public install(): void {
        this.core.on('plugins.icon.placed', this.iconPlacedHandler);

        const loadPrevCaptcha =
            typeof window[Recaptcha3.LOADED_CALLBACK] === 'undefined'
                ? () => {}
                : window[Recaptcha3.LOADED_CALLBACK];
        window[Recaptcha3.LOADED_CALLBACK] = () => {
            // Call the previous loaded function
            // to support multiple recaptchas on the same page
            loadPrevCaptcha();

            // Add a hidden field to the form
            const tokenField = document.createElement('input');
            tokenField.setAttribute('type', 'hidden');
            tokenField.setAttribute('name', Recaptcha3.CAPTCHA_FIELD);
            document.getElementById(this.opts.element).appendChild(tokenField);

            this.core.addField(Recaptcha3.CAPTCHA_FIELD, {
                validators: {
                    promise: {
                        message: this.opts.message,
                        promise: (_input) => {
                            return new Promise((resolve, reject) => {
                                window['grecaptcha']
                                    .execute(this.opts.siteKey, {
                                        action: this.opts.action,
                                    })
                                    .then((token: string) => {
                                        // Verify it
                                        fetch(
                                            this.opts.backendVerificationUrl,
                                            {
                                                method: 'POST',
                                                params: {
                                                    [Recaptcha3.CAPTCHA_FIELD]:
                                                        token,
                                                },
                                            }
                                        )
                                            .then(
                                                (
                                                    response: VerificationResponse
                                                ) => {
                                                    const isValid =
                                                        `${response.success}` ===
                                                            'true' &&
                                                        response.score >=
                                                            this.opts
                                                                .minimumScore;
                                                    resolve({
                                                        message:
                                                            response.message ||
                                                            this.opts.message,
                                                        meta: response,
                                                        valid: isValid,
                                                    });
                                                }
                                            )
                                            .catch((_) => {
                                                reject({
                                                    valid: false,
                                                });
                                            });
                                    });
                            });
                        },
                    },
                },
            });
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
        this.core.off('plugins.icon.placed', this.iconPlacedHandler);

        // Remove script
        const src = this.getScript();
        const scripts = [].slice.call(
            document.body.querySelectorAll(`script[src="${src}"]`)
        ) as HTMLScriptElement[];
        scripts.forEach((s) => s.parentNode.removeChild(s));

        this.core.removeField(Recaptcha3.CAPTCHA_FIELD);
    }

    private getScript(): string {
        const lang = this.opts.language ? `&hl=${this.opts.language}` : '';
        return (
            'https://www.google.com/recaptcha/api.js?' +
            `onload=${Recaptcha3.LOADED_CALLBACK}&render=${this.opts.siteKey}${lang}`
        );
    }

    private onIconPlaced(e: IconPlacedEvent): void {
        if (e.field === Recaptcha3.CAPTCHA_FIELD) {
            // Hide the icon for captcha element, since it will look weird when the captcha is valid
            e.iconElement.style.display = 'none';
        }
    }
}
