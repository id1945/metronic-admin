/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

/**
 * Validate French identification number (NIR)
 *
 * @see https://en.wikipedia.org/wiki/INSEE_code
 * @see https://fr.wikipedia.org/wiki/Num%C3%A9ro_de_s%C3%A9curit%C3%A9_sociale_en_France
 * @returns {ValidateResult}
 */
export default function frId(value: string) {
    let v = value.toUpperCase();
    if (!/^(1|2)\d{2}\d{2}(\d{2}|\d[A-Z]|\d{3})\d{2,3}\d{3}\d{2}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // The COG group can be 2 digits or 2A or 2B
    const cog = v.substr(5, 2);
    switch (true) {
        case /^\d{2}$/.test(cog): v = value; break;
        case cog === '2A': v = `${value.substr(0, 5)}19${value.substr(7)}`; break;
        case cog === '2B': v = `${value.substr(0, 5)}18${value.substr(7)}`; break;
        default:
            return {
                meta: {},
                valid: false,
            };
    }
    const mod = 97 - parseInt(v.substr(0, 13), 10) % 97;
    const prefixWithZero = mod < 10 ? `0${mod}` : `${mod}`;
    return {
        meta: {},
        valid: prefixWithZero === v.substr(13),
    };
}
