import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

const basic = {
  beforeCodeTitle: 'MatRipple basic usage',
  htmlCode: `
<mat-checkbox [(ngModel)]="centered" class="example-ripple-checkbox">Centered</mat-checkbox>
<mat-checkbox [(ngModel)]="disabled" class="example-ripple-checkbox">Disabled</mat-checkbox>
<mat-checkbox [(ngModel)]="unbounded" class="example-ripple-checkbox">Unbounded</mat-checkbox>

<mat-form-field class="example-ripple-form-field">
  <input matInput [(ngModel)]="radius" type="number" placeholder="Radius">
</mat-form-field>
<mat-form-field class="example-ripple-form-field">
  <input matInput [(ngModel)]="color" type="text" placeholder="Color">
</mat-form-field>

<div class="example-ripple-container mat-elevation-z4"
  matRipple
  [matRippleCentered]="centered"
  [matRippleDisabled]="disabled"
  [matRippleUnbounded]="unbounded"
  [matRippleRadius]="radius"
  [matRippleColor]="color">
  Click me
</div>`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
  * @title MatRipple basic usage
*/
@Component({
  selector: 'ripple-overview-example',
  templateUrl: 'ripple-overview-example.html',
  styleUrls: ['ripple-overview-example.css'],
})
export class RippleOverviewExample {
  centered = false;
  disabled = false;
  unbounded = false;\n
  radius: number;
  color: string;
}`,
  cssCode: `
.example-ripple-container {
  cursor: pointer;
  text-align: center;\n
  width: 300px;
  height: 300px;
  line-height: 300px;\n
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;\n
  -webkit-user-drag: none;
  -webkit-tap-highlight-color: transparent;
}\n
/** Styles to make the demo look better. */
.example-ripple-checkbox {
  margin: 6px 12px 6px 0;
}

.example-ripple-form-field {
  margin: 0 12px 0 0;
}`,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

@Component({
  selector: 'app-material-ripples',
  templateUrl: './ripples.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RipplesComponent implements OnInit {
  exampleBasic;

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;

  ngOnInit() {
    this.exampleBasic = basic;
  }
  constructor(iconRegistry: MatIconRegistry) {}
}
