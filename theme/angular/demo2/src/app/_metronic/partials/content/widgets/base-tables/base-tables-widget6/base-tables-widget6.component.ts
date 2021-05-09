import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-tables-widget6',
  templateUrl: './base-tables-widget6.component.html',
})
export class BaseTablesWidget6Component implements OnInit {
  TABS: string[] = [
    'Month',
    'Week',
    'Day'
  ];
  currentTab;
  @Input() cssClass: string;

  constructor() { }

  ngOnInit(): void {
    this.currentTab = this.TABS[2];
  }

  setCurrentTab(tab: string) {
    this.currentTab = tab;
  }
}
