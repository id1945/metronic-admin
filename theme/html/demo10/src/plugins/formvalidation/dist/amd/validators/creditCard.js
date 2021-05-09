define(["require", "exports", "../algorithms/luhn"], function (require, exports, luhn_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CREDIT_CARD_TYPES = void 0;
    var CREDIT_CARD_TYPES = {
        AMERICAN_EXPRESS: {
            length: [15],
            prefix: ['34', '37'],
        },
        DANKORT: {
            length: [16],
            prefix: ['5019'],
        },
        DINERS_CLUB: {
            length: [14],
            prefix: ['300', '301', '302', '303', '304', '305', '36'],
        },
        DINERS_CLUB_US: {
            length: [16],
            prefix: ['54', '55'],
        },
        DISCOVER: {
            length: [16],
            prefix: [
                '6011', '622126', '622127', '622128', '622129', '62213',
                '62214', '62215', '62216', '62217', '62218', '62219',
                '6222', '6223', '6224', '6225', '6226', '6227', '6228',
                '62290', '62291', '622920', '622921', '622922', '622923',
                '622924', '622925', '644', '645', '646', '647', '648',
                '649', '65',
            ],
        },
        ELO: {
            length: [16],
            prefix: [
                '4011', '4312', '4389', '4514', '4573', '4576',
                '5041', '5066', '5067', '509',
                '6277', '6362', '6363', '650', '6516', '6550',
            ],
        },
        FORBRUGSFORENINGEN: {
            length: [16],
            prefix: ['600722'],
        },
        JCB: {
            length: [16],
            prefix: ['3528', '3529', '353', '354', '355', '356', '357', '358'],
        },
        LASER: {
            length: [16, 17, 18, 19],
            prefix: ['6304', '6706', '6771', '6709'],
        },
        MAESTRO: {
            length: [12, 13, 14, 15, 16, 17, 18, 19],
            prefix: ['5018', '5020', '5038', '5868', '6304', '6759', '6761', '6762', '6763', '6764', '6765', '6766'],
        },
        MASTERCARD: {
            length: [16],
            prefix: ['51', '52', '53', '54', '55'],
        },
        SOLO: {
            length: [16, 18, 19],
            prefix: ['6334', '6767'],
        },
        UNIONPAY: {
            length: [16, 17, 18, 19],
            prefix: [
                '622126', '622127', '622128', '622129', '62213', '62214',
                '62215', '62216', '62217', '62218', '62219', '6222', '6223',
                '6224', '6225', '6226', '6227', '6228', '62290', '62291',
                '622920', '622921', '622922', '622923', '622924', '622925',
            ],
        },
        VISA: {
            length: [16],
            prefix: ['4'],
        },
        VISA_ELECTRON: {
            length: [16],
            prefix: ['4026', '417500', '4405', '4508', '4844', '4913', '4917'],
        },
    };
    exports.CREDIT_CARD_TYPES = CREDIT_CARD_TYPES;
    function creditCard() {
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
                if (/[^0-9-\s]+/.test(input.value)) {
                    return {
                        meta: {
                            type: null,
                        },
                        valid: false,
                    };
                }
                var v = input.value.replace(/\D/g, '');
                if (!luhn_1.default(v)) {
                    return {
                        meta: {
                            type: null,
                        },
                        valid: false,
                    };
                }
                for (var _i = 0, _a = Object.keys(CREDIT_CARD_TYPES); _i < _a.length; _i++) {
                    var tpe = _a[_i];
                    for (var i in CREDIT_CARD_TYPES[tpe].prefix) {
                        if (input.value.substr(0, CREDIT_CARD_TYPES[tpe].prefix[i].length) ===
                            CREDIT_CARD_TYPES[tpe].prefix[i] && CREDIT_CARD_TYPES[tpe].length.indexOf(v.length) !== -1) {
                            return {
                                meta: {
                                    type: tpe,
                                },
                                valid: true,
                            };
                        }
                    }
                }
                return {
                    meta: {
                        type: null,
                    },
                    valid: false,
                };
            },
        };
    }
    exports.default = creditCard;
});
