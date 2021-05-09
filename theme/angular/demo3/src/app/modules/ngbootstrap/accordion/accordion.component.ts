import { OnInit, Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

const accordion = {
  beforeCodeTitle: 'Accordion',
  htmlCode: `
<div class="example-preview">
  <h3>Self closing</h3>
  <div>
    <ngb-accordion #acc="ngbAccordion" activeIds="ngb-panel-0">
      <ngb-panel>
        <ng-template ngbPanelTitle>
	      <span class="card-header--title">Simple</span>
        </ng-template>
        <ng-template ngbPanelContent>
		  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
		  aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
		  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
		  craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
          craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
	    </ng-template>
      </ngb-panel>
      <ngb-panel>
        <ng-template ngbPanelTitle>
          <span class="card-header--title">&#9733;
		    <b>Fancy</b> title &#9733;
          </span>
        </ng-template>
        <ng-template ngbPanelContent>
		  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
		  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
		  put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
		  wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
          raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </ng-template>
      </ngb-panel>
      <ngb-panel [disabled]="true">
        <ng-template ngbPanelTitle>
          <span class="card-header--title">Disabled</span>
        </ng-template>
        <ng-template ngbPanelContent>
		  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
          3 wolf moon officia aute,
		  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
          moon tempor, sunt aliqua put a bird
		  on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
          craft beer labore wes anderson cred nesciunt
		  sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
          raw denim aesthetic synth nesciunt you
          probably haven't heard of them accusamus labore sustainable VHS.
        </ng-template>
	  </ngb-panel>
    </ngb-accordion>
   </div>
</div>
`,
  tsCode: `
import { Component } from '@angular/core';\n
@Component({
  selector: 'ngbd-accordion-basic',
  templateUrl: './accordion-basic.html'
})
export class NgbdAccordionBasic {}`,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const oneOpenPanelAtAHome = {
  beforeCodeTitle: 'One open panel at a time',
  htmlCode: `
<ngb-accordion [closeOthers]="true" activeIds="static-1">
  <ngb-panel id="static-1">
    <ng-template ngbPanelTitle>
      <span class="card-header--title">Simple</span>
    </ng-template>
    <ng-template ngbPanelContent>
	  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
	  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
	  put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
	  wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
      raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </ng-template>
  </ngb-panel>
  <ngb-panel id="static-2">
  <ng-template ngbPanelTitle>
     <span>&#9733;
		<b>Fancy</b> title &#9733;
    </span>
  </ng-template>
  <ng-template ngbPanelContent>
	Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
	cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
	on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
	nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
    aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
  </ng-template>
  </ngb-panel>
  <ngb-panel id="static-3" [disabled]="true">
    <ng-template ngbPanelTitle>
      <span class="card-header--title">Disabled</span>
    </ng-template>
    <ng-template ngbPanelContent>
	  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
	  cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
	  on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
	  cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
      synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </ng-template>
   </ngb-panel>
</ngb-accordion>`,
  tsCode: `
import { Component } from '@angular/core';\n
@Component({
    selector: 'ngbd-accordion-static',
	templateUrl: './accordion-static.html',
    styles: [\`
        .card-header--title {
        display:block;
    }
    \`],
})
export class NgbdAccordionStatic {
}`,
  viewCode: ``,
  isCodeVisible: false,
};

const togglePanels = {
  beforeCodeTitle: 'Toggle panels',
  htmlCode: `
<ngb-accordion #acc11="ngbAccordion">
  <ngb-panel id="toggle-11">
    <ng-template ngbPanelTitle>
      <span class="card-header--title">First panel</span>
    </ng-template>
    <ng-template ngbPanelContent>
	  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
	  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
	  put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
	  labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
      beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </ng-template>
  </ngb-panel>
  <ngb-panel id="toggle-22">
    <ng-template ngbPanelTitle>
      <span class="card-header--title">Second</span>
    </ng-template>
    <ng-template ngbPanelContent>
	  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
	  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
	  put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
	  labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
      beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </ng-template>
  </ngb-panel>
</ngb-accordion>
<div class="separator separator-dashed my-6"></div>
<button class="btn btn-primary" (click)="acc11.toggle('toggle-11')">Toggle first</button>
<button class="btn btn-info" (click)="acc11.toggle('toggle-22')">Toggle second</button>
	  `,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
  selector: 'ngbd-accordion-toggle',
  templateUrl: './accordion-toggle.html'
})
export class NgbdAccordionToggle { }
`,
  viewCode: ``,
  isCodeVisible: false,
};

const preventPanelToggle = {
  beforeCodeTitle: 'Prevent panel toggle',
  htmlCode: `
<ngb-accordion (panelChange)="beforeChange($event)">
  <ngb-panel id="preventchange-1">
    <ng-template ngbPanelTitle>
      <span class="card-header--title">Simple</span>
    </ng-template>
    <ng-template ngbPanelContent>
	  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
	  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
	 put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
	 labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
     farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </ng-template>
  </ngb-panel>
  <ngb-panel id="preventchange-2">
    <ng-template ngbPanelTitle>
      <span class="card-header--title">I can't be toggled...</span>
    </ng-template>
    <ng-template ngbPanelContent>
	  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
	  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
	 put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
	 wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
     raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </ng-template>
  </ngb-panel>
  <ngb-panel id="preventchange-3">
    <ng-template ngbPanelTitle>
      <span class="card-header--title">I can be opened, but not closed..."</span>
    </ng-template>
    <ng-template ngbPanelContent>
	  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
	  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
	  put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
	  wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
      raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </ng-template>
  </ngb-panel>
</ngb-accordion>`,
  tsCode: `
import {Component} from '@angular/core';
import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';\n
@Component({
    selector: 'ngbd-accordion-preventchange',
    templateUrl: './accordion-preventchange.html',
})
export class NgbdAccordionPreventchange {
    public beforeChange($event: NgbPanelChangeEvent) {\n
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }\n
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
}`,
  viewCode: ``,
  isCodeVisible: false,
};

const globalConfigurationOfAccordions = {
  beforeCodeTitle: 'Global configuration of accordions',
  htmlCode: `
<div class="example-preview">
  <span>
    This accordion uses customized default values.
  </span>
  <div>
    <ngb-accordion #acc33="ngbAccordion" activeIds="config-panel-one">
      <ngb-panel id="config-panel-one">
        <ng-template ngbPanelTitle>
          <span class="card-header--title">One</span>
        </ng-template>
        <ng-template ngbPanelContent>
		  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
		  aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
		  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
		  craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
          craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </ng-template>
      </ngb-panel>
      <ngb-panel>
        <ng-template ngbPanelTitle>
          <span class="card-header--title">Two</span>
        </ng-template>
        <ng-template ngbPanelContent>
		  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
		  cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
		  on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
		  nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </ng-template>
      </ngb-panel>
    </ngb-accordion>
   </div>
</div>`,
  tsCode: `
import {Component} from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';\n
@Component({
    selector: 'ngbd-accordion-config',
        templateUrl: './accordion-config.html',
        providers: [NgbAccordionConfig] // add the NgbAccordionConfig to the component providers
    })\n
export class NgbdAccordionConfig {
    constructor(config: NgbAccordionConfig) {
        // customize default values of accordions used by this component tree
        config.closeOthers = true;
	    config.type = 'info';
    }
}`,
  viewCode: ``,
  isCodeVisible: false,
};

@Component({
  selector: 'app-ng-accordion',
  templateUrl: './accordion.component.html',
  styles: [
    `
      .card-header--title {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgbAccordionConfig], // add the NgbAccordionConfig to the component providers
})
export class AccordionComponent implements OnInit {
  exampleAccordion: any;
  exampleOneOpenPanelAtAHome: any;
  exampleTogglePanels: any;
  examplePreventPanelToggle: any;
  exampleGlobalConfigurationOfAccordions: any;

  constructor(config: NgbAccordionConfig) {
    // customize default values of accordions used by this component tree
    // config.closeOthers = true;
    //  config.type = 'info';
  }

  ngOnInit() {
    this.exampleAccordion = accordion;
    this.exampleOneOpenPanelAtAHome = oneOpenPanelAtAHome;
    this.exampleTogglePanels = togglePanels;
    this.examplePreventPanelToggle = preventPanelToggle;
    this.exampleGlobalConfigurationOfAccordions = globalConfigurationOfAccordions;
  }

  // api methods
  // ng-methods
  beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === 'preventchange-2') {
      $event.preventDefault();
    }

    if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
      $event.preventDefault();
    }
  }
}
