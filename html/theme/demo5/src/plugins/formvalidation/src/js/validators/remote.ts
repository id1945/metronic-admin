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
import fetch from '../utils/fetch';

export interface RemoteOptions extends ValidateOptions {
    url: string;
    // Does it request to other domain? Default value is `false`
    crossDomain?: boolean;
    // By default, it will take the value `{ <fieldName>: <fieldValue> }`
    data?: Record<string, unknown> | ((...arg: unknown[]) => unknown);
    // Additional headers
    headers?: {
        [name: string]: string;
    };
    // Override the field name for the request
    name?: string;
    // Can be GET or POST (default)
    method?: string;
    // The valid key. It's `valid` by default
    // This is useful when connecting to external remote server or APIs provided by 3rd parties
    validKey?: string;
}

export default function remote(): ValidateFunctionInterface<
    RemoteOptions,
    Promise<ValidateResult>
> {
    const DEFAULT_OPTIONS = {
        crossDomain: false,
        data: {},
        headers: {},
        method: 'GET',
        validKey: 'valid',
    };

    return {
        validate(
            input: ValidateInput<RemoteOptions, Localization>
        ): Promise<ValidateResult> {
            if (input.value === '') {
                return Promise.resolve({
                    valid: true,
                });
            }

            const opts = Object.assign(
                {},
                DEFAULT_OPTIONS,
                input.options
            ) as RemoteOptions;

            let data = opts.data;
            // Support dynamic data
            if ('function' === typeof opts.data) {
                data = (opts.data as (...arg: unknown[]) => unknown).call(
                    this,
                    input
                );
            }
            // Parse string data from HTML5 attribute
            if ('string' === typeof data) {
                data = JSON.parse(data);
            }
            data[opts.name || input.field] = input.value;

            // Support dynamic url
            const url =
                'function' === typeof opts.url
                    ? (opts.url as (...arg: unknown[]) => unknown).call(
                          this,
                          input
                      )
                    : opts.url;

            return fetch(url, {
                crossDomain: opts.crossDomain,
                headers: opts.headers,
                method: opts.method,
                params: data as Record<string, string | number | boolean>,
            })
                .then((response) => {
                    return Promise.resolve({
                        message: response['message'],
                        meta: response,
                        valid: `${response[opts.validKey]}` === 'true',
                    });
                })
                .catch((_reason) => {
                    return Promise.reject({
                        valid: false,
                    });
                });
        },
    };
}
