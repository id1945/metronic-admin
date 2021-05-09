/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { Localization, ValidateInput, ValidateOptions, ValidateResult } from '../core/Core';
import format from '../utils/format';

export interface PhoneOptions extends ValidateOptions {
    // The ISO 3166-1 country code. It can be
    // - A country code
    // - A callback function that returns the country code
    country: string | (() => string);
}
export interface PhoneLocalization extends Localization {
    phone: {
        countries: {
            [countryCode: string]: string,
        },
        country: string,
        default: string,
    };
}

export default function phone() {
    // The supported countries
    const COUNTRY_CODES = [
        'AE', 'BG', 'BR', 'CN', 'CZ', 'DE', 'DK', 'ES', 'FR', 'GB', 'IN', 'MA', 'NL', 'PK', 'RO', 'RU', 'SK', 'TH',
        'US', 'VE',
    ];

    return {
        /**
         * Return true if the input value contains a valid phone number for the country
         * selected in the options
         */
        validate(input: ValidateInput<PhoneOptions, PhoneLocalization>): ValidateResult {
            if (input.value === '') {
                return {
                    valid: true,
                };
            }
            const opts = Object.assign({}, { message: '' }, input.options);

            const v = input.value.trim();
            let country = v.substr(0, 2);
            if ('function' === typeof opts.country) {
                country = opts.country.call(this);
            } else {
                country = opts.country;
            }

            if (!country || COUNTRY_CODES.indexOf(country.toUpperCase()) === -1) {
                return {
                    valid: true,
                };
            }

            let isValid = true;
            /* tslint:disable:max-line-length */
            switch (country.toUpperCase()) {
                case 'AE':
                    // http://regexr.com/39tak
                    isValid = (/^(((\+|00)?971[\s\.-]?(\(0\)[\s\.-]?)?|0)(\(5(0|2|5|6)\)|5(0|2|5|6)|2|3|4|6|7|9)|60)([\s\.-]?[0-9]){7}$/).test(v);
                    break;

                case 'BG':
                    // https://regex101.com/r/yE6vN4/1
                    // See http://en.wikipedia.org/wiki/Telephone_numbers_in_Bulgaria
                    isValid = (/^(0|359|00)(((700|900)[0-9]{5}|((800)[0-9]{5}|(800)[0-9]{4}))|(87|88|89)([0-9]{7})|((2[0-9]{7})|(([3-9][0-9])(([0-9]{6})|([0-9]{5})))))$/).test(v.replace(/\+|\s|-|\/|\(|\)/gi, ''));
                    break;

                case 'BR':
                    // http://regexr.com/399m1
                    isValid = (/^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/).test(v);
                    break;

                case 'CN':
                    // http://regexr.com/39dq4
                    isValid = (/^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/).test(v);
                    break;

                case 'CZ':
                    // http://regexr.com/39hhl
                    isValid = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(v);
                    break;

                case 'DE':
                    // http://regexr.com/39pkg
                    isValid = (/^(((((((00|\+)49[ \-/]?)|0)[1-9][0-9]{1,4})[ \-/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[ \-/]?))[0-9]{1,7}([ \-/]?[0-9]{1,5})?)$/).test(v);
                    break;

                case 'DK':
                    // Mathing DK phone numbers with country code in 1 of 3 formats and an
                    // 8 digit phone number not starting with a 0 or 1. Can have 1 space
                    // between each character except inside the country code.
                    // http://regex101.com/r/sS8fO4/1
                    isValid = (/^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/).test(v);
                    break;

                case 'ES':
                    // http://regex101.com/r/rB9mA9/1
                    // Telephone numbers in Spain go like this:
                    //     9: Landline phones and special prefixes.
                    //     6, 7: Mobile phones.
                    //     5: VoIP lines.
                    //     8: Premium-rate services.
                    // There are also special 5-digit and 3-digit numbers, but
                    // maybe it would be overkill to include them all.
                    isValid = (/^(?:(?:(?:\+|00)34\D?))?(?:5|6|7|8|9)(?:\d\D?){8}$/).test(v);
                    break;

                case 'FR':
                    // http://regexr.com/39a2p
                    isValid = (/^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/).test(v);
                    break;

                case 'GB':
                    // http://aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers#Match_GB_telephone_number_in_any_format
                    // http://regexr.com/38uhv
                    isValid = (/^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/).test(v);
                    break;

                case 'IN':
                    // http://stackoverflow.com/questions/18351553/regular-expression-validation-for-indian-phone-number-and-mobile-number
                    // http://regex101.com/r/qL6eZ5/1
                    // May begin with +91. Supports mobile and land line numbers
                    isValid = (/((\+?)((0[ -]+)*|(91 )*)(\d{12}|\d{10}))|\d{5}([- ]*)\d{6}/).test(v);
                    break;

                case 'MA':
                    // http://en.wikipedia.org/wiki/Telephone_numbers_in_Morocco
                    // http://regexr.com/399n8
                    isValid = (/^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/).test(v);
                    break;

                case 'NL':
                    // http://en.wikipedia.org/wiki/Telephone_numbers_in_the_Netherlands
                    // http://regexr.com/3aevr
                    isValid = (/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/gm).test(v);
                    break;

                case 'PK':
                    // http://regex101.com/r/yH8aV9/2
                    isValid = (/^0?3[0-9]{2}[0-9]{7}$/).test(v);
                    break;

                case 'RO':
                    // All mobile network and land line
                    // http://regexr.com/39fv1
                    isValid = (/^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/g).test(v);
                    break;

                case 'RU':
                    // http://regex101.com/r/gW7yT5/5
                    isValid = (/^((8|\+7|007)[\-\.\/ ]?)?([\(\/\.]?\d{3}[\)\/\.]?[\-\.\/ ]?)?[\d\-\.\/ ]{7,10}$/g).test(v);
                    break;

                case 'SK':
                    // http://regexr.com/3a95f
                    isValid = /^(((00)([- ]?)|\+)(421)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(v);
                    break;

                case 'TH':
                    // http://regex101.com/r/vM5mZ4/2
                    isValid = (/^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/).test(v);
                    break;

                case 'VE':
                    // http://regex101.com/r/eM2yY0/6
                    isValid = (/^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/).test(v);
                    break;

                case 'US':
                default:
                    // Make sure US phone numbers have 10 digits
                    // May start with 1, +1, or 1-; should discard
                    // Area code may be delimited with (), & sections may be delimited with . or -
                    // http://regexr.com/38mqi
                    isValid = (/^(?:(1\-?)|(\+1 ?))?\(?\d{3}\)?[\-\.\s]?\d{3}[\-\.\s]?\d{4}$/).test(v);
                    break;
            }
            /* tslint:enable:max-line-length */

            return {
                message: format(
                    input.l10n ? opts.message || input.l10n.phone.country : opts.message,
                    input.l10n ? input.l10n.phone.countries[country] : country,
                ),
                valid: isValid,
            };
        },
    };
}
