import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

const basic = {
  beforeCodeTitle: 'Basic icons',
  htmlCode: `
<mat-icon>home</mat-icon>
<mat-icon>queue music</mat-icon>
<mat-icon>call split</mat-icon>
<mat-icon>event note</mat-icon>`,
  tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Basic icons
*/
@Component({
  selector: 'icon-overview-example',
  templateUrl: 'icon-overview-example.html',
  styleUrls: ['icon-overview-example.css']
})
export class IconOverviewExample {}`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const sVG = {
  beforeCodeTitle: 'SVG icons',
  htmlCode: `<mat-icon svgIcon="thumbs-up"></mat-icon>`,
  tsCode: `
import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';\n\n
/**
* @title SVG icons
*/
@Component({
  selector: 'icon-svg-example',
  templateUrl: 'icon-svg-example.html',
  styleUrls: ['icon-svg-example.css'],
})
export class IconSvgExample {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  iconRegistry.addSvgIcon(
    'thumbs-up',
     sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }
}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

@Component({
  selector: 'app-material-icon',
  templateUrl: './icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnInit {
  exampleBasic;
  exampleSVG;
  ngOnInit() {
    this.exampleBasic = basic;
    this.exampleSVG = sVG;
  }
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'boy',
      sanitizer.bypassSecurityTrustResourceUrl(
        './assets/media/svg/avatars/001-boy.svg'
      )
    );
  }
}
