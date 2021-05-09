import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, of } from 'rxjs';
import { catchError, delay, finalize, tap } from 'rxjs/operators';
import { RemarksService } from '../../../../_services';

@Component({
  selector: 'app-delete-remarks-modal',
  templateUrl: './delete-remarks-modal.component.html',
  styleUrls: ['./delete-remarks-modal.component.scss']
})
export class DeleteRemarksModalComponent implements OnInit, OnDestroy {
  @Input() ids: number[];
  isLoading = false;
  subscriptions: Subscription[] = [];

  constructor(private remarksService: RemarksService, public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  deleteRemarks() {
    this.isLoading = true;
    const sb = this.remarksService.deleteItems(this.ids).pipe(
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
