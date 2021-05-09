import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { from, of, Subscription } from 'rxjs';
import { RemarksService } from '../../../../_services';
import { ProductRemark } from '../../../../_models/product-remark.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { catchError, delay, finalize, first, tap } from 'rxjs/operators';

@Component({
  selector: 'app-fetch-remarks-modal',
  templateUrl: './fetch-remarks-modal.component.html',
  styleUrls: ['./fetch-remarks-modal.component.scss']
})
export class FetchRemarksModalComponent implements OnInit, OnDestroy {
  @Input() ids: number[];
  remarks: ProductRemark[] = [];
  isLoading = false;
  subscriptions: Subscription[] = [];

  constructor(private remarksService: RemarksService, public modal: NgbActiveModal) { }

  ngOnInit(): void {
    this.loadRemarks();
  }

  loadRemarks() {
    const sb = this.remarksService.items$.pipe(
      first()
    ).subscribe((res: ProductRemark[]) => {
      this.remarks = res.filter(c => this.ids.indexOf(c.id) > -1);
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
