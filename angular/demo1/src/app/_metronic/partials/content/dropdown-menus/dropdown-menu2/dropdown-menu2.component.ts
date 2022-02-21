import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu2',
  templateUrl: './dropdown-menu2.component.html',
})
export class DropdownMenu2Component implements OnInit {
  @HostBinding('class') class =
    'menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px';
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';

  constructor() {}

  ngOnInit(): void {}
}
