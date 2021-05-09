import { Component, OnInit } from '@angular/core';

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
</div>
`,
  tsCode: `
import {Component} from '@angular/core';
/**
* @title Basic tooltip
*/
@Component({
  selector: 'tooltip-overview-example',
  templateUrl: 'tooltip-overview-example.html',
  styleUrls: ['tooltip-overview-example.css'],
})
export class TooltipOverviewExample {}
		`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const customPosition = {
  beforeCodeTitle: 'Tooltip with custom position',
  htmlCode: `
<div class="example-tooltip-host" matTooltip="Tooltip!" [matTooltipPosition]="position">
  <span>Show tooltip</span>
  <mat-form-field>
    <mat-select class="example-select" [(ngModel)]="position">
      <mat-option value="before">Before</mat-option>
      <mat-option value="after">After</mat-option>
      <mat-option value="above">Above</mat-option>
      <mat-option value="below">Below</mat-option>
      <mat-option value="left">Left</mat-option>
      <mat-option value="right">Right</mat-option>
    </mat-select>
  </mat-form-field>
</div>
		`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Tooltip with custom position
*/
@Component({
  selector: 'tooltip-position-example',
  templateUrl: 'tooltip-position-example.html',
  styleUrls: ['tooltip-position-example.css'],
})
export class TooltipPositionExample {
  position = 'before';
}
		`,
  cssCode: `
.example-tooltip-host {
  display: inline-flex;
  align-items: center;
  margin: 50px;
}
.example-select {
  margin: 0 10px;
}
		`,
  viewCode: ``,
  isCodeVisible: false,
};

const showHigh = {
  beforeCodeTitle: 'Tooltip with a show and hide delay',
  beforeCodeDescription: ``,
  htmlCode: `
<button mat-raised-button matTooltip="Tooltip!" matTooltipShowDelay="1000">
  My tooltip waits one second to show
</button>
<button mat-raised-button matTooltip="Tooltip!" matTooltipHideDelay="2000">
  My tooltip waits two seconds to hide
</button>`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Tooltip with a show and hide delay
*/
@Component({
  selector: 'tooltip-delay-example',
  templateUrl: 'tooltip-delay-example.html',
  styleUrls: ['tooltip-delay-example.css'],
})
export class TooltipDelayExample {}
`,
  cssCode: `
button {
  margin: 8px;
}
		`,
  viewCode: ``,
  isCodeVisible: false,
};

const delay = {
  beforeCodeTitle: 'Tooltip with a show and hide delay',
  htmlCode: `
<button mat-raised-button matTooltip="By default, I delay">
  Button with delay-default tooltip
</button>
		`,
  tsCode: `
import {Component} from '@angular/core';
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from '@angular/material';\n
/** Custom options the configure the tooltip's default show/hide delays. */
export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 1000,
  touchendHideDelay: 1000,
};\n
/**
* @title Tooltip with a show and hide delay
*/
@Component({
  selector: 'tooltip-modified-defaults-example',
  templateUrl: 'tooltip-modified-defaults-example.html',
  styleUrls: ['tooltip-modified-defaults-example.css'],
  providers: [
    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}
  ],
})
export class TooltipModifiedDefaultsExample {}
		`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
};

const manually = {
  beforeCodeTitle: 'Tooltip that can be manually shown/hidden.',
  htmlCode: `
<button mat-raised-button (click)="tooltip.show()"> Show tooltip </button>
<span matTooltip="This is the tooltip message" #tooltip="matTooltip">
  I have a tooltip
</span>
		`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Tooltip that can be manually shown/hidden.
*/
@Component({
  selector: 'tooltip-manual-example',
  templateUrl: 'tooltip-manual-example.html',
  styleUrls: ['tooltip-manual-example.css'],
})
export class TooltipManualExample {}
		`,
  viewCode: ``,
  isCodeVisible: false,
};

@Component({
  selector: 'app-material-tooltip',
  templateUrl: './material-tooltip.component.html',
})
export class MaterialTooltipComponent implements OnInit {
  exampleBasic;
  exampleCustomPosition;
  exampleShowHigh;
  exampleDelay;
  exampleManually;

  position = 'before';

  ngOnInit() {
    this.exampleBasic = basic;
    this.exampleCustomPosition = customPosition;
    this.exampleShowHigh = showHigh;
    this.exampleDelay = delay;
    this.exampleManually = manually;
  }
}
