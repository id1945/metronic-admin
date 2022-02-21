import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';
import { InviteUsersModalComponent } from './invite-users-modal/invite-users-modal.component';
import { MainModalComponent } from './main-modal/main-modal.component';
import { UpgradePlanModalComponent } from './upgrade-plan-modal/upgrade-plan-modal.component';

@NgModule({
  declarations: [
    InviteUsersModalComponent,
    MainModalComponent,
    UpgradePlanModalComponent,
  ],
  imports: [CommonModule, InlineSVGModule, RouterModule],
  exports: [
    InviteUsersModalComponent,
    MainModalComponent,
    UpgradePlanModalComponent,
  ],
})
export class ModalsModule {}
