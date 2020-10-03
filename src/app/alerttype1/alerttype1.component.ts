import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition,} from '@angular/animations';
import {ALERTCLASSENUM} from '../static/commonMessages'

@Component({
  selector: 'app-alerttype1',
  templateUrl: './alerttype1.component.html',
  styleUrls: ['./alerttype1.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ])]
})
export class Alerttype1Component implements OnInit {
  alertText: string = '';
  visiblestatus: boolean = false;
  alertclass: string = 'alert-success';

  constructor() { }

  ngOnInit(): void {
  }

  toggleAlerts(text:string, setTimer:boolean, setalertclass='s', time:number=2000):void{
    this.alertText = text;
    this.visiblestatus = true;
    this.alertclass = ALERTCLASSENUM[setalertclass] ? ALERTCLASSENUM[setalertclass] : ALERTCLASSENUM['s']
    if(setTimer){
      setTimeout(()=>{
        this.visiblestatus = false;
      },time)
    }
  }

}
