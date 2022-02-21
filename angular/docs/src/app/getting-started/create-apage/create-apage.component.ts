import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-apage',
  templateUrl: './create-apage.component.html',
  styleUrls: ['./create-apage.component.scss'],
})
export class CreateAPageComponent implements OnInit {
  code1 = `const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'builder',
    loadChildren: () =>
      import('./builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'crafted/pages/profile',
    loadChildren: () =>
      import('../modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'crafted/account',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
  },
  +{
  +   path: 'my-page', // <= Page URL
  +   component: MyPageComponent // <= Page component registration
  +},`;

  code2 = `// Other code
<!-- begin::1 Level -->
<div class="menu-item">
  <a
    class="menu-link without-sub"
    routerLink="/my-page"
    routerLinkActive="active"
    ><span class="menu-icon">
      <span
        [inlineSVG]="'./assets/media/icons/duotune/general/gen019.svg'"
        class="svg-icon svg-icon-2"
      ></span> </span
    ><span class="menu-title">My Page</span></a
  >
</div>
<!-- end::1 Level -->
// Other code`;

  constructor() {}

  ngOnInit(): void {}
}
