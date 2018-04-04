import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-life-meter',
  templateUrl: './life-meter.component.html',
  styleUrls: ['./life-meter.component.css']
})
export class LifeMeterComponent implements OnInit {

  @Input()life: number;

  constructor() { }

  ngOnInit() {
  }

}
