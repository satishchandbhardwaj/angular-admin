import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';

import { NewsService }  from '../news.service';
import { News }         from '../news';
import { Observable }     from 'rxjs';
import { switchMap }      from 'rxjs/operators';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  news$: Observable<News[]>;
  selectedId: number;

  constructor(
    private service: NewsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.news$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getCrises();
      })
    );
  }
}


