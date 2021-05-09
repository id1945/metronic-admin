import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {InlineSVGModule} from 'ng-inline-svg';
import {NgbDropdownModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {CRUDTableModule} from '../../_metronic/shared/crud-table';
import {WidgetsModule} from '../../_metronic/partials/content/widgets/widgets.module';
import {DropdownMenusModule} from '../../_metronic/partials/content/dropdown-menus/dropdown-menus.module';
import {UserProfileComponent} from './user-profile.component';
import {ProfileOverviewComponent} from './profile-overview/profile-overview.component';
import {PersonalInformationComponent} from './personal-information/personal-information.component';
import {AccountInformationComponent} from './account-information/account-information.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {EmailSettingsComponent} from './email-settings/email-settings.component';
import {SavedCreditCardsComponent} from './saved-credit-cards/saved-credit-cards.component';
import {TaxInformationComponent} from './tax-information/tax-information.component';
import {StatementsComponent} from './statements/statements.component';
import {UserProfileRoutingModule} from './user-profile-routing.module';
import {ProfileCardComponent} from './_components/profile-card/profile-card.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    ProfileOverviewComponent,
    PersonalInformationComponent,
    AccountInformationComponent,
    ChangePasswordComponent,
    EmailSettingsComponent,
    SavedCreditCardsComponent,
    TaxInformationComponent,
    StatementsComponent,
    ProfileCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CRUDTableModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    UserProfileRoutingModule,
    DropdownMenusModule,
    NgbDropdownModule,
    NgbTooltipModule,
    WidgetsModule
  ]
})
export class UserProfileModule {}
