import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

const basic = {
  beforeCodeTitle: 'Paginator',
  htmlCode: `
<mat-paginator [length]="100"
  [pageSize]="10"
  [pageSizeOptions]="[5, 10, 25, 100]">
</mat-paginator>`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Paginator
*/
@Component({
  selector: 'paginator-overview-example',
  templateUrl: 'paginator-overview-example.html',
  styleUrls: ['paginator-overview-example.css'],
})
export class PaginatorOverviewExample {}`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const config = {
  beforeCodeTitle: 'Configurable paginatorn',
  htmlCode: `
<mat-form-field>
  List length:
  <input matInput [(ngModel)]="length">
</mat-form-field>
  <mat-form-field>
    Page size:
    <input matInput [(ngModel)]="pageSize">
  </mat-form-field>
  <mat-form-field>
    Page size options:
    <input matInput
      [ngModel]="pageSizeOptions"
      (ngModelChange)="setPageSizeOptions($event)">
  </mat-form-field>
  <mat-paginator [length]="length"
    [pageSize]="pageSize"
    [pageSizeOptions]="pageSizeOptions"
    (page)="pageEvent = $event">
  </mat-paginator>
  <div *ngIf="pageEvent">
    <h5>Page Change Event Properties</h5>
    <div>List length: {{pageEvent.length}}</div>
    <div>Page size: {{pageEvent.pageSize}}</div>
    <div>Page index: {{pageEvent.pageIndex}}</div>
</div>`,
  tsCode: `
import {Component} from '@angular/core';
import {PageEvent} from '@angular/material';\n
/**
* @title Configurable paginator
*/
@Component({
  selector: 'paginator-configurable-example',
  templateUrl: 'paginator-configurable-example.html',
  styleUrls: ['paginator-configurable-example.css'],
})
export class PaginatorConfigurableExample {
  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];\n
  // MatPaginator Output
  pageEvent: PageEvent;
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
};

@Component({
  selector: 'app-material-paginator',
  templateUrl: './paginator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent implements OnInit {
  exampleBasic;
  exampleConfig;

  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  ngOnInit() {
    this.exampleBasic = basic;
    this.exampleConfig = config;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput
      .split(',')
      .map((str) => +str);
  }
}
