import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { PagesComponent } from './pages.component';
import { SideBarComponent } from '../components/shared/side-bar/side-bar.component';

import {ButtonModule} from 'primeng/button';
import {SelectButtonModule} from 'primeng/selectbutton';
import {DividerModule} from 'primeng/divider';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    PagesComponent,
    SideBarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    SelectButtonModule,
    DividerModule
  ]
})
export class PagesModule { }
