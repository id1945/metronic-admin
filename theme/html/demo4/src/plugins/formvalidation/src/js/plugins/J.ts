/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

// Must set `allowSyntheticDefaultImports` in `tsconfig.json` to `true`
import $ from 'jquery';
import formValidation, { Options } from '../core/Core';

/**
 * Allows to use `FormValidation.formValidation` as a jQuery plugin
 *  ```
 *  $(document).ready(function() {
 *      $('#yourFormId')
 *          .formValidation({
 *              ... options ...
 *          })
 *          // Returns the `FormValidation.Core` instance
 *          .data('formValidation')
 *          // so you can call any APIs provided by `FormValidation.Core`
 *          .validateField(...);
 *  });
 *  ```
 */
const version = $.fn.jquery.split(' ')[0].split('.');
if ((+version[0] < 2 && +version[1] < 9) || (+version[0] === 1 && +version[1] === 9 && +version[2] < 1)) {
    throw new Error('The J plugin requires jQuery version 1.9.1 or higher');
}

// tslint:disable-next-line:no-string-literal
$.fn['formValidation'] = function(options: Options) {
    const params = arguments;
    return this.each(function() {
        const $this = $(this);
        let data = $this.data('formValidation');
        const opts = 'object' === typeof options && options;
        if (!data) {
            data = formValidation(this, opts);
            $this.data('formValidation', data)
                 .data('FormValidation', data);
        }

        // Allow to call plugin method
        if ('string' === typeof options) {
            data[options as string].apply(data, Array.prototype.slice.call(params, 1));
        }
    });
};
