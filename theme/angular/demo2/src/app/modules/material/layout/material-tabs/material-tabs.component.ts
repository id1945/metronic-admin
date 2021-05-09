import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

const basicTabs = {
  beforeCodeTitle: 'Basic tabs',
  htmlCode: `
<mat-tab-group>
  <mat-tab label="Tab 1">Content 1</mat-tab>
  <mat-tab label="Tab 2">Content 2</mat-tab>
</mat-tab-group>
`,
  tsCode: `
import {Component} from '@angular/core';

/**
* @title Basic tabs
*/
@Component({
  selector: 'tabs-overview-example',
  templateUrl: 'tabs-overview-example.html',
  styleUrls: ['tabs-overview-example.css'],
})
export class TabsOverviewExample {}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const complex = {
  beforeCodeTitle: 'Complex Example',
  htmlCode: `
<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Tabs with text labels</h2>
    <mat-tab-group class="demo-tab-group">
      <mat-tab label="Tab 1">
        <div class="demo-tab-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,
          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,
          orci enim rutrum enim, vel tempor sapien arcu a tellus.
        </div>
      </mat-tab>
      <mat-tab label="Tab 2">
        <div class="demo-tab-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,
          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,
          orci enim rutrum enim, vel tempor sapien arcu a tellus.
        </div>
      </mat-tab>
      <mat-tab label="Tab 3" disabled>
        No content
      </mat-tab>
      <mat-tab label="Tab 4">
        <div class="demo-tab-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,
          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,
          orci enim rutrum enim, vel tempor sapien arcu a tellus.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,
          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,
          orci enim rutrum enim, vel tempor sapien arcu a tellus.
        </div>
      </mat-tab>
      <mat-tab label="Tab 5">
        No content
      </mat-tab>
      <mat-tab label="Tab 6">
        No content
      </mat-tab>
    </mat-tab-group>
  </mat-card-content>
</mat-card>
<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Tabs with icon labels</h2>
    <mat-tab-group class="demo-tab-group">
      <mat-tab label="Tab 1">
        <ng-template mat-tab-label>
          <mat-icon>security</mat-icon>
        </ng-template>
        <div class="demo-tab-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
		  In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,
          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,
          orci enim rutrum enim, vel tempor sapien arcu a tellus.
        </div>
      </mat-tab>
      <mat-tab label="Tab 2">
        <ng-template mat-tab-label>
          <mat-icon>attach_file</mat-icon>
        </ng-template>
        <div class="demo-tab-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,
          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,
          orci enim rutrum enim, vel tempor sapien arcu a tellus.
        </div>
      </mat-tab>
      <mat-tab label="Tab 3" disabled>
        <ng-template mat-tab-label>
          <mat-icon>block</mat-icon>
        </ng-template>
        No content
      </mat-tab>
      <mat-tab label="Tab 4">
        <ng-template mat-tab-label>
          <mat-icon>loop</mat-icon>
        </ng-template>
        <div class="demo-tab-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,
          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,
          orci enim rutrum enim, vel tempor sapien arcu a tellus.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,
          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,
          orci enim rutrum enim, vel tempor sapien arcu a tellus.
		</div>
      </mat-tab>
      <mat-tab label="Tab 5">
        <ng-template mat-tab-label>
          <mat-icon>build</mat-icon>
        </ng-template>
        No content
      </mat-tab>
	  <mat-tab label="Tab 6">
        <ng-template mat-tab-label>
          <mat-icon>thumb_down</mat-icon>
        </ng-template>
        No content
	  </mat-tab>
	</mat-tab-group>
  </mat-card-content>
</mat-card>
`,
  tsCode: `
import {Component} from '@angular/core';

/**
* @title Complex Example
*/
@Component({
  selector: 'tabs-template-label-example',
  templateUrl: 'tabs-template-label-example.html',
  styleUrls: ['./tabs-template-label-example.css']
  })
export class TabsTemplateLabelExample {}
`,
  cssCode: `
.demo-tab-group {
  border: 1px solid #e8e8e8;
}
.demo-tab-content {
  padding: 16px;
}
		`,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

@Component({
  selector: 'app-material-tabs',
  templateUrl: './material-tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .demo-tab-group {
        border: 1px solid #e8e8e8;
      }
      .demo-tab-content {
        padding: 16px;
      }
    `,
  ],
})
export class MaterialTabsComponent implements OnInit {
  exampleBasicTabs;
  exampleComplex;
  ngOnInit() {
    this.exampleBasicTabs = basicTabs;
    this.exampleComplex = complex;
  }
}
