import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { Screen2Component } from './screen2/screen2.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent, data: { titulo: 'Inicio' } },
      { path: 'screen2', component: Screen2Component, data: { titulo: 'Screen2' } },
      // { path: 'contact', component: ContactComponent, data: { titulo: 'Contacto' } },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
      // { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }