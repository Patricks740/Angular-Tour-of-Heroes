import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  /* If getHeroes() can't return immediately with hero data, 
  it shouldn't be synchronous, because that would block the
   browser as it waits to return data  
        -> rxjs Observable | asynchronous */
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
}
