import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

const basicDivider = {
  beforeCodeTitle: 'Basic divider',
  htmlCode: `
		<mat-list>
		<mat-list-item>Item 1</mat-list-item>
		<mat-divider></mat-divider>
		<mat-list-item>Item 2</mat-list-item>
		<mat-divider></mat-divider>
		<mat-list-item>Item 3</mat-list-item>
	  </mat-list>
`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic divider
*/
@Component({
  selector: 'divider-overview-example',
  templateUrl: 'divider-overview-example.html',
  styleUrls: ['divider-overview-example.css'],
})
export class DividerOverviewExample {}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const verticalDivider = {
  beforeCodeTitle: 'Vertical divider',
  htmlCode: `
<mat-divider [vertical]="true"></mat-divider>
`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title vertical divider
*/
@Component({
  selector: 'divider-vertical-example',
  templateUrl: 'divider-vertical-example.html',
  styleUrls: ['divider-vertical-example.css'],
})
export class DividerVerticalExample {}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const listExample = {
  beforeCodeTitle: 'Lists with inset dividers',
  htmlCode: `
<mat-list>
  <h3 mat-subheader>Folders</h3>
  <mat-list-item *ngFor="let folder of folders; last as last">
    <mat-icon mat-list-icon>folder</mat-icon>
    <h4 mat-line>{{folder.name}}</h4>
    <p mat-line class="demo-2"> {{folder.updated}} </p>
    <mat-divider [inset]="true" *ngIf="!last"></mat-divider>
  </mat-list-item>
  <mat-divider></mat-divider>
  <h3 md-subheader>Notes</h3>
  <mat-list-item *ngFor="let note of notes">
    <mat-icon md-list-icon>note</mat-icon>
    <h4 md-line>{{note.name}}</h4>
    <p md-line class="demo-2"> {{note.updated}} </p>
  </mat-list-item>
</mat-list>
`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title list divider
*/
@Component({
  selector: 'divider-list-example',
  templateUrl: 'divider-list-example.html',
  styleUrls: ['divider-list-example.css'],
})
export class DividerListExample {}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

@Component({
  selector: 'app-material-divider',
  templateUrl: './divider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .mat-list-icon {
        color: rgba(0, 0, 0, 0.54);
      }
      .mat-toolbar > * + .mat-divider-vertical {
        margin-right: 16px;
      }
      .mat-toolbar > .mat-divider-vertical + * {
        margin-right: 24px;
        margin-left: -1px;
      }
    `,
  ],
})
export class DividerComponent implements OnInit {
  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];

  exampleBasicDivider;
  exampleVertical;
  exampleList;
  ngOnInit() {
    this.exampleBasicDivider = basicDivider;
    this.exampleVertical = verticalDivider;
    this.exampleList = listExample;
  }
}
