import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero/hero';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    heroes: Hero[];
    constructor(private heroService: HeroService) {}
    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes() {
        this.heroService.getHeroes().then((heroes) => this.heroes = heroes.slice(1, 5));
    }

}
