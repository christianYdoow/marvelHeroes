import { Component } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { HEROES } from 'src/app/mock-data/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  // heroes:Hero ={
  //   id:1,
  //   name:'pedro penduko'
  // };


  heroes=HEROES;

  selectedHero?:Hero;
  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }

  
}
