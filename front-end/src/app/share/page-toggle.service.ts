import { StopwatchComponent } from './../section/stopwatch/stopwatch.component';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable(
)
export class PageToggleService {

  routingCount:number = 0;

  constructor(
    private router:Router
  ) { }

  plusCount() {
    this.routingCount++;
  }

  goPage(target:string) {
    this.routingCount++;
    this.router.navigateByUrl(target);
  }

}
