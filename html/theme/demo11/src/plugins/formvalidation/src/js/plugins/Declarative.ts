/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { DynamicFieldEvent, FieldOptions, FieldsOptions } from '../core/Core';
import Plugin from '../core/Plugin';

export interface DeclarativeOptions {
    // Set it to `true` to enable the validators automatically based on the input type or particular HTML 5 attributes:
    //  -----------------+---------------------
    //  HTML 5 attribute | Equivalent validator
    //  -----------------+---------------------
    //  max="..."        | lessThan
    //  min="..."        | greaterThan
    //  maxlength="..."  | stringLength
    //  minlength="..."  | stringLength
    //  pattern="..."    | regexp
    //  required         | notEmpty
    //  type="color"     | color
    //  type="email"     | emailAddress
    //  type="range"     | between
    //  type="url"       | uri
    //  -----------------+---------------------
    // It's not enabled by default
    html5Input?: boolean;
    // The prefix of plugin declaration attributes. By default, it is set to `data-fvp-`
    pluginPrefix?: string;
    // The prefix of attributes. By default, it is set to `data-fv-`
    prefix?: string;
}

/**
 * This plugin provides the ability of declaring validator options via HTML attributes.
 * All attributes are declared in lowercase
 * ```
 *  <input
 *      data-fv-field="${fieldName}"
 *      data-fv-{validator}="true"
 *      data-fv-{validator}___{option}="..." />
 * ```
 */
export default class Declarative extends Plugin<DeclarativeOptions> {
    private addedFields: Map<string, boolean> = new Map();
    private fieldAddedHandler: (e: DynamicFieldEvent) => void;
    private fieldRemovedHandler: (e: DynamicFieldEvent) => void;

    constructor(opts?: DeclarativeOptions) {
        super(opts);
        this.opts = Object.assign(
            {},
            {
                html5Input: false,
                pluginPrefix: 'data-fvp-',
                prefix: 'data-fv-',
            },
            opts
        );

        this.fieldAddedHandler = this.onFieldAdded.bind(this);
        this.fieldRemovedHandler = this.onFieldRemoved.bind(this);
    }

    public install(): void {
        // Parse the plugin options
        this.parsePlugins();

        const opts = this.parseOptions();

        Object.keys(opts).forEach((field) => {
            if (!this.addedFields.has(field)) {
                this.addedFields.set(field, true);
            }
            this.core.addField(field, opts[field]);
        });

        this.core
            .on('core.field.added', this.fieldAddedHandler)
            .on('core.field.removed', this.fieldRemovedHandler);
    }

    public uninstall(): void {
        this.addedFields.clear();
        this.core
            .off('core.field.added', this.fieldAddedHandler)
            .off('core.field.removed', this.fieldRemovedHandler);
    }

    private onFieldAdded(e: DynamicFieldEvent): void {
        const elements = e.elements;

        // Don't add the element which is already available in the field lists
        // Otherwise, it can cause an infinite loop
        if (
            !elements ||
            elements.length === 0 ||
            this.addedFields.has(e.field)
        ) {
            return;
        }

        this.addedFields.set(e.field, true);

        elements.forEach((ele) => {
            const declarativeOptions = this.parseElement(ele);
            if (!this.isEmptyOption(declarativeOptions)) {
                // Update validator options
                const mergeOptions = {
                    selector: e.options.selector,
                    validators: Object.assign(
                        {},
                        e.options.validators || {},
                        declarativeOptions.validators
                    ),
                };
                this.core.setFieldOptions(e.field, mergeOptions);
            }
        });
    }

    private onFieldRemoved(e: DynamicFieldEvent): void {
        if (e.field && this.addedFields.has(e.field)) {
            this.addedFields.delete(e.field);
        }
    }

    private parseOptions(): FieldsOptions {
        // Find all fields which have either `name` or `data-fv-field` attribute
        const prefix = this.opts.prefix;
        const opts: FieldsOptions = {};
        const fields = this.core.getFields();
        const form = this.core.getFormElement();
        const elements = [].slice.call(
            form.querySelectorAll(`[name], [${prefix}field]`)
        ) as Element[];
        elements.forEach((ele) => {
            const validators = this.parseElement(ele);
            // Do not try to merge the options if it's empty
            // For instance, there are multiple elements having the same name,
            // we only set the HTML attribute to one of them
            if (!this.isEmptyOption(validators)) {
                const field =
                    ele.getAttribute('name') ||
                    ele.getAttribute(`${prefix}field`);
                opts[field] = Object.assign({}, opts[field], validators);
            }
        });

        Object.keys(opts).forEach((field) => {
            Object.keys(opts[field].validators).forEach((v) => {
                // Set the `enabled` key to `false` if it isn't set
                // (the data-fv-{validator} attribute is missing, for example)
                opts[field].validators[v].enabled =
                    opts[field].validators[v].enabled || false;

                // Mix the options in declarative and programmatic modes
                if (
                    fields[field] &&
                    fields[field].validators &&
                    fields[field].validators[v]
                ) {
                    Object.assign(
                        opts[field].validators[v],
                        fields[field].validators[v]
                    );
                }
            });
        });

        return Object.assign({}, fields, opts);
    }

    private createPluginInstance(clazz: string, opts: unknown): unknown {
        const arr = clazz.split('.');

        // TODO: Find a safer way to create a plugin instance from the class
        // Currently, I have to use `any` here instead of a construtable interface
        let fn: any = window || this; // eslint-disable-line @typescript-eslint/no-explicit-any
        for (let i = 0, len = arr.length; i < len; i++) {
            fn = fn[arr[i]];
        }

        if (typeof fn !== 'function') {
            throw new Error(`the plugin ${clazz} doesn't exist`);
        }

        return new fn(opts);
    }

