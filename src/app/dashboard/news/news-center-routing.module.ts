import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsCenterHomeComponent } from './news-center-home/news-center-home.component';
import { NewsListComponent }       from './news-list/news-list.component';
import { NewsCenterComponent }     from './news-center/news-center.component';
import { NewsDetailComponent }     from './news-detail/news-detail.component';

import { NewsDetailResolverService }    from './news-detail-resolver.service';

const newsCenterRoutes: Routes = [
  {
    path: '',
    component: NewsCenterComponent,
    children: [
      {
        path: '',
        component: NewsListComponent,
        children: [
          {
            path: ':id',
            component: NewsDetailComponent,
            resolve: {
              news: NewsDetailResolverService
            }
          },
          {
            path: '',
            component: NewsCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(newsCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class newsCenterRoutingModule { }


