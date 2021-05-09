import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

const basic = {
  beforeCodeTitle: 'Basic buttons',
  htmlCode: `
<div class="button-row">
  <button mat-button>Basic</button>
  <button mat-button color="primary">Primary</button>
  <button mat-button color="accent">Accent</button>
  <button mat-button color="warn">Warn</button>
  <button mat-button disabled>Disabled</button>
  <a mat-button routerLink=".">Link</a>
</div>`,
  tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Button varieties
*/
@Component({
  selector: 'button-types-example',
  templateUrl: 'button-types-example.html',
  styleUrls: ['button-types-example.css'],
})
export class ButtonTypesExample {}`,
  cssCode: `
.example-button-row {
  display: flex;
  align-items: center;
  justify-content: space-around;
}`,
  viewCode: ``,
  isCodeVisible: false,
};

const raised = {
  beforeCodeTitle: 'Raised buttons',
  htmlCode: `
<div class="button-row">
  <button mat-raised-button>Basic</button>
  <button mat-raised-button color="primary">Primary</button>
  <button mat-raised-button color="accent">Accent</button>
  <button mat-raised-button color="warn">Warn</button>
  <button mat-raised-button disabled>Disabled</button>
  <a mat-raised-button routerLink=".">Link</a>
</div>`,
  tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Button varieties
*/
@Component({
  selector: 'button-types-example',
  templateUrl: 'button-types-example.html',
  styleUrls: ['button-types-example.css'],
})
export class ButtonTypesExample {}`,
  cssCode: `
.example-button-row {
  display: flex;
  align-items: center;
  justify-content: space-around;
}`,
  viewCode: ``,
  isCodeVisible: false,
};

const icon = {
  beforeCodeTitle: 'Icon buttons',
  htmlCode: `
<div class="button-row">
  <button mat-icon-button>
    <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
  </button>
  <button mat-icon-button color="primary">
    <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
  </button>
  <button mat-icon-button color="accent">
    <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
  </button>
  <button mat-icon-button color="warn">
    <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
  </button>
  <button mat-icon-button disabled>
    <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
  </button>
  </div>`,
  tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Button varieties
*/
@Component({
  selector: 'button-types-example',
  templateUrl: 'button-types-example.html',
  styleUrls: ['button-types-example.css'],
})
export class ButtonTypesExample {}\n\n`,
  cssCode: `
.example-button-row {
  display: flex;
  align-items: center;
 justify-content: space-around;
}`,
  viewCode: ``,
  isCodeVisible: false,
};

const fab = {
  beforeCodeTitle: 'Fab buttons',
  htmlCode: `
<div class="button-row">
  <button mat-fab>Basic</button>
  <button mat-fab color="primary">Primary</button>
  <button mat-fab color="accent">Accent</button>
  <button mat-fab color="warn">Warn</button>
  <button mat-fab disabled>Disabled</button>
  <button mat-fab>
    <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
  </button>
  <a mat-fab routerLink=".">Link</a>
</div>`,
  tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Button varieties
*/
@Component({
  selector: 'button-types-example',
  templateUrl: 'button-types-example.html',
  styleUrls: ['button-types-example.css'],
})
export class ButtonTypesExample {}`,
  cssCode: `
.example-button-row {
  display: flex;
  align-items: center;
 justify-content: space-around;
}`,
  viewCode: ``,
  isCodeVisible: false,
};

const miniFab = {
  beforeCodeTitle: 'Mini Fab buttons',
  htmlCode: `
<div class="button-row">
  <button mat-mini-fab>Basic</button>
  <button mat-mini-fab color="primary">Primary</button>
  <button mat-mini-fab color="accent">Accent</button>
  <button mat-mini-fab color="warn">Warn</button>
  <button mat-mini-fab disabled>Disabled</button>
  <button mat-mini-fab>
    <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
  </button>
  <a mat-mini-fab routerLink=".">Link</a>
</div>`,
  tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Button varieties
*/
@Component({
  selector: 'button-types-example',
  templateUrl: 'button-types-example.html',
  styleUrls: ['button-types-example.css'],
})
export class ButtonTypesExample {}`,
  cssCode: `
.example-button-row {
  display: flex;
  align-items: center;
 justify-content: space-around;
}`,
  viewCode: ``,
  isCodeVisible: false,
};

@Component({
  selector: 'app-material-button',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .example-button-row {
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
    `,
  ],
})
export class ButtonComponent implements OnInit {
  exampleBasic;
  exampleRaised;
  exampleIcon;
  exmapleFab;
  exampleMiniFav;

  ngOnInit() {
    this.exampleBasic = basic;
    this.exampleRaised = raised;
    this.exampleIcon = icon;
    this.exmapleFab = fab;
    this.exampleMiniFav = miniFab;
  }
}
