import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

const basicSlideToggles = {
  beforeCodeTitle: 'Basic slide-toggles',
  htmlCode: `<mat-slide-toggle>Slide me!</mat-slide-toggle>`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic slide-toggles
*/
@Component({
  selector: 'slide-toggle-overview-example',
  templateUrl: 'slide-toggle-overview-example.html',
  styleUrls: ['slide-toggle-overview-example.css'],
})
export class SlideToggleOverviewExample {}`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
};

const configurableSlideToggle = {
  beforeCodeTitle: 'Configurable slide-toggle',
  htmlCode: `
<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Slider configuration</h2>
    <section class="example-section">
      <label class="example-margin">Color:</label>
      <mat-radio-group [(ngModel)]="color">
        <mat-radio-button class="example-margin" value="primary">
          Primary
        </mat-radio-button>
        <mat-radio-button class="example-margin" value="accent">
          Accent
        </mat-radio-button>
        <mat-radio-button class="example-margin" value="warn">
          Warn
        </mat-radio-button>
      </mat-radio-group>
    </section>
    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="checked">Checked</mat-checkbox>
    </section>
    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="disabled">Disabled</mat-checkbox>
    </section>
  </mat-card-content>
</mat-card>
<mat-card class="result">
  <mat-card-content>
    <h2 class="example-h2">Result</h2>
    <section class="example-section">
      <mat-slide-toggle
        class="example-margin"
        [color]="color"
        [checked]="checked"
        [disabled]="disabled">
        Slide me!
      </mat-slide-toggle>
    </section>
  </mat-card-content>
</mat-card>`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Configurable slide-toggle
*/
@Component({
  selector: 'slide-toggle-configurable-example',
  templateUrl: 'slide-toggle-configurable-example.html',
  styleUrls: ['slide-toggle-configurable-example.css'],
})
export class SlideToggleConfigurableExample {
  color = 'accent';
  checked = false;
  disabled = false;
}
		`,
  viewCode: ``,
  cssCode: `
.example-h2 {
  margin: 10px;
}
.example-section {
  display: flex;
  align-content: center;
  align-items: center;
  height: 60px;
}
.example-margin {
  margin: 10px;
}
		`,
  isCodeVisible: false,
};

const labelPositions = {
  beforeCodeTitle: 'Label positions and "Change" event binding examples',
  htmlCode: `
<mat-slide-toggle [labelPosition]="labelPosition">Slide me!</mat-slide-toggle>
<div class="separator separator-dashed my-6"></div>
<mat-slide-toggle (change)="changeLablesPositions()">Slide labels position</mat-slide-toggle>`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
  selector: 'slide-toggle-label-positions-example',
  templateUrl: 'slide-toggle-lable-positions-example.html',
  styleUrls: ['slide-toggle-label-positions--example.css'],
})
export class SlideToggleLabelPositionsExample {\n
  labelPosition: string = "before";\n
  changeLablesPositions() {
    this.labelPosition = this.labelPosition == "before" ? "after" : "before";
  }
}`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
};
@Component({
  selector: 'app-material-slidertoggle',
  templateUrl: './slidertoggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .example-h2 {
        margin: 10px;
      }
      .example-section {
        display: flex;
        align-content: center;
        align-items: center;
        height: 60px;
      }
      .example-margin {
        margin: 10px;
      }
    `,
  ],
})
export class SlidertoggleComponent implements OnInit {
  exampleBasicSlideToggles;
  exampleConfigurableSlideToggle;
  exampleLabelPositions;

  color = 'accent';
  checked = false;
  disabled = false;

  labelPosition = 'before';

  constructor() {}

  ngOnInit() {
    this.exampleBasicSlideToggles = basicSlideToggles;
    this.exampleConfigurableSlideToggle = configurableSlideToggle;
    this.exampleLabelPositions = labelPositions;
  }

  changeLablesPositions() {
    this.labelPosition = this.labelPosition === 'before' ? 'after' : 'before';
  }
}
