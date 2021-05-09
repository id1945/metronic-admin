import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

const determinate = {
  beforeCodeTitle: 'Determinate progress-bar',
  htmlCode: `<mat-progress-bar mode="determinate" value="40"></mat-progress-bar>`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Determinate progress-bar
*/
@Component({
  selector: 'progress-bar-determinate-example',
  templateUrl: 'progress-bar-determinate-example.html',
  styleUrls: ['progress-bar-determinate-example.css'],
})
export class ProgressBarDeterminateExample {}\n\n`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
};

const indeterminate = {
  beforeCodeTitle: 'Indeterminate progress-bar',
  htmlCode: `<mat-progress-bar mode="indeterminate"></mat-progress-bar>`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Indeterminate progress-bar
*/
@Component({
  selector: 'progress-bar-indeterminate-example',
  templateUrl: 'progress-bar-indeterminate-example.html',
  styleUrls: ['progress-bar-indeterminate-example.css'],
})
export class ProgressBarIndeterminateExample {}`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
};

const buffer = {
  beforeCodeTitle: 'Buffer progress-bar',
  htmlCode: `<mat-progress-bar mode="buffer"></mat-progress-bar>`,
  tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Buffer progress-bar
*/
@Component({
  selector: 'progress-bar-buffer-example',
  templateUrl: 'progress-bar-buffer-example.html',
  styleUrls: ['progress-bar-buffer-example.css'],
})
export class ProgressBarBufferExample {}`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
};

const query = {
  beforeCodeTitle: 'Query progress-bar',
  htmlCode: `<mat-progress-bar mode="query"></mat-progress-bar>`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Query progress-bar
*/
@Component({
  selector: 'progress-bar-query-example',
  templateUrl: 'progress-bar-query-example.html',
  styleUrls: ['progress-bar-query-example.css'],
})
export class ProgressBarQueryExample {}`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
};

const config = {
  beforeCodeTitle: 'Configurable progress-bar',
  htmlCode: `
<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Progress bar configuration</h2>
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
        <mat-radio-button class="example-margin" value="buffer">
          Buffer
        </mat-radio-button>
        <mat-radio-button class="example-margin" value="query">
          Query
        </mat-radio-button>
      </mat-radio-group>
    </section>
    <section class="example-section" *ngIf="mode == 'determinate' || mode == 'buffer'">
      <label class="example-margin">Progress:</label>
      <mat-slider class="example-margin" [(ngModel)]="value"></mat-slider>
    </section>
    <section class="example-section" *ngIf="mode == 'buffer'">
      <label class="example-margin">Buffer:</label>
      <mat-slider class="example-margin" [(ngModel)]="bufferValue"></mat-slider>
    </section>
  </mat-card-content>
</mat-card>
<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Result</h2>
    <section class="example-section">
     <mat-progress-bar
        class="example-margin"
        [color]="color"
        [mode]="mode"
        [value]="value"
        [bufferValue]="bufferValue">
      </mat-progress-bar>
    </section>
  </mat-card-content>
</mat-card>`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Configurable progress-bar
*/
@Component({
  selector: 'progress-bar-configurable-example',
  templateUrl: 'progress-bar-configurable-example.html',
  styleUrls: ['progress-bar-configurable-example.css'],
})
export class ProgressBarConfigurableExample {
  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
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
};

@Component({
  selector: 'app-material-progress-bar',
  templateUrl: './progress-bar.component.html',
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
export class ProgressBarComponent implements OnInit {
  exampleDeterminate;
  exampleIndeterminate;
  exampleBuffer;
  exmapleQuery;
  exampleConfig;
  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;

  ngOnInit() {
    this.exampleDeterminate = determinate;
    this.exampleIndeterminate = indeterminate;
    this.exampleBuffer = buffer;
    this.exmapleQuery = query;
    this.exampleConfig = config;
  }
}
