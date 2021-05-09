import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PizzaPartyComponent } from './pizza-party.component';

const basic = {
  beforeCodeTitle: 'Basic snack-bar',
  htmlCode: `
<mat-form-field>
  <input matInput value="Disco party!" placeholder="Message" #message>
</mat-form-field>
<mat-form-field>
  <input matInput value="Dance" placeholder="Action" #action>
</mat-form-field>
<button mat-button (click)="openSnackBar(message.value, action.value)">Show snack-bar</button>
`,
  tsCode: `
import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';\n
/**
* @title Basic snack-bar
*/
@Component({
  selector: 'snack-bar-overview-example',
  templateUrl: 'snack-bar-overview-example.html',
  styleUrls: ['snack-bar-overview-example.css'],
})
export class SnackBarOverviewExample {
  constructor(public snackBar: MatSnackBar) {}\n
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const custom = {
  beforeCodeTitle: 'Snack-bar with a custom component',
  htmlCode: `
<button mat-button (click)="openSnackBar()" aria-label="Show an example snack-bar">
  Pizza party
</button>
`,
  tsCode: `
import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';\n
/**
* @title Snack-bar with a custom component
*/
@Component({
  selector: 'snack-bar-component-example',
  templateUrl: 'snack-bar-component-example.html',
})
export class SnackBarComponentExample {
  constructor(public snackBar: MatSnackBar) {}\n
  openSnackBar() {
    this.snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 500,
    });
  }
}\n
@Component({
  selector: 'snack-bar-component-example-snack',
  template: \`
	<span _ngcontent-c3="" class="example-pizza-party">
      Pizza party!!! 🍕
    </span>\`,
  styles: [\`.example-pizza-party { color: hotpink; }\`],
})
export class PizzaPartyComponent {}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const dismissal = {
  beforeCodeTitle: 'Dismissal example with 6 seconds duration',
  htmlCode: `
<mat-form-field>
  <input matInput value="Disco party!" placeholder="Message" #message>
</mat-form-field>
<mat-form-field>
  <input matInput value="Dance" placeholder="Action" #action>
</mat-form-field>
<button mat-button (click)="openSnackBar(message.value, action.value)">Show snack-bar</button>
`,
  tsCode: `
import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';\n
/**
* @title Basic snack-bar
*/
@Component({
  selector: 'snack-bar-overview-example',
  templateUrl: 'snack-bar-overview-example.html',
  styleUrls: ['snack-bar-overview-example.css'],
})
export class SnackBarOverviewExample {
  constructor(public snackBar: MatSnackBar) {}\n
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

@Component({
  selector: 'app-material-snackbar',
  templateUrl: './snackbar.component.html',
  styles: [``],
})
export class SnackbarComponent implements OnInit {
  exampleBasic;
  exampleCustom;
  exampleDismissal;

  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openSnackBar2() {
    this.snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 500,
    });
  }

  openSnackBar3(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 6500,
    });
  }

  ngOnInit() {
    this.exampleBasic = basic;
    this.exampleCustom = custom;
    this.exampleDismissal = dismissal;
  }
}
