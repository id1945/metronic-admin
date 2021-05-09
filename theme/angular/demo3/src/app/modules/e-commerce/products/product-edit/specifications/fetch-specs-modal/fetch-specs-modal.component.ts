import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { from, of, Subscription } from 'rxjs';
import { catchError, delay, finalize, first, tap } from 'rxjs/operators';
import { ProductSpecification } from '../../../../_models/product-specification.model';
import { SPECIFICATIONS_DICTIONARY } from '../../../../_models/specification.dictionary';
import { SpecificationsService } from '../../../../_services';

@Component({
  selector: 'app-fetch-specs-modal',
  templateUrl: './fetch-specs-modal.component.html',
  styleUrls: ['./fetch-specs-modal.component.scss']
})
export class FetchSpecsModalComponent implements OnInit, OnDestroy {
  @Input() ids: number[];
  specs: string[] = SPECIFICATIONS_DICTIONARY;
  specifications: ProductSpecification[] = [];
  isLoading = false;
  subscriptions: Subscription[] = [];

  constructor(private specsService: SpecificationsService, public modal: NgbActiveModal) { }

  ngOnInit(): void {
    this.loadSpecs();
  }

  loadSpecs() {
    const sb = this.specsService.items$.pipe(
      first()
    ).subscribe((res: ProductSpecification[]) => {
      this.specifications = res.filter(c => this.ids.indexOf(c.id) > -1);
    });
    this.subscriptions.push(sb);
  }

  fetchSelected() {
    this.isLoading = true;
    const sb = from([]).pipe( // fake => update to call request method from your server
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
