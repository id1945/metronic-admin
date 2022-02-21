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
import format from '../utils/format';

export interface ZipCodeOptions extends ValidateOptions {
    // The ISO 3166-1 country code. It can be
    // - A country code
    // - A callback function that returns the country code
    country: string | (() => string);
}
export interface ZipCodeLocalization extends Localization {
    zipCode: {
        countries: {
            [countryCode: string]: string;
        };
        country: string;
        default: string;
    };
}

export default function zipCode(): ValidateFunctionInterface<
    ZipCodeOptions,
    ValidateResult
> {
    const COUNTRY_CODES = [
        'AT',
        'BG',
        'BR',
        'CA',
        'CH',
        'CZ',
        'DE',
        'DK',
        'ES',
        'FR',
        'GB',
        'IE',
        'IN',
        'IT',
        'MA',
        'NL',
        'PL',
        'PT',
        'RO',
        'RU',
        'SE',
        'SG',
        'SK',
        'US',
    ];

    /**
     * Validate United Kingdom postcode
     * @returns {boolean}
     */
    const gb = (value: string) => {
        const firstChar = '[ABCDEFGHIJKLMNOPRSTUWYZ]'; // Does not accept QVX
        const secondChar = '[ABCDEFGHKLMNOPQRSTUVWXY]'; // Does not accept IJZ
        const thirdChar = '[ABCDEFGHJKPMNRSTUVWXY]';
        const fourthChar = '[ABEHMNPRVWXY]';
        const fifthChar = '[ABDEFGHJLNPQRSTUWXYZ]';
        const regexps = [
            // AN NAA, ANN NAA, AAN NAA, AANN NAA format
            new RegExp(
                `^(${firstChar}{1}${secondChar}?[0-9]{1,2})(\\s*)([0-9]{1}${fifthChar}{2})$`,
                'i'
            ),
            // ANA NAA
            new RegExp(
                `^(${firstChar}{1}[0-9]{1}${thirdChar}{1})(\\s*)([0-9]{1}${fifthChar}{2})$`,
                'i'
            ),
            // AANA NAA
            new RegExp(
                `^(${firstChar}{1}${secondChar}{1}?[0-9]{1}${fourthChar}{1})(\\s*)([0-9]{1}${fifthChar}{2})$`,
                'i'
            ),

            // BFPO postcodes
            new RegExp(
                '^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$',
                'i'
            ),
            /^(GIR)(\s*)(0AA)$/i, // Special postcode GIR 0AA
            /^(BFPO)(\s*)([0-9]{1,4})$/i, // Standard BFPO numbers
            /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i, // c/o BFPO numbers
            /^([A-Z]{4})(\s*)(1ZZ)$/i, // Overseas Territories
            /^(AI-2640)$/i, // Anguilla
        ];

        for (const reg of regexps) {
            if (reg.test(value)) {
                return true;
            }
        }

        return false;
    };

    return {
        /**
         * Return true if and only if the input value is a valid country zip code
         */
        validate(
            input: ValidateInput<ZipCodeOptions, ZipCodeLocalization>
        ): ValidateResult {
            const opts = Object.assign({}, input.options);
            if (input.value === '' || !opts.country) {
                return { valid: true };
            }

            let country = input.value.substr(0, 2);
            if ('function' === typeof opts.country) {
                country = opts.country.call(this);
            } else {
                country = opts.country;
            }

            if (
                !country ||
                COUNTRY_CODES.indexOf(country.toUpperCase()) === -1
            ) {
                return { valid: true };
            }

            let isValid = false;
            country = country.toUpperCase();
            switch (country) {
                // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Austria
                case 'AT':
                    isValid = /^([1-9]{1})(\d{3})$/.test(input.value);
                    break;

                case 'BG':
                    isValid = /^([1-9]{1}[0-9]{3})$/.test(input.value);
                    break;

                case 'BR':
                    isValid = /^(\d{2})([.]?)(\d{3})([-]?)(\d{3})$/.test(
                        input.value
                    );
                    break;

                case 'CA':
                    isValid =
                        /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(
                            input.value
                        );
                    break;

                case 'CH':
                    isValid = /^([1-9]{1})(\d{3})$/.test(input.value);
                    break;

                case 'CZ':
                    // Test: http://regexr.com/39hhr
                    isValid = /^(\d{3})([ ]?)(\d{2})$/.test(input.value);
                    break;

                // http://stackoverflow.com/questions/7926687/regular-expression-german-zip-codes
                case 'DE':
                    isValid = /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/.test(
                        input.value
                    );
                    break;

                case 'DK':
                    isValid = /^(DK(-|\s)?)?\d{4}$/i.test(input.value);
                    break;

                // Zip codes in Spain go from 01XXX to 52XXX.
                // Test: http://refiddle.com/1ufo
                case 'ES':
                    isValid = /^(?:0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/.test(
                        input.value
                    );
                    break;

                // http://en.wikipedia.org/wiki/Postal_codes_in_France
                case 'FR':
                    isValid = /^[0-9]{5}$/i.test(input.value);
                    break;

                case 'GB':
                    isValid = gb(input.value);
                    break;

                // Indian PIN (Postal Index Number) validation
                // http://en.wikipedia.org/wiki/Postal_Index_Number
                // Test: http://regex101.com/r/kV0vH3/1
                case 'IN':
                    isValid = /^\d{3}\s?\d{3}$/.test(input.value);
                    break;

                // http://www.eircode.ie/docs/default-source/Common/
                // prepare-your-business-for-eircode---published-v2.pdf?sfvrsn=2
                // Test: http://refiddle.com/1kpl
                case 'IE':
                    isValid =
                        /^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/.test(
                            input.value
                        );
                    break;

                // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Italy
                case 'IT':
                    isValid = /^(I-|IT-)?\d{5}$/i.test(input.value);
                    break;

                // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Morocco
                case 'MA':
                    isValid = /^[1-9][0-9]{4}$/i.test(input.value);
                    break;

                // http://en.wikipedia.org/wiki/Postal_codes_in_the_Netherlands
                case 'NL':
                    isValid = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(
                        input.value
                    );
                    break;

                // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Poland
                case 'PL':
                    isValid = /^[0-9]{2}-[0-9]{3}$/.test(input.value);
                    break;

                // Test: http://refiddle.com/1l2t
                case 'PT':
                    isValid = /^[1-9]\d{3}-\d{3}$/.test(input.value);
                    break;

                case 'RO':
                    isValid = /^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(
                        input.value
                    );
                    break;

                case 'RU':
                    isValid = /^[0-9]{6}$/i.test(input.value);
                    break;

                case 'SE':
                    isValid = /^(S-)?\d{3}\s?\d{2}$/i.test(input.value);
                    break;

                case 'SG':
                    isValid =
                        /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(
                            input.value
                        );
                    break;

                case 'SK':
                    // Test: http://regexr.com/39hhr
                    isValid = /^(\d{3})([ ]?)(\d{2})$/.test(input.value);
                    break;

                case 'US':
                default:
                    isValid = /^\d{4,5}([-]?\d{4})?$/.test(input.value);
                    break;
            }

            return {
                message: format(
                    input.l10n
                        ? opts.message || input.l10n.zipCode.country
                        : opts.message,
                    input.l10n ? input.l10n.zipCode.countries[country] : country
                ),
                valid: isValid,
            };
        },
    };
}
