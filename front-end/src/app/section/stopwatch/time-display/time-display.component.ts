import { PageToggleService } from 'src/app/share/page-toggle.service';
import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit {

  @Input() inputData:string = "";
  min:number = 0;
  sec:number = 0;
  ms:number = 0;

  timeInterval:any;

  constructor(
    public pageToggleService:PageToggleService
  ) {
  }

  ngOnInit(): void {
  }

  timeStart() {
    this.timeStop();
    this.timeInterval = setInterval(() => {
      if(this.ms>=100) {
        this.ms = 0;
        this.sec++;
      }
      if(this.sec>=60) {
        this.sec = 0;
        this.min++;
      }
      this.ms++;
    }, 10)
  }

  timeStop() {
    clearInterval(this.timeInterval);
  }

  timeReset() {
    this.timeStop();
    this.ms = 0;
    this.sec = 0;
    this.min = 0;
  }


  ngOnChanges(changes: SimpleChange): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    switch(this.inputData) {
          case 'start' :
            this.timeStart();
            break;
          case 'stop' :
            this.timeStop();
            break;
          case 'reset' :
            this.timeReset();
            break;
    }
  }

}
