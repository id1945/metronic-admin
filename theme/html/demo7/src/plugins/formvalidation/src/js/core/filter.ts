/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

export interface Filter {
    filters: {
        [name: string]: ((...arg: any[]) => any)[],
    };
    add(name: string, func: (...arg: any[]) => any): void;
    clear(): void;
    execute<T>(name: string, defaultValue: T, args: any[]): T;
    remove(name: string, func: (...arg: any[]) => any): void;
}

export default function filter(): Filter {
    return {
        filters: {},

        add(name: string, func: (...arg: any[]) => any): void {
            (this.filters[name] = this.filters[name] || []).push(func);
        },

        clear(): void {
            this.filters = {};
        },

        execute<T>(name: string, defaultValue: T, args: any[]): T {
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

        remove(name: string, func: (...arg: any[]) => any): void {
            if (this.filters[name]) {
                this.filters[name] = this.filters[name].filter((f) => f !== func);
            }
        },
    };
}
