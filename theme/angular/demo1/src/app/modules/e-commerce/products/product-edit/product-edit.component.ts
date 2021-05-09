import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { Product } from '../../_models/product.model';
import { ProductsService } from '../../_services';

const EMPTY_PRODUCT: Product = {
  id: undefined,
  model: '',
  manufacture: 'Pontiac',
  modelYear: 2020,
  mileage: 0,
  description: '',
  color: 'Red',
  price: 0,
  condition: 1,
  status: 1,
  VINCode: '',
};

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit, OnDestroy {
  id: number;
  product: Product;
  previous: Product;
  formGroup: FormGroup;
  isLoading$: Observable<boolean>;
  errorMessage = '';
  tabs = {
    BASIC_TAB: 0,
    REMARKS_TAB: 1,
    SPECIFICATIONS_TAB: 2
  };
  activeTabId = this.tabs.BASIC_TAB; // 0 => Basic info | 1 => Remarks | 2 => Specifications
  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this.productsService.isLoading$;
    this.loadProduct();
  }

  loadProduct() {
    const sb = this.route.paramMap.pipe(
      switchMap(params => {
        // get id from URL
        this.id = Number(params.get('id'));
        if (this.id || this.id > 0) {
          return this.productsService.getItemById(this.id);
        }
        return of(EMPTY_PRODUCT);
      }),
      catchError((errorMessage) => {
        this.errorMessage = errorMessage;
        return of(undefined);
      }),
    ).subscribe((res: Product) => {
      if (!res) {
        this.router.navigate(['/products'], { relativeTo: this.route });
      }

      this.product = res;
      this.previous = Object.assign({}, res);
      this.loadForm();
    });
    this.subscriptions.push(sb);
  }

  loadForm() {
    if (!this.product) {
      return;
    }

    this.formGroup = this.fb.group({
      model: [this.product.model, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      manufacture: [this.product.manufacture],
      modelYear: [this.product.modelYear, Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.min(1900),
        Validators.maxLength(4),
        Validators.max(2023)
      ])],
      mileage: [this.product.mileage, Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.min(0),
        Validators.maxLength(100),
        Validators.max(1000000)
      ])],
      color: [this.product.color],
      price: [this.product.price],
      description: [this.product.description],
      status: [this.product.status],
      condition: [this.product.condition],
      VINCode: [this.product.VINCode, Validators.required]
    });
  }

  reset() {
    if (!this.previous) {
      return;
    }

    this.product = Object.assign({}, this.previous);
    this.loadForm();
  }

  save() {
    this.formGroup.markAllAsTouched();
    if (!this.formGroup.valid) {
      return;
    }

    const formValues = this.formGroup.value;
    this.product = Object.assign(this.product, formValues);
    if (this.id) {
      this.edit();
    } else {
      this.create();
    }
  }

  edit() {
    const sbUpdate = this.productsService.update(this.product).pipe(
      tap(() => this.router.navigate(['/ecommerce/products'])),
      catchError((errorMessage) => {
        console.error('UPDATE ERROR', errorMessage);
        return of(this.product);
      })
    ).subscribe(res => this.product = res);
    this.subscriptions.push(sbUpdate);
  }

  create() {
    const sbCreate = this.productsService.create(this.product).pipe(
      tap(() => this.router.navigate(['/ecommerce/products'])),
      catchError((errorMessage) => {
        console.error('UPDATE ERROR', errorMessage);
        return of(this.product);
      })
    ).subscribe(res => this.product = res as Product);
    this.subscriptions.push(sbCreate);
  }

  changeTab(tabId: number) {
    this.activeTabId = tabId;
  }

  ngOnDestroy() {
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

  controlHasError(validation: string, controlName: string) {
    const control = this.formGroup.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.dirty || control.touched;
  }
}
