import {
  Component,
  OnInit,
  ElementRef,
  Input,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

const simpleFormField = {
  beforeCodeTitle: 'Simple form field',
  htmlCode: `
<div class="example-container">
  <mat-form-field>
     <input matInput placeholder="Input">
  </mat-form-field>

  <mat-form-field>
    <textarea matInput placeholder="Textarea"></textarea>
  </mat-form-field>

  <mat-form-field>
    <mat-select placeholder="Select">
      <mat-option value="option">Option</mat-option>
    </mat-select>
  </mat-form-field>
</div>`,
  tsCode: `
import {Component} from '@angular/core';\n
/** @title Simple form field */
=@Component({
  selector: 'form-field-overview-example',
  templateUrl: 'form-field-overview-example.html',
  styleUrls: ['form-field-overview-example.css']
})
export class FormFieldOverviewExample {}`,
  cssCode: `
.example-container {
  display: flex;
  flex-direction: column;
}
.example-container > * {
  width: 100%;
}`,
  viewCode: ``,
  isCodeVisible: false,
};

const formFieldAppearanceVariants = {
  beforeCodeTitle: 'Form field appearance variants',
  htmlCode: `
<p>
  <mat-form-field appearance="legacy">
    <mat-label>Legacy form field</mat-label>
      <input matInput placeholder="Placeholder">
      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
      <mat-hint>Hint</mat-hint>
  </mat-form-field>
</p>
<p>
  <mat-form-field appearance="standard">
    <mat-label>Standard form field</mat-label>
    <input matInput placeholder="Placeholder">
    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    <mat-hint>Hint</mat-hint>
  </mat-form-field>
</p>
<p>
  <mat-form-field appearance="fill">
    <mat-label>Fill form field</mat-label>
    <input matInput placeholder="Placeholder">
    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
     <mat-hint>Hint</mat-hint>
  </mat-form-field>
</p>
<p>
  <mat-form-field appearance="outline">
    <mat-label>Outline form field</mat-label>
    <input matInput placeholder="Placeholder">
    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    <mat-hint>Hint</mat-hint>
  </mat-form-field>
</p>
  `,
  tsCode: `
import {Component} from '@angular/core';\n

/** @title Form field appearance variants */
@Component({
  selector: 'form-field-appearance-example',
  templateUrl: 'form-field-appearance-example.html',
  styleUrls: ['form-field-appearance-example.css'],
})
export class FormFieldAppearanceExample {}`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
};

const formFieldWithLabel = {
  beforeCodeTitle: 'Form field with label',
  htmlCode: `
<div class="example-container">
  <form class="example-container" [formGroup]="options">
    <mat-checkbox formControlName="hideRequired">Hide required marker</mat-checkbox>
    <div>
      <label>Float label: </label>
      <mat-radio-group formControlName="floatLabel">
        <mat-radio-button value="auto">Auto</mat-radio-button>
        <mat-radio-button value="always">Always</mat-radio-button>
        <mat-radio-button value="never">Never</mat-radio-button>
      </mat-radio-group>
    </div>
  </form>
  <mat-form-field
    [hideRequiredMarker]="options.value.hideRequired"
    [floatLabel]="options.value.floatLabel">
    <input matInput placeholder="Simple placeholder" required>
  </mat-form-field>
  <mat-form-field [floatLabel]="options.value.floatLabel">
    <mat-label>Both a label and a placeholder</mat-label>
    <input matInput placeholder="Simple placeholder">
  </mat-form-field>
  <mat-form-field
    [hideRequiredMarker]="options.value.hideRequired"
    [floatLabel]="options.value.floatLabel">
    <mat-select required>
      <mat-option>-- None --</mat-option>
      <mat-option value="option">Option</mat-option>
    </mat-select>
    <mat-placeholder><mat-icon>favorite</mat-icon> <b> Fancy</b> <i> placeholder</i></mat-placeholder>
  </mat-form-field>
</div>`,
  tsCode: `
import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
/** @title Form field with label */
@Component({
  selector: 'form-field-label-example',
  templateUrl: 'form-field-label-example.html',
  styleUrls: ['form-field-label-example.css']
})
export class FormFieldLabelExample {
  options: FormGroup;
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }
}`,
  viewCode: ``,
  cssCode: `
.example-container {
  display: flex;
  flex-direction: column;
}
.example-container > * {
  width: 100%;
}
.example-container form {
  margin-bottom: 20px;
}
.example-container form > * {
  margin: 5px 0;
}
.example-container .mat-radio-button {
  margin: 0 5px;
}`,
  isCodeVisible: false,
};

const formFieldWithHints = {
  beforeCodeTitle: 'Form field with hints',
  htmlCode: `
<div class="example-container">
  <mat-form-field hintLabel="Max 10 characters">
    <input matInput #input maxlength="10" placeholder="Enter some input">
    <mat-hint align="end">{{input.value?.length || 0}}/10</mat-hint>
  </mat-form-field>
  <mat-form-field>
    <mat-select placeholder="Select me">
      <mat-option value="option">Option</mat-option>
    </mat-select>
    <mat-hint align="end">Here's the dropdown arrow ^</mat-hint>
  </mat-form-field>
</div>`,
  tsCode: `
import {Component} from '@angular/core';\n
/** @title Form field with hints */
@Component({
  selector: 'form-field-hint-example',
  templateUrl: 'form-field-hint-example.html',
  styleUrls: ['form-field-hint-example.css']
})
export class FormFieldHintExample {}`,
  viewCode: ``,
  cssCode: `
.example-container {
  display: flex;
  flex-direction: column;
}
.example-container > * {
  width: 100%;
}`,
  isCodeVisible: false,
};

const formFieldWithErrorMessages = {
  beforeCodeTitle: 'Form field with error messages',
  htmlCode: `
<div class="example-container">
  <mat-form-field>
    <input matInput placeholder="Enter your email" [formControl]="email" required>
      <mat-error *ngIf="email.invalid">{{getErrorMessage()}}</mat-error>
  </mat-form-field>
</div>`,
  tsCode: `
import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';\n
/** @title Form field with error messages */
@Component({
  selector: 'form-field-error-example',
  templateUrl: 'form-field-error-example.html',
  styleUrls: ['form-field-error-example.css']
})
export class FormFieldErrorExample {
  email = new FormControl('', [Validators.required, Validators.email]);\n
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
    '';
  }
}`,
  viewCode: ``,
  cssCode: `
.example-container {
  display: flex;
  flex-direction: column;
}
.example-container > * {
  width: 100%;
}`,
  isCodeVisible: false,
};

const formFieldWithPrefixSuffix = {
  beforeCodeTitle: 'Form field with prefix & suffix',
  htmlCode: `
<div class="example-container">
  <mat-form-field>
    <input matInput placeholder="Enter your password" [type]="hide ? 'password' : 'text'">
    <mat-icon matSuffix (click)="hide = !hide">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>
  </mat-form-field>
  <mat-form-field>
    <input matInput placeholder="Amount" type="number" class="example-right-align">
    <span matPrefix>$&nbsp;</span>
    <span matSuffix>.00</span>
  </mat-form-field>
</div>`,
  tsCode: `
import {Component} from '@angular/core';\n
/** @title Form field with prefix & suffix */
@Component({
  selector: 'form-field-prefix-suffix-example',
  templateUrl: 'form-field-prefix-suffix-example.html',
  styleUrls: ['form-field-prefix-suffix-example.css']
})
export class FormFieldPrefixSuffixExample {
  hide = true;
}`,
  viewCode: ``,
  cssCode: `
.example-container {
  display: flex;
  flex-direction: column;
}
.example-container > * {
  width: 100%;
}
.example-right-align {
  text-align: right;
}
input.example-right-align::-webkit-outer-spin-button,
input.example-right-align::-webkit-inner-spin-button {
  display: none;
}
input.example-right-align {
  -moz-appearance: textfield;
}`,
  isCodeVisible: false,
};

const formFieldTheming = {
  beforeCodeTitle: 'Form field theming',
  htmlCode: `
<form class="example-container" [formGroup]="options" [style.fontSize.px]="getFontSize()">
  <mat-form-field [color]="options.value.color">
    <mat-select placeholder="Color" formControlName="color">
      <mat-option value="primary">Primary</mat-option>
      <mat-option value="accent">Accent</mat-option>
      <mat-option value="warn">Warn</mat-option>
    </mat-select>
  </mat-form-field>
  <mat-form-field [color]="options.value.color">
    <input matInput type="number" placeholder="Font size (px)" formControlName="fontSize" min="10">
     <mat-error *ngIf="options.get('fontSize')?.invalid">Min size: 10px</mat-error>
  </mat-form-field>
 </form>`,
  tsCode: `
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';\n
/** @title Form field theming */
@Component({
  selector: 'form-field-theming-example',
  templateUrl: 'form-field-theming-example.html',
  styleUrls: ['form-field-theming-example.css']
})
export class FormFieldThemingExample {
  options: FormGroup;\n
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      'color': 'primary',
      'fontSize': [16, Validators.min(10)],
    });
  }
  getFontSize() {
    return Math.max(10, this.options.value.fontSize);
  }
}`,
  viewCode: ``,
  cssCode: `
.example-container {
  display: flex;
  flex-direction: column;
}
.example-container > * {
  width: 100%;
}`,
  isCodeVisible: false,
};

const formFieldWithCustomTelephoneNumberInputControl = {
  beforeCodeTitle: 'Form field with custom telephone number input control.',
  htmlCode: `
<div [formGroup]="parts">
  <input class="area" formControlName="area" size="3">
  <span>&ndash;</span>
  <input class="exchange" formControlName="exchange" size="3">
  <span>&ndash;</span>
  <input class="subscriber" formControlName="subscriber" size="4">
</div>`,
  tsCode: `
import {FocusMonitor} from '@angular/cdk/a11y';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {Component, ElementRef, Input, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatFormFieldControl} from '@angular/material';
import {Subject} from 'rxjs/Subject';\n
/** Data structure for holding telephone number. */
export class MyTel {
  constructor(public area: string, public exchange: string, public subscriber: string) {}
}
/** Custom \`MatFormFieldControl\` for telephone number input. */
@Component({
  selector: 'my-tel-input',
  templateUrl: 'form-field-custom-control-example.html',
  styleUrls: ['form-field-custom-control-example.css'],
  providers: [{provide: MatFormFieldControl, useExisting: MyTelInput}],
  host: {
    '[class.floating]': 'shouldLabelFloat',
    '[id]': 'id',
    '[attr.aria-describedby]': 'describedBy',
  }
})
export class MyTelInput implements MatFormFieldControl<MyTel>, OnDestroy {
  static nextId = 0;
  parts: FormGroup;
  stateChanges = new Subject<void>();
  focused = false;
  ngControl = null;
  errorState = false;
  controlType = 'my-tel-input';
  get empty() {
    let n = this.parts.value;
    return !n.area && !n.exchange && !n.subscriber;
  }
  get shouldLabelFloat() { return this.focused || !this.empty; }
  id = \`my-tel-input-\${MyTelInput.nextId++}\`;
  describedBy = '';\n
  @Input()
  get placeholder() { return this._placeholder; }
  set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }\n
  private _placeholder: string;
  @Input()
  get required() { return this._required; }
  set required(req) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }\n
  private _required = false;\n
  @Input()
  get disabled() { return this._disabled; }
  set disabled(dis) {
    this._disabled = coerceBooleanProperty(dis);
    this.stateChanges.next();
  }\n
  private _disabled = false;\n
  @Input()
  get value(): MyTel | null {
    let n = this.parts.value;
    if (n.area.length == 3 && n.exchange.length == 3 && n.subscriber.length == 4) {
      return new MyTel(n.area, n.exchange, n.subscriber);
    }
    return null;
  }
  set value(tel: MyTel | null) {
    tel = tel || new MyTel('', '', '');
    this.parts.setValue({area: tel.area, exchange: tel.exchange, subscriber: tel.subscriber});
    this.stateChanges.next();
  }\n
  constructor(fb: FormBuilder, private fm: FocusMonitor, private elRef: ElementRef) {
    this.parts = fb.group({
      'area': '',
      'exchange': '',
     'subscriber': '',
    });\n
    fm.monitor(elRef.nativeElement, true).subscribe((origin) => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }\n
  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef.nativeElement);
  }\n
  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }\n
  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() != 'input') {
      this.elRef.nativeElement.querySelector('input').focus();
    }
  }
}\n\n
/** @title Form field with custom telephone number input control. */
@Component({
  selector: 'form-field-custom-control-example',
  template: \`
    <mat-form-field>
      <my-tel-input placeholder="Phone number" required></my-tel-input>
      <mat-icon matSuffix>phone</mat-icon>
      <mat-hint>Include area code</mat-hint>
    </mat-form-field>
  \`
})
export class FormFieldCustomControlExample {}`,
  viewCode: ``,
  cssCode: `
div {
  display: flex;
}\n
input {
  border: none;
  background: none;
  padding: 0;
  outline: none;
  font: inherit;
  text-align: center;
}\n
span {
  opacity: 0;
  transition: opacity 200ms;
}\n
:host.floating span {
  opacity: 1;
}`,
  isCodeVisible: false,
};

@Component({
  selector: 'app-material-formfield',
  templateUrl: './formfield.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .example-container {
        display: flex;
        flex-direction: column;
      }
      .example-container > * {
        width: 100%;
      }

      .example-container form {
        margin-bottom: 20px;
      }
      .example-container form > * {
        margin: 5px 0;
      }
      .example-container .mat-radio-button {
        margin: 0 5px;
      }
      .example-right-align {
        text-align: right;
      }
      input.example-right-align::-webkit-outer-spin-button,
      input.example-right-align::-webkit-inner-spin-button {
        display: none;
      }
      input.example-right-align {
        -moz-appearance: textfield;
      }
    `,
  ],
})
export class FormfieldComponent implements OnInit {
  exampleSimpleFormField;
  exampleFormFieldWithLabel;
  exampleFormFieldWithHints;
  exampleFormFieldWithErrorMessages;
  exampleFormFieldWithPrefixSuffix;
  exampleFormFieldTheming;
  exampleFormFieldWithCustomTelephoneNumberInputControl;
  exampleFormFieldAppearanceVariants;
  options: FormGroup;
  options2: FormGroup;

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  getErrorMessage() {
    return this.email.hasError('required')
      ? 'You must enter a value'
      : this.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });

    this.options2 = fb.group({
      // tslint:disable-next-line:object-literal-key-quotes
      color: 'primary',
      // tslint:disable-next-line:object-literal-key-quotes
      fontSize: [16, Validators.min(10)],
    });
  }

  getFontSize() {
    return Math.max(10, this.options2.value.fontSize);
  }

  ngOnInit() {
    this.exampleSimpleFormField = simpleFormField;
    this.exampleFormFieldWithLabel = formFieldWithLabel;
    this.exampleFormFieldWithHints = formFieldWithHints;
    this.exampleFormFieldWithErrorMessages = formFieldWithErrorMessages;
    this.exampleFormFieldWithPrefixSuffix = formFieldWithPrefixSuffix;
    this.exampleFormFieldTheming = formFieldTheming;
    this.exampleFormFieldWithCustomTelephoneNumberInputControl = formFieldWithCustomTelephoneNumberInputControl;
    this.exampleFormFieldAppearanceVariants = formFieldAppearanceVariants;
  }
}
