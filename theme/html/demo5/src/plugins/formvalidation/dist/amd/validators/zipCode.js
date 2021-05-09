define(["require", "exports", "../utils/format"], function (require, exports, format_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function zipCode() {
        var COUNTRY_CODES = [
            'AT', 'BG', 'BR', 'CA', 'CH', 'CZ', 'DE', 'DK', 'ES', 'FR', 'GB', 'IE', 'IN', 'IT', 'MA', 'NL', 'PL', 'PT',
            'RO', 'RU', 'SE', 'SG', 'SK', 'US',
        ];
        var gb = function (value) {
            var firstChar = '[ABCDEFGHIJKLMNOPRSTUWYZ]';
            var secondChar = '[ABCDEFGHKLMNOPQRSTUVWXY]';
            var thirdChar = '[ABCDEFGHJKPMNRSTUVWXY]';
            var fourthChar = '[ABEHMNPRVWXY]';
            var fifthChar = '[ABDEFGHJLNPQRSTUWXYZ]';
            var regexps = [
                new RegExp("^(" + firstChar + "{1}" + secondChar + "?[0-9]{1,2})(\\s*)([0-9]{1}" + fifthChar + "{2})$", 'i'),
                new RegExp("^(" + firstChar + "{1}[0-9]{1}" + thirdChar + "{1})(\\s*)([0-9]{1}" + fifthChar + "{2})$", 'i'),
                new RegExp("^(" + firstChar + "{1}" + secondChar + "{1}?[0-9]{1}" + fourthChar + "{1})(\\s*)([0-9]{1}" + fifthChar + "{2})$", 'i'),
                new RegExp('^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$', 'i'),
                /^(GIR)(\s*)(0AA)$/i,
                /^(BFPO)(\s*)([0-9]{1,4})$/i,
                /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i,
                /^([A-Z]{4})(\s*)(1ZZ)$/i,
                /^(AI-2640)$/i,
            ];
            for (var _i = 0, regexps_1 = regexps; _i < regexps_1.length; _i++) {
                var reg = regexps_1[_i];
                if (reg.test(value)) {
                    return true;
                }
            }
            return false;
        };
        return {
            validate: function (input) {
                var opts = Object.assign({}, input.options);
                if (input.value === '' || !opts.country) {
                    return { valid: true };
                }
                var country = input.value.substr(0, 2);
                if ('function' === typeof opts.country) {
                    country = opts.country.call(this);
                }
                else {
                    country = opts.country;
                }
                if (!country || COUNTRY_CODES.indexOf(country.toUpperCase()) === -1) {
                    return { valid: true };
                }
                var isValid = false;
                country = country.toUpperCase();
                switch (country) {
                    case 'AT':
                        isValid = /^([1-9]{1})(\d{3})$/.test(input.value);
                        break;
                    case 'BG':
                        isValid = /^([1-9]{1}[0-9]{3})$/.test(input.value);
                        break;
                    case 'BR':
                        isValid = /^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(input.value);
                        break;
                    case 'CA':
                        isValid = /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(input.value);
                        break;
                    case 'CH':
                        isValid = /^([1-9]{1})(\d{3})$/.test(input.value);
                        break;
                    case 'CZ':
                        isValid = /^(\d{3})([ ]?)(\d{2})$/.test(input.value);
                        break;
                    case 'DE':
                        isValid = /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/.test(input.value);
                        break;
                    case 'DK':
                        isValid = /^(DK(-|\s)?)?\d{4}$/i.test(input.value);
                        break;
                    case 'ES':
                        isValid = /^(?:0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/.test(input.value);
                        break;
                    case 'FR':
                        isValid = /^[0-9]{5}$/i.test(input.value);
                        break;
                    case 'GB':
                        isValid = gb(input.value);
                        break;
                    case 'IN':
                        isValid = /^\d{3}\s?\d{3}$/.test(input.value);
                        break;
                    case 'IE':
                        isValid = /^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/.test(input.value);
                        break;
                    case 'IT':
                        isValid = /^(I-|IT-)?\d{5}$/i.test(input.value);
                        break;
                    case 'MA':
                        isValid = /^[1-9][0-9]{4}$/i.test(input.value);
                        break;
                    case 'NL':
                        isValid = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(input.value);
                        break;
                    case 'PL':
                        isValid = /^[0-9]{2}\-[0-9]{3}$/.test(input.value);
                        break;
                    case 'PT':
                        isValid = /^[1-9]\d{3}-\d{3}$/.test(input.value);
                        break;
                    case 'RO':
                        isValid = /^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(input.value);
                        break;
                    case 'RU':
                        isValid = /^[0-9]{6}$/i.test(input.value);
                        break;
                    case 'SE':
                        isValid = /^(S-)?\d{3}\s?\d{2}$/i.test(input.value);
                        break;
                    case 'SG':
                        isValid = /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(input.value);
                        break;
                    case 'SK':
                        isValid = /^(\d{3})([ ]?)(\d{2})$/.test(input.value);
                        break;
                    case 'US':
                    default:
                        isValid = /^\d{4,5}([\-]?\d{4})?$/.test(input.value);
                        break;
                }
                return {
                    message: format_1.default(input.l10n ? opts.message || input.l10n.zipCode.country : opts.message, input.l10n ? input.l10n.zipCode.countries[country] : country),
                    valid: isValid,
                };
            },
        };
    }
    exports.default = zipCode;
});
