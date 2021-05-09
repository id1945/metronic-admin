import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WizardsComponent } from './wizards.component';
import { Wizard1Component } from './wizard1/wizard1.component';
import { Wizard2Component } from './wizard2/wizard2.component';
import { Wizard3Component } from './wizard3/wizard3.component';
import { Wizard4Component } from './wizard4/wizard4.component';

const routes: Routes = [
  {
    path: '',
    component: WizardsComponent,
    children: [
      {
        path: 'wizard-1',
        component: Wizard1Component,
      },
      {
        path: 'wizard-2',
        component: Wizard2Component,
      },
      {
        path: 'wizard-3',
        component: Wizard3Component,
      },
      {
        path: 'wizard-4',
        component: Wizard4Component,
      },
      { path: '', redirectTo: 'wizard-1', pathMatch: 'full' },
      { path: '**', redirectTo: 'wizard-1', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WizardsRoutingModule { }
