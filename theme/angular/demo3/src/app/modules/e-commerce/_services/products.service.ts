import { Inject, Injectable } from '@angular/core';
import { TableService } from '../../../_metronic/shared/crud-table';
import { environment } from '../../../../environments/environment';
import { Product } from '../_models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends TableService<Product> {
  API_URL = `${environment.apiUrl}/products`;
  constructor(@Inject(HttpClient) http) {
    super(http);
  }
}
