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

import {DividerModule} from 'primeng/divider';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {TableModule} from 'primeng/table';
import {ProgressBarModule} from 'primeng/progressbar';
import {DialogModule} from 'primeng/dialog';
import {SkeletonModule} from 'primeng/skeleton';
import {PanelMenuModule} from 'primeng/panelmenu';
import {AccordionModule} from 'primeng/accordion';
import {DropdownModule} from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import {ListboxModule} from 'primeng/listbox';
import {ToastModule} from 'primeng/toast';
import {MessageModule} from 'primeng/message';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {SplitButtonModule} from 'primeng/splitbutton';

import { DndModule } from 'src/app/components/dnd/dnd.module';


@NgModule({
  declarations: [
    PagesComponent,
    SideBarComponent,
    HomeComponent,
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
    InputNumberModule,
    DynamicDialogModule,
    TableModule,
    ProgressBarModule,
    SkeletonModule,
    DialogModule,
    PanelMenuModule,
    AccordionModule,
    DropdownModule,
    PanelModule,
    MenuModule,
    ListboxModule,
    ToastModule,
    MessageModule,
    ProgressSpinnerModule,
    DndModule,
    SplitButtonModule
  ]
})
export class PagesModule { }
