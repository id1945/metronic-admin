import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';
import { NotificationsInnerComponent } from './dropdown-inner/notifications-inner/notifications-inner.component';
import { QuickLinksInnerComponent } from './dropdown-inner/quick-links-inner/quick-links-inner.component';
import { LayoutScrollTopComponent } from './scroll-top/scroll-top.component';

@NgModule({
  declarations: [
    NotificationsInnerComponent,
    QuickLinksInnerComponent,

    LayoutScrollTopComponent,
  ],
  imports: [CommonModule, InlineSVGModule, RouterModule],
  exports: [
    NotificationsInnerComponent,
    QuickLinksInnerComponent,
    LayoutScrollTopComponent,
  ],
})
export class ExtrasModule {}
