import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

const basicAlert = {
  beforeCodeTitle: 'Basic Alert',
  htmlCode: `
<p>
  <ngb-alert [dismissible]="false" [type]="'success'">
    <strong>Well done! </strong> You successfully read this important alert message.
  </ngb-alert>
</p>`,
  tsCode: `
import { Component } from '@angular/core';\n
@Component({
    selector: 'ngbd-alert-basic',
    templateUrl: './alert-basic.html'
})
export class NgbdAlertBasic {}`,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const closeableAlert = {
  beforeCodeTitle: 'Closeable Alert ',
  htmlCode: `
<p *ngFor="let alert of alerts">
    <ngb-alert [type]="alert.type" (close)="closeAlert(alert)">{{ alert.message }}</ngb-alert>
</p>
<p>
    <button type="button" class="btn btn-primary" (click)="reset()">Reset</button>
</p>`,
  tsCode: `
import { Input, Component } from '@angular/core';\n
@Component({
    selector: 'ngbd-alert-closeable',
    templateUrl: './alert-closeable.html'
})
export class NgbdAlertCloseable {\n
    @Input() public alerts: Array<IAlert> = [];
    private backup: Array<IAlert>;\n
    constructor() {
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
        }, {
            id: 5,
            type: 'primary',
            message: 'This is a primary alert',
        }, {
            id: 6,
            type: 'secondary',
            message: 'This is a secondary alert',
        }, {
            id: 7,
            type: 'light',
            message: 'This is a light alert',
        }, {
            id: 8,
            type: 'dark',
            message: 'This is a dark alert',
        });
        this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
    }\n
    public closeAlert(alert: IAlert) {
		const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }\n
    public reset() {
        this.alerts = this.backup.map((alert: IAlert) => Object.assign({}, alert));
    }
}\n
export interface IAlert {
    id: number;
    type: string;
    message: string;
}`,
  viewCode: ``,
  isCodeVisible: false,
};

const selfClosingAlert = {
  beforeCodeTitle: 'Self-Closing Alert',
  htmlCode: `
<div class="example-preview">
  <h3>Self closing</h3>
  <span>
    Static self-closing alert that disappears after 20 seconds (refresh the page if it has already disappeared)
  </span>
  <div>
    <ngb-alert *ngIf="!staticAlertClosed" (close)="staticAlertClosed = true">Check out our awesome new features!</ngb-alert>
  </div>
</div>
<div class="separator separator-dashed my-6"></div>
<div class="example-preview">
  <h3>Change message</h3>
  <span>
    Show a self-closing success message that disappears after 5 seconds.
  </span>
  <div>
    <ngb-alert *ngIf="successMessage" type="success" (close)="successMessage = null">{{ successMessage }}</ngb-alert>
      <p>
        <button class="btn btn-primary" (click)="changeSuccessMessage()">Change message</button>
      </p>
  </div>
</div>
`,
  tsCode: `
import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';\n
@Component({
    selector: 'ngbd-alert-selfclosing',
    templateUrl: './alert-selfclosing.html'
})
export class NgbdAlertSelfclosing implements OnInit {
    private _success = new Subject<string>();\n
    staticAlertClosed = false;
    successMessage: string;\n
    ngOnInit(): void {
        setTimeout(() => this.staticAlertClosed = true, 20000);
        this._success.pipe(
          debounceTime(5000)
        ).subscribe(() => this.successMessage = null);\n
        public changeSuccessMessage() {
            this._success.next(\`$\{new Date()\} - Message successfully changed.\`);
        }
    }
}`,
  viewCode: ``,
  isCodeVisible: false,
};

const customAlert = {
  beforeCodeTitle: 'Custom Alert',
  htmlCode: `
<div class="example-preview">
  <span>
    Show a custom alert that can be styled via CSS or SCSS.
  </span>
  <div>
    <ngb-alert type="custom" [dismissible]="false">
      <strong>Whoa!</strong> This is a custom alert.</ngb-alert>
  </div>
</div>
	`,
  tsCode: `
import { Component } from '@angular/core';\n
@Component({
    selector: 'ngbd-alert-custom',
    templateUrl: './alert-custom.html',
	styles: [\`
	    :host >>> .alert-custom {
            color: #99004d;
            background-color: #f169b4;
            border-color: #800040;
        }
    \`]
})
export class NgbdAlertCustom {}`,
  viewCode: ``,
  isCodeVisible: false,
};

const globalConfigurationOfAlerts = {
  beforeCodeTitle: 'Global configuration of alerts',
  htmlCode: `
<p>
  <ngb-alert>
    This alert's type is success and it's not dismissible because the config has been customized
  </ngb-alert>
</p>`,
  tsCode: `
import {Component, Input} from '@angular/core';
import {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';\n
@Component({
    selector: 'ngbd-alert-config',
	templateUrl: './alert-config.html',
    // add NgbAlertConfig  to the component providers
    providers: [NgbAlertConfig]
})
export class NgbdAlertConfig {
    @Input() public alerts: Array<string> = [];\n
    constructor(alertConfig: NgbAlertConfig) {
        // customize default values of alerts used by this component tree
        alertConfig.type = 'success';
        alertConfig.dismissible = false;
    }
}`,
  viewCode: ``,
  isCodeVisible: false,
};

@Component({
  selector: 'app-ng-alert',
  templateUrl: './alert.component.html',
  styles: [
    `
      :host >>> .alert-custom {
        color: #99004d;
        background-color: #f169b4;
        border-color: #800040;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent implements OnInit {
  @Input() alerts: Array<IAlert> = [];
  // tslint:disable-next-line:variable-name
  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage: string;
  private backup: Array<IAlert>;

  exampleBasicAlert: any;
  exampleCloseableAlert: any;
  exampleSelfClosingAlert: any;
  exampleCustomAlert: any;
  exampleGlobalConfigurationOfAlerts: any;

  constructor(alertConfig: NgbAlertConfig) {
    // customize default values of alerts used by this component tree
    // alertConfig.type = 'success';
    // alertConfig.dismissible = false;

    this.alerts.push(
      {
        id: 1,
        type: 'success',
        message: 'This is an success alert',
      },
      {
        id: 2,
        type: 'info',
        message: 'This is an info alert',
      },
      {
        id: 3,
        type: 'warning',
        message: 'This is a warning alert',
      },
      {
        id: 4,
        type: 'danger',
        message: 'This is a danger alert',
      },
      {
        id: 5,
        type: 'brand',
        message: 'This is a brand  alert',
      },
      {
        id: 6,
        type: 'primary',
        message: 'This is a primary alert',
      }
    );

    this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
  }

  ngOnInit() {
    this.exampleBasicAlert = basicAlert;
    this.exampleCloseableAlert = closeableAlert;
    this.exampleSelfClosingAlert = selfClosingAlert;
    this.exampleCustomAlert = customAlert;
    this.exampleGlobalConfigurationOfAlerts = globalConfigurationOfAlerts;

    setTimeout(() => (this.staticAlertClosed = true), 20000);

    this._success.subscribe((message) => (this.successMessage = message));
    this._success
      .pipe(debounceTime(5000))
      .subscribe(() => (this.successMessage = null));
  }

  closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  reset() {
    this.alerts = this.backup.map((alert: IAlert) => Object.assign({}, alert));
  }

  changeSuccessMessage() {
    this._success.next(`${new Date()} - Message successfully changed.`);
  }
}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}