    private parsePlugins(): void {
        const form = this.core.getFormElement();
        const reg = new RegExp(
            `^${this.opts.pluginPrefix}([a-z0-9-]+)(___)*([a-z0-9-]+)*$`
        );
        const numAttributes = form.attributes.length;
        const plugins = {};
        for (let i = 0; i < numAttributes; i++) {
            const name = form.attributes[i].name;
            const value = form.attributes[i].value;
            const items = reg.exec(name);
            if (items && items.length === 4) {
                const pluginName = this.toCamelCase(items[1]);
                plugins[pluginName] = Object.assign(
                    {},
                    items[3]
                        ? { [this.toCamelCase(items[3])]: value }
                        : { enabled: '' === value || 'true' === value },
                    plugins[pluginName]
                );
            }
        }

        Object.keys(plugins).forEach((pluginName) => {
            const opts = plugins[pluginName];
            const enabled = opts['enabled'];
            const clazz = opts['class'];
            if (enabled && clazz) {
                delete opts['enabled'];
                delete opts['clazz'];
                const p = this.createPluginInstance(
                    clazz,
                    opts
                ) as Plugin<unknown>;
                this.core.registerPlugin(pluginName, p);
            }
        });
    }

    private isEmptyOption(opts: FieldOptions): boolean {
        const validators = opts.validators;
        return (
            Object.keys(validators).length === 0 &&
            validators.constructor === Object
        );
    }

    private parseElement(ele: Element): FieldOptions {
        const reg = new RegExp(
            `^${this.opts.prefix}([a-z0-9-]+)(___)*([a-z0-9-]+)*$`
        );
        const numAttributes = ele.attributes.length;
        const opts = {};
        const type = ele.getAttribute('type');
        for (let i = 0; i < numAttributes; i++) {
            const name = ele.attributes[i].name;
            const value = ele.attributes[i].value;

            if (this.opts.html5Input) {
                switch (true) {
                    case 'minlength' === name:
                        opts['stringLength'] = Object.assign(
                            {},
                            {
                                enabled: true,
                                min: parseInt(value, 10),
                            },
                            opts['stringLength']
                        );
                        break;

                    case 'maxlength' === name:
                        opts['stringLength'] = Object.assign(
                            {},
                            {
                                enabled: true,
                                max: parseInt(value, 10),
                            },
                            opts['stringLength']
                        );
                        break;

                    case 'pattern' === name:
                        opts['regexp'] = Object.assign(
                            {},
                            {
                                enabled: true,
                                regexp: value,
                            },
                            opts['regexp']
                        );
                        break;

                    case 'required' === name:
                        opts['notEmpty'] = Object.assign(
                            {},
                            {
                                enabled: true,
                            },
                            opts['notEmpty']
                        );
                        break;

                    case 'type' === name && 'color' === value:
                        // Only accept 6 hex character values due to the HTML 5 spec
                        // See http://www.w3.org/TR/html-markup/input.color.html#input.color.attrs.value
                        opts['color'] = Object.assign(
                            {},
                            {
                                enabled: true,
                                type: 'hex',
                            },
                            opts['color']
                        );
                        break;

                    case 'type' === name && 'email' === value:
                        opts['emailAddress'] = Object.assign(
                            {},
                            {
                                enabled: true,
                            },
                            opts['emailAddress']
                        );
                        break;

                    case 'type' === name && 'url' === value:
                        opts['uri'] = Object.assign(
                            {},
                            {
                                enabled: true,
                            },
                            opts['uri']
                        );
                        break;

                    case 'type' === name && 'range' === value:
                        opts['between'] = Object.assign(
                            {},
                            {
                                enabled: true,
                                max: parseFloat(ele.getAttribute('max')),
                                min: parseFloat(ele.getAttribute('min')),
                            },
                            opts['between']
                        );
                        break;

                    case 'min' === name && type !== 'date' && type !== 'range':
                        opts['greaterThan'] = Object.assign(
                            {},
                            {
                                enabled: true,
                                min: parseFloat(value),
                            },
                            opts['greaterThan']
                        );
                        break;

                    case 'max' === name && type !== 'date' && type !== 'range':
                        opts['lessThan'] = Object.assign(
                            {},
                            {
                                enabled: true,
                                max: parseFloat(value),
                            },
                            opts['lessThan']
                        );
                        break;

                    default:
                        break;
                }
            }

            const items = reg.exec(name);
            if (items && items.length === 4) {
                const v = this.toCamelCase(items[1]);
                opts[v] = Object.assign(
                    {},
                    items[3]
                        ? {
                              [this.toCamelCase(items[3])]:
                                  this.normalizeValue(value),
                          }
                        : { enabled: '' === value || 'true' === value },
                    opts[v]
                );
            }
        }

        return { validators: opts };
    }

    // Many validators accept `boolean` options, for example
    // `data-fv-between___inclusive="false"` should be identical to `inclusive: false`, not `inclusive: 'false'`
    private normalizeValue(value: string): string | boolean {
        return value === 'true' ? true : value === 'false' ? false : value;
    }

    private toUpperCase(input: string): string {
        return input.charAt(1).toUpperCase();
    }

    private toCamelCase(input: string): string {
        return input.replace(/-./g, this.toUpperCase);
    }
}
