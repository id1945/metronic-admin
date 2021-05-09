/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { Localization, ValidateInput, ValidateOptions, ValidateResult } from '../../core/Core';
import format from '../../utils/format';

// ID validators for supported countries
import arId from './arId';
import baId from './baId';
import bgId from './bgId';
import brId from './brId';
import chId from './chId';
import clId from './clId';
import cnId from './cnId';
import coId from './coId';
import czId from './czId';
import dkId from './dkId';
import esId from './esId';
import fiId from './fiId';
import frId from './frId';
import hkId from './hkId';
import hrId from './hrId';
import idId from './idId';
import ieId from './ieId';
import ilId from './ilId';
import isId from './isId';
import krId from './krId';
import ltId from './ltId';
import lvId from './lvId';
import meId from './meId';
import mkId from './mkId';
import mxId from './mxId';
import myId from './myId';
import nlId from './nlId';
import noId from './noId';
import peId from './peId';
import plId from './plId';
import roId from './roId';
import rsId from './rsId';
import seId from './seId';
import siId from './siId';
import smId from './smId';
import thId from './thId';
import trId from './trId';
import twId from './twId';
import uyId from './uyId';
import zaId from './zaId';

export interface IdOptions extends ValidateOptions {
    // The ISO 3166-1 country code. It can be
    // - A country code
    // - A callback function that returns the country code
    country: string | (() => string);
}
export interface IdLocalization extends Localization {
    id: {
        countries: {
            [countryCode: string]: string,
        },
        country: string,
        default: string,
    };
}

export default function id() {
    // Supported country codes
    const COUNTRY_CODES = [
        'AR', 'BA', 'BG', 'BR', 'CH', 'CL', 'CN', 'CO', 'CZ', 'DK', 'EE', 'ES', 'FI', 'FR', 'HK', 'HR', 'ID', 'IE',
        'IL', 'IS', 'KR', 'LT', 'LV', 'ME', 'MK', 'MX', 'MY', 'NL', 'NO', 'PE', 'PL', 'RO', 'RS', 'SE', 'SI', 'SK',
        'SM', 'TH', 'TR', 'TW', 'UY', 'ZA',
    ];

    return {
        /**
         * Validate identification number in different countries
         * @see http://en.wikipedia.org/wiki/National_identification_number
         */
        validate(input: ValidateInput<IdOptions, IdLocalization>): ValidateResult {
            if (input.value === '') {
                return { valid: true };
            }

            const opts = Object.assign({}, { message: '' }, input.options);
            let country = input.value.substr(0, 2);
            if ('function' === typeof opts.country) {
                country = opts.country.call(this);
            } else {
                country = opts.country;
            }

            if (COUNTRY_CODES.indexOf(country) === -1) {
                return { valid: true };
            }

            let result = {
                meta: {},
                valid: true,
            };
            switch (country.toLowerCase()) {
                case 'ar': result = arId(input.value); break;
                case 'ba': result = baId(input.value); break;
                case 'bg': result = bgId(input.value); break;
                case 'br': result = brId(input.value); break;
                case 'ch': result = chId(input.value); break;
                case 'cl': result = clId(input.value); break;
                case 'cn': result = cnId(input.value); break;
                case 'co': result = coId(input.value); break;
                case 'cz': result = czId(input.value); break;
                case 'dk': result = dkId(input.value); break;

                // Validate Estonian Personal Identification Code (isikukood)
                // Use the same format as Lithuanian Personal Code
                // See http://et.wikipedia.org/wiki/Isikukood
                case 'ee': result = ltId(input.value); break;

                case 'es': result = esId(input.value); break;
                case 'fi': result = fiId(input.value); break;
                case 'fr': result = frId(input.value); break;
                case 'hk': result = hkId(input.value); break;
                case 'hr': result = hrId(input.value); break;
                case 'id': result = idId(input.value); break;
                case 'ie': result = ieId(input.value); break;
                case 'il': result = ilId(input.value); break;
                case 'is': result = isId(input.value); break;
                case 'kr': result = krId(input.value); break;
                case 'lt': result = ltId(input.value); break;
                case 'lv': result = lvId(input.value); break;
                case 'me': result = meId(input.value); break;
                case 'mk': result = mkId(input.value); break;
                case 'mx': result = mxId(input.value); break;
                case 'my': result = myId(input.value); break;
                case 'nl': result = nlId(input.value); break;
                case 'no': result = noId(input.value); break;
                case 'pe': result = peId(input.value); break;
                case 'pl': result = plId(input.value); break;
                case 'ro': result = roId(input.value); break;
                case 'rs': result = rsId(input.value); break;
                case 'se': result = seId(input.value); break;
                case 'si': result = siId(input.value); break;

                // Validate Slovak national identifier number (RC)
                // Slovakia uses the same format as Czech Republic
                case 'sk': result = czId(input.value); break;

                case 'sm': result = smId(input.value); break;
                case 'th': result = thId(input.value); break;
                case 'tr': result = trId(input.value); break;
                case 'tw': result = twId(input.value); break;
                case 'uy': result = uyId(input.value); break;
                case 'za': result = zaId(input.value); break;

                default: break;
            }

            const message = format(
                input.l10n ? opts.message || input.l10n.id.country : opts.message,
                input.l10n ? input.l10n.id.countries[country.toUpperCase()] : country.toUpperCase(),
            );
            return Object.assign({}, { message }, result);
        },
    };
}
