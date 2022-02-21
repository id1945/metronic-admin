/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import Plugin from '../core/Plugin';

export interface TypingAnimationOptions {
    autoPlay?: boolean;
    data: {
        [field: string]: string[];
    };
}
// See https://github.com/mattboldt/typed.js/blob/master/src/typed.js
interface Typed {
    start();
    stop();
    toggle();
}
declare var Typed: {
    // eslint-disable-line no-var
    prototype: Typed;
    new (ele: HTMLElement, options: Record<string, unknown>): Typed;
};

export default class TypingAnimation extends Plugin<TypingAnimationOptions> {
    private fields: string[];

    constructor(opts?: TypingAnimationOptions) {
        super(opts);
        this.opts = Object.assign(
            {},
            {
                autoPlay: true,
            },
            opts
        );
    }

    public install(): void {
        this.fields = Object.keys(this.core.getFields());
        if (this.opts.autoPlay) {
            this.play();
        }
    }

    public play(): Promise<number> {
        return this.animate(0);
    }

    private animate(fieldIndex: number): Promise<number> {
        if (fieldIndex >= this.fields.length) {
            return Promise.resolve(fieldIndex);
        }

        const field = this.fields[fieldIndex];
        const ele = this.core.getElements(field)[0];
        const inputType = ele.getAttribute('type');
        const samples = this.opts.data[field];

        if ('checkbox' === inputType || 'radio' === inputType) {
            (ele as HTMLInputElement).checked = true;
            ele.setAttribute('checked', 'true');
            return this.core.revalidateField(field).then((_status) => {
                return this.animate(fieldIndex + 1);
            });
        } else if (!samples) {
            return this.animate(fieldIndex + 1);
        } else {
            return new Promise((resolve) => {
                return new Typed(ele, {
                    attr: 'value',
                    autoInsertCss: true,
                    bindInputFocusEvents: true,
                    onComplete: () => {
                        resolve(fieldIndex + 1);
                    },
                    onStringTyped: (arrayPos, _self) => {
                        (ele as HTMLInputElement).value = samples[arrayPos];
                        this.core.revalidateField(field);
                    },
                    strings: samples,
                    typeSpeed: 100,
                });
            }).then((nextFieldIndex: number) => {
                return this.animate(nextFieldIndex);
            });
        }
    }
}
