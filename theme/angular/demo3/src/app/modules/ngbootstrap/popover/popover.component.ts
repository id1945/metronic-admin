import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';

const quickAndEasyPopovers = {
  beforeCodeTitle: 'Quick and easy popovers',
  htmlCode: `
<div class="example-preview">
  <div>
    <button type="button" class="btn btn-primary kt-btn--wide" placement="top"
      ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverTitle="Popover on top">
      Popover on top
    </button>
    <button type="button" class="btn btn-success kt-btn--wide" placement="right"
      ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverTitle="Popover on right">
      Popover on right
    </button>
    <button type="button" class="btn btn-info kt-btn--wide" container="body" placement="bottom"
      ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverTitle="Popover on bottom">
      Popover on bottom
    </button>
	<button type="button" class="btn btn-danger kt-btn--wide" placement="left"
      ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverTitle="Popover on left">
      Popover on left
    </button>
  </div>
</div>
`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
    selector: 'ngbd-popover-basic',
    templateUrl: './popover-basic.html'
})
export class NgbdPopoverBasic {
}
		`,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const HTMLAndBindingsInPopovers = {
  beforeCodeTitle: 'HTML and bindings in popovers',
  htmlCode: `
<div class="example-preview">
  <div>
    Popovers can contain any arbitrary HTML, Angular bindings and even directives! Simply enclose desired content in a
    <code>&lt;ng-template&gt;</code> element.
  </div>
  <div>
    <ng-template #popContent>
      <span>Hello</span>,
      <b>{{name}}</b>!
    </ng-template>
    <button type="button" class="btn btn-warning" [ngbPopover]="popContent" popoverTitle="Fancy content">
      I've got markup and bindings in my popover!
    </button>
   </div>
</div>
		`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
    selector: 'ngbd-popover-tplcontent',
    templateUrl: './popover-tplcontent.html'
})
export class NgbdPopoverTplcontent {
    name = 'World';
}`,
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
	<button type="button" class="btn btn-primary" ngbPopover="You see, I show up on hover!" triggers="mouseenter:mouseleave"
      popoverTitle="Pop title">
      Hover over me!
    </button>
  </div>
</div>
<div class="separator separator-dashed my-6"></div>
<div class="example-preview">
  <span>
    Alternatively you can take full manual control over popover opening / closing events.
  </span>
  <div>
	<button type="button" class="btn btn-success" ngbPopover="What a great tip!" triggers="manual" #p="ngbPopover"
      (click)="p.open()" popoverTitle="Pop title">
      Click me to open a popover
    </button>
    <button type="button" class="btn btn-info" (click)="p.close()">
      Click me to close a popover
    </button>
  </div>
</div>
		`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
    selector: 'ngbd-popover-triggers',
    templateUrl: './popover-triggers.html'
})
export class NgbdPopoverTriggers {
}
		`,
  viewCode: ``,
  isCodeVisible: false,
};

const contextAndManualTriggers = {
  beforeCodeTitle: 'Context and manual triggers',
  htmlCode: `
<div class="example-preview">
  <span>
    You can optionally pass in a context when manually triggering a popover.
  </span>
  <div>
    <ng-template #popContent let-greeting="greeting">{{greeting}},
	  <b>{{name1}}</b>!
	</ng-template>
    <p>
      How would you like to greet
      <strong [ngbPopover]="popContent" popoverTitle="Greeting" #p2="ngbPopover" triggers="manual">me</strong>?
    </p>
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
import {NgbPopover} from '@ng-bootstrap/ng-bootstrap';
import {Component, ViewChild} from '@angular/core';\n
@Component({
    selector: 'ngbd-popover-tplwithcontext',
    templateUrl: './popover-tplwithcontext.html'
})
export class NgbdPopoverTplwithcontext {
    greeting = {};
    name = 'World';\n
    @ViewChild('p', {static: true}) public popover: NgbPopover;\n
    public changeGreeting(greeting: any): void {
        const isOpen = this.popover.isOpen();
        this.popover.close();
        if (greeting !== this.greeting || !isOpen) {
            this.greeting = greeting;
            this.popover.open(greeting);
        }
    }
}
`,
  viewCode: ``,
  isCodeVisible: false,
};

