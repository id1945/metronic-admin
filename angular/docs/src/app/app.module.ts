import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { InlineSVGModule } from 'ng-inline-svg';
import {
  NgbDropdownModule,
  NgbModule,
  NgbProgressbarModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { QuickStartComponent } from './getting-started/quick-start/quick-start.component';
import { LayoutComponent } from './_metronic/layout/layout.component';
import { AsideComponent } from './_metronic/layout/components/aside/aside.component';
import { HeaderComponent } from './_metronic/layout/components/header/header.component';
import { ContentComponent } from './_metronic/layout/components/content/content.component';
import { FooterComponent } from './_metronic/layout/components/footer/footer.component';
import { ScriptsInitComponent } from './_metronic/layout/components/scripts-init/scripts-init.component';
import { AsideMenuComponent } from './_metronic/layout/components/aside/aside-menu/aside-menu.component';
import { ToolbarComponent } from './_metronic/layout/components/toolbar/toolbar.component';
import { TopbarComponent } from './_metronic/layout/components/topbar/topbar.component';
import { PageTitleComponent } from './_metronic/layout/components/header/page-title/page-title.component';
import { HeaderMenuComponent } from './_metronic/layout/components/header/header-menu/header-menu.component';
import {
  DrawersModule,
  DropdownMenusModule,
  ExtrasModule,
  ModalsModule,
} from './_metronic/partials';
import { AppRoutingModule } from './app-routing.module';
import { OverviewComponent } from './getting-started/overview/overview.component';
import { DeploymentComponent } from './getting-started/deployment/deployment.component';
import { I18nComponent } from './getting-started/i18n/i18n.component';
import { MockBackEndComponent } from './getting-started/mock-back-end/mock-back-end.component';
import { CreateAPageComponent } from './getting-started/create-apage/create-apage.component';
import { RTLVersionComponent } from './getting-started/rtlversion/rtlversion.component';
import { DarkModeComponent } from './getting-started/dark-mode/dark-mode.component';
import { UpdatesComponent } from './getting-started/updates/updates.component';
import { ChangelogComponent } from './getting-started/changelog/changelog.component';
import { ReferncesComponent } from './getting-started/refernces/refernces.component';
import { CodeBlockComponent } from './code-block/code-block.component';
import { HTMLIntegrationComponent } from './getting-started/htmlintegration/htmlintegration.component';

@NgModule({
  declarations: [
    LayoutComponent,
    AsideComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ScriptsInitComponent,
    ToolbarComponent,
    AsideMenuComponent,
    TopbarComponent,
    PageTitleComponent,
    HeaderMenuComponent,
    QuickStartComponent,
    OverviewComponent,
    DeploymentComponent,
    I18nComponent,
    MockBackEndComponent,
    CreateAPageComponent,
    RTLVersionComponent,
    DarkModeComponent,
    UpdatesComponent,
    ChangelogComponent,
    ReferncesComponent,
    CodeBlockComponent,
    HTMLIntegrationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClipboardModule,
    HttpClientModule,
    AppRoutingModule,
    InlineSVGModule.forRoot(),
    NgbModule,
    NgbDropdownModule,
    NgbProgressbarModule,
    ExtrasModule,
    ModalsModule,
    DrawersModule,
    DropdownMenusModule,
    NgbTooltipModule,
    HighlightModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
          json: () => import('highlight.js/lib/languages/json'),
          bash: () => import('highlight.js/lib/languages/bash'),
        },
      },
    },
  ],
  exports: [QuickStartComponent],
  bootstrap: [LayoutComponent],
})
export class AppModule {}
