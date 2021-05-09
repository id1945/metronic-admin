import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg';
import { NoticeComponent } from './notice/notice.component';
import { CodePreviewComponent } from './code-preview/code-preview.component';
import { CoreModule } from '../../../core';

@NgModule({
  declarations: [NoticeComponent, CodePreviewComponent],
  imports: [
    CommonModule,
    CoreModule,
    HighlightModule,
    PerfectScrollbarModule,
    // ngbootstrap
    NgbNavModule,
    NgbTooltipModule,
    InlineSVGModule,
  ],
  exports: [NoticeComponent, CodePreviewComponent],
})
export class GeneralModule {}
