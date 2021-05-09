/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

function transform(input: string): number[] {
    return input
        .split('')
        .map((c) => {
            const code = c.charCodeAt(0);
            // 65, 66, ..., 90 are the char code of A, B, ..., Z
            return (code >= 65 && code <= 90)
                // Replace A, B, C, ..., Z with 10, 11, ..., 35
                ? (code - 55)
                : c;
        })
        .join('')
        .split('')
        .map((c) => parseInt(c, 10));
}

export default function mod97And10(input: string): boolean {
    const digits = transform(input);

    let temp = 0;
    const length = digits.length;
    for (let i = 0; i < length - 1; ++i) {
        temp = (temp + digits[i]) * 10 % 97;
    }
    temp += digits[length - 1];

    return (temp % 97 === 1);
}
