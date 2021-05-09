import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { TableService } from 'src/app/_metronic/shared/crud-table';
import { environment } from 'src/environments/environment';
import { ProductRemark } from '../_models/product-remark.model';

@Injectable({
  providedIn: 'root'
})
export class RemarksService extends TableService<ProductRemark> {
  API_URL = `${environment.apiUrl}/productRemarks`;
  constructor(@Inject(HttpClient) http) {
    super(http);
  }
}
