import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { catchError, delay, finalize, first, tap } from 'rxjs/operators';
import { Product } from '../../../_models/product.model';
import { ProductsService } from '../../../_services';

@Component({
  selector: 'app-update-products-status-modal',
  templateUrl: './update-products-status-modal.component.html',
  styleUrls: ['./update-products-status-modal.component.scss']
})
export class UpdateProductsStatusModalComponent implements OnInit, OnDestroy {
  @Input() ids: number[];
  status = 2;
  products: Product[] = [];
  isLoading = false;
  subscriptions: Subscription[] = [];

  constructor(private productsService: ProductsService, public modal: NgbActiveModal) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    const sb = this.productsService.items$.pipe(
      first()
    ).subscribe((res: Product[]) => {
      this.products = res.filter(c => this.ids.indexOf(c.id) > -1);
    });
    this.subscriptions.push(sb);
  }

  updateProductsStatus() {
    this.isLoading = true;
    const sb = this.productsService.updateStatusForItems(this.ids, +this.status).pipe(
      delay(1000), // Remove it from your code (just for showing loading)
      tap(() => this.modal.close()),
      catchError((errorMessage) => {
        this.modal.dismiss(errorMessage);
        return of(undefined);
      }),
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe();
    this.subscriptions.push(sb);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
