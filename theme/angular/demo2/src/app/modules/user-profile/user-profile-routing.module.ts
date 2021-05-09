import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountInformationComponent } from './account-information/account-information.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EmailSettingsComponent } from './email-settings/email-settings.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ProfileOverviewComponent } from './profile-overview/profile-overview.component';
import { SavedCreditCardsComponent } from './saved-credit-cards/saved-credit-cards.component';
import { StatementsComponent } from './statements/statements.component';
import { TaxInformationComponent } from './tax-information/tax-information.component';
import { UserProfileComponent } from './user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    children: [
      {
        path: 'profile-overview',
        component: ProfileOverviewComponent,
      },
      {
        path: 'personal-information',
        component: PersonalInformationComponent,
      },
      {
        path: 'account-information',
        component: AccountInformationComponent
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent
      },
      {
        path: 'email-settings',
        component: EmailSettingsComponent
      },
      {
        path: 'saved-credic-cards',
        component: SavedCreditCardsComponent
      },
      {
        path: 'tax-information',
        component: TaxInformationComponent
      },
      {
        path: 'statements',
        component: StatementsComponent
      },
      { path: '', redirectTo: 'profile-overview', pathMatch: 'full' },
      { path: '**', redirectTo: 'profile-overview', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileRoutingModule { }
