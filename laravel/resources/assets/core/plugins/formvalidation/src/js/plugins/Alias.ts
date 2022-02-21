/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import Plugin from '../core/Plugin';

export interface AliasOptions {
    // Map the alias with defined validator name
    [alias: string]: string;
}

/**
 * This plugin allows to use multiple instances of the same validator by defining alias.
 * ```
 *  formValidation(form, {
 *      fields: {
 *          email: {
 *              validators: {
 *                  required: ...,
 *                  pattern: ...,
 *                  regexp: ...
 *              }
 *          }
 *      },
 *      plugins: {
 *          alias: new Alias({
 *              required: 'notEmpty',
 *              pattern: 'regexp'
 *          })
 *      }
 *  })
 * ```
 * Then, you can use the `required`, `pattern` as the same as `notEmpty`, `regexp` validators.
 */
export default class Alias extends Plugin<AliasOptions> {
    private validatorNameFilter: (validator: string, field: string) => string;

    constructor(opts?: AliasOptions) {
        super(opts);
        this.opts = opts || {};
        this.validatorNameFilter = this.getValidatorName.bind(this);
    }

    public install(): void {
        this.core.registerFilter('validator-name', this.validatorNameFilter);
    }

    public uninstall(): void {
        this.core.deregisterFilter('validator-name', this.validatorNameFilter);
    }

    private getValidatorName(alias: string, _field: string): string {
        return this.opts[alias] || alias;
    }
}
