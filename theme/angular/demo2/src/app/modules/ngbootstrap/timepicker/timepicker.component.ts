import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, FormControl } from '@angular/forms';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';

const timepicker = {
  beforeCodeTitle: 'Timepicker',
  htmlCode: `
<div class="example-preview">
  <div>
    <ngb-timepicker [(ngModel)]="time"></ngb-timepicker>
  </div>
</div>
<div class="separator separator-dashed my-6"></div>
<div class="example-preview">
  <div>
    <pre>Selected time: {{time | json}}</pre>
  </div>
</div>
`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
    selector: 'ngbd-timepicker-basic',
    templateUrl: './timepicker-basic.html'
})
export class NgbdTimepickerBasic {
    time = {hour: 13, minute: 30};
}
`,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const meridian = {
  beforeCodeTitle: 'Meridian',
  htmlCode: `
<div class="example-preview">
  <div>
    <ngb-timepicker [(ngModel)]="time" [meridian]="meridian"></ngb-timepicker>
    <button class="btn btn-sm btn-{{meridian ? 'success' : 'danger'}}" (click)="toggleMeridian()">
      Meridian - {{meridian ? "ON" : "OFF"}}
    </button>
  </div>
</div>
<div class="separator separator-dashed my-6"></div>
<div class="example-preview">
  <div>
	<pre>Selected time: {{time | json}}</pre>
  </div>
</div>
`,
  tsCode: `

import {Component} from '@angular/core';\n
@Component({
    selector: 'ngbd-timepicker-meridian',
    templateUrl: './timepicker-meridian.html'
})
export class NgbdTimepickerMeridian {
    time = {hour: 13, minute: 30};
    meridian = true;\n
    toggleMeridian() {
        this.meridian = !this.meridian;
    }
}
`,
  viewCode: ``,
  isCodeVisible: false,
};

const seconds = {
  beforeCodeTitle: 'Seconds',
  htmlCode: `
<div class="example-preview">
  <div>
    <ngb-timepicker [(ngModel)]="time" [seconds]="seconds"></ngb-timepicker>
    <button class="btn btn-sm btn-{{seconds ? 'success' : 'danger'}}" (click)="toggleSeconds()">
      Seconds - {{seconds ? "ON" : "OFF"}}
    </button>
  </div>
</div>
<div class="separator separator-dashed my-6"></div>
<div class="example-preview">
  <div>
    <pre>Selected time: {{time | json}}</pre>
  </div>
</div>
`,
  tsCode: `
import { Component } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';\n
@Component({
    selector: 'ngbd-timepicker-seconds',
    templateUrl: './timepicker-seconds.html'
})
export class NgbdTimepickerSeconds {
    time: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
    seconds = true;\n
    toggleSeconds() {
		this.seconds = !this.seconds;
    }
}
 `,
  viewCode: ``,
  isCodeVisible: false,
};

const spinners = {
  beforeCodeTitle: 'Spinners',
  htmlCode: `
<div class="example-preview">
  <div>
    <ngb-timepicker [(ngModel)]="time" [spinners]="spinners"></ngb-timepicker>
  </div>
</div>
<div class="separator separator-dashed my-6"></div>
<div class="example-preview">
  <div>
    <button class="kt-t-1 btn btn-sm btn-{{spinners ? 'success' : 'danger'}}" (click)="toggleSpinners()">
      Spinners - {{spinners ? "ON" : "OFF"}}
    </button>
  </div>
</div>
`,
  tsCode: `
import {Component} from '@angular/core';

@Component({
    selector: 'ngbd-timepicker-spinners',
    templateUrl: './timepicker-spinners.html'
})
export class NgbdTimepickerSpinners {
    time = {hour: 13, minute: 30};
    spinners = true;

    toggleSpinners() {
        this.spinners = !this.spinners;
    }
}

	`,
  viewCode: ``,
  isCodeVisible: false,
};

const customSteps = {
  beforeCodeTitle: 'Custom steps',
  htmlCode: `
<div class="example-preview">
  <div>
	<ngb-timepicker [(ngModel)]="time" [seconds]="true" [hourStep]="hourStep" [minuteStep]="minuteStep"
      [secondStep]="secondStep"></ngb-timepicker>
     <div class="row">
        <div class="col-sm-3">
          <label for="changeHourStep">Hour Step</label>
          <input id="changeHourStep" type="number" class="form-control form-control-sm" [(ngModel)]="hourStep" />
        </div>
        <div class="col-sm-3">
          <label for="changeMinuteStep">Minute Step</label>
          <input id="changeMinuteStep" type="number" class="form-control form-control-sm" [(ngModel)]="minuteStep" />
        </div>
        <div class="col-sm-3">
          <label for="changeSecondStep">Second Step</label>
          <input id="changeSecondStep" type="number" class="form-control form-control-sm" [(ngModel)]="secondStep" />
        </div>
      </div>
    </div>
