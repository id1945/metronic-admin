define(["require", "exports", "../utils/format", "../utils/isValidDate"], function (require, exports, format_1, isValidDate_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function date() {
        var parseDate = function (input, inputFormat, separator) {
            var yearIndex = inputFormat.indexOf('YYYY');
            var monthIndex = inputFormat.indexOf('MM');
            var dayIndex = inputFormat.indexOf('DD');
            if (yearIndex === -1 || monthIndex === -1 || dayIndex === -1) {
                return null;
            }
            var sections = input.split(' ');
            var dateSection = sections[0].split(separator);
            if (dateSection.length < 3) {
                return null;
            }
            var d = new Date(parseInt(dateSection[yearIndex], 10), parseInt(dateSection[monthIndex], 10) - 1, parseInt(dateSection[dayIndex], 10));
            if (sections.length > 1) {
                var timeSection = sections[1].split(':');
                d.setHours(timeSection.length > 0 ? parseInt(timeSection[0], 10) : 0);
                d.setMinutes(timeSection.length > 1 ? parseInt(timeSection[1], 10) : 0);
                d.setSeconds(timeSection.length > 2 ? parseInt(timeSection[2], 10) : 0);
            }
            return d;
        };
        var formatDate = function (input, inputFormat) {
            var dateFormat = inputFormat
                .replace(/Y/g, 'y')
                .replace(/M/g, 'm')
                .replace(/D/g, 'd')
                .replace(/:m/g, ':M')
                .replace(/:mm/g, ':MM')
                .replace(/:S/, ':s')
                .replace(/:SS/, ':ss');
            var d = input.getDate();
            var dd = d < 10 ? "0" + d : d;
            var m = input.getMonth() + 1;
            var mm = m < 10 ? "0" + m : m;
            var yy = ("" + input.getFullYear()).substr(2);
            var yyyy = input.getFullYear();
            var h = input.getHours() % 12 || 12;
            var hh = h < 10 ? "0" + h : h;
            var H = input.getHours();
            var HH = H < 10 ? "0" + H : H;
            var M = input.getMinutes();
            var MM = M < 10 ? "0" + M : M;
            var s = input.getSeconds();
            var ss = s < 10 ? "0" + s : s;
            var replacer = {
                H: "" + H,
                HH: "" + HH,
                M: "" + M,
                MM: "" + MM,
                d: "" + d,
                dd: "" + dd,
                h: "" + h,
                hh: "" + hh,
                m: "" + m,
                mm: "" + mm,
                s: "" + s,
                ss: "" + ss,
                yy: "" + yy,
                yyyy: "" + yyyy,
            };
            return dateFormat.replace(/d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g, function (match) {
                return replacer[match] ? replacer[match] : match.slice(1, match.length - 1);
            });
        };
        return {
            validate: function (input) {
                if (input.value === '') {
                    return {
                        meta: {
                            date: null,
                        },
                        valid: true,
                    };
                }
                var opts = Object.assign({}, {
                    format: (input.element && input.element.getAttribute('type') === 'date') ? 'YYYY-MM-DD' : 'MM/DD/YYYY',
                    message: '',
                }, input.options);
                var message = input.l10n ? input.l10n.date.default : opts.message;
                var invalidResult = {
                    message: "" + message,
                    meta: {
                        date: null,
                    },
                    valid: false,
                };
                var formats = opts.format.split(' ');
                var timeFormat = (formats.length > 1) ? formats[1] : null;
                var amOrPm = (formats.length > 2) ? formats[2] : null;
                var sections = input.value.split(' ');
                var dateSection = sections[0];
                var timeSection = (sections.length > 1) ? sections[1] : null;
                if (formats.length !== sections.length) {
                    return invalidResult;
                }
                var separator = opts.separator ||
                    ((dateSection.indexOf('/') !== -1)
                        ? '/'
                        : ((dateSection.indexOf('-') !== -1) ? '-' : ((dateSection.indexOf('.') !== -1) ? '.' : '/')));
                if (separator === null || dateSection.indexOf(separator) === -1) {
                    return invalidResult;
                }
                var dateStr = dateSection.split(separator);
                var dateFormat = formats[0].split(separator);
                if (dateStr.length !== dateFormat.length) {
                    return invalidResult;
                }
                var yearStr = dateStr[dateFormat.indexOf('YYYY')];
                var monthStr = dateStr[dateFormat.indexOf('MM')];
                var dayStr = dateStr[dateFormat.indexOf('DD')];
                if (!/^\d+$/.test(yearStr) || !/^\d+$/.test(monthStr) || !/^\d+$/.test(dayStr)
                    || yearStr.length > 4 || monthStr.length > 2 || dayStr.length > 2) {
                    return invalidResult;
                }
                var year = parseInt(yearStr, 10);
                var month = parseInt(monthStr, 10);
                var day = parseInt(dayStr, 10);
                if (!isValidDate_1.default(year, month, day)) {
                    return invalidResult;
                }
                var d = new Date(year, month - 1, day);
                if (timeFormat) {
                    var hms = timeSection.split(':');
                    if (timeFormat.split(':').length !== hms.length) {
                        return invalidResult;
                    }
                    var h = hms.length > 0 ? (hms[0].length <= 2 && /^\d+$/.test(hms[0]) ? parseInt(hms[0], 10) : -1) : 0;
                    var m = hms.length > 1 ? (hms[1].length <= 2 && /^\d+$/.test(hms[1]) ? parseInt(hms[1], 10) : -1) : 0;
                    var s = hms.length > 2 ? (hms[2].length <= 2 && /^\d+$/.test(hms[2]) ? parseInt(hms[2], 10) : -1) : 0;
                    if (h === -1 || m === -1 || s === -1) {
                        return invalidResult;
                    }
                    if (s < 0 || s > 60) {
                        return invalidResult;
                    }
                    if (h < 0 || h >= 24 || (amOrPm && h > 12)) {
                        return invalidResult;
                    }
                    if (m < 0 || m > 59) {
                        return invalidResult;
                    }
                    d.setHours(h);
                    d.setMinutes(m);
                    d.setSeconds(s);
                }
                var minOption = (typeof opts.min === 'function') ? opts.min() : opts.min;
                var min = (minOption instanceof Date)
                    ? minOption
                    : (minOption ? parseDate(minOption, dateFormat, separator) : d);
                var maxOption = (typeof opts.max === 'function') ? opts.max() : opts.max;
                var max = (maxOption instanceof Date)
                    ? maxOption
                    : (maxOption ? parseDate(maxOption, dateFormat, separator) : d);
                var minOptionStr = (minOption instanceof Date) ? formatDate(min, opts.format) : minOption;
                var maxOptionStr = (maxOption instanceof Date) ? formatDate(max, opts.format) : maxOption;
                switch (true) {
                    case (!!minOptionStr && !maxOptionStr):
                        return {
                            message: format_1.default(input.l10n ? input.l10n.date.min : message, minOptionStr),
                            meta: {
                                date: d,
                            },
                            valid: d.getTime() >= min.getTime(),
                        };
                    case (!!maxOptionStr && !minOptionStr):
                        return {
                            message: format_1.default(input.l10n ? input.l10n.date.max : message, maxOptionStr),
                            meta: {
                                date: d,
                            },
                            valid: d.getTime() <= max.getTime(),
                        };
                    case (!!maxOptionStr && !!minOptionStr):
                        return {
                            message: format_1.default(input.l10n ? input.l10n.date.range : message, [minOptionStr, maxOptionStr]),
                            meta: {
                                date: d,
                            },
                            valid: d.getTime() <= max.getTime() && d.getTime() >= min.getTime(),
                        };
                    default:
                        return {
                            message: "" + message,
                            meta: {
                                date: d,
                            },
                            valid: true,
                        };
                }
            },
        };
    }
    exports.default = date;
});
