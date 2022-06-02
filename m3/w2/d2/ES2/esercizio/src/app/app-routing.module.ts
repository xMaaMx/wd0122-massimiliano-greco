import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivepostComponent } from './activepost/activepost.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'active-post',
    component: HomeComponent
  },
  {
    path:'active',
    component: ActivepostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
