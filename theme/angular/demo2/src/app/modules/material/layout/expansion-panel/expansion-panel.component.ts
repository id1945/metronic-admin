import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

const basicPanel = {
  beforeCodeTitle: 'Basic expansion panel',
  htmlCode: `
<mat-accordion>
  <mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        Personal data
      </mat-panel-title>
	  <mat-panel-description>
        Type your name and age
      </mat-panel-description>
    </mat-expansion-panel-header>
    <mat-form-field>
      <input matInput placeholder="First name">
    </mat-form-field>
    <mat-form-field>
      <input matInput placeholder="Age">
    </mat-form-field>
  </mat-expansion-panel>
  <mat-expansion-panel (opened)="panelOpenState = true"
    (closed)="panelOpenState = false">
    <mat-expansion-panel-header>
      <mat-panel-title>
        Self aware panel
      </mat-panel-title>
      <mat-panel-description>
        Currently I am {{panelOpenState ? 'open' : 'closed'}}
      </mat-panel-description>
    </mat-expansion-panel-header>
    <p>I'm visible because I am open</p>
  </mat-expansion-panel>
</mat-accordion>
`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic expansion panel
*/
@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'expansion-overview-example.html',
  styleUrls: ['expansion-overview-example.css'],
})
export class ExpansionOverviewExample {
  panelOpenState: boolean = false;
}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const disabledPanel = {
  beforeCodeTitle: 'Disabling a panel',
  htmlCode: `
<mat-expansion-panel [disabled]="isDisabled">
  <mat-expansion-panel-header>
	This is the expansion title
  </mat-expansion-panel-header>
  <mat-panel-description>
    This is a summary of the content
  </mat-panel-description>
</mat-expansion-panel>
`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Disabled expansion panel
*/
@Component({
  selector: 'expansion-disabled-example',
  templateUrl: 'expansion-disabled-example.html',
  styleUrls: ['expansion-disabled-example.css'],
})
export class ExpansionDisabledExample {
  isDisabled: boolean = true;
}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const accordion = {
  beforeCodeTitle: 'Expansion panel as accordion',
  htmlCode: `
<mat-accordion class="example-headers-align">
  <mat-expansion-panel [expanded]="step === 0" (opened)="setStep(0)" hideToggle="true">
    <mat-expansion-panel-header>
      <mat-panel-title>
        Personal data
      </mat-panel-title>
	  <mat-panel-description>
		Type your name and age
        <mat-icon>account_circle</mat-icon>
      </mat-panel-description>
    </mat-expansion-panel-header>
    <mat-form-field>
      <input matInput placeholder="First name">
    </mat-form-field>
    <mat-form-field>
      <input matInput type="number" min="1" placeholder="Age">
    </mat-form-field>
    <mat-action-row>
      <button mat-button color="primary" (click)="nextStep()">Next</button>
    </mat-action-row>
  </mat-expansion-panel>
  <mat-expansion-panel [expanded]="step === 1" (opened)="setStep(1)" hideToggle="true">
    <mat-expansion-panel-header>
      <mat-panel-title>
        Destination
      </mat-panel-title>
      <mat-panel-description>
        Type the country name
        <mat-icon>map</mat-icon>
      </mat-panel-description>
    </mat-expansion-panel-header>
    <mat-form-field>
      <input matInput placeholder="Country">
    </mat-form-field>
    <mat-action-row>
      <button mat-button color="warn" (click)="prevStep()">Previous</button>
      <button mat-button color="primary" (click)="nextStep()">Next</button>
    </mat-action-row>
   </mat-expansion-panel>
  <mat-expansion-panel [expanded]="step === 2" (opened)="setStep(2)" hideToggle="true">
    <mat-expansion-panel-header>
      <mat-panel-title>
        Day of the trip
	  </mat-panel-title>
      <mat-panel-description>
        Inform the date you wish to travel
        <mat-icon>date_range</mat-icon>
      </mat-panel-description>
     </mat-expansion-panel-header>
    <mat-form-field>
      <input matInput placeholder="Date" [matDatepicker]="picker" (focus)="picker.open()" readonly>
    </mat-form-field>
    <mat-datepicker #picker></mat-datepicker>
    <mat-action-row>
      <button mat-button color="warn" (click)="prevStep()">Previous</button>
      <button mat-button color="primary" (click)="nextStep()">End</button>
    </mat-action-row>
  </mat-expansion-panel>
</mat-accordion>
`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Expansion panel as accordion
*/
@Component({
  selector: 'expansion-steps-example',
  templateUrl: 'expansion-steps-example.html',
  styleUrls: ['expansion-steps-example.css']
})
export class ExpansionStepsExample {
  step = 0;\n
  setStep(index: number) {
    this.step = index;
  }\n
  nextStep() {
    this.step++;
   }\n
  prevStep() {
    this.step--;
  }
}
`,
  cssCode: `
.example-headers-align .mat-expansion-panel-header-title,
.example-headers-align .mat-expansion-panel-header-description {
  flex-basis: 0;
}\n
.example-headers-align .mat-expansion-panel-header-description {
  justify-content: space-between;
  align-items: center;
}
`,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

@Component({
  selector: 'app-material-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .example-headers-align .mat-expansion-panel-header-title,
      .example-headers-align .mat-expansion-panel-header-description {
        flex-basis: 0;
      }
      .example-headers-align .mat-expansion-panel-header-description {
        justify-content: space-between;
        align-items: center;
      }
    `,
  ],
})
export class ExpansionPanelComponent implements OnInit {
  exampleBasicPanel;
  exampleDisabledPanel;
  exampleAccordion;
  panelOpenState = false;
  isDisabled = true;
  step = 0;

  ngOnInit() {
    this.exampleBasicPanel = basicPanel;
    this.exampleDisabledPanel = disabledPanel;
    this.exampleAccordion = accordion;
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
