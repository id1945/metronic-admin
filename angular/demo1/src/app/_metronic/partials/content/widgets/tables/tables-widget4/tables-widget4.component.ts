import { Component } from '@angular/core';

type Tabs =
  | 'kt_table_widget_4_tab_1'
  | 'kt_table_widget_4_tab_2'
  | 'kt_table_widget_4_tab_3';

@Component({
  selector: 'app-tables-widget4',
  templateUrl: './tables-widget4.component.html',
})
export class TablesWidget4Component {
  activeTab: Tabs = 'kt_table_widget_4_tab_1';

  setTab(tab: Tabs) {
    this.activeTab = tab;
  }

  activeClass(tab: Tabs) {
    return tab === this.activeTab ? 'show active' : '';
  }

  constructor() {}
}
