import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';
import { ActivityDrawerComponent } from './activity-drawer/activity-drawer.component';
import { ExploreMainDrawerComponent } from './explore-main-drawer/explore-main-drawer.component';
import { MessengerDrawerComponent } from './messenger-drawer/messenger-drawer.component';
import { ChatInnerModule } from '../../content/chat-inner/chat-inner.module';

@NgModule({
  declarations: [
    ActivityDrawerComponent,
    ExploreMainDrawerComponent,
    MessengerDrawerComponent,
  ],
  imports: [CommonModule, InlineSVGModule, RouterModule, ChatInnerModule],
  exports: [
    ActivityDrawerComponent,
    ExploreMainDrawerComponent,
    MessengerDrawerComponent,
  ],
})
export class DrawersModule {}
