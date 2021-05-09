import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { TableService } from 'src/app/_metronic/shared/crud-table';
import { environment } from 'src/environments/environment';
import { ProductSpecification } from '../_models/product-specification.model';

@Injectable({
  providedIn: 'root'
})
export class SpecificationsService extends TableService<ProductSpecification> {
  API_URL = `${environment.apiUrl}/productSpecs`;
  constructor(@Inject(HttpClient) http) {
    super(http);
  }
}
