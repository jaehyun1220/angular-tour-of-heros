import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  constructor() { }
  hero = [];
  heroes = HEROES;
  selectedHero?: Hero;
  // on = false;
  // listItems = HEROES;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  ngOnInit(): void {
  }
  // toggle(list: any): void  {
  //   this.listItems.forEach( (asd: Hero) => {
  //     asd.on = false;
  //   });
  //   list.on = !list.on;
  // }
}
