import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DndComponent } from './dnd.component';
import {ButtonModule} from 'primeng/button';
import {ProgressBarModule} from 'primeng/progressbar';

import { DndDirective } from './dnd.directive';



@NgModule({
  declarations: [
    DndComponent,
    DndDirective
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ProgressBarModule
  ],
  exports: [
    DndComponent,
    DndDirective
  ]
})
export class DndModule { }
