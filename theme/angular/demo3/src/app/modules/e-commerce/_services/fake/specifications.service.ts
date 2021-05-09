import { Injectable, OnDestroy, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TableService, TableResponseModel, ITableState } from '../../../../_metronic/shared/crud-table';
import { baseFilter } from '../../../../_fake/fake-helpers/http-extenstions';
import { environment } from '../../../../../environments/environment';
import { ProductSpecification } from '../../_models/product-specification.model';

@Injectable({
  providedIn: 'root'
})
export class SpecificationsService extends TableService<ProductSpecification> implements OnDestroy {
  API_URL = `${environment.apiUrl}/productSpecs`;
  constructor(@Inject(HttpClient) http) {
    super(http);
  }

  // READ
  find(tableState: ITableState): Observable<TableResponseModel<ProductSpecification>> {
    return this.http.get<ProductSpecification[]>(this.API_URL).pipe(
      map((response: ProductSpecification[]) => {
        const filteredResult = baseFilter(response.filter(el => el.carId === tableState.entityId), tableState);
        const result: TableResponseModel<ProductSpecification> = {
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
