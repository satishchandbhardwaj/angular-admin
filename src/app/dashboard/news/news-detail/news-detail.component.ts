import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { News }  from '../news';
import { NewsService } from '../../services/news.service';

import {
  trigger,state, transition, animate, style, query, stagger, keyframes
} from '@angular/animations';



@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class NewsDetailComponent implements OnInit {
  news: News;
  editName: string;
  getnews = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private newservice: NewsService
  ) {}

 

  ngOnInit() {
    this.route.data
      .subscribe((data: { news: News }) => {
        this.editName = data.news.name;
        this.news = data.news;
        
        this.newservice.newsdetails(this.news.sources)
    .subscribe((data) => {
      this.getnews = data;
      console.log(this.getnews);
    });
      });
     
  }



   

  
//https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=26a4d7f5b96649e5a829f7ead515ab0e
  //https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=26a4d7f5b96649e5a829f7ead515ab0e
  //https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=26a4d7f5b96649e5a829f7ead515ab0e
  //https://newsapi.org/v2/top-headlines?sources=financial-times&apiKey=26a4d7f5b96649e5a829f7ead515ab0e

 
// ngOnDestroy() {
//         // unsubscribe to ensure no memory leaks
//         this.subscription.unsubscribe();
//     }
  
}


