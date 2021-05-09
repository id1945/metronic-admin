/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import Plugin from '../core/Plugin';
import { TriggerExecutedEvent } from './Trigger';

export interface DependencyOptions {
    [field: string]: string;
}

export default class Dependency extends Plugin<DependencyOptions> {
    private triggerExecutedHandler: (e: TriggerExecutedEvent) => void;

    constructor(opts: DependencyOptions) {
        super(opts);
        this.opts = opts || {};
        this.triggerExecutedHandler = this.onTriggerExecuted.bind(this);
    }

    public install(): void {
        this.core.on('plugins.trigger.executed', this.triggerExecutedHandler);
    }

    public uninstall(): void {
        this.core.off('plugins.trigger.executed', this.triggerExecutedHandler);
    }

    private onTriggerExecuted(e: TriggerExecutedEvent): void {
        if (this.opts[e.field]) {
            const dependencies = this.opts[e.field].split(' ');
            for (const d of dependencies) {
                const dependentField = d.trim();
                if (this.opts[dependentField]) {
                    // Revalidate the dependent field
                    this.core.revalidateField(dependentField);
                }
            }
        }
    }
}
