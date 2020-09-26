import { EventEmitter } from '@angular/core';
import {Kick} from './kicks.model';
export class KickService{

    kickSelected = new EventEmitter<Kick>();
    private kicks: Kick[] = [
    new Kick('Bred Toes', 'Jordan', 'Air Jordan 1', 'Jordan 1 Retro', 'Black/Red','https://stockx-360.imgix.net//Air-Jordan-1-Retro-High-Bred-Toe/Images/Air-Jordan-1-Retro-High-Bred-Toe/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1538080256&w=1000'
    ,8.5),
    new Kick('Pine Greens', 'Jordan', 'Air Jordan 1', 'Jordan 1 Retro', 'Black/Green','https://stockx-360.imgix.net//Air-Jordan-1-Retro-High-Pine-Green-Black/Images/Air-Jordan-1-Retro-High-Pine-Green-Black/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1581447019&w=1000'
    ,8.5)
  ];


getKicks(){
    return this.kicks.slice();
}
}