import { Component, Input, OnInit } from '@angular/core';
import { Kick } from '../kicks.model';

@Component({
  selector: 'app-kicks-detail',
  templateUrl: './kicks-detail.component.html',
  styleUrls: ['./kicks-detail.component.css']
})
export class KicksDetailComponent implements OnInit {
  @Input() kick: Kick;
  constructor() { }

  ngOnInit(): void {
  }

}
