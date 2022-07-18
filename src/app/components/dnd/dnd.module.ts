import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DndComponent } from './dnd.component';

import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { DndDirective } from './dnd.directive';



@NgModule({
  declarations: [
    DndComponent,
    DndDirective
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
  exports: [
    DndComponent,
    DndDirective
  ]
})
export class DndModule { }
