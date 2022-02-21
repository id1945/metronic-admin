/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

/**
 * Execute a callback function
 *
 * @param {Function | string} functionName Can be
 * - name of global function
 * - name of namespace function (such as A.B.C)
 * - a function
 * @param {any[]} args The callback arguments
 * @return {any}
 */
export default function call(
    functionName: ((...arg: unknown[]) => unknown) | string,
    args: unknown[]
): unknown {
    if ('function' === typeof functionName) {
        return functionName.apply(this, args);
    } else if ('string' === typeof functionName) {
        // Node that it doesn't support node.js based environment because we are trying to access `window`
        let name = functionName as string;
        if ('()' === name.substring(name.length - 2)) {
            name = name.substring(0, name.length - 2);
        }
        const ns = name.split('.');
        const func = ns.pop();

        let context = window;
        for (const t of ns) {
            context = context[t];
        }

        return typeof context[func] === 'undefined'
            ? null
            : context[func].apply(this, args);
    }
}
