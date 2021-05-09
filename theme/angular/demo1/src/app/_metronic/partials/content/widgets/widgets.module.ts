import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InlineSVGModule } from 'ng-inline-svg';
// Advanced Tables
import { AdvanceTablesWidget1Component } from './advance-tables/advance-tables-widget1/advance-tables-widget1.component';
import { AdvanceTablesWidget2Component } from './advance-tables/advance-tables-widget2/advance-tables-widget2.component';
import { AdvanceTablesWidget4Component } from './advance-tables/advance-tables-widget4/advance-tables-widget4.component';
import { AdvanceTablesWidget7Component } from './advance-tables/advance-tables-widget7/advance-tables-widget7.component';
import { AdvanceTablesWidget9Component } from './advance-tables/advance-tables-widget9/advance-tables-widget9.component';
// Base Tables
import { BaseTablesWidget1Component } from './base-tables/base-tables-widget1/base-tables-widget1.component';
import { BaseTablesWidget2Component } from './base-tables/base-tables-widget2/base-tables-widget2.component';
import { BaseTablesWidget6Component } from './base-tables/base-tables-widget6/base-tables-widget6.component';
// Lists
import { ListsWidget1Component } from './lists/lists-widget1/lists-widget1.component';
import { ListsWidget3Component } from './lists/lists-widget3/lists-widget3.component';
import { ListsWidget4Component } from './lists/lists-widget4/lists-widget4.component';
import { ListsWidget8Component } from './lists/lists-widget8/lists-widget8.component';
import { ListsWidget9Component } from './lists/lists-widget9/lists-widget9.component';
import { ListsWidget10Component } from './lists/lists-widget10/lists-widget10.component';
import { ListsWidget11Component } from './lists/lists-widget11/lists-widget11.component';
import { ListsWidget14Component } from './lists/lists-widget14/lists-widget14.component';
// Mixed
import { MixedWidget1Component } from './mixed/mixed-widget1/mixed-widget1.component';
import { MixedWidget4Component } from './mixed/mixed-widget4/mixed-widget4.component';
import { MixedWidget6Component } from './mixed/mixed-widget6/mixed-widget6.component';
import { MixedWidget10Component } from './mixed/mixed-widget10/mixed-widget10.component';
import { MixedWidget11Component } from './mixed/mixed-widget11/mixed-widget11.component';
import { MixedWidget12Component } from './mixed/mixed-widget12/mixed-widget12.component';
import { MixedWidget14Component } from './mixed/mixed-widget14/mixed-widget14.component';
// Stats
import { StatsWidget10Component } from './stats/stats-widget10/stats-widget10.component';
import { StatsWidget11Component } from './stats/stats-widget11/stats-widget11.component';
import { StatsWidget12Component } from './stats/stats-widget12/stats-widget12.component';
// Tiles
import { TilesWidget1Component } from './tiles/tiles-widget1/tiles-widget1.component';
import { TilesWidget3Component } from './tiles/tiles-widget3/tiles-widget3.component';
import { TilesWidget10Component } from './tiles/tiles-widget10/tiles-widget10.component';
import { TilesWidget11Component } from './tiles/tiles-widget11/tiles-widget11.component';
import { TilesWidget12Component } from './tiles/tiles-widget12/tiles-widget12.component';
import { TilesWidget13Component } from './tiles/tiles-widget13/tiles-widget13.component';
import { TilesWidget14Component } from './tiles/tiles-widget14/tiles-widget14.component';
// Other
import { DropdownMenusModule } from '../dropdown-menus/dropdown-menus.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Widget3DropdownComponent } from './lists/lists-widget3/widget3-dropdown/widget3-dropdown.component';
import { Widget4DropdownComponent } from './lists/lists-widget4/widget4-dropdown/widget4-dropdown.component';


@NgModule({
  declarations: [
    // Advanced Tables
    AdvanceTablesWidget1Component,
    AdvanceTablesWidget2Component,
    AdvanceTablesWidget4Component,
    AdvanceTablesWidget7Component,
    AdvanceTablesWidget9Component,
    // Base Tables
    BaseTablesWidget1Component,
    BaseTablesWidget2Component,
    BaseTablesWidget6Component,
    // Lists
    ListsWidget1Component,
    ListsWidget3Component,
    ListsWidget4Component,
    ListsWidget8Component,
    ListsWidget9Component,
    ListsWidget10Component,
    ListsWidget11Component,
    ListsWidget14Component,
    // Mixed
    MixedWidget1Component,
    MixedWidget4Component,
    MixedWidget6Component,
    MixedWidget10Component,
    MixedWidget11Component,
    MixedWidget12Component,
    MixedWidget14Component,
    // Stats
    StatsWidget10Component,
    StatsWidget11Component,
    StatsWidget12Component,
    // Tiles,
    TilesWidget1Component,
    TilesWidget3Component,
    TilesWidget10Component,
    TilesWidget11Component,
    TilesWidget12Component,
    TilesWidget13Component,
    TilesWidget14Component,
    // Other
    Widget4DropdownComponent,
    Widget3DropdownComponent
  ],
  imports: [
    CommonModule,
    DropdownMenusModule,
    InlineSVGModule,
    NgApexchartsModule,
    NgbDropdownModule,
  ],
  exports: [
    // Advanced Tables
    AdvanceTablesWidget1Component,
    AdvanceTablesWidget2Component,
    AdvanceTablesWidget4Component,
    AdvanceTablesWidget7Component,
    AdvanceTablesWidget9Component,
    // Base Tables
    BaseTablesWidget1Component,
    BaseTablesWidget2Component,
    BaseTablesWidget6Component,
    // Lists
    ListsWidget1Component,
    ListsWidget3Component,
    ListsWidget4Component,
    ListsWidget8Component,
    ListsWidget9Component,
    ListsWidget10Component,
    ListsWidget11Component,
    ListsWidget14Component,
    // Mixed
    MixedWidget1Component,
    MixedWidget4Component,
    MixedWidget6Component,
    MixedWidget10Component,
    MixedWidget11Component,
    MixedWidget12Component,
    MixedWidget14Component,
    // Stats
    StatsWidget10Component,
    StatsWidget11Component,
    StatsWidget12Component,
    // Tiles,
    TilesWidget1Component,
    TilesWidget3Component,
    TilesWidget10Component,
    TilesWidget11Component,
    TilesWidget12Component,
    TilesWidget13Component,
    TilesWidget14Component,
    // Other
    Widget4DropdownComponent,
    Widget3DropdownComponent,
  ],
})
export class WidgetsModule { }
