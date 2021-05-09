import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

const contextualProgressBars = {
  beforeCodeTitle: 'Contextual progress bars',
  htmlCode: `
<div class="example-preview">
  <div>
    <p>
      <ngb-progressbar type="success" [value]="25"></ngb-progressbar>
    </p>
    <p>
      <ngb-progressbar type="info" [value]="50"></ngb-progressbar>
    </p>
    <p>
      <ngb-progressbar type="warning" [value]="75"></ngb-progressbar>
    </p>
    <p>
      <ngb-progressbar type="danger" [value]="100"></ngb-progressbar>
    </p>
  </div>
</div>
`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
    selector: 'ngbd-progressbar-basic',
    templateUrl: './progressbar-basic.html',
    styles: [\`
        ngb-progressbar {
            margin-top: 5rem;
        }
   \`]
})
export class NgbdProgressbarBasic {}
		`,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const progressBarsWithCurrentValueLabels = {
  beforeCodeTitle: 'Progress bars with current value labels',
  htmlCode: `
<div class="example-preview">
  <div>
    <p>
      <ngb-progressbar showValue="true" type="success" [value]="25"></ngb-progressbar>
    </p>
    <p>
      <ngb-progressbar [showValue]="true" type="info" [value]="50"></ngb-progressbar>
    </p>
    <p>
      <ngb-progressbar showValue="true" type="warning" [value]="150" [max]="200"></ngb-progressbar>
    </p>
    <p>
      <ngb-progressbar [showValue]="true" type="danger" [value]="150" [max]="150"></ngb-progressbar>
    </p>
  </div>
</div>
		`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
    selector: 'ngbd-progressbar-showvalue',
    templateUrl: './progressbar-showvalue.html',
    styles: [\`
        ngb-progressbar {
            margin-top: 5rem;
        }
   \`]
})
export class NgbdProgressbarShowvalue {
}
		`,
  viewCode: ``,
  isCodeVisible: false,
};

const stripedProgressBars = {
  beforeCodeTitle: 'Striped progress bars',
  htmlCode: `
<div class="example-preview">
  <div>
    <p>
      <ngb-progressbar type="success" [value]="25" [striped]="true"></ngb-progressbar>
    </p>
    <p>
      <ngb-progressbar type="info" [value]="50" [striped]="true"></ngb-progressbar>
    </p>
    <p>
      <ngb-progressbar type="warning" [value]="75" [striped]="true"></ngb-progressbar>
    </p>
    <p>
      <ngb-progressbar type="danger" [value]="100" [striped]="true"></ngb-progressbar>
    </p>
  </div>
</div>
		`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
    selector: 'ngbd-progressbar-striped',
    templateUrl: './progressbar-striped.html'
})
export class NgbdProgressbarStriped {
}
		`,
  viewCode: ``,
  isCodeVisible: false,
};

const progressBarsWithCustomLabels = {
  beforeCodeTitle: 'Progress bars with custom labels',
  htmlCode: `
<div class="example-preview">
  <div>
    <p>
      <ngb-progressbar type="success" [value]="25">25</ngb-progressbar>
    </p>
    <p>
      <ngb-progressbar type="info" [value]="50">Copying file
		<b>2 of 4</b>...
	  </ngb-progressbar>
    </p>
    <p>
      <ngb-progressbar type="warning" [value]="75" [striped]="true" [animated]="true">
        <i>50%</i>
      </ngb-progressbar>
    </p>
    <p>
      <ngb-progressbar type="danger" [value]="100" [striped]="true">Completed!</ngb-progressbar>
    </p>
  </div>
</div>
`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
    selector: 'ngbd-progressbar-labels',
    templateUrl: './progressbar-labels.html',
    styles: [\`
        ngb-progressbar {
            margin-top: 5rem;
        }
    \`]
})
export class NgbdProgressbarLabels {
}
`,
  viewCode: ``,
  isCodeVisible: false,
};

const progressBarsWithHeight = {
  beforeCodeTitle: 'Progress bars with height',
  htmlCode: `
<div class="example-preview">
  <div>
    <p>
      <ngb-progressbar type="success" [value]="25">default</ngb-progressbar>
    </p>
    <p>
      <ngb-progressbar type="info" [value]="50" height="10px">10px</ngb-progressbar>
    </p>
    <p>
      <ngb-progressbar type="warning" [value]="75" height=".5rem">.5rem</ngb-progressbar>
    </p>
    <p>
      <ngb-progressbar type="danger" [value]="100" [height]="height">{{height}}</ngb-progressbar>
    </p>
  </div>
</div>
		`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
    selector: 'ngbd-progressbar-height',
    templateUrl: './progressbar-height.html',
    styles: [\`
        ngb-progressbar {
            margin-top: 5rem;
        }
    \`]
})
export class NgbdProgressbarHeight {
    height = '20px';
}
`,
  viewCode: ``,
  isCodeVisible: false,
};

const globalConfigurationOfProgressBars = {
  beforeCodeTitle: 'Global configuration of progress bars',
  htmlCode: `
<div class="example-preview">
  <div>
    <p>This progress bar uses the customized default values.</p>
    <p><ngb-progressbar value="250"></ngb-progressbar></p>
	<p>This progress bar uses the customized default values, but changes the type using an input.</p>
    <p><ngb-progressbar value="500" type="info"></ngb-progressbar></p>
  </div>
</div>
		`,
  tsCode: `
import {Component} from '@angular/core';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';\n
@Component({
    selector: 'ngbd-progressbar-config',
    templateUrl: './progressbar-config.html',
    providers: [NgbProgressbarConfig] // add the NgbProgressbarConfig to the component providers
})
export class NgbdProgressbarConfig {
    constructor(config: NgbProgressbarConfig) {
        // customize default values of progress bars used by this component tree
        config.max = 1000;
        config.striped = true;
		config.animated = true;
        config.type = 'success';
        config.height = '20px';
    }
}
`,
  viewCode: ``,
  isCodeVisible: false,
};

@Component({
  selector: 'app-ng-progressbar',
  templateUrl: './progressbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      ngb-progressbar {
        margin-top: 5rem;
      }
    `,
  ],
  providers: [NgbProgressbarConfig], // add the NgbProgressbarConfig to the component providers
})
export class ProgressbarComponent implements OnInit {
  exampleContextualProgressBars;
  exampleProgressBarsWithCurrentValueLabels;
  exampleStripedProgressBars;
  exampleProgressBarsWithCustomLabels;
  exampleProgressBarsWithHeight;
  exampleGlobalConfigurationOfProgressBars;
  height = '20px';

  constructor(config: NgbProgressbarConfig) {
    // customize default values of progress bars used by this component tree
    // config.max = 1000;
    // config.striped = true;
    // config.animated = true;
    // config.type = 'success';
    // config.height = '20px';
  }

  ngOnInit() {
    this.exampleContextualProgressBars = contextualProgressBars;
    this.exampleProgressBarsWithCurrentValueLabels = progressBarsWithCurrentValueLabels;
    this.exampleStripedProgressBars = stripedProgressBars;
    this.exampleProgressBarsWithCustomLabels = progressBarsWithCustomLabels;
    this.exampleProgressBarsWithHeight = progressBarsWithHeight;
    this.exampleGlobalConfigurationOfProgressBars = globalConfigurationOfProgressBars;
  }
}
