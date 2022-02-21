define(["require", "exports", "../utils/format"], function (require, exports, format_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function phone() {
        var COUNTRY_CODES = [
            'AE',
            'BG',
            'BR',
            'CN',
            'CZ',
            'DE',
            'DK',
            'ES',
            'FR',
            'GB',
            'IN',
            'MA',
            'NL',
            'PK',
            'RO',
            'RU',
            'SK',
            'TH',
            'US',
            'VE',
        ];
        return {
            validate: function (input) {
                if (input.value === '') {
                    return {
                        valid: true,
                    };
                }
                var opts = Object.assign({}, { message: '' }, input.options);
                var v = input.value.trim();
                var country = v.substr(0, 2);
                if ('function' === typeof opts.country) {
                    country = opts.country.call(this);
                }
                else {
                    country = opts.country;
                }
                if (!country ||
                    COUNTRY_CODES.indexOf(country.toUpperCase()) === -1) {
                    return {
                        valid: true,
                    };
                }
                var isValid = true;
                switch (country.toUpperCase()) {
                    case 'AE':
                        isValid =
                            /^(((\+|00)?971[\s.-]?(\(0\)[\s.-]?)?|0)(\(5(0|2|5|6)\)|5(0|2|5|6)|2|3|4|6|7|9)|60)([\s.-]?[0-9]){7}$/.test(v);
                        break;
                    case 'BG':
                        isValid =
                            /^(0|359|00)(((700|900)[0-9]{5}|((800)[0-9]{5}|(800)[0-9]{4}))|(87|88|89)([0-9]{7})|((2[0-9]{7})|(([3-9][0-9])(([0-9]{6})|([0-9]{5})))))$/.test(v.replace(/\+|\s|-|\/|\(|\)/gi, ''));
                        break;
                    case 'BR':
                        isValid =
                            /^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/.test(v);
                        break;
                    case 'CN':
                        isValid =
                            /^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/.test(v);
                        break;
                    case 'CZ':
                        isValid =
                            /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(v);
                        break;
                    case 'DE':
                        isValid =
                            /^(((((((00|\+)49[ \-/]?)|0)[1-9][0-9]{1,4})[ \-/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[ \-/]?))[0-9]{1,7}([ \-/]?[0-9]{1,5})?)$/.test(v);
                        break;
                    case 'DK':
                        isValid = /^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/.test(v);
                        break;
                    case 'ES':
                        isValid =
                            /^(?:(?:(?:\+|00)34\D?))?(?:5|6|7|8|9)(?:\d\D?){8}$/.test(v);
                        break;
                    case 'FR':
                        isValid =
                            /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(v);
                        break;
                    case 'GB':
                        isValid =
                            /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|#)\d+)?)$/.test(v);
                        break;
                    case 'IN':
                        isValid =
                            /((\+?)((0[ -]+)*|(91 )*)(\d{12}|\d{10}))|\d{5}([- ]*)\d{6}/.test(v);
                        break;
                    case 'MA':
                        isValid =
                            /^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(v);
                        break;
                    case 'NL':
                        isValid =
                            /^((\+|00(\s|\s?-\s?)?)31(\s|\s?-\s?)?(\(0\)[-\s]?)?|0)[1-9]((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/gm.test(v);
                        break;
                    case 'PK':
                        isValid = /^0?3[0-9]{2}[0-9]{7}$/.test(v);
                        break;
                    case 'RO':
                        isValid =
                            /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|-)?([0-9]{3}(\s|\.|-|)){2}$/g.test(v);
                        break;
                    case 'RU':
                        isValid =
                            /^((8|\+7|007)[-./ ]?)?([(/.]?\d{3}[)/.]?[-./ ]?)?[\d\-./ ]{7,10}$/g.test(v);
                        break;
                    case 'SK':
                        isValid =
                            /^(((00)([- ]?)|\+)(421)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(v);
                        break;
                    case 'TH':
                        isValid = /^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/.test(v);
                        break;
                    case 'VE':
                        isValid =
                            /^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/.test(v);
                        break;
                    case 'US':
                    default:
                        isValid =
                            /^(?:(1-?)|(\+1 ?))?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(v);
                        break;
                }
                return {
                    message: format_1.default(input.l10n
                        ? opts.message || input.l10n.phone.country
                        : opts.message, input.l10n ? input.l10n.phone.countries[country] : country),
                    valid: isValid,
                };
            },
        };
    }
    exports.default = phone;
});
