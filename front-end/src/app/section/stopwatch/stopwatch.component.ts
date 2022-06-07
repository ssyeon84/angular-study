import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  present: string = "welcome";
  commandText:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  startTime(time:string) {
    this.present = time;
  }

}
