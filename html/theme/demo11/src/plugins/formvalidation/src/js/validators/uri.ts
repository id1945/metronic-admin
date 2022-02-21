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

export interface UriOptions extends ValidateOptions {
    // Allow the URI without protocol. Default to false
    allowEmptyProtocol?: boolean | string;
    // Allow the private and local network IP. Default to false
    allowLocal?: boolean | string;
    // The protocols, separated by a comma. Default to "http, https, ftp"
    protocol?: string;
}

export default function uri(): ValidateFunctionInterface<
    UriOptions,
    ValidateResult
> {
    const DEFAULT_OPTIONS = {
        allowEmptyProtocol: false,
        allowLocal: false,
        protocol: 'http, https, ftp',
    };

    return {
        /**
         * Return true if the input value is a valid URL
         */
        validate(
            input: ValidateInput<UriOptions, Localization>
        ): ValidateResult {
            if (input.value === '') {
                return { valid: true };
            }
            const opts = Object.assign({}, DEFAULT_OPTIONS, input.options);

            // Credit to https://gist.github.com/dperini/729294
            //
            // Regular Expression for URL validation
            //
            // Author: Diego Perini
            // Updated: 2010/12/05
            //
            // the regular expression composed & commented
            // could be easily tweaked for RFC compliance,
            // it was expressly modified to fit & satisfy
            // these test for an URL shortener:
            //
            //   http://mathiasbynens.be/demo/url-regex
            //
            // Notes on possible differences from a standard/generic validation:
            //
            // - utf-8 char class take in consideration the full Unicode range
            // - TLDs are mandatory unless `allowLocal` is true
            // - protocols have been restricted to ftp, http and https only as requested
            //
            // Changes:
            //
            // - IP address dotted notation validation, range: 1.0.0.0 - 223.255.255.255
            //   first and last IP address of each class is considered invalid
            //   (since they are broadcast/network addresses)
            //
            // - Added exclusion of private, reserved and/or local networks ranges
            //   unless `allowLocal` is true
            //
            // - Added possibility of choosing a custom protocol
            //
            // - Add option to validate without protocol
            //
            const allowLocal =
                opts.allowLocal === true || `${opts.allowLocal}` === 'true';
            const allowEmptyProtocol =
                opts.allowEmptyProtocol === true ||
                `${opts.allowEmptyProtocol}` === 'true';
            const protocol = opts.protocol
                .split(',')
                .join('|')
                .replace(/\s/g, '');
            const urlExp = new RegExp(
                '^' +
                    // protocol identifier
                    '(?:(?:' +
                    protocol +
                    ')://)' +
                    // allow empty protocol
                    (allowEmptyProtocol ? '?' : '') +
                    // user:pass authentication
                    '(?:\\S+(?::\\S*)?@)?' +
                    '(?:' +
                    // IP address exclusion
                    // private & local networks
                    (allowLocal
                        ? ''
                        : '(?!(?:10|127)(?:\\.\\d{1,3}){3})' +
                          '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' +
                          '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})') +
                    // IP address dotted notation octets
                    // excludes loopback network 0.0.0.0
                    // excludes reserved space >= 224.0.0.0
                    // excludes network & broadcast addresses
                    // (first & last IP address of each class)
                    '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' +
                    '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' +
                    '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' +
                    '|' +
                    // host name
                    '(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)' +
                    // domain name
                    '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*' +
                    // TLD identifier
                    '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
                    // Allow intranet sites (no TLD) if `allowLocal` is true
                    (allowLocal ? '?' : '') +
                    ')' +
                    // port number
                    '(?::\\d{2,5})?' +
                    // resource path
                    '(?:/[^\\s]*)?$',
                'i'
            );

            return { valid: urlExp.test(input.value) };
        },
    };
}
