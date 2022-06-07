import { RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { TimeDisplayComponent } from './time-display/time-display.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopwatchComponent } from './stopwatch.component';



@NgModule({
  declarations: [
    TimeDisplayComponent,
    ButtonsComponent,
    StopwatchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    StopwatchComponent
  ]
})
export class StopwatchModule { }
