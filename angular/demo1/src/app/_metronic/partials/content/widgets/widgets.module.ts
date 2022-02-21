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
// Mixed
import { MixedWidget1Component } from './mixed/mixed-widget1/mixed-widget1.component';
import { MixedWidget4Component } from './mixed/mixed-widget4/mixed-widget4.component';
import { MixedWidget6Component } from './mixed/mixed-widget6/mixed-widget6.component';
import { MixedWidget10Component } from './mixed/mixed-widget10/mixed-widget10.component';
import { MixedWidget11Component } from './mixed/mixed-widget11/mixed-widget11.component';
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
import { ListsWidget2Component } from './lists/lists-widget2/lists-widget2.component';
import { ListsWidget5Component } from './lists/lists-widget5/lists-widget5.component';
import { ListsWidget6Component } from './lists/lists-widget6/lists-widget6.component';
import { ListsWidget7Component } from './lists/lists-widget7/lists-widget7.component';
import { ChartsWidget1Component } from './charts/charts-widget1/charts-widget1.component';
import { ChartsWidget2Component } from './charts/charts-widget2/charts-widget2.component';
import { ChartsWidget3Component } from './charts/charts-widget3/charts-widget3.component';
import { ChartsWidget4Component } from './charts/charts-widget4/charts-widget4.component';
import { ChartsWidget5Component } from './charts/charts-widget5/charts-widget5.component';
import { ChartsWidget6Component } from './charts/charts-widget6/charts-widget6.component';
import { ChartsWidget7Component } from './charts/charts-widget7/charts-widget7.component';
import { ChartsWidget8Component } from './charts/charts-widget8/charts-widget8.component';
import { FeedsWidget2Component } from './feeds/feeds-widget2/feeds-widget2.component';
import { FeedsWidget3Component } from './feeds/feeds-widget3/feeds-widget3.component';
import { FeedsWidget4Component } from './feeds/feeds-widget4/feeds-widget4.component';
import { FeedsWidget5Component } from './feeds/feeds-widget5/feeds-widget5.component';
import { FeedsWidget6Component } from './feeds/feeds-widget6/feeds-widget6.component';
import { MixedWidget2Component } from './mixed/mixed-widget2/mixed-widget2.component';
import { MixedWidget3Component } from './mixed/mixed-widget3/mixed-widget3.component';
import { MixedWidget5Component } from './mixed/mixed-widget5/mixed-widget5.component';
import { MixedWidget7Component } from './mixed/mixed-widget7/mixed-widget7.component';
import { MixedWidget8Component } from './mixed/mixed-widget8/mixed-widget8.component';
import { MixedWidget9Component } from './mixed/mixed-widget9/mixed-widget9.component';
import { StatsWidget1Component } from './stats/stats-widget1/stats-widget1.component';
import { StatsWidget2Component } from './stats/stats-widget2/stats-widget2.component';
import { StatsWidget3Component } from './stats/stats-widget3/stats-widget3.component';
import { StatsWidget4Component } from './stats/stats-widget4/stats-widget4.component';
import { StatsWidget5Component } from './stats/stats-widget5/stats-widget5.component';
import { StatsWidget6Component } from './stats/stats-widget6/stats-widget6.component';
import { TablesWidget1Component } from './tables/tables-widget1/tables-widget1.component';
import { TablesWidget2Component } from './tables/tables-widget2/tables-widget2.component';
import { TablesWidget3Component } from './tables/tables-widget3/tables-widget3.component';
import { TablesWidget4Component } from './tables/tables-widget4/tables-widget4.component';
import { TablesWidget5Component } from './tables/tables-widget5/tables-widget5.component';
import { TablesWidget6Component } from './tables/tables-widget6/tables-widget6.component';
import { TablesWidget7Component } from './tables/tables-widget7/tables-widget7.component';
import { TablesWidget8Component } from './tables/tables-widget8/tables-widget8.component';
import { TablesWidget9Component } from './tables/tables-widget9/tables-widget9.component';
import { TablesWidget10Component } from './tables/tables-widget10/tables-widget10.component';
import { TablesWidget11Component } from './tables/tables-widget11/tables-widget11.component';
import { TablesWidget12Component } from './tables/tables-widget12/tables-widget12.component';
import { TablesWidget13Component } from './tables/tables-widget13/tables-widget13.component';
import { TablesWidget14Component } from './tables/tables-widget14/tables-widget14.component';

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
    // Mixed
    MixedWidget1Component,
    MixedWidget4Component,
    MixedWidget6Component,
    MixedWidget10Component,
    MixedWidget11Component,
    // Tiles,
    TilesWidget1Component,
    TilesWidget3Component,
    TilesWidget10Component,
    TilesWidget11Component,
    TilesWidget12Component,
    TilesWidget13Component,
    TilesWidget14Component,
    // Other
    ListsWidget2Component,
    ListsWidget5Component,
    ListsWidget6Component,
    ListsWidget7Component,
    ChartsWidget1Component,
    ChartsWidget2Component,
    ChartsWidget3Component,
    ChartsWidget4Component,
    ChartsWidget5Component,
    ChartsWidget6Component,
    ChartsWidget7Component,
    ChartsWidget8Component,
    FeedsWidget2Component,
    FeedsWidget3Component,
    FeedsWidget4Component,
    FeedsWidget5Component,
    FeedsWidget6Component,
    MixedWidget2Component,
    MixedWidget3Component,
    MixedWidget5Component,
    MixedWidget7Component,
    MixedWidget8Component,
    MixedWidget9Component,
    StatsWidget1Component,
    StatsWidget2Component,
    StatsWidget3Component,
    StatsWidget4Component,
    StatsWidget5Component,
    StatsWidget6Component,
    TablesWidget1Component,
    TablesWidget2Component,
    TablesWidget3Component,
    TablesWidget4Component,
    TablesWidget5Component,
    TablesWidget6Component,
    TablesWidget7Component,
    TablesWidget8Component,
    TablesWidget9Component,
    TablesWidget10Component,
    TablesWidget11Component,
    TablesWidget12Component,
    TablesWidget13Component,
    TablesWidget14Component,
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
    // Mixed
    MixedWidget1Component,
    MixedWidget4Component,
    MixedWidget6Component,
    MixedWidget10Component,
    MixedWidget11Component,
    // Tiles,
    TilesWidget1Component,
    TilesWidget3Component,
    TilesWidget10Component,
    TilesWidget11Component,
    TilesWidget12Component,
    TilesWidget13Component,
    TilesWidget14Component,
    // Other
    ListsWidget2Component,
    ListsWidget5Component,
    ListsWidget6Component,
    ListsWidget7Component,
    ChartsWidget1Component,
    ChartsWidget2Component,
    ChartsWidget3Component,
    ChartsWidget4Component,
    ChartsWidget5Component,
    ChartsWidget6Component,
    ChartsWidget7Component,
    ChartsWidget8Component,
    FeedsWidget2Component,
    FeedsWidget3Component,
    FeedsWidget4Component,
    FeedsWidget5Component,
    FeedsWidget6Component,
    MixedWidget2Component,
    MixedWidget3Component,
    MixedWidget5Component,
    MixedWidget7Component,
    MixedWidget8Component,
    MixedWidget9Component,
    StatsWidget1Component,
    StatsWidget2Component,
    StatsWidget3Component,
    StatsWidget4Component,
    StatsWidget5Component,
    StatsWidget6Component,
    TablesWidget1Component,
    TablesWidget2Component,
    TablesWidget3Component,
    TablesWidget4Component,
    TablesWidget5Component,
    TablesWidget6Component,
    TablesWidget7Component,
    TablesWidget8Component,
    TablesWidget9Component,
    TablesWidget10Component,
    TablesWidget11Component,
    TablesWidget12Component,
    TablesWidget13Component,
    TablesWidget14Component,
  ],
})
export class WidgetsModule {}
