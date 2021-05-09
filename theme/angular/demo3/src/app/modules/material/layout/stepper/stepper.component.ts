import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const basicStepper = {
  beforeCodeTitle: 'Basic stepper',
  htmlCode: `
<button mat-raised-button (click)="isLinear = true" id="toggle-linear">Enable linear mode</button>
<mat-horizontal-stepper [linear]="isLinear" #stepper="matHorizontalStepper">
  <mat-step [stepControl]="firstFormGroup">
    <form [formGroup]="firstFormGroup">
      <ng-template matStepLabel>Fill out your name</ng-template>
      <mat-form-field>
        <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
      </mat-form-field>
      <div>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step [stepControl]="secondFormGroup">
    <form [formGroup]="secondFormGroup">
      <ng-template matStepLabel>Fill out your address</ng-template>
      <mat-form-field>
        <input matInput placeholder="Address" formControlName="secondCtrl" required>
      </mat-form-field>
      <div>
        <button mat-button matStepperPrevious>Back</button>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step>
    <ng-template matStepLabel>Done</ng-template>
    You are now done.
     <div>
      <button mat-button matStepperPrevious>Back</button>
      <button mat-button (click)="stepper.reset()">Reset</button>
    </div>
  </mat-step>
</mat-horizontal-stepper>
`,
  tsCode: `
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
/**
* @title Stepper overview
*/
@Component({
  selector: 'stepper-overview-example',
  templateUrl: 'stepper-overview-example.html',
  styleUrls: ['stepper-overview-example.css']
})
export class StepperOverviewExample {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const horizontalStepper = {
  beforeCodeTitle: 'Horizontal stepper',
  htmlCode: `
<mat-horizontal-stepper>
  <mat-step label="Step 1">
    Content 1
  </mat-step>
  <mat-step label="Step 1">
    Content 2
  </mat-step>
</mat-horizontal-stepper>
`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Horizontal stepper
*/
@Component({
  selector: 'stepper-horizontal-example',
  styleUrls: ['stepper-horizontal-example.css'],
  templateUrl: 'stepper-horizontal-example.html',
})
export class StepperHorizontalExample {}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const stepperOverview = {
  beforeCodeTitle: 'Stepper overview',
  htmlCode: `
<mat-list>
  <h3 mat-subheader>Folders</h3>
  <mat-list-item *ngFor="let folder of folders">
    <mat-icon mat-list-icon>folder</mat-icon>
	<h4 mat-line>{{folder.name}}</h4>
    <p mat-line> {{folder.updated | date}} </p>
  </mat-list-item>
  <mat-divider></mat-divider>
  <h3 mat-subheader>Notes</h3>
  <mat-list-item *ngFor="let note of notes">
    <mat-icon mat-list-icon>note</mat-icon>
    <h4 mat-line>{{note.name}}</h4>
    <p mat-line> {{note.updated | date}} </p>
  </mat-list-item>
</mat-list>
`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title List with sections
*/
@Component({
  selector: 'list-sections-example',
  styleUrls: ['list-sections-example.css'],
templateUrl: 'list-sections-example.html',
})
export class ListSectionsExample {
  folders = [
  {
    name: 'Photos',
    updated: new Date('1/1/16'),
  },
  {
    name: 'Recipes',
    updated: new Date('1/17/16'),
  },
  {
    name: 'Work',
    updated: new Date('1/28/16'),
  }
  ];
  notes = [
  {
    name: 'Vacation Itinerary',
    updated: new Date('2/20/16'),
  },
  {
    name: 'Kitchen Remodel',
    updated: new Date('1/18/16'),
  }
  ];
}
`,
  cssCode: `
.mat-list-icon {
  color: rgba(0, 0, 0, 0.54);
}
`,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};
@Component({
  selector: 'app-material-stepper',
  templateUrl: './stepper.component.html',
})
export class StepperComponent implements OnInit {
  exampleBasicStepper;
  exampleHorizontalStepper;
  exampleStepperOverview;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.exampleBasicStepper = basicStepper;
    this.exampleHorizontalStepper = horizontalStepper;
    this.exampleStepperOverview = stepperOverview;

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}
