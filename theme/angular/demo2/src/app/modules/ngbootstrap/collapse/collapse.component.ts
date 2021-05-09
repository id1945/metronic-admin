import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

const demo = {
  beforeCodeTitle: 'Demo',
  htmlCode: `
<div class="example-preview">
  <div>
    <button type="button"
      class="btn btn-primary"
      (click)="isCollapsed = !isCollapsed"
      [attr.aria-expanded]="!isCollapsed"
      aria-controls="collapseExample">
      Toggle
    </button>
  </div>
  <div id="collapseExample" [ngbCollapse]="isCollapsed">
    <div class="card">
      <div class="card-body">
        You can collapse this card by clicking Toggle
      </div>
    </div>
  </div>
</div>
`,
  tsCode: `
import { Component } from '@angular/core';\n
@Component({
    selector: 'ngbd-collapse-basic',
    templateUrl: './collapse-basic.html'
})
export class NgbdCollapseBasic {
    public isCollapsed = false;
}
`,
  isCodeVisible: false,
  isExampleExpanded: true,
};

@Component({
  selector: 'app-ng-collapse',
  templateUrl: './collapse.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollapseComponent implements OnInit {
  exampleDemo: any;
  isCollapsed = false;

  constructor() {}

  ngOnInit() {
    this.exampleDemo = demo;
  }
}
