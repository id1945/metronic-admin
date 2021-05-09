import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

const basicDemo = {
  beforeCodeTitle: 'Basic demo',
  htmlCode: `
<div class="example-preview">
  <div>
    <ngb-rating [(rate)]="currentRate"></ngb-rating>
    <div class="separator separator-dashed my-6"></div>
    <pre>Rate: <b>{{currentRate}}</b></pre>
  </div>
</div>
`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
    selector: 'ngbd-rating-basic',
    templateUrl: './rating-basic.html'
})
export class NgbdRatingBasic {
    currentRate = 8;
}
`,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const eventsAndReadonlyRatings = {
  beforeCodeTitle: 'Events and readonly ratings',
  htmlCode: `
<div class="example-preview">
  <div>
    <pre>Selected: <b>{{selected}}</b></pre>
    <pre>Hovered: <b>{{hovered}}</b></pre>
    <ngb-rating [(rate)]="selected" (hover)="hovered=$event" (leave)="hovered=0" [readonly]="readonly"></ngb-rating>
  </div>
</div>
<div class="separator separator-dashed my-6"></div>
<div class="example-preview">
  <div>
    <button class="btn btn-sm btn-{{readonly ? 'danger' : 'success'}}" (click)="readonly = !readonly">
      {{ readonly ? "readonly" : "editable"}}
    </button>
  </div>
</div>
`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
  selector: 'ngbd-rating-events',
  templateUrl: './rating-events.html'
})
export class NgbdRatingEvents {
  selected = 0;
  hovered = 0;
  readonly = false;
}
		`,
  viewCode: ``,
  isCodeVisible: false,
};

