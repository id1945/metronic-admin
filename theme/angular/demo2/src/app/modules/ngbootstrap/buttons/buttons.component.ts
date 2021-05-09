import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

const checkboxButtons = {
  beforeCodeTitle: 'Checkbox buttons',
  changeDetection: ChangeDetectionStrategy.OnPush,
  htmlCode: `
<div class="example-preview">
  <span>
    Click buttons to get the result:
    <pre>{{modelFirst | json}}</pre>
  </span>
  <div>
    <div class="btn-group btn-group-toggle">
      <label class="btn-primary" ngbButtonLabel>
        <input type="checkbox" ngbButton [(ngModel)]="modelFirst.left"> Left (pre-checked)
      </label>
      <label class="btn-success" ngbButtonLabel>
        <input type="checkbox" ngbButton [(ngModel)]="modelFirst.middle"> Middle
      </label>
      <label class="btn-info" ngbButtonLabel>
        <input type="checkbox" ngbButton [(ngModel)]="modelFirst.right"> Right
       </label>
    </div>
  </div>
</div>
`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
    selector: 'ngbd-buttons-checkbox',
    templateUrl: './buttons-checkbox.html'
})
export class NgbdButtonsCheckbox {
    model = {
    left: true,
    middle: false,
    right: false
  };
}
`,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const checkboxButtonsReactiveForms = {
  beforeCodeTitle: 'Checkbox buttons (Reactive Forms)',
  htmlCode: `
<div class="example-preview">
  <span>
    Click buttons to get the result:
    <pre>{{checkboxGroupForm.value | json}}</pre>
  </span>
  <div>
    <form [formGroup]="checkboxGroupForm">
      <div class="btn-group btn-group-toggle">
        <label class="btn-warning" ngbButtonLabel>
          <input type="checkbox" formControlName="left" ngbButton> Left (pre-checked)
        </label>
        <label class="btn-danger" ngbButtonLabel>
          <input type="checkbox" formControlName="middle" ngbButton> Middle
        </label>
        <label class="btn-success" ngbButtonLabel>
          <input type="checkbox" formControlName="right" ngbButton> Right
        </label>
      </div>
     </form>
  </div>
</div>
`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
    selector: 'ngbd-buttons-checkbox',
    templateUrl: './buttons-checkbox.html'
})
export class NgbdButtonsCheckbox {
    model = {
        left: true,
        middle: false,
        right: false
    };
}
`,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const radioButtons = {
  beforeCodeTitle: 'Radio buttons',
  htmlCode: `
<div class="example-preview">
  <span>
    Click buttons to get the result:
    <pre>{{secondModel}}</pre>
  </span>
  <div>
    <div class="btn-group btn-group-toggle" ngbRadioGroup name="radioBasic" [(ngModel)]="secondModel">
      <label ngbButtonLabel class="btn-primary">
        <input ngbButton type="radio" [value]="1"> Left (pre-checked)
      </label>
      <label ngbButtonLabel class="btn-info">
        <input ngbButton type="radio" value="middle"> Middle
      </label>
      <label ngbButtonLabel class="btn-danger">
        <input ngbButton type="radio" [value]="false"> Right
      </label>
    </div>
  </div>
</div>
`,
  tsCode: `
import {Component} from '@angular/core';

@Component({
    selector: 'ngbd-buttons-radio',
    templateUrl: './buttons-radio.html'
})
export class NgbdButtonsRadio {
    model = 1;
}
`,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const radioButtonsReactiveForms = {
  beforeCodeTitle: 'Radio buttons (Reactive Forms)',
  htmlCode: `
<div class="example-preview">
  <span>
    Click buttons to get the result:
    <pre>{{radioGroupForm.value['model']}}</pre>
  </span>
  <div>
    <form [formGroup]="radioGroupForm">
      <div class="btn-group btn-group-toggle" ngbRadioGroup name="radioBasic" formControlName="model">
        <label ngbButtonLabel class="btn-warning">
          <input ngbButton type="radio" [value]="1"> Left (pre-checked)
        </label>
        <label ngbButtonLabel class="btn-success">
          <input ngbButton type="radio" value="middle"> Middle
        </label>
        <label ngbButtonLabel class="btn-info">
          <input ngbButton type="radio" [value]="false"> Right
        </label>
      </div>
    </form>
  </div>
</div>
`,
  tsCode: `
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'ngbd-buttons-radioreactive',
    templateUrl: './buttons-radioreactive.html'
})
export class NgbdButtonsRadioreactive implements OnInit {
    public radioGroupForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.radioGroupForm = this.formBuilder.group({
            'model': 1
        });
    }
}
`,
  isCodeVisible: false,
  isExampleExpanded: true,
};

@Component({
  selector: 'app-ng-buttons',
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent implements OnInit {
  exampleCheckboxButtons: any;
  exampleCheckboxButtonsReactiveForms: any;
  exampleRadioButtons: any;
  exampleRadioButtonsReactiveForms: any;

  modelFirst: any = {
    left: true,
    middle: false,
    right: false,
  };
  secondModel = 1;
  checkboxGroupForm: FormGroup;
  radioGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.exampleCheckboxButtons = checkboxButtons;
    this.exampleCheckboxButtonsReactiveForms = checkboxButtonsReactiveForms;
    this.exampleRadioButtons = radioButtons;
    this.exampleRadioButtonsReactiveForms = radioButtonsReactiveForms;

    this.checkboxGroupForm = this.formBuilder.group({
      left: true,
      middle: false,
      right: false,
    });

    this.radioGroupForm = this.formBuilder.group({
      model: 1,
    });
  }
}
