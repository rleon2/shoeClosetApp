import { Component,OnInit} from '@angular/core';
import { Kick } from '../kicks.model';
import { KickService } from '../kicks.service';

@Component({
  selector: 'app-kicks-list',
  templateUrl: './kicks-list.component.html',
  styleUrls: ['./kicks-list.component.css']
})
export class KicksListComponent implements OnInit {
  kicks: Kick[] = [];
  constructor(private kickService: KickService) { }

  ngOnInit(){
    this.kicks = this.kickService.getKicks(); 
  }

}
