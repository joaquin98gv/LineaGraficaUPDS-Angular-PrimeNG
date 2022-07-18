import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent, data: { titulo: 'Inicio' } },
      { path: 'button', component: ButtonComponent, data: { titulo: 'Botones' } },
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