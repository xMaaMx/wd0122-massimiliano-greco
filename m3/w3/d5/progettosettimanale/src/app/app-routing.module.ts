import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: '', loadChildren: () => import('./profilo/profilo.module').then(m => m.ProfiloModule) },
  { path: 'dettagli', loadChildren: () => import('./dettagli/dettagli.module').then(m => m.DettagliModule) },
  { path: 'preferiti', loadChildren: () => import('./preferiti/preferiti.module').then(m => m.PreferitiModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
