define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isbn() {
        return {
            validate: function (input) {
                if (input.value === '') {
                    return {
                        meta: {
                            type: null,
                        },
                        valid: true,
                    };
                }
                var tpe;
                switch (true) {
                    case /^\d{9}[\dX]$/.test(input.value):
                    case input.value.length === 13 &&
                        /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(input.value):
                    case input.value.length === 13 &&
                        /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(input.value):
                        tpe = 'ISBN10';
                        break;
                    case /^(978|979)\d{9}[\dX]$/.test(input.value):
                    case input.value.length === 17 &&
                        /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(input.value):
                    case input.value.length === 17 &&
                        /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(input.value):
                        tpe = 'ISBN13';
                        break;
                    default:
                        return {
                            meta: {
                                type: null,
                            },
                            valid: false,
                        };
                }
                var chars = input.value.replace(/[^0-9X]/gi, '').split('');
                var length = chars.length;
                var sum = 0;
                var i;
                var checksum;
                switch (tpe) {
                    case 'ISBN10':
                        sum = 0;
                        for (i = 0; i < length - 1; i++) {
                            sum += parseInt(chars[i], 10) * (10 - i);
                        }
                        checksum = 11 - (sum % 11);
                        if (checksum === 11) {
                            checksum = 0;
                        }
                        else if (checksum === 10) {
                            checksum = 'X';
                        }
                        return {
                            meta: {
                                type: tpe,
                            },
                            valid: "" + checksum === chars[length - 1],
                        };
                    case 'ISBN13':
                        sum = 0;
                        for (i = 0; i < length - 1; i++) {
                            sum +=
                                i % 2 === 0
                                    ? parseInt(chars[i], 10)
                                    : parseInt(chars[i], 10) * 3;
                        }
                        checksum = 10 - (sum % 10);
                        if (checksum === 10) {
                            checksum = '0';
                        }
                        return {
                            meta: {
                                type: tpe,
                            },
                            valid: "" + checksum === chars[length - 1],
                        };
                }
            },
        };
    }
    exports.default = isbn;
});
