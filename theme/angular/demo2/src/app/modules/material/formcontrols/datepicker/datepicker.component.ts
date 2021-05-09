import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';

const basicDatepicker = {
  beforeCodeTitle: 'Basic datepicker',
  htmlCode: `
<mat-form-field>
  <input matInput [matDatepicker]="picker" placeholder="Choose a date">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>`,
  tsCode: `
import {Component} from '@angular/core';\n
/** @title Basic datepicker */
@Component({
  selector: 'datepicker-overview-example',
  templateUrl: 'datepicker-overview-example.html',
  styleUrls: ['datepicker-overview-example.css'],
})
export class DatepickerOverviewExample {}`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
};

const datepickerSelectedValue = {
  beforeCodeTitle: 'Datepicker selected value',
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
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';\n
/** @title Datepicker selected value */
@Component({
  selector: 'datepicker-value-example',
  templateUrl: 'datepicker-value-example.html',
  styleUrls: ['datepicker-value-example.css'],
})
export class DatepickerValueExample {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
}`,
  viewCode: ``,
  cssCode: ``,
  isCodeVisible: false,
};

const datepickerStartDate = {
  beforeCodeTitle: 'Datepicker start date',
  htmlCode: `
<mat-form-field>
  <input matInput [matDatepicker]="picker" placeholder="Choose a date">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker startView="year" [startAt]="startDate"></mat-datepicker>
</mat-form-field>`,
  tsCode: `
import {Component} from '@angular/core';\n
/** @title Datepicker start date */
@Component({
  selector: 'datepicker-start-view-example',
  templateUrl: 'datepicker-start-view-example.html',
  styleUrls: ['datepicker-start-view-example.css'],
})
export class DatepickerStartViewExample {
  startDate = new Date(1990, 0, 1);
}`,
  viewCode: ``,
  cssCode: ``,
  isCodeVisible: false,
};

const datepickerWithMinMaxValidation = {
  beforeCodeTitle: 'Datepicker with min & max validation',
  htmlCode: `
<mat-form-field class="example-full-width">
  <input matInput [min]="minDate" [max]="maxDate" [matDatepicker]="picker" placeholder="Choose a date">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>`,
  tsCode: `
import {Component} from '@angular/core';\n
/** @title Datepicker with min & max validation */
@Component({
  selector: 'datepicker-min-max-example',
  templateUrl: 'datepicker-min-max-example.html',
  styleUrls: ['datepicker-min-max-example.css'],
})
export class DatepickerMinMaxExample {
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
}`,
  viewCode: ``,
  cssCode: ``,
  isCodeVisible: false,
};

const datepickerWithFilterValidation = {
  beforeCodeTitle: 'Datepicker with filter validation',
  htmlCode: `
<mat-form-field class="example-full-width">
  <input matInput [matDatepickerFilter]="myFilter" [matDatepicker]="picker" placeholder="Choose a date">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>`,
  tsCode: `
import {Component} from '@angular/core';\n
/** @title Datepicker with filter validation */
@Component({
  selector: 'datepicker-filter-example',
  templateUrl: 'datepicker-filter-example.html',
  styleUrls: ['datepicker-filter-example.css'],
})
export class DatepickerFilterExample {
  myFilter = (d: Date): boolean => {
    const day = d.day();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
}`,
  viewCode: ``,
  cssCode: ``,
  isCodeVisible: false,
};

const datepickerInputAndChangeEvents = {
  beforeCodeTitle: 'Datepicker input and change events',
  htmlCode: `
<mat-form-field>
  <input matInput [matDatepicker]="picker" placeholder="Input & change events"
    (dateInput)="addEvent('input', $event)" (dateChange)="addEvent('change', $event)">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
<div class="example-events">
  <div *ngFor="let e of events">{{e}}</div>
</div>`,
  tsCode: `
import {Component} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';\n
/** @title Datepicker input and change events */
@Component({
  selector: 'datepicker-events-example',
  templateUrl: 'datepicker-events-example.html',
  styleUrls: ['datepicker-events-example.css'],
})
export class DatepickerEventsExample {
  events: string[] = [];\n
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  this.events.push(\`$\{type\}: $\{event.value\}\`);
  }
}`,
  viewCode: ``,
  cssCode: ``,
  isCodeVisible: false,
};

const disabledDatepicker = {
  beforeCodeTitle: 'Disabled datepicker',
  htmlCode: `
<p>
  <mat-form-field>
    <input matInput [matDatepicker]="dp1" placeholder="Completely disabled" disabled>
    <mat-datepicker-toggle matSuffix [for]="dp1"></mat-datepicker-toggle>
    <mat-datepicker #dp1></mat-datepicker>
  </mat-form-field>
</p>
<p>
  <mat-form-field>
    <input matInput [matDatepicker]="dp2" placeholder="Popup disabled">
    <mat-datepicker-toggle matSuffix [for]="dp2" disabled></mat-datepicker-toggle>
    <mat-datepicker #dp2></mat-datepicker>
  </mat-form-field>
</p>
<p>
  <mat-form-field>
    <input matInput [matDatepicker]="dp3" placeholder="Input disabled" disabled>
	<mat-datepicker-toggle matSuffix [for]="dp3">
  </mat-datepicker-toggle>
  <mat-datepicker #dp3 disabled="false"></mat-datepicker>
    </mat-form-field>
</p>`,
  tsCode: `
import {Component} from '@angular/core';\n
/** @title Disabled datepicker */
@Component({
  selector: 'datepicker-disabled-example',
  templateUrl: 'datepicker-disabled-example.html',
  styleUrls: ['datepicker-disabled-example.css'],
})
export class DatepickerDisabledExample {}`,
  viewCode: ``,
  cssCode: ``,
  isCodeVisible: false,
};

const datepickerTouchUI = {
  beforeCodeTitle: 'Datepicker touch UI',
  htmlCode: `
<mat-form-field class="example-full-width">
  <input matInput [matDatepicker]="picker" placeholder="Choose a date">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker touchUi="true" #picker></mat-datepicker>`,
  tsCode: `
import {Component} from '@angular/core';\n
/** @title Datepicker touch UI */
@Component({
  selector: 'datepicker-touch-example',
  templateUrl: 'datepicker-touch-example.html',
  styleUrls: ['datepicker-touch-example.css'],
})
export class DatepickerTouchExample {}`,
  viewCode: ``,
  cssCode: ``,
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
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';\n
/** @title Datepicker with different locale */
@Component({
  selector: 'datepicker-locale-example',
  templateUrl: 'datepicker-locale-example.html',
  styleUrls: ['datepicker-locale-example.css'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},\n
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
  cssCode: ``,
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
  cssCode: ``,
  isCodeVisible: false,
};

const datepickerWithCustomFormats = {
  beforeCodeTitle: 'Datepicker with custom formats',
  htmlCode: `
<mat-form-field>
  <input matInput [matDatepicker]="dp" placeholder="Verbose datepicker" [formControl]="date">
  <mat-datepicker-toggle matSuffix [for]="dp"></mat-datepicker-toggle>
  <mat-datepicker #dp></mat-datepicker>
</mat-form-field>`,
  tsCode: `
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';\n
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the \`* as\`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the \`default as\` syntax.
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
const moment = _rollupMoment || _moment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
/** @title Datepicker with custom formats */
@Component({
  selector: 'datepicker-formats-example',
  templateUrl: 'datepicker-formats-example.html',
  styleUrls: ['datepicker-formats-example.css'],
  providers: [
  // \`MomentDateAdapter\` can be automatically provided by importing \`MomentDateModule\` in your
  // application's root module. We provide it at the component level here, due to limitations of
  // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
	{provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class DatepickerFormatsExample {
  date = new FormControl(moment());
}`,
  viewCode: ``,
  cssCode: ``,
  isCodeVisible: false,
};

const usesMomentJsDates = {
  beforeCodeTitle: 'Datepicker uses Moment.js dates',
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
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the \`* as\`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the \`default as\` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;

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
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
};

const moment = _moment;

@Component({
  selector: 'app-material-datepicker',
  templateUrl: './datepicker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .example-events {
        width: 400px;
        height: 200px;
        border: 1px solid #555;
        overflow: auto;
      }
    `,
  ],
  providers: [
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class DatepickerComponent implements OnInit {
  exampleBasicDatepicker;
  exampleDatepickerStartDate;
  exampleDatepickerSelectedValue;
  exampleDatepickerWithMinMaxValidation;
  exampleDatepickerWithFilterValidation;
  exampleDatepickerInputAndChangeEvents;
  exampleDisabledDatepicker;
  exampleDatepickerTouchUI;
  exampleDatepickerOpenMethod;
  exampleDatepickerWithDifferentLocale;
  exampleDatepickerThatUsesMomentJsDates;
  exampleDatepickerWithCustomFormats;
  exampleUsesMomentJsDates;

  startDate = new Date(1990, 0, 1);
  date = new FormControl(new Date());
  date10 = new FormControl(moment([2017, 0, 1]));

  serializedDate = new FormControl(new Date().toISOString());
  minDate = new Date(2011, 0, 1);
  maxDate = new Date(2018, 11, 1);

  events: string[] = [];
  constructor() {}

  ngOnInit() {
    this.exampleBasicDatepicker = basicDatepicker;
    this.exampleDatepickerStartDate = datepickerStartDate;
    this.exampleDatepickerSelectedValue = datepickerSelectedValue;
    this.exampleDatepickerWithMinMaxValidation = datepickerWithMinMaxValidation;
    this.exampleDatepickerWithFilterValidation = datepickerWithFilterValidation;
    this.exampleDatepickerInputAndChangeEvents = datepickerInputAndChangeEvents;
    this.exampleDisabledDatepicker = disabledDatepicker;
    this.exampleDatepickerTouchUI = datepickerTouchUI;
    this.exampleDatepickerOpenMethod = datepickerOpenMethod;
    this.exampleDatepickerWithDifferentLocale = datepickerWithDifferentLocale;
    this.exampleDatepickerThatUsesMomentJsDates = datepickerThatUsesMomentJsDates;
    this.exampleDatepickerWithCustomFormats = datepickerWithCustomFormats;
    this.exampleUsesMomentJsDates = usesMomentJsDates;
  }

  myFilter = (d: any): boolean => {
    const day = d.day();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
    // tslint:disable-next-line:semicolon
  };

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
}
