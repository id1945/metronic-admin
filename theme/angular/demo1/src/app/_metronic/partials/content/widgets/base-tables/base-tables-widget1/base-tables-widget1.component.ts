import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-tables-widget1',
  templateUrl: './base-tables-widget1.component.html',
})
export class BaseTablesWidget1Component implements OnInit {
  TABS: string[] = [
    'Month',
    'Week',
    'Day'
  ];
  currentTab;
  @Input() cssClass: string;
  @Input() progressWidth;

  constructor() { }

  ngOnInit(): void {
    if (!this.progressWidth) {
      this.progressWidth = 'min-w-200px';
    }
    this.currentTab = this.TABS[2];
  }

  setCurrentTab(tab: string) {
    this.currentTab = tab;
  }
}
