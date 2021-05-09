import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { MatChipInputEvent } from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

const basic = {
  beforeCodeTitle: 'Basic chips',
  htmlCode: `
<mat-chip-list>
  <mat-chip>One fish</mat-chip>
  <mat-chip>Two fish</mat-chip>
  <mat-chip color="primary" selected="true">Primary fish</mat-chip>
  <mat-chip color="accent" selected="true">Accent fish</mat-chip>
</mat-chip-list>`,
  tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Basic chips
*/
@Component({
  selector: 'chips-overview-example',
  templateUrl: 'chips-overview-example.html',
  styleUrls: ['chips-overview-example.css'],
})
export class ChipsOverviewExample {}`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const input = {
  beforeCodeTitle: 'Chips with input',
  htmlCode: `
<mat-form-field class="demo-chip-list">
  <mat-chip-list #chipList>
    <mat-chip *ngFor="let fruit of fruits" [selectable]="selectable"
      [removable]="removable" (remove)="remove(fruit)">
      {{fruit.name}}
      <mat-icon matChipRemove *ngIf="removable">cancel</mat-icon>
    </mat-chip>
    <input placeholder="New fruit..."
      [matChipInputFor]="chipList"
      [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
      [matChipInputAddOnBlur]="addOnBlur"
      (matChipInputTokenEnd)="add($event)" />
  </mat-chip-list>
</mat-form-field>`,
  tsCode: `
import {Component} from '@angular/core';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';\n\n
/**
* @title Chips with input
*/
@Component({
  selector: 'chips-input-example',
  templateUrl: 'chips-input-example.html',
  styleUrls: ['chips-input-example.css']
})
export class ChipsInputExample {
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;\n\n
  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];\n\n
  fruits = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' },
  ];\n\n\n\
  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;\n\n
    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }\n\n
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }\n\n
  remove(fruit: any): void {
    let index = this.fruits.indexOf(fruit);\n
    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
}
`,
  cssCode: `
.demo-chip-list {
  width: 100%;
}`,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const stacked = {
  beforeCodeTitle: 'Stacked chips',
  htmlCode: `
<<mat-chip-list class="mat-chip-list-stacked">
  <mat-chip *ngFor="let chip of availableColors" selected="true" [color]="chip.color">
    {{chip.name}}
  </mat-chip>
</mat-chip-list>`,
  tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Stacked chips
*/
@Component({
  selector: 'chips-stacked-example',
  templateUrl: 'chips-stacked-example.html',
  styleUrls: ['chips-stacked-example.css'],
})
export class ChipsStackedExample {
  color: string;\n\n
  availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];
}
`,
  cssCode: `
		mat-chip {
			max-width: 200px;
		}`,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

@Component({
  selector: 'app-material-chips',
  templateUrl: './chips.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .demo-chip-list {
        width: 100%;
      }
      mat-chip {
        max-width: 200px;
      }
    `,
  ],
})
export class ChipsComponent implements OnInit {
  exampleBasic;
  exampleInput;
  exampleStacked;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  fruits = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];

  color: string;

  availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' },
  ];

  ngOnInit() {
    this.exampleBasic = basic;
    this.exampleInput = input;
    this.exampleStacked = stacked;
  }

  add(event: MatChipInputEvent): void {
    const inputText = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
    if (inputText) {
      inputText.value = '';
    }
  }

  remove(fruit: any): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
}
