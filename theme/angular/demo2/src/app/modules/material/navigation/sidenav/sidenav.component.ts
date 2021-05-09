import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

const basicSidenav = {
  beforeCodeTitle: 'Basic sidenav',
  htmlCode: `
<mat-sidenav-container class="example-container" *ngIf="shouldRun">
  <mat-sidenav mode="side" opened>Sidenav content</mat-sidenav>
  <mat-sidenav-content>Main content</mat-sidenav-content>
</mat-sidenav-container>
<div *ngIf="!shouldRun">Please open on Stackblitz to see result</div>`,
  tsCode: `
import {Component} from '@angular/core';\n
/** @title Basic sidenav */
@Component({
  selector: 'sidenav-overview-example',
  templateUrl: 'sidenav-overview-example.html',
  styleUrls: ['sidenav-overview-example.css'],
})
export class SidenavOverviewExample {
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const basicDrawer = {
  beforeCodeTitle: 'Basic drawer',
  htmlCode: `
<mat-drawer-container class="example-container">
  <mat-drawer mode="side" opened="true">Drawer content</mat-drawer>
  <mat-drawer-content>Main content</mat-drawer-content>
</mat-drawer-container>
`,
  tsCode: `
import {Component} from '@angular/core';\n
/** @title Basic drawer */
@Component({
  selector: 'sidenav-drawer-overview-example',
  templateUrl: 'sidenav-drawer-overview-example.html',
  styleUrls: ['sidenav-drawer-overview-example.css'],
})
export class SidenavDrawerOverviewExample {}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const autosizeSidenav = {
  beforeCodeTitle: 'Autosize sidenav',
  htmlCode: `
<mat-drawer-container class="example-container" autosize>
  <mat-drawer #drawer class="example-sidenav" mode="side">
    <p>Auto-resizing sidenav</p>
    <p *ngIf="showFiller">Lorem, ipsum dolor sit amet consectetur.</p>
    <button (click)="showFiller = !showFiller" mat-raised-button>
      Toggle extra text
    </button>
  </mat-drawer>\n
  <div class="example-sidenav-content">
    <button type="button" mat-button (click)="drawer.toggle()">
      Toggle sidenav
    </button>
  </div>
</mat-drawer-container>
`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Autosize sidenav
*/
@Component({
  selector: 'sidenav-autosize-example',
  templateUrl: 'sidenav-autosize-example.html',
  styleUrls: ['sidenav-autosize-example.css'],
})
export class SidenavAutosizeExample {
  showFiller = false;
}
`,
  cssCode: `
.example-container {
  width: 500px;
  height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.5);
}
.example-sidenav-content {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.example-sidenav {
  padding: 20px;
}
			`,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

@Component({
  selector: 'app-material-sidenav',
  templateUrl: './sidenav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .example-container {
        width: 400px;
        height: 200px;
        margin: 10px;
        border: 1px solid #555;
      }
      .example-container {
        width: 500px;
        height: 300px;
        border: 1px solid rgba(0, 0, 0, 0.5);
      }
      .example-sidenav-content {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
      }
      .example-sidenav {
        padding: 20px;
      }
    `,
  ],
})
export class SidenavComponent implements OnInit {
  exampleBasicSidenav;
  exampleBasicDrawer;
  exampleAutosizeSidenav;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some((h) =>
    h.test(window.location.host)
  );
  showFiller = false;

  ngOnInit() {
    this.exampleBasicSidenav = basicSidenav;
    this.exampleBasicDrawer = basicDrawer;
    this.exampleAutosizeSidenav = autosizeSidenav;
  }
}
