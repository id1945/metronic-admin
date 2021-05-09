import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { RemarksService } from '../../../../_services';
import { CustomAdapter, CustomDateParserFormatter } from '../../../../../../_metronic/core';
import { ProductRemark } from '../../../../_models/product-remark.model';
import { catchError, first, tap } from 'rxjs/operators';

const EMPTY_REMARK: ProductRemark = {
  id: undefined,
  carId: undefined,
  text: '',
  type: 1, // Info 1, Note 2, Reminder 3
  dueDate: ''
};

@Component({
  selector: 'app-edit-remark-modal',
  templateUrl: './edit-remark-modal.component.html',
  styleUrls: ['./edit-remark-modal.component.scss'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class EditRemarkModalComponent implements OnInit, OnDestroy {
  @Input() id: number;
  @Input() productId: number;
  isLoading$;
  remark: ProductRemark;
  formGroup: FormGroup;
  private subscriptions: Subscription[] = [];
  constructor(
    private remarksService: RemarksService,
    private fb: FormBuilder, public modal: NgbActiveModal
    ) { }

  ngOnInit(): void {
    this.isLoading$ = this.remarksService.isLoading$;
    this.loadRemarks();
  }

  loadRemarks() {
    if (!this.id) {
      this.remark = EMPTY_REMARK;
      this.remark.carId = this.productId;
      this.loadForm();
    } else {
      const sb = this.remarksService.getItemById(this.id).pipe(
        first(),
        catchError((errorMessage) => {
          this.modal.dismiss(errorMessage);
          const empty = EMPTY_REMARK;
          empty.carId = this.productId;
          return of(empty);
        })
      ).subscribe((remark: ProductRemark) => {
        this.remark = remark;
        this.loadForm();
      });
      this.subscriptions.push(sb);
    }
  }

  loadForm() {
    this.formGroup = this.fb.group({
      text: [this.remark.text, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10000)])],
      dueDate: [this.remark.dueDate, Validators.compose([Validators.nullValidator])],
      type: [this.remark.type, Validators.compose([Validators.required])]
    });
  }

  save() {
    this.prepareRemark();
    if (this.remark.id) {
      this.edit();
    } else {
      this.create();
    }
  }

  edit() {
    const sbUpdate = this.remarksService.update(this.remark).pipe(
      tap(() => {
        this.modal.close();
      }),
      catchError((errorMessage) => {
        this.modal.dismiss(errorMessage);
        return of(this.remark);
      }),
    ).subscribe(res => this.remark = res);
    this.subscriptions.push(sbUpdate);
  }

  create() {
    const sbCreate = this.remarksService.create(this.remark).pipe(
      tap(() => {
        this.modal.close();
      }),
      catchError((errorMessage) => {
        this.modal.dismiss(errorMessage);
        return of(this.remark);
      }),
    ).subscribe((res: ProductRemark) => this.remark = res);
    this.subscriptions.push(sbCreate);
  }

  private prepareRemark() {
    const formData = this.formGroup.value;
    this.remark.carId = this.productId;
    this.remark.dueDate = formData.dueDate;
    this.remark.type = +formData.type;
    this.remark.text = formData.text;
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