</div>
<div class="separator separator-dashed my-6"></div>
<div class="example-preview">
  <div>
  <pre>Selected time: {{time | json}}</pre>
  </div>
</div>
		`,
  tsCode: `
import {Component} from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';\n
@Component({
    selector: 'ngbd-timepicker-steps',
    templateUrl: './timepicker-steps.html'
})
export class NgbdTimepickerSteps {
    time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
    hourStep = 1;
    minuteStep = 15;
    secondStep = 30;
}
`,
  viewCode: ``,
  isCodeVisible: false,
};

const customValidation = {
  beforeCodeTitle: 'Custom validation',
  htmlCode: `
<div class="example-preview">
  <span>
	Illustrates custom validation, you have to select time between 12:00 and 13:59
  </span>
  <div>
    <div class="form-group">
      <ngb-timepicker [(ngModel)]="time" [formControl]="ctrl" required></ngb-timepicker>
	  <div *ngIf="ctrl.valid" class="small form-text text-success">Great choice</div>
      <div class="small form-text text-danger" *ngIf="!ctrl.valid">
      <div *ngIf="ctrl.errors['required']">Select some time during lunchtime</div>
      <div *ngIf="ctrl.errors['tooLate']">Oh no, it's way too late</div>
      <div *ngIf="ctrl.errors['tooEarly']">It's a bit too early</div>
    </div>
  </div>
</div>
<div class="separator separator-dashed my-6"></div>
<div class="example-preview">
  <div>
    <pre>Selected time: {{time | json}}</pre>
  </div>
</div>
		`,
  tsCode: `
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';\n
@Component({
    selector: 'ngbd-timepicker-validation',
    templateUrl: './timepicker-validation.html'
})
export class NgbdTimepickerValidation {
    time;\n
    ctrl = new FormControl('', (control: FormControl) => {
        const value = control.value;\n
        if (!value) {
            return null;
        }\n
        if (value.hour < 12) {
            return {tooEarly: true};
        }\n
        if (value.hour > 13) {
            return {tooLate: true};
		}\n
        return null;
    });
}
`,
  viewCode: ``,
  isCodeVisible: false,
};

const globalConfigurationOfTimepickers = {
  beforeCodeTitle: 'Global configuration of timepickers',
  htmlCode: `
<div class="example-preview">
  <span>
	This timepicker uses customized default values.
  </span>
  <div>
    <ngb-timepicker [(ngModel)]="time" [seconds]="'true'" [spinners]="'false'"></ngb-timepicker>
  </div>
</div>
		`,
  tsCode: `
import {Component} from '@angular/core';
import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';\n
@Component({
    selector: 'ngbd-timepicker-config',
    templateUrl: './timepicker-config.html',
    providers: [NgbTimepickerConfig] // add NgbTimepickerConfig to the component providers
})
export class NgbdTimepickerConfig {
    time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};\n
    constructor(config: NgbTimepickerConfig) {
        // customize default values of ratings used by this component tree
        config.seconds = true;
        config.spinners = false;
    }
}
`,
  viewCode: ``,
  isCodeVisible: false,
};

@Component({
  selector: 'app-ng-timepicker',
  templateUrl: './timepicker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgbTimepickerConfig], // add NgbTimepickerConfig to the component providers
})
export class TimepickerComponent implements OnInit {
  ctrl;
  exampleTimepicker;
  exampleMeridian;
  exampleSeconds;
  exampleSpinners;
  exampleCustomSteps;
  exampleCustomValidation;
  exampleGlobalConfigurationOfTimepickers;
  time = { hour: 13, minute: 30 };
  time2 = { hour: 13, minute: 30 };
  meridian = true;
  time3: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
  seconds = true;
  time4: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;
  time5;
  time6: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };
  time7 = { hour: 13, minute: 30 };
  spinners = true;

  toggleSpinners() {
    this.spinners = !this.spinners;
  }

  constructor(config: NgbTimepickerConfig) {
    // customize default values of ratings used by this component tree
    // config.seconds = true;
    // config.spinners = false;
  }

  toggleSeconds() {
    this.seconds = !this.seconds;
  }

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  ngOnInit() {
    this.exampleTimepicker = timepicker;
    this.exampleMeridian = meridian;
    this.exampleSeconds = seconds;
    this.exampleSpinners = spinners;
    this.exampleCustomSteps = customSteps;
    this.exampleCustomValidation = customValidation;
    this.exampleGlobalConfigurationOfTimepickers = globalConfigurationOfTimepickers;

    this.ctrl = new FormControl('', (control: FormControl) => {
      const value = control.value;

      if (!value) {
        return null;
      }

      if (value.hour < 12) {
        return { tooEarly: true };
      }

      if (value.hour > 13) {
        return { tooLate: true };
      }

      return null;
    });
  }
}
