
import { Injectable }             from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { Observable, of, EMPTY }  from 'rxjs';
import { mergeMap, take }         from 'rxjs/operators';

import { NewsService }  from './news.service';
import { News } from './news';

@Injectable({
  providedIn: 'root',
})
export class NewsDetailResolverService implements Resolve<News> {
  constructor(private cs: NewsService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<News> | Observable<never> {
   
    let id = route.paramMap.get('id');

    return this.cs.getNews(id).pipe(
      take(1),
      mergeMap(news => {
        if (news) {
          return of(news);
        } else { // id not found
          this.router.navigate(['/news-center']);
          return EMPTY;
        }
      })
    );
  }
}


