import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

const basic = {
  beforeCodeTitle: 'Basic table',
  htmlCode: `
<div class="example-container mat-elevation-z8">
  <mat-table #table [dataSource]="dataSource">
    <!--- Note that these columns can be defined in any order.
				The actual rendered columns are set as a property on the row definition" -->
    <!-- Position Column -->
    <ng-container matColumnDef="position">
      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.position}} </mat-cell>
	</ng-container>
	<!-- Name Column -->
    <ng-container matColumnDef="name">
      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
    </ng-container>
    <!-- Weight Column -->
    <ng-container matColumnDef="weight">
      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.weight}} </mat-cell>
    </ng-container>
    <!-- Symbol Column -->
    <ng-container matColumnDef="symbol">
      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.symbol}} </mat-cell>
    </ng-container>
    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
  </mat-table>
</div>`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic table
*/
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];`,
  cssCode: `
.example-container {
  display: flex;
  flex-direction: column;
  max-height: 500px;
  min-width: 300px;
}
.mat-table {
  overflow: auto;
  max-height: 500px;
}`,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const pagination = {
  beforeCodeTitle: 'Table with pagination',
  htmlCode: `
<div class="example-container mat-elevation-z8">
  <mat-table #table [dataSource]="dataSource">
    <!-- Position Column -->
    <ng-container matColumnDef="position">
      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.position}} </mat-cell>
    </ng-container>
    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
    </ng-container>
    <!-- Weight Column -->
    <ng-container matColumnDef="weight">
      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.weight}} </mat-cell>
    </ng-container>
    <!-- Symbol Column -->
    <ng-container matColumnDef="symbol">
      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.symbol}} </mat-cell>
    </ng-container>
    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
  </mat-table>
  <mat-paginator #paginator
    [pageSize]="10"
    [pageSizeOptions]="[5, 10, 20]"
    [showFirstLastButtons]="true">
  </mat-paginator>
</div>
		`,
  tsCode: `
import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';\n
/**
* @title Table with pagination
*/
@Component({
  selector: 'table-pagination-example',
  styleUrls: ['table-pagination-example.css'],
  templateUrl: 'table-pagination-example.html',
})
export class TablePaginationExample {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);\n
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;\n
  /**
  * Set the paginator after the view init since this component will
  * be able to query its view for the initialized paginator.
  */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}\n
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}\n
const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];`,
  cssCode: `
.example-container {
  display: flex;
  flex-direction: column;
  min-width: 300px;
}
.mat-table {
  overflow: auto;
  max-height: 500px;
}`,
  viewCode: ``,
  isCodeVisible: false,
};

const sorting = {
  beforeCodeTitle: 'Table with sorting',
  beforeCodeDescription: ``,
  htmlCode: `
<div class="example-container mat-elevation-z8">
  <mat-table #table [dataSource]="dataSource" matSort>
    <!-- Position Column -->
    <ng-container matColumnDef="position">
      <mat-header-cell *matHeaderCellDef mat-sort-header> No. </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.position}} </mat-cell>
    </ng-container>
    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
    </ng-container>
    <!-- Weight Column -->
    <ng-container matColumnDef="weight">
      <mat-header-cell *matHeaderCellDef mat-sort-header> Weight </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.weight}} </mat-cell>
    </ng-container>
    <!-- Symbol Column -->
    <ng-container matColumnDef="symbol">
      <mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.symbol}} </mat-cell>
    </ng-container>
    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
  </mat-table>
</div>`,
  tsCode: `
import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';\n
/**
* @title Table with sorting
*/
@Component({
  selector: 'table-sorting-example',
  styleUrls: ['table-sorting-example.css'],
  templateUrl: 'table-sorting-example.html',
})
export class TableSortingExample {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);\n
  @ViewChild(MatSort, {static: true}) sort: MatSort;\n\n
  /**
  * Set the sort after the view init since this component will
  * be able to query its view for the initialized sort.
  */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}\n\n
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}\n\n
const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];`,
  cssCode: `
.example-container {
  display: flex;
  flex-direction: column;
  min-width: 300px;
}
.mat-table {
  overflow: auto;
  max-height: 500px;
}
.mat-header-cell.mat-sort-header-sorted {
  color: black;
}`,
  viewCode: ``,
  isCodeVisible: false,
};

const filtering = {
  beforeCodeTitle: 'Table with filtering',
  htmlCode: `
<div class="example-container mat-elevation-z8">
  <div class="example-header">
    <mat-form-field>
      <input matInput (keyup)="applyFilter($event.target.value)" placeholder="Filter">
    </mat-form-field>
  </div>
  <mat-table #table [dataSource]="dataSource">
    <!-- Position Column -->
    <ng-container matColumnDef="position">
      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.position}} </mat-cell>
    </ng-container>
    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
    </ng-container>
    <!-- Weight Column -->
    <ng-container matColumnDef="weight">
      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.weight}} </mat-cell>
    </ng-container>
    <!-- Symbol Column -->
    <ng-container matColumnDef="symbol">
      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.symbol}} </mat-cell>
    </ng-container>
    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
  </mat-table>
