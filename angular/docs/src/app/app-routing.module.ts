import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangelogComponent } from './getting-started/changelog/changelog.component';
import { CreateAPageComponent } from './getting-started/create-apage/create-apage.component';
import { DarkModeComponent } from './getting-started/dark-mode/dark-mode.component';
import { DeploymentComponent } from './getting-started/deployment/deployment.component';
import { HTMLIntegrationComponent } from './getting-started/htmlintegration/htmlintegration.component';
import { I18nComponent } from './getting-started/i18n/i18n.component';
import { MockBackEndComponent } from './getting-started/mock-back-end/mock-back-end.component';
import { OverviewComponent } from './getting-started/overview/overview.component';
import { QuickStartComponent } from './getting-started/quick-start/quick-start.component';
import { ReferncesComponent } from './getting-started/refernces/refernces.component';
import { RTLVersionComponent } from './getting-started/rtlversion/rtlversion.component';
import { UpdatesComponent } from './getting-started/updates/updates.component';

const docsRouting: Routes = [
  {
    path: 'quick-start',
    component: QuickStartComponent,
  },
  {
    path: 'overview',
    component: OverviewComponent,
  },
  {
    path: 'deployment',
    component: DeploymentComponent,
  },
  {
    path: 'i18n',
    component: I18nComponent,
  },
  {
    path: 'mock-backend',
    component: MockBackEndComponent,
  },
  {
    path: 'create-a-page',
    component: CreateAPageComponent,
  },
  {
    path: 'rtl',
    component: RTLVersionComponent,
  },
  {
    path: 'dark-mode',
    component: DarkModeComponent,
  },
  {
    path: 'updates',
    component: UpdatesComponent,
  },
  {
    path: 'changelog',
    component: ChangelogComponent,
  },
  {
    path: 'references',
    component: ReferncesComponent,
  },
  {
    path: 'html',
    component: HTMLIntegrationComponent,
  },
  {
    path: '',
    redirectTo: '/quick-start',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/quick-start',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(docsRouting)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
