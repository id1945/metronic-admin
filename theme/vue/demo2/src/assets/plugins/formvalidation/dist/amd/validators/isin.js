define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isin() {
        var COUNTRY_CODES = 'AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|' +
            'BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|' +
            'SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|' +
            'IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|' +
            'MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|' +
            'PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|' +
            'SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|' +
            'YE|ZM|ZW';
        return {
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                var v = input.value.toUpperCase();
                var regex = new RegExp('^(' + COUNTRY_CODES + ')[0-9A-Z]{10}$');
                if (!regex.test(input.value)) {
                    return { valid: false };
                }
                var length = v.length;
                var converted = '';
                var i;
                for (i = 0; i < length - 1; i++) {
                    var c = v.charCodeAt(i);
                    converted += ((c > 57) ? (c - 55).toString() : v.charAt(i));
                }
                var digits = '';
                var n = converted.length;
                var group = (n % 2 !== 0) ? 0 : 1;
                for (i = 0; i < n; i++) {
                    digits += (parseInt(converted[i], 10) * ((i % 2) === group ? 2 : 1) + '');
                }
                var sum = 0;
                for (i = 0; i < digits.length; i++) {
                    sum += parseInt(digits.charAt(i), 10);
                }
                sum = (10 - (sum % 10)) % 10;
                return { valid: "" + sum === v.charAt(length - 1) };
            },
        };
    }
    exports.default = isin;
});
