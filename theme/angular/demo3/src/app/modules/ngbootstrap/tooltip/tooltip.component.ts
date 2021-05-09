import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';

const quickAndEasyTooltips = {
  beforeCodeTitle: 'Quick and easy tooltips',
  htmlCode: `
<div class="example-preview">
  <div>
    <button type="button" class="btn btn-primary" placement="top" ngbTooltip="Tooltip on top" ngbTooltipClass="kt-tooltip">
      Tooltip on top
	</button>
    <button type="button" class="btn btn-info" placement="right" ngbTooltip="Tooltip on right">
      Tooltip on right
    </button>
    <button type="button" class="btn btn-success" placement="bottom" ngbTooltip="Tooltip on bottom">
      Tooltip on bottom
    </button>
	<button type="button" class="btn btn-danger" placement="left" ngbTooltip="Tooltip on left">
      Tooltip on left
    </button>
  </div>
</div>
`,
  tsCode: `
import {Component} from '@angular/core';

@Component({
    selector: 'ngbd-tooltip-basic',
    templateUrl: './tooltip-basic.html'
})
export class NgbdTooltipBasic {}
		`,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const HTMLAndBindingsInTooltips = {
  beforeCodeTitle: 'Progress bars with current value labels',
  htmlCode: `
<div class="example-preview">
  <div>
    Tooltips can contain any arbitrary HTML, Angular bindings and even directives! Simply enclose desired content in a
    <code>&lt;ng-template&gt;</code> element.
  </div>
  <div>
    <ng-template #tipContentS>Hello,
      <b>{{name}}</b>!</ng-template>
    <button type="button" class="btn btn-primary" [ngbTooltip]="tipContentS">
      I've got markup and bindings in my tooltip!
    </button>
  </div>
</div>
		`,
  tsCode: `
import {Component} from '@angular/core';

@Component({
    selector: 'ngbd-tooltip-tplcontent',
    templateUrl: './tooltip-tplcontent.html'
})
export class NgbdTooltipTplcontent {
    name = 'World';
}

		`,
  viewCode: ``,
  isCodeVisible: false,
};

const customAndManualTriggers = {
  beforeCodeTitle: 'Custom and manual triggers',
  htmlCode: `
<div class="example-preview">
  <div>
    You can easily override open and close triggers by specifying event names (separated by
    <code>:</code>) in the
    <code>triggers</code> property.
  </div>
  <div>
    <button type="button" class="btn btn-primary" ngbTooltip="You see, I show up on click!" triggers="click:blur">
      Click me!
    </button>
  </div>
</div>
<div class="separator separator-dashed my-6"></div>
<div class="example-preview">
  <div>
    Alternatively you can take full manual control over tooltip opening / closing events.
  </div>
  <div>
    <button type="button" class="btn btn-primary" ngbTooltip="What a great tip!" triggers="manual" #t="ngbTooltip" (click)="t.open()">
      Click me to open a tooltip
    </button>
    <button type="button" class="btn btn-info" (click)="t.close()">
      Click me to close a tooltip
    </button>
  </div>
</div>
		`,
  tsCode: `
import {Component} from '@angular/core';

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

const contextAndManualTriggers = {
  beforeCodeTitle: 'Context and manual triggers',
  htmlCode: `
<ng-template #tipContent let-greeting="greeting">{{greeting}},
  <b>{{name2}}</b>!
</ng-template>
<div class="example-preview">
  <div>
    You can optionally pass in a context when manually triggering a popover.
    <div class="separator separator-dashed my-6"></div>
    How would you like to greet
   <strong [ngbTooltip]="tipContent" #t2="ngbTooltip" triggers="manual">me</strong>?
  </div>
  <div>
    <button type="button" class="btn btn-primary" (click)="changeGreeting({ greeting: 'Bonjour' })">
      French
    </button>
    <button type="button" class="btn btn-info" (click)="changeGreeting({ greeting: 'Gutentag' })">
      German
    </button>
    <button type="button" class="btn btn-success" (click)="changeGreeting({ greeting: 'Hello' })">
      English
    </button>
  </div>
</div>
		`,
  tsCode: `
import {NgbTooltip} from '@ng-bootstrap/ng-bootstrap';
import {Component, ViewChild} from '@angular/core';\n
@Component({
     selector: 'ngbd-tooltip-tplwithcontext',
     templateUrl: './tooltip-tplwithcontext.html'
})
export class NgbdTooltipTplwithcontext {
    greeting = {};
    name = 'World';\n
    @ViewChild('t', {static: true}) public tooltip: NgbTooltip;\n
    public changeGreeting(greeting: any): void {
        const isOpen = this.tooltip.isOpen();
        this.tooltip.close();
        if (greeting !== this.greeting || !isOpen) {
		    this.greeting = greeting;
            this.tooltip.open(greeting);
        }
    }
}
`,
  viewCode: ``,
  isCodeVisible: false,
};

const appendTooltipInTheBody = {
  beforeCodeTitle: 'Append tooltip in the body',
  htmlCode: `
<div class="example-preview">
  <div>
    Set the
	<code>container</code> property to "body" to have the tooltip be appended to the body instead of the triggering element's parent.
      This option is useful if the element triggering the tooltip is inside an element that clips its contents (i.e.
    <code>overflow: hidden</code>).
  </div>
  <div>
    <div class='row'>
      <div class='card'>
        <button type="button" class="btn btn-outline-primary" ngbTooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
          Default tooltip
        </button>
        <br />
		<button type="button" class="btn btn-outline-info"
          ngbTooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." container="body">
          Tooltip appended to body
        </button>
      </div>
    </div>
  </div>
</div>
		`,
  tsCode: `
import {Component} from '@angular/core';

@Component({
    selector: 'ngbd-tooltip-container',
    templateUrl: './tooltip-container.html',
    styles: ['.card { padding: 50px 0; text-align: center; overflow:hidden }']
})
export class NgbdTooltipContainer {
}

`,
  viewCode: ``,
  isCodeVisible: false,
};

const globalConfigurationOfTooltips = {
  beforeCodeTitle: 'Global configuration of progress tooltips',
  htmlCode: `
<div class="example-preview">
  <div>
	<button type="button" class="btn btn-primary"
      ngbTooltip="This tooltip gets its inputs from the customized configuration" placement="right" triggers="click">
      Customized tooltip
    </button>
  </div>
</div>
		`,
  tsCode: `
import {Component} from '@angular/core';
import {NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';\n
@Component({
  selector: 'ngbd-tooltip-config',
  templateUrl: './tooltip-config.html',
  providers: [NgbTooltipConfig] // add NgbTooltipConfig to the component providers
})
export class NgbdTooltipConfig {
    constructor(config: NgbTooltipConfig) {
        // customize default values of tooltips used by this component tree
        config.placement = 'right';
        config.triggers = 'click';
    }
}

`,
  viewCode: ``,
  isCodeVisible: false,
};

@Component({
  selector: 'app-ng-tooltip',
  templateUrl: './tooltip.component.html',
  styles: ['.card { padding: 50px 0; text-align: center; overflow:hidden }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgbTooltipConfig], // add NgbTooltipConfig to the component providers
})
export class TooltipComponent implements OnInit {
  exampleQuickAndEasyTooltips;
  exampleHTMLAndBindingsInTooltipsl;
  exampleCustomAndManualTriggers;
  exampleContextAndManualTriggers;
  exampleAppendTooltipInTheBody;
  exampleGlobalConfigurationOfTooltips;
  name = 'World';
  greeting = {};
  name2 = 'World';

  @ViewChild('t2', { static: true }) public tooltip: NgbTooltip;

  public changeGreeting(greeting: any): void {
    const isOpen = this.tooltip.isOpen();
    this.tooltip.close();
    if (greeting !== this.greeting || !isOpen) {
      this.greeting = greeting;
      this.tooltip.open(greeting);
    }
  }

  constructor(config: NgbTooltipConfig) {
    // customize default values of tooltips used by this component tree
    // config.placement = 'right';
    // config.triggers = 'click';
    config.container = 'body';
  }

  ngOnInit() {
    this.exampleQuickAndEasyTooltips = quickAndEasyTooltips;
    this.exampleHTMLAndBindingsInTooltipsl = HTMLAndBindingsInTooltips;
    this.exampleCustomAndManualTriggers = customAndManualTriggers;
    this.exampleContextAndManualTriggers = contextAndManualTriggers;
    this.exampleAppendTooltipInTheBody = appendTooltipInTheBody;
    this.exampleGlobalConfigurationOfTooltips = globalConfigurationOfTooltips;
  }
}
