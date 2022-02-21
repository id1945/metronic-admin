import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';
import { ExploreMainDrawerComponent } from './explore-main-drawer/explore-main-drawer.component';

@NgModule({
  declarations: [ExploreMainDrawerComponent],
  imports: [CommonModule, InlineSVGModule, RouterModule],
  exports: [ExploreMainDrawerComponent],
})
export class DrawersModule {}
