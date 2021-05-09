import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { catchError, delay, finalize, tap } from 'rxjs/operators';
import { SpecificationsService } from '../../../../_services';

@Component({
  selector: 'app-delete-specs-modal',
  templateUrl: './delete-specs-modal.component.html',
  styleUrls: ['./delete-specs-modal.component.scss']
})
export class DeleteSpecsModalComponent implements OnInit, OnDestroy {
  @Input() ids: number[];
  isLoading = false;
  subscriptions: Subscription[] = [];

  constructor(private specsService: SpecificationsService, public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  deleteSpecs() {
    this.isLoading = true;
    const sb = this.specsService.deleteItems(this.ids).pipe(
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
