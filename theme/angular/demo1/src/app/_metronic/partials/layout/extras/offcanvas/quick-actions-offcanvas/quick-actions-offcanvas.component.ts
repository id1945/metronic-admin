import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../../core';

@Component({
  selector: 'app-quick-actions-offcanvas',
  templateUrl: './quick-actions-offcanvas.component.html',
  styleUrls: ['./quick-actions-offcanvas.component.scss'],
})
export class QuickActionsOffcanvasComponent implements OnInit {
  extrasQuickActionsOffcanvasDirectionCSSClasses = 'offcanvas-right';
  constructor(private layout: LayoutService) {}

  ngOnInit(): void {
    this.extrasQuickActionsOffcanvasDirectionCSSClasses = `offcanvas-${this.layout.getProp(
      'extras.quickActions.offcanvas.direction'
    )}`;
  }
}
