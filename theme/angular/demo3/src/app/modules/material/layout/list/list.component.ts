import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

const basicList = {
  beforeCodeTitle: 'Basic list',
  htmlCode: `
<mat-list role="list">
  <mat-list-item role="listitem">Item 1</mat-list-item>
  <mat-list-item role="listitem">Item 2</mat-list-item>
  <mat-list-item role="listitem">Item 3</mat-list-item>
</mat-list>
`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic list
*/
@Component({
  selector: 'list-overview-example',
  templateUrl: 'list-overview-example.html',
  styleUrls: ['list-overview-example.css'],
})
export class ListOverviewExample {}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};
const listWithSelection = {
  beforeCodeTitle: 'List with selection',
  htmlCode: `
<mat-selection-list #shoes>
  <mat-list-option *ngFor="let shoe of typesOfShoes">
    {{shoe}}
  </mat-list-option>
</mat-selection-list>
<p>
  Options selected: {{shoes.selectedOptions.selected.length}}
</p>
`,
  tsCode: `
import {Component} from '@angular/core';

/**
* @title List with selection
*/
@Component({
  selector: 'list-selection-example',
  styleUrls: ['list-selection-example.css'],
  templateUrl: 'list-selection-example.html',
})
export class ListSelectionExample {
  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const listWithSection = {
  beforeCodeTitle: 'List with sections',
  htmlCode: `
<mat-list>
  <h3 mat-subheader>Folders</h3>
  <mat-list-item *ngFor="let folder of folders">
    <mat-icon mat-list-icon>folder</mat-icon>
	<h4 mat-line>{{folder.name}}</h4>
    <p mat-line> {{folder.updated | date}} </p>
  </mat-list-item>
  <mat-divider></mat-divider>
  <h3 mat-subheader>Notes</h3>
  <mat-list-item *ngFor="let note of notes">
    <mat-icon mat-list-icon>note</mat-icon>
    <h4 mat-line>{{note.name}}</h4>
    <p mat-line> {{note.updated | date}} </p>
  </mat-list-item>
</mat-list>
`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title List with sections
*/
@Component({
  selector: 'list-sections-example',
  styleUrls: ['list-sections-example.css'],
templateUrl: 'list-sections-example.html',
})
export class ListSectionsExample {
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
  }
  ];
  notes = [
  {
    name: 'Vacation Itinerary',
    updated: new Date('2/20/16'),
  },
  {
    name: 'Kitchen Remodel',
    updated: new Date('1/18/16'),
  }
  ];
}
`,
  cssCode: `
.mat-list-icon {
  color: rgba(0, 0, 0, 0.54);
}
`,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

@Component({
  selector: 'app-material-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .mat-list-icon {
        color: rgba(0, 0, 0, 0.54);
      }
    `,
  ],
})
export class ListComponent implements OnInit {
  exampleBasicList;
  exampleListWithSelection;
  exampleListWithSection;
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
  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  ngOnInit() {
    this.exampleBasicList = basicList;
    this.exampleListWithSelection = listWithSelection;
    this.exampleListWithSection = listWithSection;
  }
}
