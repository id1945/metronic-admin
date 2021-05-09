import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { catchError, delay, finalize, tap } from 'rxjs/operators';
import { SpecificationsService } from '../../../../_services';

@Component({
  selector: 'app-delete-spec-modal',
  templateUrl: './delete-spec-modal.component.html',
  styleUrls: ['./delete-spec-modal.component.scss']
})
export class DeleteSpecModalComponent implements OnInit, OnDestroy {
  @Input() id: number;
  isLoading = false;
  subscriptions: Subscription[] = [];

  constructor(private specsService: SpecificationsService, public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  deleteSpec() {
    this.isLoading = true;
    const sb = this.specsService.delete(this.id).pipe(
      delay(1000), // Remove it from your code (just for showing loading)
      tap(() => this.modal.close()),
      catchError((err) => {
        this.modal.dismiss(err);
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
