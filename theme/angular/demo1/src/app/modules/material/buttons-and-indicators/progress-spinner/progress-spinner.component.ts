import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

const basic = {
  beforeCodeTitle: 'Basic progressbar-spinner',
  htmlCode: `<mat-spinner></mat-spinner>`,
  tsCode: `import {Component} from '@angular/core';\n\n
/**
* @title Basic progress-spinner
*/
@Component({
  selector: 'progress-spinner-overview-example',
  templateUrl: 'progress-spinner-overview-example.html',
  styleUrls: ['progress-spinner-overview-example.css'],
})
export class ProgressSpinnerOverviewExample {}`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const config = {
  beforeCodeTitle: 'Configurable progress spinner',
  htmlCode: `
<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Progress spinner configuration</h2>
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
      <label class="example-margin">Mode:</label>
      <mat-radio-group [(ngModel)]="mode">
	    <mat-radio-button class="example-margin" value="determinate">
          Determinate
        </mat-radio-button>
        <mat-radio-button class="example-margin" value="indeterminate">
          Indeterminate
        </mat-radio-button>
      </mat-radio-group>
    </section>
    <section class="example-section" *ngIf="mode == 'determinate'">
      <label class="example-margin">Progress:</label>
        <mat-slider class="example-margin" [(ngModel)]="value"></mat-slider>
    </section>
  </mat-card-content>
</mat-card>
<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Result</h2>
    <mat-progress-spinner
     class="example-margin"
     [color]="color"
     [mode]="mode"
     [value]="value">
    </mat-progress-spinner>
  </mat-card-content>
</mat-card>`,
  tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Configurable progress spinner
*/
@Component({
  selector: 'progress-spinner-configurable-example',
  templateUrl: 'progress-spinner-configurable-example.html',
  styleUrls: ['progress-spinner-configurable-example.css'],
})
export class ProgressSpinnerConfigurableExample {
  color = 'primary';
  mode = 'determinate';
  value = 50;
}`,
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
  margin: 0 10px;
}`,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const warn = {
  beforeCodeTitle: 'Colorized progressbar-spinner',
  htmlCode: `
<mat-spinner [color]="'accent'"></mat-spinner>
<mat-spinner [color]="'warn'"></mat-spinner>\n`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Colorized progress-spinner
*/
@Component({
  selector: 'progress-spinner-colorized-example',
  templateUrl: 'progress-spinner-colorized-example.html',
  styleUrls: ['progress-spinner-colorized-example.css'],
})
export class ProgressSpinnerColorizedExample {}`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

@Component({
  selector: 'app-material-progress-spinner',
  templateUrl: './progress-spinner.component.html',
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
        margin: 0 10px;
      }
    `,
  ],
})
export class ProgressSpinnerComponent implements OnInit {
  exampleBasic;
  exampleWarn;
  exampleConfig;

  color = 'primary';
  mode = 'determinate';
  value = 50;

  ngOnInit() {
    this.exampleBasic = basic;
    this.exampleWarn = warn;
    this.exampleConfig = config;
  }
}
