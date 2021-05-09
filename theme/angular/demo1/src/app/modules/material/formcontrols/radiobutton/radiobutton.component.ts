import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

const basicRadios = {
  beforeCodeTitle: 'Basic radios',
  htmlCode: `
<mat-radio-group>
  <mat-radio-button value="1">Option 1</mat-radio-button>
  <mat-radio-button value="2">Option 2</mat-radio-button>
</mat-radio-group>
		`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic radios
*/
@Component({
  selector: 'radio-overview-example',
  templateUrl: 'radio-overview-example.html',
 styleUrls: ['radio-overview-example.css'],
})
export class RadioOverviewExample {}`,
  cssCode: `
.mat-radio-button ~ .mat-radio-button {
  padding-right: 16px;
}`,
  viewCode: ``,
  isCodeVisible: false,
};

const radiosWithNgModel = {
  beforeCodeTitle: 'Radios with ngModel',
  htmlCode: `
<mat-radio-group class="example-radio-group" [(ngModel)]="favoriteSeason">
  <mat-radio-button class="example-radio-button" *ngFor="let season of seasons" [value]="season">
    {{season}}
  </mat-radio-button>
</mat-radio-group>
<div class="example-selected-value">Your favorite season is: {{favoriteSeason}}</div>`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Radios with ngModel
*/
@Component({
  selector: 'radio-ng-model-example',
  templateUrl: 'radio-ng-model-example.html',
  styleUrls: ['radio-ng-model-example.css'],
})
export class RadioNgModelExample {
  favoriteSeason: string;\n
  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
}`,
  viewCode: ``,
  cssCode: `
.example-radio-group {
  display: inline-flex;
  flex-direction: column;
}
.example-radio-button {
  margin: 5px;
}
.example-selected-value {
  margin: 15px 0;
}
		`,
  isCodeVisible: false,
};

const disabledRadios = {
  beforeCodeTitle: 'Disabled radios',
  htmlCode: `
<mat-radio-group disabled="true">
  <mat-radio-button  value="Alabama">Alabama</mat-radio-button>
  <mat-radio-button  value="Alaska">Alaska</mat-radio-button>
  <mat-radio-button  value="Florida">Florida</mat-radio-button>
  <mat-radio-button  value="Illinois">Illinois</mat-radio-button>
  <mat-radio-button  value="Kansas">Kansas</mat-radio-button>
</mat-radio-group>`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
  selector: 'radio-disabled-example',
  templateUrl: 'radio-disabled-example.html',
 styleUrls: ['radio-disabled-example.css'],
})
export class RadioDisabledExample {}`,
  cssCode: `
.mat-radio-button ~ .mat-radio-button {
  padding-right: 16px;
}`,
  viewCode: ``,
  isCodeVisible: false,
};

const labelPosition = {
  beforeCodeTitle: 'Label position',
  htmlCode: `
<mat-radio-group [labelPosition]="labelPosition">
  <mat-radio-button  value="Alabama">Alabama</mat-radio-button>
  <mat-radio-button  value="Alaska">Alaska</mat-radio-button>
  <mat-radio-button  value="Florida">Florida</mat-radio-button>
  <mat-radio-button  value="Illinois">Illinois</mat-radio-button>
  <mat-radio-button  value="Kansas">Kansas</mat-radio-button>
</mat-radio-group>
<div class="separator separator-dashed my-6"></div>
<mat-slide-toggle (change)="changeLablesPositions()">Slide labels position</mat-slide-toggle>`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
  selector: 'radio-label-position-example',
  templateUrl: 'radio-lablel-position.html',
 styleUrls: ['radio-label-position-example.css'],
})
export class RadioLabelPositionExample {
  labelPosition: string = "before";\n
  changeLablesPositions() {
    this.labelPosition = this.labelPosition == "before" ? "after" : "before";
  }
}`,
  cssCode: `
.mat-radio-button ~ .mat-radio-button {
  padding-right: 16px;
}`,
  viewCode: ``,
  isCodeVisible: false,
};

const changeEvent = {
  beforeCodeTitle: 'Change event binding',
  htmlCode: `
<mat-radio-group (change)="changeState()" [(ngModel)]="selectedState">
  <mat-radio-button  value="Alabama">Alabama</mat-radio-button>
  <mat-radio-button  value="Alaska">Alaska</mat-radio-button>
  <mat-radio-button  value="Florida">Florida</mat-radio-button>
  <mat-radio-button  value="Illinois">Illinois</mat-radio-button>
  <mat-radio-button  value="Kansas">Kansas</mat-radio-button>
</mat-radio-group>
<div class="separator separator-dashed my-6" *ngIf="state"></div>
<span *ngIf="state">Welcome to <mark>{{ state }}</mark>!</span>`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
selector: 'radio-change-event-example',
templateUrl: 'radio-change-event.html',
styleUrls: ['radio-change-event-example.css'],
})
export class RadioChangeEventExample {
  state: string = "";
  selectedState: string = "";

  changeState() {
    this.state = this.selectedState;
  }
}`,
  cssCode: `
.mat-radio-button ~ .mat-radio-button {
  padding-right: 16px;
}`,
  viewCode: ``,
  isCodeVisible: false,
};

@Component({
  selector: 'app-material-radiobutton',
  templateUrl: './radiobutton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      mat-radio-button {
        padding-right: 16px;
      }
      .example-radio-group {
        display: inline-flex;
        flex-direction: column;
      }
      .example-radio-button {
        margin: 15px;
      }
      .example-selected-value {
        margin: 15px 0;
      }
    `,
  ],
})
export class RadiobuttonComponent implements OnInit {
  exampleBasicRadios;
  exampleRadiosWithNgModel;
  exampleDisabledRadios;
  exmapleLabelPosition;
  exampleChangeEvent;

  favoriteSeason: string;

  seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];

  state = '';
  selectedState = '';

  labelPosition = 'before';

  changeLablesPositions() {
    this.labelPosition = this.labelPosition === 'before' ? 'after' : 'before';
  }

  constructor() {}

  ngOnInit() {
    this.exampleBasicRadios = basicRadios;
    this.exampleRadiosWithNgModel = radiosWithNgModel;
    this.exampleDisabledRadios = disabledRadios;
    this.exmapleLabelPosition = labelPosition;
    this.exampleChangeEvent = changeEvent;
  }

  changeState() {
    this.state = this.selectedState;
  }
}