</div>`,
  tsCode: `
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';\n\n
/**
* @title Table with filtering
*/
@Component({
  selector: 'table-filtering-example',
  styleUrls: ['table-filtering-example.css'],
  templateUrl: 'table-filtering-example.html',
})
export class TableFilteringExample {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);\n\n
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}\n
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}\n\n
const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];`,
  cssCode: `
/* Structure */
.example-container {
  display: flex;
  flex-direction: column;
  min-width: 300px;
}
.example-header {
  min-height: 64px;
  padding: 8px 24px 0;
}
.mat-form-field {
  font-size: 14px;
  width: 100%;
}
.mat-table {
  overflow: auto;
  max-height: 500px;
}`,
  viewCode: ``,
  isCodeVisible: false,
};

const selection = {
  beforeCodeTitle: 'Table with selection',
  htmlCode: `
<div class="example-container mat-elevation-z8">
  <mat-table #table [dataSource]="dataSource">
    <!-- Checkbox Column -->
    <ng-container matColumnDef="select">
      <mat-header-cell *matHeaderCellDef>
        <mat-checkbox (change)="$event ? masterToggle() : null"
          [checked]="selection.hasValue() && isAllSelected()"
          [indeterminate]="selection.hasValue() && !isAllSelected()">
        </mat-checkbox>
      </mat-header-cell>
      <mat-cell *matCellDef="let row">
        <mat-checkbox (click)="$event.stopPropagation()"
          (change)="$event ? selection.toggle(row) : null"
          [checked]="selection.isSelected(row)">
        </mat-checkbox>
      </mat-cell>
    </ng-container>
    <!-- Position Column -->
    <ng-container matColumnDef="position">
      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.position}} </mat-cell>
    </ng-container>
    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
    </ng-container>
    <!-- Weight Column -->
    <ng-container matColumnDef="weight">
      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.weight}} </mat-cell>
    </ng-container>
    <!-- Symbol Column -->
    <ng-container matColumnDef="symbol">
      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.symbol}} </mat-cell>
    </ng-container>
    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;"
      (click)="selection.toggle(row)">
    </mat-row>
  </mat-table>
</div>`,
  tsCode: `
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';\n
/**
* @title Table with selection
*/
@Component({
  selector: 'table-selection-example',
  styleUrls: ['table-selection-example.css'],
  templateUrl: 'table-selection-example.html',
})
export class TableSelectionExample {
  displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);\n
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }\n
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
    this.selection.clear() :
    this.dataSource.data.forEach(row => this.selection.select(row));
  }
}\n
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}\n
const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];`,
  viewCode: ``,
  isCodeVisible: false,
};

const main = {
  beforeCodeTitle: 'Data table with sorting, pagination, and filtering.',
  htmlCode: `
<div class="example-header">
  <mat-form-field>
    <input matInput (keyup)="applyFilter($event.target.value)" placeholder="Filter">
  </mat-form-field>
</div>
<div class="example-container mat-elevation-z8">
  <mat-table [dataSource]="dataSource" matSort>
    <!-- ID Column -->
    <ng-container matColumnDef="id">
      <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>
      <mat-cell *matCellDef="let row"> {{row.id}} </mat-cell>
    </ng-container>
    <!-- Progress Column -->
    <ng-container matColumnDef="progress">
      <mat-header-cell *matHeaderCellDef mat-sort-header> Progress </mat-header-cell>
      <mat-cell *matCellDef="let row"> {{row.progress}}% </mat-cell>
    </ng-container>
    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>
      <mat-cell *matCellDef="let row"> {{row.name}} </mat-cell>
    </ng-container>
    <!-- Color Column -->
    <ng-container matColumnDef="color">
      <mat-header-cell *matHeaderCellDef mat-sort-header> Color </mat-header-cell>
      <mat-cell *matCellDef="let row" [style.color]="row.color"> {{row.color}} </mat-cell>
    </ng-container>
    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
      <mat-row *matRowDef="let row; columns: displayedColumns;">
    </mat-row>
  </mat-table>
  <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]"></mat-paginator>
</div>`,
  tsCode: `
import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';\n
/**
* @title Data table with sorting, pagination, and filtering.
*/
@Component({
  selector: 'table-overview-example',
  styleUrls: ['table-overview-example.css'],
  templateUrl: 'table-overview-example.html',
})
export class TableOverviewExample {
  displayedColumns = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;\n
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;\n
  constructor() {
    // Create 100 users
    const users: UserData[] = [];
      for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }\n
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(users);
  }\n
  /**
  * Set the paginator and sort after the view init since this component will
  * be able to query its view for the initialized paginator and sort.
  */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }\n
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}\n\n
/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';\n\n
  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
   };
}\n\n
/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];\n
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}`,
  cssCode: `
