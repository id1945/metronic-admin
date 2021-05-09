import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

const basicInputs = {
  beforeCodeTitle: 'Basic Inputs',
  htmlCode: `
<form class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput placeholder="Favorite food" value="Sushi">
  </mat-form-field>
  <mat-form-field class="example-full-width">
    <textarea matInput placeholder="Leave a comment"></textarea>
  </mat-form-field>
</form>`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic Inputs
*/
@Component({
  selector: 'input-overview-example',
  styleUrls: ['input-overview-example.css'],
  templateUrl: 'input-overview-example.html',
})
export class InputOverviewExample {}`,
  cssCode: `
.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}
.example-full-width {
  width: 100%;
}`,
  viewCode: ``,
  isCodeVisible: false,
};

const inputWithACustomErrorStateMatcher = {
  beforeCodeTitle: 'Input with a custom ErrorStateMatcher',
  htmlCode: `
<form class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput placeholder="Email" [formControl]="emailFormControl"
      [errorStateMatcher]="matcher">
    <mat-hint>Errors appear instantly!</mat-hint>
    <mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
      Please enter a valid email address
    </mat-error>
    <mat-error *ngIf="emailFormControl.hasError('required')">
      Email is <strong>required</strong>
    </mat-error>
  </mat-form-field>
</form>`,
  tsCode: `
import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';\n
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
  const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'input-error-state-matcher-example',
  templateUrl: './input-error-state-matcher-example.html',
  styleUrls: ['./input-error-state-matcher-example.css'],
})
export class InputErrorStateMatcherExample {
  emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email,
]);
  matcher = new MyErrorStateMatcher();
}`,
  viewCode: ``,
  cssCode: `
.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}
.example-full-width {
  width: 100%;
}`,
  isCodeVisible: false,
};

const autoResizingTextarea = {
  beforeCodeTitle: 'Auto-resizing textarea',
  htmlCode: `
<mat-form-field>
  <textarea matInput placeholder="Autosize textarea" matTextareaAutosize matAutosizeMinRows="2"
    matAutosizeMaxRows="5"></textarea>
</mat-form-field>`,
  tsCode: `
import {Component} from '@angular/core';'n
/** @title Auto-resizing textarea */
@Component({
  selector: 'input-autosize-textarea-example',
  templateUrl: './input-autosize-textarea-example.html',
  styleUrls: ['./input-autosize-textarea-example.css'],
})
export class InputAutosizeTextareaExample {}`,
  viewCode: ``,
  cssCode: ``,
  isCodeVisible: false,
};

const inputWithAClearButton = {
  beforeCodeTitle: 'Input with a clear button',
  htmlCode: `
<mat-form-field class="example-form-field">
  <input matInput type="text" placeholder="Clearable input" [(ngModel)]="value"/>
  <button mat-button *ngIf="value" matSuffix mat-icon-button aria-label="Clear" (click)="value=''">
    <mat-icon>close</mat-icon>
  </button>
 </mat-form-field>
		`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Input with a clear button
*/
@Component({
  selector: 'input-clearable-example',
  templateUrl: './input-clearable-example.html',
  styleUrls: ['./input-clearable-example.css'],
})
export class InputClearableExample {
  value = 'Clear me';
}`,
  viewCode: ``,
  cssCode: `
.example-form-field {
  width: 200px;
}`,
  isCodeVisible: false,
};

const inputWithErrorMessages = {
  beforeCodeTitle: 'Input with error messages',
  htmlCode: `
<form class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput placeholder="Email" [formControl]="emailFormControl">
    <mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
      Please enter a valid email address
    </mat-error>
    <mat-error *ngIf="emailFormControl.hasError('required')">
      Email is <strong>required</strong>
    </mat-error>
  </mat-form-field>
 </form>`,
  tsCode: `
import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';\n
/**
* @title Input with error messages
*/
@Component({
  selector: 'input-errors-example',
  templateUrl: 'input-errors-example.html',
  styleUrls: ['input-errors-example.css'],
})
export class InputErrorsExample {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}`,
  viewCode: ``,
  cssCode: `
.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}
.example-full-width {
  width: 100%;
}`,
  isCodeVisible: false,
};

