import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DettagliRoutingModule } from './dettagli-routing.module';
import { DettagliComponent } from './dettagli.component';


@NgModule({
  declarations: [
    DettagliComponent
  ],
  imports: [
    CommonModule,
    DettagliRoutingModule
  ]
})
export class DettagliModule { }
