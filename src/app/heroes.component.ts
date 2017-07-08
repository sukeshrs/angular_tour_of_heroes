import { Component ,OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  template: `<h1>{{title}}</h1>
            <h2>My Heroes</h2>
            <ul class="heroes">
              <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
              </li>
            </ul>
            <hero-detail [hero]="selectedHero"></hero-detail>
           `,
  styleUrls: ['./app.component.css'],
  providers: []
})

export class HeroComponent implements OnInit{
  constructor(private heroService: HeroService) { }
  selectedHero :Hero;
  heroes :Hero[];
  onSelect(hero :Hero ): void {
    this.selectedHero = hero;
  }
  
  ngOnInit(): void {
  this.getHeroes();
  }

  getHeroes(): void {
  this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
}

}
