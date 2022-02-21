/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import {
    Localization,
    ValidateFunctionInterface,
    ValidateInput,
    ValidateOptions,
    ValidateResult,
} from '../core/Core';
import format from '../utils/format';

export interface StepOptions extends ValidateOptions {
    baseValue: number;
    step: number;
}
export interface StepLocalization extends Localization {
    step: {
        default: string;
    };
}

export default function step(): ValidateFunctionInterface<
    StepOptions,
    ValidateResult
> {
    const round = (input: number, precision: number) => {
        const m = Math.pow(10, precision);
        const x = input * m;
        let sign;
        switch (true) {
            case x === 0:
                sign = 0;
                break;
            case x > 0:
                sign = 1;
                break;
            case x < 0:
                sign = -1;
                break;
        }

        const isHalf = x % 1 === 0.5 * sign;
        return isHalf
            ? (Math.floor(x) + (sign > 0 ? 1 : 0)) / m
            : Math.round(x) / m;
    };

    const floatMod = (x: number, y: number) => {
        if (y === 0.0) {
            return 1.0;
        }
        const dotX = `${x}`.split('.');
        const dotY = `${y}`.split('.');
        const precision =
            (dotX.length === 1 ? 0 : dotX[1].length) +
            (dotY.length === 1 ? 0 : dotY[1].length);
        return round(x - y * Math.floor(x / y), precision);
    };

    return {
        validate(
            input: ValidateInput<StepOptions, StepLocalization>
        ): ValidateResult {
            if (input.value === '') {
                return { valid: true };
            }

            const v = parseFloat(input.value);
            if (isNaN(v) || !isFinite(v)) {
                return { valid: false };
            }

            const opts = Object.assign(
                {},
                {
                    baseValue: 0,
                    message: '',
                    step: 1,
                },
                input.options
            );

            const mod = floatMod(v - opts.baseValue, opts.step);
            return {
                message: format(
                    input.l10n
                        ? opts.message || input.l10n.step.default
                        : opts.message,
                    `${opts.step}`
                ),
                valid: mod === 0.0 || mod === opts.step,
            };
        },
    };
}