const inputsInAForm = {
  beforeCodeTitle: 'Inputs in a form',
  htmlCode: `
<form class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput placeholder="Company (disabled)" disabled value="Google">
  </mat-form-field>
  <table class="example-full-width" cellspacing="0"><tr>
    <td><mat-form-field class="example-full-width">
      <input matInput placeholder="First name">
    </mat-form-field></td>
    <td><mat-form-field class="example-full-width">
      <input matInput placeholder="Long Last Name That Will Be Truncated">
    </mat-form-field></td>
  </tr></table>
  <p>
    <mat-form-field class="example-full-width">
      <textarea matInput placeholder="Address">1600 Amphitheatre Pkwy</textarea>
    </mat-form-field>
    <mat-form-field class="example-full-width">
      <textarea matInput placeholder="Address 2"></textarea>
    </mat-form-field>
  </p>
  <table class="example-full-width" cellspacing="0"><tr>
    <td><mat-form-field class="example-full-width">
      <input matInput placeholder="City">
    </mat-form-field></td>
    <td><mat-form-field class="example-full-width">
      <input matInput placeholder="State">
    </mat-form-field></td>
    <td><mat-form-field class="example-full-width">
      <input matInput #postalCode maxlength="5" placeholder="Postal Code" value="94043">
      <mat-hint align="end">{{postalCode.value.length}} / 5</mat-hint>
    </mat-form-field></td>
  </tr></table>
</form>`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Inputs in a form
*/
@Component({
  selector: 'input-form-example',
  templateUrl: 'input-form-example.html',
  styleUrls: ['input-form-example.css'],
})
export class InputFormExample {}`,
  viewCode: ``,
  cssCode: `
.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}
.example-full-width {
  width: 100%;
}`,
  isCodeVisible: false,
};

const inputWithHints = {
  beforeCodeTitle: 'Input with hints',
  htmlCode: `
<form class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput #message maxlength="256" placeholder="Message">
    <mat-hint align="start"><strong>Don't disclose personal info</strong> </mat-hint>
    <mat-hint align="end">{{message.value.length}} / 256</mat-hint>
  </mat-form-field>
</form>`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Input with hints
*/
@Component({
  selector: 'input-hint-example',
  templateUrl: 'input-hint-example.html',
  styleUrls: ['input-hint-example.css'],
})
export class InputHintExample {}`,
  viewCode: ``,
  cssCode: `
.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}
.example-full-width {
  width: 100%;
}`,
  isCodeVisible: false,
};

const inputsWithPrefixesAndSuffixes = {
  beforeCodeTitle: 'Inputs with prefixes and suffixes',
  htmlCode: `
<form class="example-form">
  <mat-form-field class="example-full-width">
    <span matPrefix>+1 &nbsp;</span>
    <input type="tel" matInput placeholder="Telephone">
    <mat-icon matSuffix>mode_edit</mat-icon>
  </mat-form-field>
</form>`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Inputs with prefixes and suffixes
*/
@Component({
  selector: 'input-prefix-suffix-example',
  templateUrl: 'input-prefix-suffix-example.html',
 styleUrls: ['input-prefix-suffix-example.css'],
})
export class InputPrefixSuffixExample {}`,
  viewCode: ``,
  cssCode: `
.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}
.example-full-width {
  width: 100%;
}`,
  isCodeVisible: false,
};

const datepickerOpenMethod = {
  beforeCodeTitle: 'Datepicker open method',
  htmlCode: `
<mat-form-field class="example-full-width">
  <input matInput [matDatepicker]="picker" placeholder="Choose a date">
    <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
<button mat-raised-button (click)="picker.open()">Open</button>`,
  tsCode: `
