import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit {

  @Input() inputData:string = "";
  constructor() { 
    console.log(this.inputData);
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChange): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
  }

}
