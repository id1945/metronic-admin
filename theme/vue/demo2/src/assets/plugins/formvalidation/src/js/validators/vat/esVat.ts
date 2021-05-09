/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

/**
 * Validate Spanish VAT number (NIF - Número de Identificación Fiscal)
 * Can be:
 * i) DNI (Documento nacional de identidad), for Spaniards
 * ii) NIE (Número de Identificación de Extranjeros), for foreigners
 * iii) CIF (Certificado de Identificación Fiscal), for legal entities and others
 *
 * @returns {ValidateResult}
 */
export default function esVat(value: string) {
    let v = value;
    if (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }

    const dni = (input: string) => {
        const check = parseInt(input.substr(0, 8), 10);
        return `${'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23]}` === input.substr(8, 1);
    };
    const nie = (input: string) => {
        const check = ['XYZ'.indexOf(input.charAt(0)), input.substr(1)].join('');
        const cd = 'TRWAGMYFPDXBNJZSQVHLCKE'[parseInt(check, 10) % 23];
        return `${cd}` === input.substr(8, 1);
    };
    const cif = (input: string) => {
        const firstChar = input.charAt(0);
        let check;
        if ('KLM'.indexOf(firstChar) !== -1) {
            // K: Spanish younger than 14 year old
            // L: Spanish living outside Spain without DNI
            // M: Granted the tax to foreigners who have no NIE
            check = parseInt(input.substr(1, 8), 10);
            check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
            return `${check}` === input.substr(8, 1);
        } else if ('ABCDEFGHJNPQRSUVW'.indexOf(firstChar) !== -1) {
            const weight = [2, 1, 2, 1, 2, 1, 2];
            let sum = 0;
            let temp = 0;
            for (let i = 0; i < 7; i++) {
                temp = parseInt(input.charAt(i + 1), 10) * weight[i];
                if (temp > 9) {
                    temp = Math.floor(temp / 10) + temp % 10;
                }
                sum += temp;
            }
            sum = 10 - sum % 10;
            if (sum === 10) {
                sum = 0;
            }
            return `${sum}` === input.substr(8, 1) || 'JABCDEFGHI'[sum] === input.substr(8, 1);
        }

        return false;
    };

    const first = v.charAt(0);
    if (/^[0-9]$/.test(first)) {
        return {
            meta: {
                type: 'DNI',
            },
            valid: dni(v),
        };
    } else if (/^[XYZ]$/.test(first)) {
        return {
            meta: {
                type: 'NIE',
            },
            valid: nie(v),
        };
    } else {
        return {
            meta: {
                type: 'CIF',
            },
            valid: cif(v),
        };
    }
}
