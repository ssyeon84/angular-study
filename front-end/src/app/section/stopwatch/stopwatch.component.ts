import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  present: string = "welcome";
  commandText:string = "";

  constructor(
    public pageToggleService:PageToggleService
  ) {
  }

  ngOnInit(): void {
  }

  startTime(time:string) {
    this.present = time;
  }
  goClock() {
    this.pageToggleService.goPage('/clock');
  }

}
