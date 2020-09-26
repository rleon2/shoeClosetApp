import { Component, OnInit } from '@angular/core';
import { Kick } from './kicks.model';
import { KickService } from './kicks.service';

@Component({
  selector: 'app-kicks',
  templateUrl: './kicks.component.html',
  styleUrls: ['./kicks.component.css'],
  providers: [KickService]
})
export class KicksComponent implements OnInit {
  selectedKick: Kick;
  constructor(private kickService: KickService) { }

  ngOnInit(){
    this.kickService.kickSelected
    .subscribe(
      (kick: Kick) => {
        this.selectedKick = kick;
      }
    );
}
}
