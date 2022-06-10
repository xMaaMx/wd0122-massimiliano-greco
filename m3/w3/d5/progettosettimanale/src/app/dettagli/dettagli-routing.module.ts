import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettagliComponent } from './dettagli.component';

const routes: Routes = [{ path: '', component: DettagliComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DettagliRoutingModule { }