import {Component} from '@angular/core';\n
/** @title Datepicker open method */
@Component({
  selector: 'datepicker-api-example',
  templateUrl: 'datepicker-api-example.html',
  styleUrls: ['datepicker-api-example.css'],
})
export class DatepickerApiExample {}`,
  viewCode: ``,
  cssCode: ``,
  isCodeVisible: false,
};

const datepickerWithDifferentLocale = {
  beforeCodeTitle: 'Datepicker with different locale',
  htmlCode: `
<mat-form-field>
  <input matInput [matDatepicker]="dp" placeholder="Different locale">
  <mat-datepicker-toggle matSuffix [for]="dp"></mat-datepicker-toggle>
  <mat-datepicker #dp></mat-datepicker>
</mat-form-field>
<button mat-button (click)="french()">Dynamically switch to French</button>`,
  tsCode: `
import {Component} from '@angular/core';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
/** @title Datepicker with different locale */
@Component({
  selector: 'datepicker-locale-example',
  templateUrl: 'datepicker-locale-example.html',
  styleUrls: ['datepicker-locale-example.css'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},
    // \`MomentDateAdapter\` and \`MAT_MOMENT_DATE_FORMATS\` can be automatically provided by importing
    // \`MatMomentDateModule\` in your applications root module. We provide it at the component level
	// here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class DatepickerLocaleExample {
  constructor(private adapter: DateAdapter<any>) {}
  french() {
    this.adapter.setLocale('fr');
  }
}`,
  viewCode: ``,
  cssCode: `
		`,
  isCodeVisible: false,
};

const datepickerThatUsesMomentJsDates = {
  beforeCodeTitle: 'Datepicker that uses Moment.js dates',
  htmlCode: `
<mat-form-field>
  <input matInput [matDatepicker]="dp" placeholder="Moment.js datepicker" [formControl]="date">
  <mat-datepicker-toggle matSuffix [for]="dp"></mat-datepicker-toggle>
  <mat-datepicker #dp></mat-datepicker>
</mat-form-field>`,
  tsCode: `
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';\n
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the \`* as\`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the \`default as\` syntax.
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
const moment = _rollupMoment || _moment;\n
/** @title Datepicker that uses Moment.js dates */
@Component({
  selector: 'datepicker-moment-example',
  templateUrl: 'datepicker-moment-example.html',
  styleUrls: ['datepicker-moment-example.css'],
  providers: [
    // \`MomentDateAdapter\` and \`MAT_MOMENT_DATE_FORMATS\` can be automatically provided by importing
    // \`MatMomentDateModule\` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class DatepickerMomentExample {
// Datepicker takes \`Moment\` objects instead of \`Date\` objects.
  date = new FormControl(moment([2017, 0, 1]));
}`,
  viewCode: ``,
  cssCode: `
		`,
  isCodeVisible: false,
};

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-material-input',
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .example-form {
        min-width: 150px;
        max-width: 500px;
        width: 100%;
      }
      .example-full-width {
        width: 100%;
      }
      .example-form-field {
        width: 200px;
      }
    `,
  ],
})
export class InputComponent implements OnInit {
  exampleBasicInputs;
  exampleInputWithACustomErrorStateMatcher;
  exampleAutoResizingTextarea;
  exampleInputWithAClearButton;
  exampleInputWithErrorMessages;
  exampleInputsInAForm;
  exampleInputWithHints;
  exampleInputsWithPrefixesAndSuffixes;

  constructor() {}
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  emailFormControl2 = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  value = 'Clear me';

  ngOnInit() {
    this.exampleBasicInputs = basicInputs;
    this.exampleInputWithACustomErrorStateMatcher = inputWithACustomErrorStateMatcher;
    this.exampleAutoResizingTextarea = autoResizingTextarea;
    this.exampleInputWithAClearButton = inputWithAClearButton;
    this.exampleInputWithErrorMessages = inputWithErrorMessages;
    this.exampleInputsInAForm = inputsInAForm;
    this.exampleInputWithHints = inputWithHints;
    this.exampleInputsWithPrefixesAndSuffixes = inputsWithPrefixesAndSuffixes;
  }
}
