import { Injectable, OnDestroy, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TableService, TableResponseModel, ITableState } from '../../../../_metronic/shared/crud-table';
import { baseFilter } from '../../../../_fake/fake-helpers/http-extenstions';
import { environment } from '../../../../../environments/environment';
import { ProductRemark } from '../../_models/product-remark.model';

@Injectable({
  providedIn: 'root'
})
export class RemarksService extends TableService<ProductRemark> implements OnDestroy {
  API_URL = `${environment.apiUrl}/productRemarks`;
  constructor(@Inject(HttpClient) http) {
    super(http);
  }

  // READ
  find(tableState: ITableState): Observable<TableResponseModel<ProductRemark>> {
    return this.http.get<ProductRemark[]>(this.API_URL).pipe(
      map((response: ProductRemark[]) => {
        const filteredResult = baseFilter(response.filter(el => el.carId === tableState.entityId), tableState);
        const result: TableResponseModel<ProductRemark> = {
          items: filteredResult.items,
          total: filteredResult.total
        };
        return result;
      })
    );
  }

  deleteItems(ids: number[] = []): Observable<any> {
    const tasks$ = [];
    ids.forEach(id => {
      tasks$.push(this.delete(id));
    });
    return forkJoin(tasks$);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
