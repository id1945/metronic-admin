import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

const basicSlider = {
  beforeCodeTitle: 'Basic slider',
  htmlCode: `<mat-slider></mat-slider>`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
 * @title Basic slider
 */
@Component({
  selector: 'slider-overview-example',
  templateUrl: 'slider-overview-example.html',
  styleUrls: ['slider-overview-example.css'],
})
export class SliderOverviewExample {}
		`,
  cssCode: `
/** No CSS for this example */
.mat-slider {
  width: 300px;
}`,
  viewCode: ``,
  isCodeVisible: false,
};

const configurableSlider = {
  beforeCodeTitle: 'Configurable slider',
  htmlCode: `
<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Slider configuration</h2>
    <section class="example-section">
      <mat-form-field class="example-margin">
        <input matInput type="number" placeholder="Value" [(ngModel)]="value">
      </mat-form-field>
      <mat-form-field class="example-margin">
        <input matInput type="number" placeholder="Min value" [(ngModel)]="min">
      </mat-form-field>
      <mat-form-field class="example-margin">
        <input matInput type="number" placeholder="Max value" [(ngModel)]="max">
      </mat-form-field>
      <mat-form-field class="example-margin">
        <input matInput type="number" placeholder="Step size" [(ngModel)]="step">
      </mat-form-field>
    </section>
    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="showTicks">Show ticks</mat-checkbox>
      <mat-checkbox class="example-margin" [(ngModel)]="autoTicks" *ngIf="showTicks">
        Auto ticks
      </mat-checkbox>
      <mat-form-field class="example-margin" *ngIf="showTicks && !autoTicks">
        <input matInput type="number" placeholder="Tick interval" [(ngModel)]="tickInterval">
      </mat-form-field>
     </section>
    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="thumbLabel">Show thumb label</mat-checkbox>
    </section>
    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="vertical">Vertical</mat-checkbox>
      <mat-checkbox class="example-margin" [(ngModel)]="invert">Inverted</mat-checkbox>
    </section>
    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="disabled">Disabled</mat-checkbox>
    </section>
  </mat-card-content>
</mat-card>
<mat-card class="result">
  <mat-card-content>
    <h2 class="example-h2">Result</h2>
    <mat-slider
      class="example-margin"
      [disabled]="disabled"
      [invert]="invert"
      [max]="max"
      [min]="min"
      [step]="step"
      [thumb-label]="thumbLabel"
      [tick-interval]="tickInterval"
      [(ngModel)]="value"
      [vertical]="vertical">
    </mat-slider>
  </mat-card-content>
</mat-card>`,
  tsCode: `
import {Component, ViewEncapsulation} from '@angular/core';\n
/**
* @title Configurable slider
*/
@Component({
  selector: 'slider-configurable-example',
  templateUrl: 'slider-configurable-example.html',
  styleUrls: ['slider-configurable-example.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class SliderConfigurableExample {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;\n
  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }
  private _tickInterval = 1;
}`,
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
.mat-slider-horizontal {
  width: 300px;
}
.mat-slider-vertical {
  height: 300px;
}`,
  isCodeVisible: false,
};

const changeEvent = {
  beforeCodeTitle: 'Change event binding',
  htmlCode: `
<mat-slider (change)="changeSlider()" [(ngModel)]="myValue" min="0" max="100" step="1"></mat-slider>
<div class="separator separator-dashed my-6" *ngIf="myValue"></div>
<span *ngIf="myValue">Selected: <mark>{{ myValue }}</mark>%</span>
`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
  selector: 'slider-change-event-example',
  templateUrl: 'slider-change-event-example.html',
  styleUrls: ['slider-change-event-example.css'],
})
export class SliderChangeEventExample {\n
  myValue = 50;
  changeSlider() {
    console.log('myValue:', this.myValue);
  }
}`,
  cssCode: `
.mat-slider {
  width: 300px;
}`,
  viewCode: ``,
  isCodeVisible: false,
};

@Component({
  selector: 'app-material-slider',
  templateUrl: './slider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .mat-slider {
        width: 300px;
      }
      .example-margin {
        margin: 15px;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class SliderComponent implements OnInit {
  exampleBasicSlider;
  exampleConfigurableSlider;
  exampleChangeEvent;

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;

  // tslint:disable-next-line:variable-name
  private _tickInterval = 1;
  myValue = 50;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }

  ngOnInit() {
    this.exampleBasicSlider = basicSlider;
    this.exampleConfigurableSlider = configurableSlider;
    this.exampleChangeEvent = changeEvent;
  }

  changeSlider() {
    console.log('myValue', this.myValue);
  }
}
