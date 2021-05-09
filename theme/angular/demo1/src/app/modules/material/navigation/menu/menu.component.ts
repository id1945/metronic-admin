import { Component, OnInit } from '@angular/core';

const basicMenu = {
  beforeCodeTitle: 'Basic menu',
  htmlCode: `
<button mat-button [matMenuTriggerFor]="menu">Menu</button>
<mat-menu #menu="matMenu">
  <button mat-menu-item>Item 1</button>
  <button mat-menu-item>Item 2</button>
</mat-menu>
`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic menu
 */
@Component({
  selector: 'menu-overview-example',
  templateUrl: 'menu-overview-example.html',
  styleUrls: ['menu-overview-example.css'],
})
export class MenuOverviewExample {}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const nestedMenu = {
  beforeCodeTitle: 'Nested menu',
  htmlCode: `
<button mat-button [matMenuTriggerFor]="animals">Animal index</button>
<mat-menu #animals="matMenu">
  <button mat-menu-item [matMenuTriggerFor]="vertebrates">Vertebrates</button>
  <button mat-menu-item [matMenuTriggerFor]="invertebrates">Invertebrates</button>
</mat-menu>
<mat-menu #vertebrates="matMenu">
  <button mat-menu-item [matMenuTriggerFor]="fish">Fishes</button>
  <button mat-menu-item [matMenuTriggerFor]="amphibians">Amphibians</button>
  <button mat-menu-item [matMenuTriggerFor]="reptiles">Reptiles</button>
  <button mat-menu-item>Birds</button>
  <button mat-menu-item>Mammals</button>
</mat-menu>
<mat-menu #invertebrates="matMenu">
  <button mat-menu-item>Insects</button>
  <button mat-menu-item>Molluscs</button>
  <button mat-menu-item>Crustaceans</button>
  <button mat-menu-item>Corals</button>
  <button mat-menu-item>Arachnids</button>
  <button mat-menu-item>Velvet worms</button>
  <button mat-menu-item>Horseshoe crabs</button>
</mat-menu>
<mat-menu #fish="matMenu">
  <button mat-menu-item>Baikal oilfish</button>
  <button mat-menu-item>Bala shark</button>
  <button mat-menu-item>Ballan wrasse</button>
  <button mat-menu-item>Bamboo shark</button>
  <button mat-menu-item>Banded killifish</button>
</mat-menu>
<mat-menu #amphibians="matMenu">
  <button mat-menu-item>Sonoran desert toad</button>
  <button mat-menu-item>Western toad</button>
  <button mat-menu-item>Arroyo toad</button>
  <button mat-menu-item>Yosemite toad</button>
</mat-menu>
<mat-menu #reptiles="matMenu">
  <button mat-menu-item>Banded Day Gecko</button>
  <button mat-menu-item>Banded Gila Monster</button>
  <button mat-menu-item>Black Tree Monitor</button>
  <button mat-menu-item>Blue Spiny Lizard</button>
  <button mat-menu-item disabled>Velociraptor</button>
</mat-menu>
`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Nested menu
*/
@Component({
  selector: 'nested-menu-example',
  templateUrl: 'nested-menu-example.html',
  styleUrls: ['nested-menu-example.css']
})
export class NestedMenuExample {}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const menuWithIcons = {
  beforeCodeTitle: 'Menu with icons',
  htmlCode: `
<button mat-icon-button [matMenuTriggerFor]="menu">
  <mat-icon>more_vert</mat-icon>
</button>
<mat-menu #menu="matMenu">
  <button mat-menu-item>
    <mat-icon>dialpad</mat-icon>
    <span>Redial</span>
  </button>
  <button mat-menu-item disabled>
    <mat-icon>voicemail</mat-icon>
    <span>Check voicemail</span>
  </button>
  <button mat-menu-item>
    <mat-icon>notifications_off</mat-icon>
    <span>Disable alerts</span>
  </button>
</mat-menu>
`,
  tsCode: `
import {Component} from '@angular/core';

/**
* @title Menu with icons
*/
@Component({
  selector: 'menu-icons-example',
  templateUrl: 'menu-icons-example.html',
  styleUrls: ['menu-icons-example.css'],
})
export class MenuIconsExample {}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const toggling = {
  beforeCodeTitle: 'Customizing menu position',
  htmlCode: `
<mat-menu #appMenu="matMenu" yPosition="above">
  <button mat-menu-item>Settings</button>
  <button mat-menu-item>Help</button>
</mat-menu>
<button mat-icon-button [matMenuTriggerFor]="appMenu">
  <mat-icon>more_vert</mat-icon>
</button>
`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @Customizing menu position
 */
@Component({
  selector: 'menu-customizing-example',
  templateUrl: 'menu-customizing-example.html',
  styleUrls: ['menu-customizing-example.css'],
})
export class MenuCustomizingExample {}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

@Component({
  selector: 'app-material-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  exampleBasicMenu;
  exampleNestedMenu;
  exampleMenuWithIcons;
  exampleToggling;

  ngOnInit() {
    this.exampleBasicMenu = basicMenu;
    this.exampleNestedMenu = nestedMenu;
    this.exampleMenuWithIcons = menuWithIcons;
    this.exampleToggling = toggling;
  }
}
