/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { FieldOptions } from '../core/Core';
import Plugin from '../core/Plugin';

export interface StartEndDateOptions {
    format: string;
    startDate: {
        field: string;
        message: string;
    };
    endDate: {
        field: string;
        message: string;
    };
}

export default class StartEndDate extends Plugin<StartEndDateOptions> {
    private startDateFieldOptions: FieldOptions;
    private endDateFieldOptions: FieldOptions;
    private fieldValidHandler: (e: string) => void;
    private fieldInvalidHandler: (e: string) => void;

    private startDateValid: boolean;
    private endDateValid: boolean;

    constructor(opts?: StartEndDateOptions) {
        super(opts);
        this.fieldValidHandler = this.onFieldValid.bind(this);
        this.fieldInvalidHandler = this.onFieldInvalid.bind(this);
    }

    public install(): void {
        // Backup the original options
        const fieldOptions = this.core.getFields();
        this.startDateFieldOptions = fieldOptions[this.opts.startDate.field];
        this.endDateFieldOptions = fieldOptions[this.opts.endDate.field];

        const form = this.core.getFormElement();

        this.core
            .on('core.field.valid', this.fieldValidHandler)
            .on('core.field.invalid', this.fieldInvalidHandler)
            .addField(this.opts.startDate.field, {
                validators: {
                    date: {
                        format: this.opts.format,
                        max: () => {
                            const endDateField = form.querySelector(
                                `[name="${this.opts.endDate.field}"]`
                            );
                            return (endDateField as HTMLInputElement).value;
                        },
                        message: this.opts.startDate.message,
                    },
                },
            })
            .addField(this.opts.endDate.field, {
                validators: {
                    date: {
                        format: this.opts.format,
                        message: this.opts.endDate.message,
                        min: () => {
                            const startDateField = form.querySelector(
                                `[name="${this.opts.startDate.field}"]`
                            );
                            return (startDateField as HTMLInputElement).value;
                        },
                    },
                },
            });
    }

    public uninstall(): void {
        this.core.removeField(this.opts.startDate.field);
        if (this.startDateFieldOptions) {
            this.core.addField(
                this.opts.startDate.field,
                this.startDateFieldOptions
            );
        }

        this.core.removeField(this.opts.endDate.field);
        if (this.endDateFieldOptions) {
            this.core.addField(
                this.opts.endDate.field,
                this.endDateFieldOptions
            );
        }

        this.core
            .off('core.field.valid', this.fieldValidHandler)
            .off('core.field.invalid', this.fieldInvalidHandler);
    }

    private onFieldInvalid(field: string): void {
        switch (field) {
            case this.opts.startDate.field:
                this.startDateValid = false;
                break;

            case this.opts.endDate.field:
                this.endDateValid = false;
                break;

            default:
                break;
        }
    }

    private onFieldValid(field: string): void {
        switch (field) {
            case this.opts.startDate.field:
                this.startDateValid = true;
                if (this.endDateValid === false) {
                    this.core.revalidateField(this.opts.endDate.field);
                }
                break;

            case this.opts.endDate.field:
                this.endDateValid = true;
                if (this.startDateValid === false) {
                    this.core.revalidateField(this.opts.startDate.field);
                }
                break;

            default:
                break;
        }
    }
}