.example-container {
  display: flex;
  flex-direction: column;
  min-width: 300px;
}
.example-header {
  min-height: 64px;
  padding: 8px 24px 0;
}
.mat-form-field {
  font-size: 14px;
  width: 100%;
}
.mat-table {
  overflow: auto;
  max-height: 500px;
}`,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const hTTP = {
  beforeCodeTitle: 'Table retrieving data through HTTP',
  htmlCode: `
<div class="example-container mat-elevation-z8">
  <div class="example-loading-shade"
    *ngIf="isLoadingResults || isRateLimitReached">
    <mat-spinner *ngIf="isLoadingResults"></mat-spinner>
    <div class="example-rate-limit-reached" *ngIf="isRateLimitReached">
	  GitHub's API rate limit has been reached. It will be reset in one minute.
    </div>
  </div>
  <mat-table #table [dataSource]="dataSource" class="example-table"
    matSort matSortActive="created" matSortDisableClear matSortDirection="asc">
    <!--- Note that these columns can be defined in any order.
    The actual rendered columns are set as a property on the row definition" -->
    <!-- Number Column -->
    <ng-container matColumnDef="number">
      <mat-header-cell *matHeaderCellDef>#</mat-header-cell>
      <mat-cell *matCellDef="let row">{{row.number}}</mat-cell>
    </ng-container>
    <!-- Title Column -->
    <ng-container matColumnDef="title">
      <mat-header-cell *matHeaderCellDef>Title</mat-header-cell>
      <mat-cell *matCellDef="let row">{{row.title}}</mat-cell>
    </ng-container>
    <!-- State Column -->
    <ng-container matColumnDef="state">
      <mat-header-cell *matHeaderCellDef>State</mat-header-cell>
      <mat-cell *matCellDef="let row">{{row.state}}</mat-cell>
    </ng-container>
    <!-- Created Column -->
    <ng-container matColumnDef="created">
      <mat-header-cell *matHeaderCellDef
        mat-sort-header
        disableClear="true">
        Created
      </mat-header-cell>
      <mat-cell *matCellDef="let row">{{row.created_at | date}}</mat-cell>
    </ng-container>
    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
  </mat-table>
  <mat-paginator [length]="resultsLength" [pageSize]="30">
  </mat-paginator>
 </div>`,
  tsCode: `
import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {merge} from 'rxjs/observable/merge';
import {of as observableOf} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';\n
/**
* @title Table retrieving data through HTTP
*/
@Component({
  selector: 'table-http-example',
  styleUrls: ['table-http-example.css'],
  templateUrl: 'table-http-example.html',
})
export class TableHttpExample implements OnInit {
  displayedColumns = ['created', 'state', 'number', 'title'];
  exampleDatabase: ExampleHttpDao | null;
  dataSource = new MatTableDataSource();\n
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;\n
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;\n
  constructor(private http: HttpClient) {}\n\n\
  ngOnInit() {
    this.exampleDatabase = new ExampleHttpDao(this.http);\n\n
    // If the user changes the sort order, reset back to the first page.
	this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
	    switchMap(() => {
          this.isLoadingResults = true;
			  return this.exampleDatabase!.getRepoIssues(
          this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map(data => {
        // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.total_count;\n\n
          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
            return observableOf([]);
      })
    ).subscribe(data => this.dataSource.data = data);
  }
}\n\n
export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}\n\n\
export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}\n\n\
/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDao {
  constructor(private http: HttpClient) {}
  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl =
    \`\${href}?q=repo:angular/material2&sort=\${sort}&order=\${order}&page=\${page + 1}\`;\n
    return this.http.get<GithubApi>(requestUrl);
  }
}`,
  cssCode: `
.example-container {
  display: flex;
  flex-direction: column;
  max-height: 500px;
  min-width: 300px;
  position: relative;
}
.example-header {
  min-height: 64px;
  display: flex;
  align-items: center;
  padding-left: 24px;
  font-size: 20px;
}
.example-table {
  overflow: auto;
  min-height: 300px;
}
.example-loading-shade {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 56px;
  right: 0;
  background: rgba(0, 0, 0, 0.15);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.example-rate-limit-reached {
  color: #980000;
  max-width: 360px;
  text-align: center;
}
/* Column Widths */
.mat-column-number,
.mat-column-state {
  max-width: 64px;
}
.mat-column-created {
  max-width: 124px;
}`,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

const ELEMENT_DATA2: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDao {
  constructor(private http: HttpClient) {}

  getRepoIssues(
    sort: string,
    order: string,
    page: number
  ): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl = `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${
      page + 1
    }`;

    return this.http.get<GithubApi>(requestUrl);
  }
}

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon',
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'purple',
  'fuchsia',
  'lime',
  'teal',
  'aqua',
  'blue',
  'navy',
  'black',
  'gray',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
  };
}

