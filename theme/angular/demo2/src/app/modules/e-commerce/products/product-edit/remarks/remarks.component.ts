import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {
  GroupingState,
  ICreateAction,
  IDeleteAction,
  IDeleteSelectedAction,
  IEditAction,
  IFetchSelectedAction,
  IGroupingView,
  ISearchView,
  ISortView,
  PaginatorState,
  SortState,
} from '../../../../../_metronic/shared/crud-table';
import { RemarksService } from '../../../_services';
import { DeleteRemarkModalComponent } from './delete-remark-modal/delete-remark-modal.component';
import { DeleteRemarksModalComponent } from './delete-remarks-modal/delete-remarks-modal.component';
import { EditRemarkModalComponent } from './edit-remark-modal/edit-remark-modal.component';
import { FetchRemarksModalComponent } from './fetch-remarks-modal/fetch-remarks-modal.component';

@Component({
  selector: 'app-remarks',
  templateUrl: './remarks.component.html',
  styleUrls: ['./remarks.component.scss'],
})
export class RemarksComponent
  implements
    OnInit,
    OnDestroy,
    IDeleteAction,
    IDeleteSelectedAction,
    IFetchSelectedAction,
    ISortView,
    IGroupingView,
    ISearchView,
    IEditAction,
    ICreateAction {
  @Input() productId: number;
  paginator: PaginatorState;
  sorting: SortState;
  grouping: GroupingState;
  isLoading: boolean;
  searchGroup: FormGroup;
  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    public remarksService: RemarksService
  ) {}

  ngOnInit(): void {
    this.searchForm();
    const sb = this.remarksService.isLoading$.subscribe(
      (res) => (this.isLoading = res)
    );
    this.subscriptions.push(sb);
    this.remarksService.patchState({ entityId: this.productId });
    this.grouping = this.remarksService.grouping;
    this.paginator = this.remarksService.paginator;
    this.sorting = this.remarksService.sorting;
    this.remarksService.fetch();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }
  //
  searchForm() {
    this.searchGroup = this.fb.group({
      searchTerm: [''],
    });
    const searchEvent = this.searchGroup.controls.searchTerm.valueChanges
      .pipe(
        /*
  The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator,
  we are limiting the amount of server requests emitted to a maximum of one every 150ms
  */
        debounceTime(150),
        distinctUntilChanged()
      )
      .subscribe((val) => this.search(val));
    this.subscriptions.push(searchEvent);
  }

  search(searchTerm: string) {
    this.remarksService.patchState({ searchTerm });
  }
  // sorting
  sort(column: string) {
    const sorting = this.sorting;
    const isActiveColumn = sorting.column === column;
    if (!isActiveColumn) {
      sorting.column = column;
      sorting.direction = 'asc';
    } else {
      sorting.direction = sorting.direction === 'asc' ? 'desc' : 'asc';
    }
    this.remarksService.patchState({ sorting });
  }
  // pagination
  paginate(paginator: PaginatorState) {
    this.remarksService.patchState({ paginator });
  }
  // actions
  delete(id: number) {
    const modalRef = this.modalService.open(DeleteRemarkModalComponent);
    modalRef.componentInstance.id = id;
    modalRef.result.then(
      () => this.remarksService.fetch(),
      () => {}
    );
  }

  deleteSelected() {
    const modalRef = this.modalService.open(DeleteRemarksModalComponent);
    modalRef.componentInstance.ids = this.grouping.getSelectedRows();
    modalRef.result.then(
      () => this.remarksService.fetch(),
      () => {}
    );
  }

  fetchSelected() {
    const modalRef = this.modalService.open(FetchRemarksModalComponent);
    modalRef.componentInstance.ids = this.grouping.getSelectedRows();
    modalRef.result.then(
      () => this.remarksService.fetch(),
      () => {}
    );
  }

  edit(id: number): void {
    const modalRef = this.modalService.open(EditRemarkModalComponent);
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.productId = this.productId;
    modalRef.result.then(() =>
      this.remarksService.fetch(),
      () => {}
    );
  }

  create(): void {
    this.edit(undefined);
  }
}
