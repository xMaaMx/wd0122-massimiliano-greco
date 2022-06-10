import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'profilo',
    canActivate: [AuthGuard],
    loadChildren: () => import('./profilo/profilo.module').then(m => m.ProfiloModule) },
  { path: 'dettagli', loadChildren: () => import('./dettagli/dettagli.module').then(m => m.DettagliModule) },
  { path: 'preferiti', loadChildren: () => import('./preferiti/preferiti.module').then(m => m.PreferitiModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
