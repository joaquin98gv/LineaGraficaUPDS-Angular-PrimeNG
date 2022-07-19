import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


import { PagesComponent } from './pages.component';
import { SideBarComponent } from '../components/shared/side-bar/side-bar.component';

import {ButtonModule} from 'primeng/button';
import {SelectButtonModule} from 'primeng/selectbutton';
import { HomeComponent } from './home/home.component';
import { ButtonComponent } from './../components/button/button.component';
import { InputComponent } from './../components/input/input.component';

import {DividerModule} from 'primeng/divider';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';


@NgModule({
  declarations: [
    PagesComponent,
    SideBarComponent,
    HomeComponent,
    ButtonComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    SelectButtonModule,
    DividerModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    AutoCompleteModule,
    CalendarModule,
    InputNumberModule
  ]
})
export class PagesModule { }
