import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { News } from './news';
import { NEWS } from './mock-news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  private news$: BehaviorSubject<News[]> = new BehaviorSubject<News[]>(NEWS);

  constructor() { }

 getCrises() { return this.news$; }

  getNews(id: number | string) {
    return this.getCrises().pipe(
      map(news => news.find(news => news.id === +id))
    );
  }

  
}


