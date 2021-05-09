export interface IGroupingState {
  selectedRowIds: Set<number>;
  itemIds: number[];
  checkAreAllRowsSelected(): boolean;
  selectRow(id: number): IGroupingState;
  // tslint:disable-next-line:variable-name
  clearRows(_itemIds: number[]): IGroupingState;
  isRowSelected(id: number): boolean;
  selectAllRows(): IGroupingState;
  getSelectedRows(): number[];
  getSelectedRowsCount(): number;
}

export class GroupingState implements IGroupingState {
  selectedRowIds: Set<number> = new Set<number>();
  itemIds = [];


  checkAreAllRowsSelected(): boolean {
    if (this.itemIds.length === 0) {
      return false;
    }

    return this.selectedRowIds.size === this.itemIds.length;
  }

  selectRow(id: number): GroupingState {
    if (this.selectedRowIds.has(id)) {
      this.selectedRowIds.delete(id);
    } else {
      this.selectedRowIds.add(id);
    }
    return this;
  }

  // tslint:disable-next-line:variable-name
  clearRows(_itemIds: number[]): GroupingState {
    this.itemIds = _itemIds;
    this.selectedRowIds = new Set<number>();
    return this;
  }

  isRowSelected(id: number): boolean {
    return this.selectedRowIds.has(id);
  }

  selectAllRows(): GroupingState {
    const areAllSelected = this.itemIds.length === this.selectedRowIds.size;
    if (areAllSelected) {
      this.selectedRowIds = new Set<number>();
    } else {
      this.selectedRowIds = new Set<number>();
      this.itemIds.forEach(id => this.selectedRowIds.add(id));
    }
    return this;
  }

  getSelectedRows(): number[] {
    return Array.from(this.selectedRowIds);
  }

  getSelectedRowsCount(): number {
    return this.selectedRowIds.size;
  }
}

export interface IGroupingView  {
  grouping: GroupingState;
  ngOnInit(): void;
}
