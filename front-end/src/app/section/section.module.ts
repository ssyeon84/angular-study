import { PageToggleService } from 'src/app/share/page-toggle.service';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { RouterModule, Routes } from '@angular/router';
import { StopwatchModule } from './stopwatch/stopwatch.module';
import { SectionComponent } from './section.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';

const routes : Routes = [
  {
    path : 'stopwatch',
    component : StopwatchComponent
  },
  {
    path : 'clock',
    component: ClockComponent
  }
]

@NgModule({
  declarations: [
    SectionComponent,
    ClockComponent,
  ],
  exports: [
    SectionComponent,
    // RouterModule
  ],
  imports: [
    CommonModule,
    StopwatchModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    PageToggleService
  ]
})
export class SectionModule { }
