import { PageToggleService } from 'src/app/share/page-toggle.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  timeString: string = " ";
  constructor(
    private pageToggleService:PageToggleService
  ) {
    this.timeString = moment().format('YYYY-MM-DD HH:mm:ss');
    interval(1000).pipe(map(()=>{
      return moment().format('YYYY-MM-DD HH:mm:ss');
    })).subscribe(data=> {
      this.timeString = data;
    })
  }

  ngOnInit(): void {
  }

  goStopwatch() {
    this.pageToggleService.goPage('/stopwatch')
  }

}
