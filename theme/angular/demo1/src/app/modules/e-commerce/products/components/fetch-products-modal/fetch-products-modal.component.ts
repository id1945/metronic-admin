import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { from, of, Subscription } from 'rxjs';
import { catchError, delay, finalize, first, tap } from 'rxjs/operators';
import { Product } from '../../../_models/product.model';
import { ProductsService } from '../../../_services';

@Component({
  selector: 'app-fetch-products-modal',
  templateUrl: './fetch-products-modal.component.html',
  styleUrls: ['./fetch-products-modal.component.scss']
})
export class FetchProductsModalComponent implements OnInit, OnDestroy {
  @Input() ids: number[];
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

  fetchSelected() {
    this.isLoading = true;
    const sb = from([]).pipe( // fake => update to call request method from your server
      delay(1000), // Remove it from your code (just for showing loading)
      tap(() => {}),
      catchError((errorMessage) => {
        this.modal.dismiss(errorMessage);
        return of(errorMessage);
      }),
      finalize(() => {
        this.isLoading = false;
        if (this.modal) {
          this.modal.close();
        }
      })
    ).subscribe();
    this.subscriptions.push(sb);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
