import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

const basicCheckboxes = {
  beforeCodeTitle: 'Basic checkboxes',
  htmlCode: `<mat-checkbox>Check me!</mat-checkbox>`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic checkboxes
*/
@Component({
  selector: 'checkbox-overview-example',
  templateUrl: 'checkbox-overview-example.html',
  styleUrls: ['checkbox-overview-example.css'],
})
export class CheckboxOverviewExample {}`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
};

const configurableCheckbox = {
  beforeCodeTitle: 'Configurable checkbox',
  htmlCode: `
<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Checkbox configuration</h2>
    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="checked">Checked</mat-checkbox>
      <mat-checkbox class="example-margin" [(ngModel)]="indeterminate">Indeterminate</mat-checkbox>
    </section>
    <section class="example-section">
      <label class="example-margin">Align:</label>
      <mat-radio-group [(ngModel)]="align">
        <mat-radio-button class="example-margin" value="start">Start</mat-radio-button>
        <mat-radio-button class="example-margin" value="end">End</mat-radio-button>
      </mat-radio-group>
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
      <mat-checkbox
        class="example-margin"
        [(ngModel)]="checked"
        [(indeterminate)]="indeterminate"
        [align]="align"
        [disabled]="disabled">
        I'm a checkbox
      </mat-checkbox>
    </section>
  </mat-card-content>
</mat-card>`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
 * @title Configurable checkbox
 */
@Component({
  selector: 'checkbox-configurable-example',
  templateUrl: 'checkbox-configurable-example.html',
  styleUrls: ['checkbox-configurable-example.css'],
})
export class CheckboxConfigurableExample {
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;
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
  margin: 0 10px;
}`,
  isCodeVisible: false,
};

const labelPositions = {
  beforeCodeTitle: 'Label positions',
  htmlCode: `<mat-checkbox>Check me!</mat-checkbox>`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
  selector: 'checkbox-label-positions-example',
  templateUrl: 'checkbox-label-positions-example.html',
  styleUrls: ['checkbox-label-positions-example.css'],
})
export class CheckboxLabelPositionsExample {\n
  labelPosition: string = "before";\n
  changeLablesPositions() {
    this.labelPosition = this.labelPosition == "before" ? "after" : "before";
  }
}`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
};

const changeEvent = {
  beforeCodeTitle: 'Change event binding',
  htmlCode: `
<mat-checkbox [(ngModel)]="myValue" (change)="changeValueEvent()">Check me!</mat-checkbox>\n
<div class="separator separator-dashed my-6"></div>\n
<span>Checked: <mark>{{ myValue }}</mark></span>`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
  selector: 'checkbox-change-event-example',
  templateUrl: 'checkbox-change-event-example.html',
  styleUrls: ['checkbox-change-event-example.css'],
})
export class CheckboxChangeEventExample {
  myValue: boolean = true;
  changeValueEvent() {
    console.log("myValue:", this.myValue);
  }
}`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
};
@Component({
  selector: 'app-material-checkbox',
  templateUrl: './checkbox.component.html',
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
export class CheckboxComponent implements OnInit {
  exampleBasicCheckboxes;
  exampleConfigurableCheckbox;
  exampleLabelPositions;
  exampleChangeEvent;

  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;
  labelPosition = 'before';
  myValue = true;

  constructor() {}

  ngOnInit() {
    this.exampleBasicCheckboxes = basicCheckboxes;
    this.exampleConfigurableCheckbox = configurableCheckbox;
    this.exampleLabelPositions = labelPositions;
    this.exampleChangeEvent = changeEvent;
  }

  changeLablesPositions() {
    this.labelPosition = this.labelPosition === 'before' ? 'after' : 'before';
  }

  changeValueEvent() {
    console.log('myValue:', this.myValue);
  }
}
