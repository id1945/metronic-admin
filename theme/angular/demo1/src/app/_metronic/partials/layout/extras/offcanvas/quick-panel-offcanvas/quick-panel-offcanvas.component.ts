import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../../core';

@Component({
  selector: 'app-quick-panel-offcanvas',
  templateUrl: './quick-panel-offcanvas.component.html',
  styleUrls: ['./quick-panel-offcanvas.component.scss'],
})
export class QuickPanelOffcanvasComponent implements OnInit {
  extrasQuickPanelOffcanvasDirectionCSSClass = 'offcanvas-right';
  activeTabId:
    | 'kt_quick_panel_logs'
    | 'kt_quick_panel_notifications'
    | 'kt_quick_panel_settings' = 'kt_quick_panel_logs';

  constructor(private layout: LayoutService) {}

  ngOnInit(): void {
    this.extrasQuickPanelOffcanvasDirectionCSSClass = `offcanvas-${this.layout.getProp(
      'extras.quickPanel.offcanvas.direction'
    )}`;
  }

  setActiveTabId(tabId) {
    this.activeTabId = tabId;
  }

  getActiveCSSClasses(tabId) {
    if (tabId !== this.activeTabId) {
      return '';
    }
    return 'active show';
  }
}
