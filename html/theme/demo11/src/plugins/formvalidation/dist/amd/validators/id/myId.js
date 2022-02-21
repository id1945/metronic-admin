define(["require", "exports", "../../utils/isValidDate"], function (require, exports, isValidDate_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function myId(value) {
        if (!/^\d{12}$/.test(value)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var year = parseInt(value.substr(0, 2), 10);
        var month = parseInt(value.substr(2, 2), 10);
        var day = parseInt(value.substr(4, 2), 10);
        if (!isValidDate_1.default(year + 1900, month, day) &&
            !isValidDate_1.default(year + 2000, month, day)) {
            return {
                meta: {},
                valid: false,
            };
        }
        var placeOfBirth = value.substr(6, 2);
        var notAvailablePlaces = [
            '17',
            '18',
            '19',
            '20',
            '69',
            '70',
            '73',
            '80',
            '81',
            '94',
            '95',
            '96',
            '97',
        ];
        return {
            meta: {},
            valid: notAvailablePlaces.indexOf(placeOfBirth) === -1,
        };
    }
    exports.default = myId;
});
