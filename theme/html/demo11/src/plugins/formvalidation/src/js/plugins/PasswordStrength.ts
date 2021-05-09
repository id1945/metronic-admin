/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { ValidateFunction, ValidatorValidatedEvent } from '../core/Core';
import Plugin from '../core/Plugin';

export interface PasswordStrengthOptions {
    field: string;
    message: string;
    minimalScore: number;
    onValidated?: (valid: boolean, message: string, score: number) => void;
}

declare function zxcvbn(password: string, userInputs?: string[]): ZxcvbnResult;
interface ZxcvbnResult {
    score: ZxcvbnScore;
    feedback: ZxcvbnFeedback;
}
type ZxcvbnScore = 0 | 1 | 2 | 3 | 4;
interface ZxcvbnFeedback {
    warning: string;
    suggestions: string[];
}

export default class PasswordStrength extends Plugin<PasswordStrengthOptions> {
    public static PASSWORD_STRENGTH_VALIDATOR = '___PasswordStrengthValidator';
    private validatePassword: () => ValidateFunction;
    private validatorValidatedHandler: (e: ValidatorValidatedEvent) => void;

    constructor(opts?: PasswordStrengthOptions) {
        super(opts);
        this.opts = Object.assign({}, {
            minimalScore: 3,
            onValidated: () => {}, // tslint:disable-line:no-empty
        }, opts);
        this.validatePassword = this.checkPasswordStrength.bind(this);
        this.validatorValidatedHandler = this.onValidatorValidated.bind(this);
    }

    public install(): void {
        this.core.registerValidator(PasswordStrength.PASSWORD_STRENGTH_VALIDATOR, this.validatePassword);
        this.core.on('core.validator.validated', this.validatorValidatedHandler);

        this.core.addField(this.opts.field, {
            validators: {
                [PasswordStrength.PASSWORD_STRENGTH_VALIDATOR]: {
                    message: this.opts.message,
                    minimalScore: this.opts.minimalScore,
                },
            },
        });
    }

    public uninstall(): void {
        this.core.off('core.validator.validated', this.validatorValidatedHandler);
        // It's better if we can remove validator
        this.core.disableValidator(this.opts.field, PasswordStrength.PASSWORD_STRENGTH_VALIDATOR);
    }

    private checkPasswordStrength(): ValidateFunction {
        return {
            validate: (input) => {
                const value = input.value;
                if (value === '') {
                    return {
                        valid: true,
                    };
                }

                const result = zxcvbn(value);
                const score = result.score;
                const message = result.feedback.warning || 'The password is weak';

                if (score < this.opts.minimalScore) {
                    return {
                        message,
                        meta: {
                            message,
                            score,
                        },
                        valid: false,
                    };
                } else {
                    return {
                        meta: {
                            message,
                            score,
                        },
                        valid: true,
                    };
                }
            },
        };
    }

    private onValidatorValidated(e: ValidatorValidatedEvent): void {
        if (e.field === this.opts.field && e.validator === PasswordStrength.PASSWORD_STRENGTH_VALIDATOR
            && e.result.meta) {
            // tslint:disable-next-line:no-string-literal
            const message = e.result.meta['message'] as string;
            // tslint:disable-next-line:no-string-literal
            const score = e.result.meta['score'] as number;

            this.opts.onValidated(e.result.valid, message, score);
        }
    }
}
