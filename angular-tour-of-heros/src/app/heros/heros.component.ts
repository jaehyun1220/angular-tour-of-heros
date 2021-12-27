import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  constructor(
    private heroService: HeroService
    ) { }
  heroes: Hero[] = [];
  // on = false;
  // listItems = HEROES;
  ngOnInit(): void {
    this.getHeroes();
  }
  // toggle(list: any): void  {
  //   this.listItems.forEach( (asd: Hero) => {
  //     asd.on = false;
  //   });
  //   list.on = !list.on;
  // }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
