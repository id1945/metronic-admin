/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import {
    Localization,
    ValidateFunctionInterface,
    ValidateInput,
    ValidateOptions,
    ValidateResult,
} from '../core/Core';
import call from '../utils/call';

export interface PromiseOptions extends ValidateOptions {
    promise: (...arg: unknown[]) => unknown | string;
}

export default function promise(): ValidateFunctionInterface<
    PromiseOptions,
    Promise<ValidateResult>
> {
    return {
        /**
         * The following example demonstrates how to use a promise validator to requires both width and height
         * of an image to be less than 300 px
         *  ```
         *  const p = new Promise((resolve, reject) => {
         *      const img = new Image()
         *      img.addEventListener('load', function() {
         *          const w = this.width
         *          const h = this.height
         *          resolve({
         *              valid: w <= 300 && h <= 300
         *              meta: {
         *                  source: img.src // So, you can reuse it later if you want
         *              }
         *          })
         *      })
         *      img.addEventListener('error', function() {
         *          reject({
         *              valid: false,
         *              message: Please choose an image
         *          })
         *      })
         *  })
         *  ```
         *
         * @param input
         * @return {Promise<ValidateResult>}
         */
        validate(
            input: ValidateInput<PromiseOptions, Localization>
        ): Promise<ValidateResult> {
            return call(input.options.promise, [
                input,
            ]) as Promise<ValidateResult>;
        },
    };
}
