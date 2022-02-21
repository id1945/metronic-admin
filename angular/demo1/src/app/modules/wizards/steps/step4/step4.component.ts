import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICreateAccount } from '../../create-account.helper';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
})
export class Step4Component implements OnInit {
  @Input('updateParentModel') updateParentModel: (
    part: Partial<ICreateAccount>,
    isFormValid: boolean
  ) => void;
  form: FormGroup;
  @Input() defaultValues: Partial<ICreateAccount>;

  private unsubscribe: Subscription[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.updateParentModel({}, this.checkForm());
  }

  initForm() {
    this.form = this.fb.group({
      nameOnCard: [this.defaultValues.nameOnCard, [Validators.required]],
      cardNumber: [this.defaultValues.cardNumber, [Validators.required]],
      cardExpiryMonth: [
        this.defaultValues.cardExpiryMonth,
        [Validators.required],
      ],
      cardExpiryYear: [
        this.defaultValues.cardExpiryYear,
        [Validators.required],
      ],
      cardCvv: [this.defaultValues.cardCvv, [Validators.required]],
      saveCard: ['1'],
    });

    const formChangesSubscr = this.form.valueChanges.subscribe((val) => {
      this.updateParentModel(val, this.checkForm());
    });
    this.unsubscribe.push(formChangesSubscr);
  }

  checkForm() {
    return !(
      this.form.get('nameOnCard')?.hasError('required') ||
      this.form.get('cardNumber')?.hasError('required') ||
      this.form.get('cardExpiryMonth')?.hasError('required') ||
      this.form.get('cardExpiryYear')?.hasError('required') ||
      this.form.get('cardCvv')?.hasError('required')
    );
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
