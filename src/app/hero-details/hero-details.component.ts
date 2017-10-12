import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Hero
} from '../hero/hero';
import {
  ActivatedRoute,
  ParamMap
} from '@angular/router';
import {
  Location
} from '@angular/common';
import {
  HeroService
} from '../hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})


export class HeroDetailsComponent implements OnInit {
  @Input() hero: Hero;
  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
    .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
