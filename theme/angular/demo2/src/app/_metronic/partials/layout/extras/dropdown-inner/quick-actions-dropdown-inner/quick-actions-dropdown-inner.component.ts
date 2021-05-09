import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../../core';

@Component({
  selector: 'app-quick-actions-dropdown-inner',
  templateUrl: './quick-actions-dropdown-inner.component.html',
  styleUrls: ['./quick-actions-dropdown-inner.component.scss'],
})
export class QuickActionsDropdownInnerComponent implements OnInit {
  extrasQuickActionsDropdownStyle: 'light' | 'dark' = 'light';
  constructor(private layout: LayoutService) {}

  ngOnInit(): void {
    this.extrasQuickActionsDropdownStyle = this.layout.getProp(
      'extras.quickActions.dropdown.style'
    );
  }
}
