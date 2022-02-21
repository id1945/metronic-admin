/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

export interface Filter {
    filters: {
        [name: string]: ((...arg: unknown[]) => unknown)[];
    };
    add(name: string, func: (...arg: unknown[]) => unknown): void;
    clear(): void;
    execute<T>(name: string, defaultValue: T, args: unknown[]): T;
    remove(name: string, func: (...arg: unknown[]) => unknown): void;
}

export default function filter(): Filter {
    return {
        filters: {},

        add(name: string, func: (...arg: unknown[]) => unknown): void {
            (this.filters[name] = this.filters[name] || []).push(func);
        },

        clear(): void {
            this.filters = {};
        },

        execute<T>(name: string, defaultValue: T, args: unknown[]): T {
            if (!this.filters[name] || !this.filters[name].length) {
                return defaultValue;
            }

            let result = defaultValue;
            const filters = this.filters[name];
            const count = filters.length;
            for (let i = 0; i < count; i++) {
                result = filters[i].apply(result, args);
            }
            return result;
        },

        remove(name: string, func: (...arg: unknown[]) => unknown): void {
            if (this.filters[name]) {
                this.filters[name] = this.filters[name].filter(
                    (f) => f !== func
                );
            }
        },
    };
}
