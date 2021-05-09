import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ErrorsRoutingModule} from './errors-routing.module';
import {ErrorsComponent} from './errors.component';
import {Error1Component} from './error1/error1.component';
import {Error2Component} from './error2/error2.component';
import {Error3Component} from './error3/error3.component';
import {Error4Component} from './error4/error4.component';
import {Error5Component} from './error5/error5.component';
import {Error6Component} from './error6/error6.component';


@NgModule({
  declarations: [ ErrorsComponent, Error1Component, Error2Component, Error3Component, Error4Component, Error5Component, Error6Component ],
  imports: [
    CommonModule,
    ErrorsRoutingModule
  ]
})
export class ErrorsModule {}
