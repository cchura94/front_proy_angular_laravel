import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { PrimeModule } from '../prime/prime.module';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    PrimeModule
  ]
})
export class WebModule { }
