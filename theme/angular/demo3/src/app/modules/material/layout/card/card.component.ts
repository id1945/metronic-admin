import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

const basicCards = {
  beforeCodeTitle: 'Basic cards',
  htmlCode: `<mat-card>Simple card</mat-card>`,
  tsCode: `
import {Component} from '@angular/core';
/**
* @title Basic cards
*/
@Component({
  selector: 'card-overview-example',
  templateUrl: 'card-overview-example.html',
  styleUrls: ['card-overview-example.css'],
})
export class CardOvserviewExample {}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const cardWithTitle = {
  beforeCodeTitle: 'Card header',
  htmlCode: `
<mat-toolbar>
  <mat-toolbar-row>
    <span>First Row</span>
  </mat-toolbar-row>
  <mat-toolbar-row>
    <span>Second Row</span>
  </mat-toolbar-row>
</mat-toolbar>
`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Card with title
*/
@Component({
selector: 'card-title-example',
templateUrl: 'card-title-example.html',
styleUrls: ['card-title-example.css'],
})
export class CardTitleExample {}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const bigExample = {
  beforeCodeTitle: 'Example with image',
  htmlCode: `
<mat-card class="example-card">
  <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>Shiba Inu</mat-card-title>
    <mat-card-subtitle>Dog Breed</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
  <mat-card-content>
    <p>
      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.
  </p>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button>LIKE</button>
    <button mat-button>SHARE</button>
  </mat-card-actions>
</mat-card>
`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Card with iamge
*/
@Component({
selector: 'card-image-example',
templateUrl: 'card-image-example.html',
styleUrls: ['card-image-example.css'],
})
export class CardImageExample {}
`,
  cssCode: `
.example-card {
  max-width: 400px;
}
.example-header-image {
  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
  background-size: cover;
}`,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};
@Component({
  selector: 'app-material-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .example-card {
        max-width: 400px;
      }
      .example-header-image {
        background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
        background-size: cover;
      }
    `,
  ],
})
export class CardComponent implements OnInit {
  exampleBasicCards;
  exampleCardWithTitle;
  examplBigExample;
  ngOnInit() {
    this.exampleBasicCards = basicCards;
    this.exampleCardWithTitle = cardWithTitle;
    this.examplBigExample = bigExample;
  }
}
