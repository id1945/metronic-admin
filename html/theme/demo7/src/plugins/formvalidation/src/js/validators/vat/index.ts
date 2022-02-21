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
} from '../../core/Core';
import format from '../../utils/format';

// vat validators for supported countries
import arVat from './arVat';
import atVat from './atVat';
import beVat from './beVat';
import bgVat from './bgVat';
import brVat from './brVat';
import chVat from './chVat';
import cyVat from './cyVat';
import czVat from './czVat';
import deVat from './deVat';
import dkVat from './dkVat';
import eeVat from './eeVat';
import esVat from './esVat';
import fiVat from './fiVat';
import frVat from './frVat';
import gbVat from './gbVat';
import grVat from './grVat';
import hrVat from './hrVat';
import huVat from './huVat';
import ieVat from './ieVat';
import isVat from './isVat';
import itVat from './itVat';
import ltVat from './ltVat';
import luVat from './luVat';
import lvVat from './lvVat';
import mtVat from './mtVat';
import nlVat from './nlVat';
import noVat from './noVat';
import plVat from './plVat';
import ptVat from './ptVat';
import roVat from './roVat';
import rsVat from './rsVat';
import ruVat from './ruVat';
import seVat from './seVat';
import siVat from './siVat';
import skVat from './skVat';
import veVat from './veVat';
import zaVat from './zaVat';

export interface VatOptions extends ValidateOptions {
    // The ISO 3166-1 country code. It can be
    // - A country code
    // - A callback function that returns the country code
    country: string | (() => string);
}
export interface VatLocalization extends Localization {
    vat: {
        countries: {
            [countryCode: string]: string;
        };
        country: string;
        default: string;
    };
}

export default function vat(): ValidateFunctionInterface<
    VatOptions,
    ValidateResult
> {
    // Supported country codes
    const COUNTRY_CODES = [
        'AR',
        'AT',
        'BE',
        'BG',
        'BR',
        'CH',
        'CY',
        'CZ',
        'DE',
        'DK',
        'EE',
        'EL',
        'ES',
        'FI',
        'FR',
        'GB',
        'GR',
        'HR',
        'HU',
        'IE',
        'IS',
        'IT',
        'LT',
        'LU',
        'LV',
        'MT',
        'NL',
        'NO',
        'PL',
        'PT',
        'RO',
        'RU',
        'RS',
        'SE',
        'SK',
        'SI',
        'VE',
        'ZA',
    ];

    return {
        /**
         * Validate an European VAT number
         */
        validate(
            input: ValidateInput<VatOptions, VatLocalization>
        ): ValidateResult {
            const value = input.value;
            if (value === '') {
                return { valid: true };
            }

            const opts = Object.assign({}, { message: '' }, input.options);
            let country = value.substr(0, 2);
            if ('function' === typeof opts.country) {
                country = opts.country.call(this);
            } else {
                country = opts.country;
            }

            if (COUNTRY_CODES.indexOf(country) === -1) {
                return { valid: true };
            }

            let result: ValidateResult = {
                meta: {},
                valid: true,
            };
            switch (country.toLowerCase()) {
                case 'ar':
                    result = arVat(value);
                    break;
                case 'at':
                    result = atVat(value);
                    break;
                case 'be':
                    result = beVat(value);
                    break;
                case 'bg':
                    result = bgVat(value);
                    break;
                case 'br':
                    result = brVat(value);
                    break;
                case 'ch':
                    result = chVat(value);
                    break;
                case 'cy':
                    result = cyVat(value);
                    break;
                case 'cz':
                    result = czVat(value);
                    break;
                case 'de':
                    result = deVat(value);
                    break;
                case 'dk':
                    result = dkVat(value);
                    break;
                case 'ee':
                    result = eeVat(value);
                    break;

                // EL is traditionally prefix of Greek VAT numbers
                case 'el':
                    result = grVat(value);
                    break;

                case 'es':
                    result = esVat(value);
                    break;
                case 'fi':
                    result = fiVat(value);
                    break;
                case 'fr':
                    result = frVat(value);
                    break;
                case 'gb':
                    result = gbVat(value);
                    break;
                case 'gr':
                    result = grVat(value);
                    break;
                case 'hr':
                    result = hrVat(value);
                    break;
                case 'hu':
                    result = huVat(value);
                    break;
                case 'ie':
                    result = ieVat(value);
                    break;
                case 'is':
                    result = isVat(value);
                    break;
                case 'it':
                    result = itVat(value);
                    break;
                case 'lt':
                    result = ltVat(value);
                    break;
                case 'lu':
                    result = luVat(value);
                    break;
                case 'lv':
                    result = lvVat(value);
                    break;
                case 'mt':
                    result = mtVat(value);
                    break;
                case 'nl':
                    result = nlVat(value);
                    break;
                case 'no':
                    result = noVat(value);
                    break;
                case 'pl':
                    result = plVat(value);
                    break;
                case 'pt':
                    result = ptVat(value);
                    break;
                case 'ro':
                    result = roVat(value);
                    break;
                case 'rs':
                    result = rsVat(value);
                    break;
                case 'ru':
                    result = ruVat(value);
                    break;
                case 'se':
                    result = seVat(value);
                    break;
                case 'si':
                    result = siVat(value);
                    break;
                case 'sk':
                    result = skVat(value);
                    break;
                case 've':
                    result = veVat(value);
                    break;
                case 'za':
                    result = zaVat(value);
                    break;

                default:
                    break;
            }

            const message = format(
                input.l10n
                    ? opts.message || input.l10n.vat.country
                    : opts.message,
                input.l10n
                    ? input.l10n.vat.countries[country.toUpperCase()]
                    : country.toUpperCase()
            );
            return Object.assign({}, { message }, result);
        },
    };
}
