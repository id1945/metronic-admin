/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { Core } from './Core';

export default class Plugin<T> {
    protected core: Core;
    protected opts?: T;

    constructor(opts?: T) {
        this.opts = opts;
    }

    public setCore(core: Core): this {
        this.core = core;
        return this;
    }

    public install(): void {} // tslint:disable-line:no-empty

    public uninstall(): void {} // tslint:disable-line:no-empty
}
