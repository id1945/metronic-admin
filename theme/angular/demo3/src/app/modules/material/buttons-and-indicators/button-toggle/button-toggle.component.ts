import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

const basic = {
  beforeCodeTitle: 'Basic button-toggles',
  htmlCode: `<mat-button-toggle>Toggle me!</mat-button-toggle>`,
  tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Basic button-toggles
*/
@Component({
  selector: 'button-toggle-overview-example',
  templateUrl: 'button-toggle-overview-example.html',
  styleUrls: ['button-toggle-overview-example.css'],
})
export class ButtonToggleOverviewExample {}`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const vertical = {
  beforeCodeTitle: 'Vertical button toggle',
  htmlCode: `<mat-button-toggle [vertical]="true">Toggle me!</mat-button-toggle>`,
  tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title  Vertical button-toggles
*/
@Component({
  selector: 'button-toggle-vertical-example',
  templateUrl: 'button-toggle-vertical-example.html',
  styleUrls: ['button-toggle-vertical-example.css'],
})
export class ButtonToggleVerticalExample {}`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const listExample = {
  beforeCodeTitle: 'Exclusive selection',
  htmlCode: `
<mat-button-toggle-group #group="matButtonToggleGroup">
  <mat-button-toggle value="left">
    <mat-icon>format_align_left</mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="center">
    <mat-icon>format_align_center</mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="right">
    <mat-icon>format_align_right</mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="justify" disabled>
    <mat-icon>format_align_justify</mat-icon>
  </mat-button-toggle>
</mat-button-toggle-group>
<div class="example-selected-value">Selected value: {{group.value}}</div>`,
  tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Exclusive selection
*/
@Component({
  selector: 'button-toggle-exclusive-example',
  templateUrl: 'button-toggle-exclusive-example.html',
  styleUrls: ['button-toggle-exclusive-example.css'],
})
export class ButtonToggleExclusiveExample {}`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

@Component({
  selector: 'app-material-button-toggle',
  templateUrl: './button-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .example-selected-value {
        margin: 15px 0;
      }
    `,
  ],
})
export class ButtonToggleComponent implements OnInit {
  exampleBasic;
  exampleVertical;
  exampleList;

  ngOnInit() {
    this.exampleBasic = basic;
    this.exampleVertical = vertical;
    this.exampleList = listExample;
  }
}
