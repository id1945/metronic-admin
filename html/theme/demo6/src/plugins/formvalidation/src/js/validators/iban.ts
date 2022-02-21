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

export interface IbanOptions extends ValidateOptions {
    // The ISO 3166-1 country code. It can be
    // - A country code
    // - Name of field which its value defines the country code
    // - Name of callback function that returns the country code
    // - A callback function that returns the country code
    country?: string;
    // Set it to true (false) to indicate that the IBAN number must be (not be) from SEPA countries
    sepa?: boolean | string;
}
export interface IbanLocalization extends Localization {
    iban: {
        countries: {
            [countryCode: string]: string;
        };
        country: string;
        default: string;
    };
}

export default function iban(): ValidateFunctionInterface<
    IbanOptions,
    ValidateResult
> {
    // http://www.swift.com/dsp/resources/documents/IBAN_Registry.pdf
    // http://en.wikipedia.org/wiki/International_Bank_Account_Number#IBAN_formats_by_country
    const IBAN_PATTERNS = {
        AD: 'AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}', // Andorra
        AE: 'AE[0-9]{2}[0-9]{3}[0-9]{16}', // United Arab Emirates
        AL: 'AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}', // Albania
        AO: 'AO[0-9]{2}[0-9]{21}', // Angola
        AT: 'AT[0-9]{2}[0-9]{5}[0-9]{11}', // Austria
        AZ: 'AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}', // Azerbaijan
        BA: 'BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}', // Bosnia and Herzegovina
        BE: 'BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}', // Belgium
        BF: 'BF[0-9]{2}[0-9]{23}', // Burkina Faso
        BG: 'BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}', // Bulgaria
        BH: 'BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}', // Bahrain
        BI: 'BI[0-9]{2}[0-9]{12}', // Burundi
        BJ: 'BJ[0-9]{2}[A-Z]{1}[0-9]{23}', // Benin
        BR: 'BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]', // Brazil
        CH: 'CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}', // Switzerland
        CI: 'CI[0-9]{2}[A-Z]{1}[0-9]{23}', // Ivory Coast
        CM: 'CM[0-9]{2}[0-9]{23}', // Cameroon
        CR: 'CR[0-9]{2}[0-9][0-9]{3}[0-9]{14}', // Costa Rica
        CV: 'CV[0-9]{2}[0-9]{21}', // Cape Verde
        CY: 'CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}', // Cyprus
        CZ: 'CZ[0-9]{2}[0-9]{20}', // Czech Republic
        DE: 'DE[0-9]{2}[0-9]{8}[0-9]{10}', // Germany
        DK: 'DK[0-9]{2}[0-9]{14}', // Denmark
        DO: 'DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}', // Dominican Republic
        DZ: 'DZ[0-9]{2}[0-9]{20}', // Algeria
        EE: 'EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}', // Estonia
        ES: 'ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}', // Spain
        FI: 'FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}', // Finland
        FO: 'FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}', // Faroe Islands
        FR: 'FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}', // France
        GB: 'GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}', // United Kingdom
        GE: 'GE[0-9]{2}[A-Z]{2}[0-9]{16}', // Georgia
        GI: 'GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}', // Gibraltar
        GL: 'GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}', // Greenland
        GR: 'GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}', // Greece
        GT: 'GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}', // Guatemala
        HR: 'HR[0-9]{2}[0-9]{7}[0-9]{10}', // Croatia
        HU: 'HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}', // Hungary
        IE: 'IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}', // Ireland
        IL: 'IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}', // Israel
        IR: 'IR[0-9]{2}[0-9]{22}', // Iran
        IS: 'IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}', // Iceland
        IT: 'IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}', // Italy
        JO: 'JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}', // Jordan
        KW: 'KW[0-9]{2}[A-Z]{4}[0-9]{22}', // Kuwait
        KZ: 'KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}', // Kazakhstan
        LB: 'LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}', // Lebanon
        LI: 'LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}', // Liechtenstein
        LT: 'LT[0-9]{2}[0-9]{5}[0-9]{11}', // Lithuania
        LU: 'LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}', // Luxembourg
        LV: 'LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}', // Latvia
        MC: 'MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}', // Monaco
        MD: 'MD[0-9]{2}[A-Z0-9]{20}', // Moldova
        ME: 'ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}', // Montenegro
        MG: 'MG[0-9]{2}[0-9]{23}', // Madagascar
        MK: 'MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}', // Macedonia
        ML: 'ML[0-9]{2}[A-Z]{1}[0-9]{23}', // Mali
        MR: 'MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}', // Mauritania
        MT: 'MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}', // Malta
        MU: 'MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}', // Mauritius
        MZ: 'MZ[0-9]{2}[0-9]{21}', // Mozambique
        NL: 'NL[0-9]{2}[A-Z]{4}[0-9]{10}', // Netherlands
        NO: 'NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}', // Norway
        PK: 'PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}', // Pakistan
        PL: 'PL[0-9]{2}[0-9]{8}[0-9]{16}', // Poland
        PS: 'PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}', // Palestinian
        PT: 'PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}', // Portugal
        QA: 'QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}', // Qatar
        RO: 'RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}', // Romania
        RS: 'RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}', // Serbia
        SA: 'SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}', // Saudi Arabia
        SE: 'SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}', // Sweden
        SI: 'SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}', // Slovenia
        SK: 'SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}', // Slovakia
        SM: 'SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}', // San Marino
        SN: 'SN[0-9]{2}[A-Z]{1}[0-9]{23}', // Senegal
        TL: 'TL38[0-9]{3}[0-9]{14}[0-9]{2}', // East Timor
        TN: 'TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}', // Tunisia
        TR: 'TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}', // Turkey
        VG: 'VG[0-9]{2}[A-Z]{4}[0-9]{16}', // Virgin Islands, British
        XK: 'XK[0-9]{2}[0-9]{4}[0-9]{10}[0-9]{2}', // Republic of Kosovo
    };

    // List of SEPA country codes
    const SEPA_COUNTRIES = [
        'AT',
        'BE',
        'BG',
        'CH',
        'CY',
        'CZ',
        'DE',
        'DK',
        'EE',
        'ES',
        'FI',
        'FR',
        'GB',
        'GI',
        'GR',
        'HR',
        'HU',
        'IE',
        'IS',
        'IT',
        'LI',
        'LT',
        'LU',
        'LV',
        'MC',
        'MT',
        'NL',
        'NO',
        'PL',
        'PT',
        'RO',
        'SE',
        'SI',
        'SK',
        'SM',
    ];

    return {
        /**
         * Validate an International Bank Account Number (IBAN)
         * To test it, take the sample IBAN from
         * http://www.nordea.com/Our+services/
         * International+products+and+services/Cash+Management/IBAN+countries/908462.html
         */
        validate(
            input: ValidateInput<IbanOptions, IbanLocalization>
        ): ValidateResult {
            if (input.value === '') {
                return { valid: true };
            }

            const opts = Object.assign({}, { message: '' }, input.options);
            let v = input.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
            // TODO: `country` can be a dynamic option
            const country = opts.country || v.substr(0, 2);

            if (!IBAN_PATTERNS[country]) {
                return {
                    message: opts.message,
                    valid: false,
                };
            }

            // Check whether or not the sepa option is enabled
            if (opts.sepa !== undefined) {
                const isSepaCountry = SEPA_COUNTRIES.indexOf(country) !== -1;
                if (
                    ((opts.sepa === 'true' || opts.sepa === true) &&
                        !isSepaCountry) ||
                    ((opts.sepa === 'false' || opts.sepa === false) &&
                        isSepaCountry)
                ) {
                    return {
                        message: opts.message,
                        valid: false,
                    };
                }
            }

            const msg = format(
                input.l10n
                    ? opts.message || input.l10n.iban.country
                    : opts.message,
                input.l10n ? input.l10n.iban.countries[country] : country
            );
            if (!new RegExp(`^${IBAN_PATTERNS[country]}$`).test(input.value)) {
                return {
                    message: msg,
                    valid: false,
                };
            }

            v = `${v.substr(4)}${v.substr(0, 4)}`;
            v = v
                .split('')
                .map((n) => {
                    const code = n.charCodeAt(0);
                    return code >= 'A'.charCodeAt(0) &&
                        code <= 'Z'.charCodeAt(0)
                        ? // Replace A, B, C, ..., Z with 10, 11, ..., 35
                          code - 'A'.charCodeAt(0) + 10
                        : n;
                })
                .join('');

            let temp = parseInt(v.substr(0, 1), 10);
            const length = v.length;
            for (let i = 1; i < length; ++i) {
                temp = (temp * 10 + parseInt(v.substr(i, 1), 10)) % 97;
            }

            return {
                message: msg,
                valid: temp === 1,
            };
        },
    };
}
