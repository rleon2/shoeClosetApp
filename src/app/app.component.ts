import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoeClosetApp';
  loadedFeature = 'kick';
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
