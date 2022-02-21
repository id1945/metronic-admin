/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

export interface Emitter {
    fns: {
        [event: string]: ((...arg: unknown[]) => unknown)[];
    };
    clear(): void;
    emit(event: string, ...args: unknown[]): void;
    off(event: string, func: (...arg: unknown[]) => unknown): void;
    on(event: string, func: (...arg: unknown[]) => unknown): void;
}

export default function emitter(): Emitter {
    return {
        fns: {},

        clear(): void {
            this.fns = {};
        },

        emit(event: string, ...args: unknown[]): void {
            (this.fns[event] || []).map((handler) =>
                handler.apply(handler, args)
            );
        },

        off(event: string, func: (...arg: unknown[]) => unknown): void {
            if (this.fns[event]) {
                const index = this.fns[event].indexOf(func);
                if (index >= 0) {
                    this.fns[event].splice(index, 1);
                }
            }
        },

        on(event: string, func: (...arg: unknown[]) => unknown): void {
            (this.fns[event] = this.fns[event] || []).push(func);
        },
    };
}
