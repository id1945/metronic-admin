import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Customer } from '../../../_models/customer.model';
import { CustomersService } from '../../../_services';

@Component({
  selector: 'app-fetch-customers-modal',
  templateUrl: './fetch-customers-modal.component.html',
  styleUrls: ['./fetch-customers-modal.component.scss']
})
export class FetchCustomersModalComponent implements OnInit, OnDestroy {
  @Input() ids: number[];
  customers: Customer[] = [];
  isLoading = false;
  subscriptions: Subscription[] = [];

  constructor(private customersService: CustomersService, public modal: NgbActiveModal) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    const sb = this.customersService.items$.pipe(
      first()
    ).subscribe((res: Customer[]) => {
      this.customers = res.filter(c => this.ids.indexOf(c.id) > -1);
    });
    this.subscriptions.push(sb);
  }

  fetchSelected() {
    this.isLoading = true;
    // just imitation, call server for fetching data
    setTimeout(() => {
      this.isLoading = false;
      this.modal.close();
    }, 1000);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