const customStarTemplate = {
  beforeCodeTitle: 'Custom star template',
  htmlCode: `
<div class="example-preview">
  <span>
    Custom rating template provided as child element
  </span>
  <div>
    <ngb-rating [(rate)]="currentRate1">
      <ng-template let-fill="fill" let-index="index">
        <span class="star" [class.filled]="fill === 100" [class.bad]="index < 3">&#9733;</span>
      </ng-template>
	</ngb-rating>
  </div>
</div>
<div class="separator separator-dashed my-6"></div>
<div class="example-preview">
  <div>
    <pre>Rate: <b>{{currentRate1}}</b></pre>
  </div>
</div>
`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
    selector: 'ngbd-rating-template',
    templateUrl: './rating-template.html',
    styles: [\`
        .star {
            font-size: 1.5rem;
                color: #b0c4de;
            }
            .filled {
                color: #1e90ff;
            }
            .bad {
                color: #deb0b0;
            }
            .filled.bad {
                color: #ff1e1e;
            }
        \`]
})
export class NgbdRatingTemplate {
    currentRate = 6;
}
 `,
  viewCode: ``,
  isCodeVisible: false,
};

const customDecimalRating = {
  beforeCodeTitle: 'Custom decimal rating',
  htmlCode: `
<div class="example-preview">
  <span>
    Custom rating template provided via a variable. Shows fine-grained rating display
  </span>
  <div>
    <ng-template #t let-fill="fill">
      <span class="star2" [class.full]="fill === 100">
        <span class="half" [style.width.%]="fill">&hearts;</span>&hearts;
      </span>
    </ng-template>
    <ngb-rating [(rate)]="currentRate2" [starTemplate]="t" [readonly]="true" max="5"></ngb-rating>
  </div>
</div>
<div class="separator separator-dashed my-6"></div>
<div class="example-preview">
  <div>
    <pre>Rate: <b>{{currentRate2}}</b></pre>
    <button class="btn btn-sm btn-primary" (click)="currentRate2 = 1.35">1.35</button>
    <button class="btn btn-sm btn-primary" (click)="currentRate2 = 4.72">4.72</button>
  </div>
</div>
`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
    selector: 'ngbd-rating-decimal',
    templateUrl: './rating-decimal.html',
    styles: [\`
        .star {
			position: relative;
            display: inline-block;
            font-size: 3rem;
            color: #d3d3d3;
        }
        .full {
             color: red;
        }
        .half {
            position: absolute;
            display: inline-block;
            overflow: hidden;
            color: red;
        }
   \`]
})
export class NgbdRatingDecimal {
    currentRate = 3.14;
}
	`,
  viewCode: ``,
  isCodeVisible: false,
};

const formIntegration = {
  beforeCodeTitle: 'Form integration',
  htmlCode: `
<div class="example-preview">
  <span>
    NgModel and reactive forms can be used without the 'rate' binding
  </span>
  <div>
    <div class="form-group">
	  <ngb-rating [formControl]="ctrl"></ngb-rating>
      <div class="form-text small">
        <div *ngIf="ctrl.valid" class="text-success">Thanks!</div>
        <div *ngIf="ctrl.invalid" class="text-danger">Please rate us</div>
      </div>
    </div>
  </div>
</div>
<div class="example-preview">
  <span>Model: <b>{{ ctrl.value }}</b></span>
  <div>
    <button class="btn btn-sm btn-{{ ctrl.disabled ? 'danger' : 'success'}}" (click)="toggle()">
      {{ ctrl.disabled ? "control disabled" : " control enabled" }}
    </button>
	<button class="btn btn-sm btn-primary" (click)="ctrl.setValue(null)">Clear</button>
  </div>
</div>
		`,
  tsCode: `
import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';\n
@Component({
    selector: 'ngbd-rating-form',
    templateUrl: './rating-form.html'
})
export class NgbdRatingForm {
    ctrl = new FormControl(null, Validators.required);\n
    toggle() {
        if (this.ctrl.disabled) {
            this.ctrl.enable();
        } else {
            this.ctrl.disable();
        }
    }
}
`,
  viewCode: ``,
  isCodeVisible: false,
};

const globalConfigurationOfRatings = {
  beforeCodeTitle: 'Global configuration of ratings',
  htmlCode: `
<div class="example-preview">
  <span>
    This rating uses customized default values.
  </span>
  <div>
    <ngb-rating [rate]="3" max="5" [readonly]="true"></ngb-rating>
  </div>
</div>
		`,
  tsCode: `
import {Component} from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';\n
@Component({
    selector: 'ngbd-rating-config',
    templateUrl: './rating-config.html',
    providers: [NgbRatingConfig] // add NgbRatingConfig to the component providers
})
export class NgbdRatingConfig {
    constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
    }
}
`,
  viewCode: ``,
  isCodeVisible: false,
};

@Component({
  selector: 'app-ng-rating',
  templateUrl: './rating.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
		.star {
		f	ont-size: 1.5rem;
			color: #b0c4de;
		}
		.filled {
			color: #1e90ff;
		}
		.bad {
			color: #deb0b0;
		}
		.filled.bad {
			color: #ff1e1e;
		}
		.star2 {
			position: relative;
			display: inline-block;
			font-size: 3rem;
			color: #d3d3d3;
		  }
		.full {
			color: red;
		  }
		.half {
			position: absolute;
			display: inline-block;
			overflow: hidden;
			color: red;
		}
	`,
  ],
  providers: [NgbRatingConfig], // add NgbRatingConfig to the component providers
})
export class RatingComponent implements OnInit {
  exampleBasicDemo;
  exampleEventsAndReadonlyRatings;
  exampleCustomStarTemplate;
  exampleCustomDecimalRating;
  exampleFormIntegration;
  exampleGlobalConfigurationOfRatings;

  currentRate = 8;
  currentRate1 = 6;
  currentRate2 = 3.14;
  selected = 0;
  hovered = 0;
  readonly = false;
  ctrl = new FormControl(null, Validators.required);

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }

  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    // config.max = 5;
    // config.readonly = true;
  }

  ngOnInit() {
    this.exampleBasicDemo = basicDemo;
    this.exampleEventsAndReadonlyRatings = eventsAndReadonlyRatings;
    this.exampleCustomStarTemplate = customStarTemplate;
    this.exampleCustomDecimalRating = customDecimalRating;
    this.exampleFormIntegration = formIntegration;
    this.exampleGlobalConfigurationOfRatings = globalConfigurationOfRatings;
  }
}
