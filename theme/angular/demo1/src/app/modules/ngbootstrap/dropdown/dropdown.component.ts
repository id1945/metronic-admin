import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

const dropdown = {
  beforeCodeTitle: 'Dropdown',
  htmlCode: `
<div class="example-preview">
  <div>
    <div class="row">
      <div class="col">
        <div ngbDropdown class="d-inline-block">
          <button class="btn btn-success" id="dropdownBasic1" ngbDropdownToggle>Toggle dropdown</button>
          <div ngbDropdownMenu aria-labelledby="dropdownBasic1">
            <button class="dropdown-item">Action - 1</button>
            <button class="dropdown-item">Another Action</button>
            <button class="dropdown-item">Something else is here</button>
          </div>
        </div>
      </div>
      <div class="col text-right">
        <div ngbDropdown placement="top-right" class="d-inline-block">
          <button class="btn btn-outline-success" id="dropdownBasic2" ngbDropdownToggle>Toggle dropup</button>
          <div ngbDropdownMenu aria-labelledby="dropdownBasic2">
            <button class="dropdown-item">Action - 1</button>
            <button class="dropdown-item">Another Action</button>
            <button class="dropdown-item">Something else is here</button>
           </div>
        </div>
      </div>
    </div>
  </div>
</div>
`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
  selector: 'ngbd-dropdown-basic',
  templateUrl: './dropdown-basic.html'
})
export class NgbdDropdownBasic { }
`,
  isCodeVisible: false,
  isExampleExpanded: true,
};
const manualTriggers = {
  beforeCodeTitle: 'Manual triggers',
  htmlCode: `
<div class="example-preview">
  <span>
    You can easily control dropdowns programmatically using the exported dropdown instance.
  </span>
  <div>
    <div class="d-inline-block" ngbDropdown #myDrop="ngbDropdown">
      <button class="btn btn-primary" id="dropdownManual" ngbDropdownToggle>Toggle dropdown</button>
      <div ngbDropdownMenu aria-labelledby="dropdownManual">
        <button class="dropdown-item">Action - 1</button>
        <button class="dropdown-item">Another Action</button>
        <button class="dropdown-item">Something else is here</button>
      </div>
      <button class="btn btn-success" (click)="$event.stopPropagation(); myDrop.open();">Open from outside</button>
      <button class="btn btn-danger" (click)="$event.stopPropagation(); myDrop.close();">Close from outside</button>
    </div>
  </div>
</div>
`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
  selector: 'ngbd-dropdown-manual',
  templateUrl: './dropdown-manual.html'
})
export class NgbdDropdownManual { }
`,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const buttonGroupsAndSplitButtons = {
  beforeCodeTitle: 'Button groups and split buttons',
  htmlCode: `
<div class="example-preview">
  <span>
    Bootstrap split buttons and dropdowns on button groups are supported with the existing dropdown directives.
  </span>
  <div>
    <div class="btn-group">
      <button type="button" class="btn btn-success">Plain ol' button</button>
      <div class="btn-group" ngbDropdown role="group" aria-label="Button group with nested dropdown">
        <button class="btn btn-primary" ngbDropdownToggle>Drop me</button>
        <div class="dropdown-menu" ngbDropdownMenu>
          <button class="dropdown-item">One</button>
          <button class="dropdown-item">Two</button>
          <button class="dropdown-item">Four!</button>
        </div>
      </div>
    </div>
    <div class="btn-group">
      <button type="button" class="btn btn-outline-primary">Split me</button>
      <div class="btn-group" ngbDropdown role="group" aria-label="Button group with nested dropdown">
        <button class="btn btn-outline-primary dropdown-toggle-split" ngbDropdownToggle></button>
        <div class="dropdown-menu" ngbDropdownMenu>
          <button class="dropdown-item">One</button>
          <button class="dropdown-item">Two</button>
          <button class="dropdown-item">Four!</button>
        </div>
      </div>
    </div>
    <div class="btn-group">
      <div class="btn-group" ngbDropdown role="group" aria-label="Button group with nested dropdown">
        <button class="btn btn-danger" ngbDropdownToggle>Select me</button>
        <div class="dropdown-menu" ngbDropdownMenu>
          <button class="dropdown-item">One</button>
          <button class="dropdown-item">Two</button>
          <button class="dropdown-item">Four!</button>
        </div>
      </div>
      <div class="btn-group" ngbDropdown role="group" aria-label="Button group with nested dropdown">
        <button class="btn btn-success" ngbDropdownToggle>Or me</button>
        <div class="dropdown-menu" ngbDropdownMenu>
          <button class="dropdown-item">One</button>
          <button class="dropdown-item">Two</button>
          <button class="dropdown-item">Four!</button>
        </div>
      </div>
    </div>
   </div>
</div>
`,
  tsCode: `
import {Component} from '@angular/core';\n
@Component({
    selector: 'ngbd-dropdown-split',
    templateUrl: './dropdown-split.html'
})
export class NgbdDropdownSplit {
}
`,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const globalConfigurationOfDropdowns = {
  beforeCodeTitle: 'Global configuration of dropdowns',
  htmlCode: `
<div class="example-preview">
  <span>This dropdown uses customized default values.</span>
  <div>
    <div ngbDropdown>
      <button class="btn btn-primary" id="dropdownConfig" ngbDropdownToggle>Toggle</button>
      <div ngbDropdownMenu aria-labelledby="dropdownConfig">
        <button class="dropdown-item">Action - 1</button>
        <button class="dropdown-item">Another Action</button>
        <button class="dropdown-item">Something else is here</button>
	  </div>
    </div>
  </div>
</div>
`,
  tsCode: `
import {Component} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';\n
@Component({
    selector: 'ngbd-dropdown-config',
    templateUrl: './dropdown-config.html',
    providers: [NgbDropdownConfig] // add NgbDropdownConfig to the component providers
})
export class NgbdDropdownConfig {
    constructor(config: NgbDropdownConfig) {
        // customize default values of dropdowns used by this component tree
        config.placement = 'top-left';
        config.autoClose = false;
    }
}
`,
  isCodeVisible: false,
  isExampleExpanded: true,
};

@Component({
  selector: 'app-ng-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgbDropdownConfig], // add NgbDropdownConfig to the component providers
})
export class DropdownComponent implements OnInit {
  exampleDropdown;
  exampleManualTriggers;
  exampleButtonGroupsAndSplitButtons;
  exampleGlobalConfigurationOfDropdowns;

  constructor(config: NgbDropdownConfig) {
    // customize default values of dropdowns used by this component tree
    // config.placement = 'top-left';
    config.autoClose = true;
  }

  ngOnInit() {
    this.exampleDropdown = dropdown;
    this.exampleManualTriggers = manualTriggers;
    this.exampleButtonGroupsAndSplitButtons = buttonGroupsAndSplitButtons;
    this.exampleGlobalConfigurationOfDropdowns = globalConfigurationOfDropdowns;
  }
}
