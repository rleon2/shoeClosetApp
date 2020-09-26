import { Component, OnInit,Input} from '@angular/core';
import { Kick } from '../../kicks.model';
import { KickService } from '../../kicks.service';

@Component({
  selector: 'app-kicks-item',
  templateUrl: './kicks-item.component.html',
  styleUrls: ['./kicks-item.component.css']
})
export class KicksItemComponent implements OnInit {
  @Input() kick: Kick;
  constructor(private kickService: KickService) { }

  ngOnInit(){
  }

  onSelected(){
    this.kickService.kickSelected.emit(this.kick);
  }
}
