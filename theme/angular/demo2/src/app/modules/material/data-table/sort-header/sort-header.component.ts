import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Sort, MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

const basic = {
  beforeCodeTitle: 'Sorting overview',
  htmlCode: `
<table matSort (matSortChange)="sortData($event)">
  <tr>
    <th mat-sort-header="name">Dessert (100g)</th>
    <th mat-sort-header="calories">Calories</th>
    <th mat-sort-header="fat">Fat (g)</th>
    <th mat-sort-header="carbs">Carbs (g)</th>
    <th mat-sort-header="protein">Protein (g)</th>
  </tr>
  <tr *ngFor="let dessert of sortedData">
    <td>{{dessert.name}}</td>
    <td>{{dessert.calories}}</td>
    <td>{{dessert.fat}}</td>
    <td>{{dessert.carbs}}</td>
    <td>{{dessert.protein}}</td>
  </tr>
</table>`,
  tsCode: `
import {Component} from '@angular/core';
import {Sort} from '@angular/material';\n
/**
* @title Sorting overview
*/
@Component({
  selector: 'sort-overview-example',
  templateUrl: 'sort-overview-example.html',
  styleUrls: ['sort-overview-example.css'],
})
export class SortOverviewExample {
  desserts = [
    {name: 'Frozen yogurt', calories: '159', fat: '6', carbs: '24', protein: '4'},
    {name: 'Ice cream sandwich', calories: '237', fat: '9', carbs: '37', protein: '4'},
    {name: 'Eclair', calories: '262', fat: '16', carbs: '24', protein: '6'},
    {name: 'Cupcake', calories: '305', fat: '4', carbs: '67', protein: '4'},
    {name: 'Gingerbread', calories: '356', fat: '16', carbs: '49', protein: '4'},
  ];\n
  sortedData;\n
  constructor() {
    this.sortedData = this.desserts.slice();
  }\n
  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }\n
    this.sortedData = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'calories': return compare(+a.calories, +b.calories, isAsc);
        case 'fat': return compare(+a.fat, +b.fat, isAsc);
        case 'carbs': return compare(+a.carbs, +b.carbs, isAsc);
        case 'protein': return compare(+a.protein, +b.protein, isAsc);
        default: return 0;
      }
    });
  }
}\n\n
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}`,
  cssCode: `
.mat-sort-header-container {
  align-items: center;
}`,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const config = {
  beforeCodeTitle: 'Table with sorting',
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
  @ViewChild(MatSort, {static: true}) sort: MatSort;\n
  /**
  * Set the sort after the view init since this component will
  * be able to query its view for the initialized sort.
  */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
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
}
.mat-header-cell.mat-sort-header-sorted {
  color: black;
}`,
  viewCode: ``,
  isCodeVisible: false,
};

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
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

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

@Component({
  selector: 'app-material-sort-header',
  templateUrl: './sort-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .mat-sort-header-container {
        align-items: center;
      }
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
      }
    `,
  ],
})
export class SortHeaderComponent implements OnInit, AfterViewInit {
  exampleBasic;
  exampleConfig;

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  desserts = [
    {
      name: 'Frozen yogurt',
      calories: '159',
      fat: '6',
      carbs: '24',
      protein: '4',
    },
    {
      name: 'Ice cream sandwich',
      calories: '237',
      fat: '9',
      carbs: '37',
      protein: '4',
    },
    { name: 'Eclair', calories: '262', fat: '16', carbs: '24', protein: '6' },
    { name: 'Cupcake', calories: '305', fat: '4', carbs: '67', protein: '4' },
    {
      name: 'Gingerbread',
      calories: '356',
      fat: '16',
      carbs: '49',
      protein: '4',
    },
  ];

  sortedData;

  @ViewChild('sort1', { static: true }) sort1: MatSort;
  @ViewChild('sort2', { static: true }) sort2: MatSort;

  ngOnInit() {
    this.exampleBasic = basic;
    this.exampleConfig = config;
  }

  constructor() {
    this.sortedData = this.desserts.slice();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort2;
  }

  // tslint:disable-next-line:variable-name
  sortData(_sort: Sort) {
    const data = this.desserts.slice();
    if (!_sort.active || _sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = _sort.direction === 'asc';
      switch (_sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'calories':
          return compare(+a.calories, +b.calories, isAsc);
        case 'fat':
          return compare(+a.fat, +b.fat, isAsc);
        case 'carbs':
          return compare(+a.carbs, +b.carbs, isAsc);
        case 'protein':
          return compare(+a.protein, +b.protein, isAsc);
        default:
          return 0;
      }
    });
  }
}
