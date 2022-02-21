define(["require", "exports", "../../utils/format", "./arId", "./baId", "./bgId", "./brId", "./chId", "./clId", "./cnId", "./coId", "./czId", "./dkId", "./esId", "./fiId", "./frId", "./hkId", "./hrId", "./idId", "./ieId", "./ilId", "./isId", "./krId", "./ltId", "./lvId", "./meId", "./mkId", "./mxId", "./myId", "./nlId", "./noId", "./peId", "./plId", "./roId", "./rsId", "./seId", "./siId", "./smId", "./thId", "./trId", "./twId", "./uyId", "./zaId"], function (require, exports, format_1, arId_1, baId_1, bgId_1, brId_1, chId_1, clId_1, cnId_1, coId_1, czId_1, dkId_1, esId_1, fiId_1, frId_1, hkId_1, hrId_1, idId_1, ieId_1, ilId_1, isId_1, krId_1, ltId_1, lvId_1, meId_1, mkId_1, mxId_1, myId_1, nlId_1, noId_1, peId_1, plId_1, roId_1, rsId_1, seId_1, siId_1, smId_1, thId_1, trId_1, twId_1, uyId_1, zaId_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function id() {
        var COUNTRY_CODES = [
            'AR',
            'BA',
            'BG',
            'BR',
            'CH',
            'CL',
            'CN',
            'CO',
            'CZ',
            'DK',
            'EE',
            'ES',
            'FI',
            'FR',
            'HK',
            'HR',
            'ID',
            'IE',
            'IL',
            'IS',
            'KR',
            'LT',
            'LV',
            'ME',
            'MK',
            'MX',
            'MY',
            'NL',
            'NO',
            'PE',
            'PL',
            'RO',
            'RS',
            'SE',
            'SI',
            'SK',
            'SM',
            'TH',
            'TR',
            'TW',
            'UY',
            'ZA',
        ];
        return {
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                var opts = Object.assign({}, { message: '' }, input.options);
                var country = input.value.substr(0, 2);
                if ('function' === typeof opts.country) {
                    country = opts.country.call(this);
                }
                else {
                    country = opts.country;
                }
                if (COUNTRY_CODES.indexOf(country) === -1) {
                    return { valid: true };
                }
                var result = {
                    meta: {},
                    valid: true,
                };
                switch (country.toLowerCase()) {
                    case 'ar':
                        result = arId_1.default(input.value);
                        break;
                    case 'ba':
                        result = baId_1.default(input.value);
                        break;
                    case 'bg':
                        result = bgId_1.default(input.value);
                        break;
                    case 'br':
                        result = brId_1.default(input.value);
                        break;
                    case 'ch':
                        result = chId_1.default(input.value);
                        break;
                    case 'cl':
                        result = clId_1.default(input.value);
                        break;
                    case 'cn':
                        result = cnId_1.default(input.value);
                        break;
                    case 'co':
                        result = coId_1.default(input.value);
                        break;
                    case 'cz':
                        result = czId_1.default(input.value);
                        break;
                    case 'dk':
                        result = dkId_1.default(input.value);
                        break;
                    case 'ee':
                        result = ltId_1.default(input.value);
                        break;
                    case 'es':
                        result = esId_1.default(input.value);
                        break;
                    case 'fi':
                        result = fiId_1.default(input.value);
                        break;
                    case 'fr':
                        result = frId_1.default(input.value);
                        break;
                    case 'hk':
                        result = hkId_1.default(input.value);
                        break;
                    case 'hr':
                        result = hrId_1.default(input.value);
                        break;
                    case 'id':
                        result = idId_1.default(input.value);
                        break;
                    case 'ie':
                        result = ieId_1.default(input.value);
                        break;
                    case 'il':
                        result = ilId_1.default(input.value);
                        break;
                    case 'is':
                        result = isId_1.default(input.value);
                        break;
                    case 'kr':
                        result = krId_1.default(input.value);
                        break;
                    case 'lt':
                        result = ltId_1.default(input.value);
                        break;
                    case 'lv':
                        result = lvId_1.default(input.value);
                        break;
                    case 'me':
                        result = meId_1.default(input.value);
                        break;
                    case 'mk':
                        result = mkId_1.default(input.value);
                        break;
                    case 'mx':
                        result = mxId_1.default(input.value);
                        break;
                    case 'my':
                        result = myId_1.default(input.value);
                        break;
                    case 'nl':
                        result = nlId_1.default(input.value);
                        break;
                    case 'no':
                        result = noId_1.default(input.value);
                        break;
                    case 'pe':
                        result = peId_1.default(input.value);
                        break;
                    case 'pl':
                        result = plId_1.default(input.value);
                        break;
                    case 'ro':
                        result = roId_1.default(input.value);
                        break;
                    case 'rs':
                        result = rsId_1.default(input.value);
                        break;
                    case 'se':
                        result = seId_1.default(input.value);
                        break;
                    case 'si':
                        result = siId_1.default(input.value);
                        break;
                    case 'sk':
                        result = czId_1.default(input.value);
                        break;
                    case 'sm':
                        result = smId_1.default(input.value);
                        break;
                    case 'th':
                        result = thId_1.default(input.value);
                        break;
                    case 'tr':
                        result = trId_1.default(input.value);
                        break;
                    case 'tw':
                        result = twId_1.default(input.value);
                        break;
                    case 'uy':
                        result = uyId_1.default(input.value);
                        break;
                    case 'za':
                        result = zaId_1.default(input.value);
                        break;
                    default:
                        break;
                }
                var message = format_1.default(input.l10n
                    ? opts.message || input.l10n.id.country
                    : opts.message, input.l10n
                    ? input.l10n.id.countries[country.toUpperCase()]
                    : country.toUpperCase());
                return Object.assign({}, { message: message }, result);
            },
        };
    }
    exports.default = id;
});