@Component({
  selector: 'app-material-material-table',
  templateUrl: './material-table.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styles: [
    `
      .example-container {
        display: flex;
        flex-direction: column;
        max-height: 500px;
        min-width: 300px;
        position: relative;
      }

      .mat-table {
        overflow: auto;
        max-height: 500px;
      }

      .mat-header-cell.mat-sort-header-sorted {
        color: black;
      }

      .example-header {
        min-height: 64px;
        padding: 8px 24px 0;
      }

      .mat-form-field {
        font-size: 14px;
        width: 100%;
      }

      .mat-table {
        overflow: auto;
        max-height: 500px;
      }
      .mat-column-select {
        overflow: initial;
      }
      .example-header {
        min-height: 64px;
        display: flex;
        align-items: center;
        padding-left: 24px;
        font-size: 20px;
      }

      .example-table {
        overflow: auto;
        min-height: 300px;
      }

      .example-loading-shade {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 56px;
        right: 0;
        background: rgba(0, 0, 0, 0.15);
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .example-rate-limit-reached {
        color: #980000;
        max-width: 360px;
        text-align: center;
      }

      /* Column Widths */
      .mat-column-number,
      .mat-column-state {
        max-width: 64px;
      }

      .mat-column-created {
        max-width: 124px;
      }
    `,
  ],
})
export class MaterialTableComponent implements OnInit, AfterViewInit {
  exampleBasic;
  examplePagination;
  exampleSorting;
  exampleFiltering;
  exampleSelection;
  exampleHTTP;
  exampleMain;

  displayedColumns1 = ['position', 'name', 'weight', 'symbol'];
  displayedColumns2: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns3: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns4: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns5: string[] = [
    'select',
    'position',
    'name',
    'weight',
    'symbol',
  ];
  displayedColumns6: string[] = ['created', 'state', 'number', 'title'];
  displayedColumns7: string[] = ['id', 'name', 'progress', 'color'];

  dataSource1 = ELEMENT_DATA;
  dataSource2 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA2);
  dataSource3 = new MatTableDataSource(ELEMENT_DATA);
  dataSource4 = new MatTableDataSource(ELEMENT_DATA);
  dataSource5 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource6: GithubIssue[] = [];
  dataSource7: MatTableDataSource<UserData>;
  exampleDatabase: ExampleHttpDao | null;

  selection = new SelectionModel<PeriodicElement>(true, []);
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild('matPaginator2', { static: true }) paginator2: MatPaginator;
  @ViewChild('matPaginator6', { static: true }) paginator6: MatPaginator;
  @ViewChild('matPaginator7', { static: true }) paginator7: MatPaginator;

  @ViewChild('sort3', { static: true }) sort3: MatSort;
  @ViewChild('sort6', { static: true }) sort6: MatSort;
  @ViewChild('sort7', { static: true }) sort7: MatSort;

  ngAfterViewInit() {}

  constructor(private http: HttpClient) {
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource7 = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.exampleBasic = basic;
    this.examplePagination = pagination;
    this.exampleSorting = sorting;
    this.exampleFiltering = filtering;
    this.exampleSelection = selection;
    this.exampleHTTP = hTTP;
    this.exampleMain = main;

    this.dataSource2.paginator = this.paginator2;

    this.dataSource3.sort = this.sort3;

    // Example 6
    this.exampleDatabase = new ExampleHttpDao(this.http);

    // If the user changes the sort order, reset back to the first page.
    this.sort6.sortChange.subscribe(() => (this.paginator6.pageIndex = 0));

    merge(this.sort6.sortChange, this.paginator6.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          // tslint:disable-next-line:no-non-null-assertion
          return this.exampleDatabase!.getRepoIssues(
            this.sort6.active,
            this.sort6.direction,
            this.paginator6.pageIndex
          );
        }),
        map((data) => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.total_count;

          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      )
      .subscribe((data) => (this.dataSource6 = data));

    // Example 7
    this.dataSource7.paginator = this.paginator7;
    this.dataSource7.sort = this.sort7;
  }

  applyFilter4(filterValue: string) {
    this.dataSource4.filter = filterValue.trim().toLowerCase();
  }

  applyFilter7(filterValue: string) {
    this.dataSource7.filter = filterValue.trim().toLowerCase();

    if (this.dataSource7.paginator) {
      this.dataSource7.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected5() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource5.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle5() {
    this.isAllSelected5()
      ? this.selection.clear()
      : this.dataSource5.data.forEach((row) => this.selection.select(row));
  }

  /** Builds and returns a new User. */
}