const popoverVisibilityEvents = {
  beforeCodeTitle: 'Popover visibility events',
  htmlCode: `
<div class="example-preview">
  <div>
	<button type="button" class="btn btn-primary" placement="top" ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum
      faucibus." popoverTitle="Popover on top" #popover="ngbPopover">
      Open Popover
    </button>
  </div>
</div>
<div class="separator separator-dashed my-6"></div>
<div class="example-preview">
  <div>
    Popover is currently:
    <code>{{ popover.isOpen() ? 'open' : 'closed' }}</code>
  </div>
</div>
`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
    selector: 'ngbd-popover-visibility',
    templateUrl: './popover-visibility.html'
})
export class NgbdPopoverVisibility {}
`,
  viewCode: ``,
  isCodeVisible: false,
};

const appendPopoverInTheBody = {
  beforeCodeTitle: 'Append popover in the body',
  htmlCode: `
<div class="example-preview">
  <div>
    Set the
	<code>container</code> property to "body" to have the popover be appended to the body instead of the triggering element's
      parent. This option is useful if the element triggering the popover is inside an element that clips its contents (i.e.
    <code>overflow: hidden</code>).
  </div>
  <div>
    <div class='row'>
      <div class='card'>
        <button type="button" class="btn btn-outline-info" ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
		  Default popover
        </button>
		<br />
		<button type="button" class="btn btn-outline-danger" ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
          container="body">
          Popover appended to body
        </button>
      </div>
	</div>
  </div>
</div>
		`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
    selector: 'ngbd-popover-container',
    templateUrl: './popover-container.html',
    styles: ['.card { padding: 50px 0; text-align: center; overflow:hidden }']
})
export class NgbdPopoverContainer {
}
`,
  viewCode: ``,
  isCodeVisible: false,
};

const globalConfigurationOfPopovers = {
  beforeCodeTitle: 'Global configuration of popovers',
  htmlCode: `
<button type="button" class="btn btn-outline-secondary"
  ngbPopover="This popover gets its inputs from the customized configuration" popoverTitle="Customized popover">
  Customized popover
</button>
		`,
  tsCode: `
import {Component} from '@angular/core';
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';\n
@Component({
    selector: 'ngbd-popover-config',
    templateUrl: './popover-config.html',
    providers: [NgbPopoverConfig] // add NgbPopoverConfig to the component providers
})
export class NgbdPopoverConfig {
constructor(config: NgbPopoverConfig) {
    // customize default values of popovers used by this component tree
    config.placement = 'right';
    config.triggers = 'hover';
    }
}
`,
  viewCode: ``,
  isCodeVisible: false,
};

@Component({
  selector: 'app-ng-popover',
  templateUrl: './popover.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // styles: [`.card { padding: 50px 0; text-align: center; overflow:hidden }`],
  providers: [NgbPopoverConfig], // add NgbPopoverConfig to the component providers
})
export class PopoverComponent implements OnInit {
  exampleQuickAndEasyPopovers;
  exampleHTMLAndBindingsInPopovers;
  exampleCustomAndManualTriggers;
  exampleContextAndManualTriggers;
  examplePopoverVisibilityEvents;
  exampleAppendPopoverInTheBody;
  exampleGlobalConfigurationOfPopovers;

  name = 'World';
  greeting = {};
  name1 = 'World';

  @ViewChild('p', { static: true }) public popover: NgbPopover;
  @ViewChild('p2', { static: true }) public popover2: NgbPopover;

  constructor(config: NgbPopoverConfig) {
    // customize default values of popovers used by this component tree
    // config.placement = 'right';
    config.container = 'body';
  }

  ngOnInit() {
    this.exampleQuickAndEasyPopovers = quickAndEasyPopovers;
    this.exampleHTMLAndBindingsInPopovers = HTMLAndBindingsInPopovers;
    this.exampleCustomAndManualTriggers = customAndManualTriggers;
    this.exampleContextAndManualTriggers = contextAndManualTriggers;
    this.examplePopoverVisibilityEvents = popoverVisibilityEvents;
    this.exampleAppendPopoverInTheBody = appendPopoverInTheBody;
    this.exampleGlobalConfigurationOfPopovers = globalConfigurationOfPopovers;
  }

  public changeGreeting(greeting: any): void {
    const isOpen = this.popover2.isOpen();
    this.popover2.close();
    if (greeting !== this.greeting || !isOpen) {
      this.greeting = greeting;
      this.popover2.open(greeting);
    }
  }
}
