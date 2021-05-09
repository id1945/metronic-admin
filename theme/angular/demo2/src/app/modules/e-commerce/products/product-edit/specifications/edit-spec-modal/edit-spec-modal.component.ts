import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { catchError, first, tap } from 'rxjs/operators';
import { ProductSpecification } from '../../../../_models/product-specification.model';
import { SPECIFICATIONS_DICTIONARY } from '../../../../_models/specification.dictionary';
import { SpecificationsService } from '../../../../_services';

const EMPTY_SPEC: ProductSpecification = {
  id: undefined,
  carId: undefined,
  specId: 1,
  specName: '',
  value: ''
};

@Component({
  selector: 'app-edit-spec-modal',
  templateUrl: './edit-spec-modal.component.html',
  styleUrls: ['./edit-spec-modal.component.scss']
})
export class EditSpecModalComponent implements OnInit, OnDestroy {
  @Input() id: number;
  @Input() productId: number;
  isLoading$;
  specs: string[] = SPECIFICATIONS_DICTIONARY;
  spec: ProductSpecification;
  formGroup: FormGroup;
  private subscriptions: Subscription[] = [];
  constructor(
    private specsService: SpecificationsService,
    private fb: FormBuilder, public modal: NgbActiveModal
    ) { }

  ngOnInit(): void {
    this.isLoading$ = this.specsService.isLoading$;
    this.loadSpecs();
  }

  loadSpecs() {
    if (!this.id) {
      this.spec = EMPTY_SPEC;
      this.spec.carId = this.productId;
      this.loadForm();
    } else {
      const sb = this.specsService.getItemById(this.id).pipe(
        first(),
        catchError((errorMessage) => {
          this.modal.dismiss(errorMessage);
          const empty = EMPTY_SPEC;
          empty.carId = this.productId;
          return of(empty);
        })
      ).subscribe((spec: ProductSpecification) => {
        this.spec = spec;
        this.loadForm();
      });
      this.subscriptions.push(sb);
    }
  }

  loadForm() {
    this.formGroup = this.fb.group({
      value: [this.spec.value, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10000)])],
      specId: [this.spec.specId, Validators.compose([Validators.nullValidator])],
    });
  }

  save() {
    this.prepareSpec();
    if (this.spec.id) {
      this.edit();
    } else {
      this.create();
    }
  }

  edit() {
    const sbUpdate = this.specsService.update(this.spec).pipe(
      tap(() => {
        this.modal.close();
      }),
      catchError((errorMessage) => {
        this.modal.dismiss(errorMessage);
        return of(this.spec);
      }),
    ).subscribe(res => this.spec = res);
    this.subscriptions.push(sbUpdate);
  }

  create() {
    const sbCreate = this.specsService.create(this.spec).pipe(
      tap(() => {
        this.modal.close();
      }),
      catchError((errorMessage) => {
        this.modal.dismiss(errorMessage);
        return of(this.spec);
      }),
    ).subscribe((res: ProductSpecification) => this.spec = res);
    this.subscriptions.push(sbCreate);
  }

  private prepareSpec() {
    const formData = this.formGroup.value;
    this.spec.carId = this.productId;
    this.spec.specId = formData.specId;
    this.spec.specName = this.specs[this.spec.specId];
    this.spec.value = formData.value;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

  // helpers for View
  isControlValid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.formGroup.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.formGroup.controls[controlName];
    return control.dirty || control.touched;
  }
}
