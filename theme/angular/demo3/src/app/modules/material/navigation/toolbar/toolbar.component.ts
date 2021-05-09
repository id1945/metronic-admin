import { Component, OnInit } from '@angular/core';

const singleRow = {
  beforeCodeTitle: 'Single row',
  htmlCode: `
<mat-toolbar>
  <span>My Application</span>
</mat-toolbar>
`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic toolbar : single row
*/
@Component({
  selector: 'toolbar-overview-example',
  templateUrl: 'toolbar-overview-example.html',
  styleUrls: ['toolbar-overview-example.css'],
})
export class ToolbarOverviewExample {}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const multipleRows = {
  beforeCodeTitle: 'Multiple rows',
  htmlCode: `
<mat-toolbar>
  <mat-toolbar-row>
    <span>First Row</span>
  </mat-toolbar-row>
  <mat-toolbar-row>
    <span>Second Row</span>
  </mat-toolbar-row>
</mat-toolbar>
`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic toolbar : multiple rows
*/
@Component({
selector: 'toolbar-multi-example',
templateUrl: 'toolbar-multi-example.html',
styleUrls: ['toolbar-multi-example.css'],
})
export class ToolbarMultiExample {}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const multipleRows2 = {
  beforeCodeTitle: 'Multi-row toolbar',
  htmlCode: `
<mat-toolbar color="primary">
  <mat-toolbar-row>
    <span>Custom Toolbar</span>
  </mat-toolbar-row>
  <mat-toolbar-row>
    <span>Second Line</span>
    <span class="example-spacer"></span>
    <mat-icon class="example-icon">verified_user</mat-icon>
  </mat-toolbar-row>
  <mat-toolbar-row>
    <span>Third Line</span>
    <span class="example-spacer"></span>
    <mat-icon class="example-icon">favorite</mat-icon>
    <mat-icon class="example-icon">delete</mat-icon>
  </mat-toolbar-row>
</mat-toolbar>
`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic toolbar : Multi-row toolbar
*/
@Component({
selector: 'toolbar-multi-example',
templateUrl: 'toolbar-multi-example.html',
styleUrls: ['toolbar-multi-example.css'],
})
export class ToolbarMultiExample {}
`,
  cssCode: `
.example-icon {
  padding: 0 14px;
}
.example-spacer {
  flex: 1 1 auto;
}`,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};
@Component({
  selector: 'app-material-toolbar',
  templateUrl: './toolbar.component.html',
  styles: [
    `
      .example-icon {
        padding: 0 14px;
      }
      .example-spacer {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class ToolbarComponent implements OnInit {
  exampleSingleRow;
  examplMultipleRows;
  examplMultipleRows2;

  ngOnInit() {
    this.exampleSingleRow = singleRow;
    this.examplMultipleRows = multipleRows;
    this.examplMultipleRows2 = multipleRows2;
  }
}
