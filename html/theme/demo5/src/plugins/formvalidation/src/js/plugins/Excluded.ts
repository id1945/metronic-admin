/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import Plugin from '../core/Plugin';

type ExcludedCallback = (
    field: string,
    element: HTMLElement,
    elements: HTMLElement[]
) => boolean;

export interface ExcludedOptions {
    excluded: ExcludedCallback;
}

export default class Excluded extends Plugin<ExcludedOptions> {
    public static defaultIgnore(
        _field: string,
        element: HTMLElement,
        _elements: HTMLElement[]
    ): boolean {
        const isVisible = !!(
            element.offsetWidth ||
            element.offsetHeight ||
            element.getClientRects().length
        );
        const disabled = element.getAttribute('disabled');
        return (
            disabled === '' ||
            disabled === 'disabled' ||
            element.getAttribute('type') === 'hidden' ||
            !isVisible
        );
    }

    private ignoreValidationFilter: (...arg: unknown[]) => boolean;

    constructor(opts?: ExcludedOptions) {
        super(opts);
        this.opts = Object.assign(
            {},
            { excluded: Excluded.defaultIgnore },
            opts
        );
        this.ignoreValidationFilter = this.ignoreValidation.bind(this);
    }

    public install(): void {
        this.core.registerFilter(
            'element-ignored',
            this.ignoreValidationFilter
        );
    }

    public uninstall(): void {
        this.core.deregisterFilter(
            'element-ignored',
            this.ignoreValidationFilter
        );
    }

    private ignoreValidation(
        field: string,
        element: HTMLElement,
        elements: HTMLElement[]
    ): boolean {
        return this.opts.excluded.apply(this, [field, element, elements]);
    }
}
