import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { NewsCenterHomeComponent } from './news-center-home/news-center-home.component';
import { NewsListComponent }       from './news-list/news-list.component';
import { NewsCenterComponent }     from './news-center/news-center.component';
import { NewsDetailComponent }     from './news-detail/news-detail.component';

import { newsCenterRoutingModule } from './news-center-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    newsCenterRoutingModule
  ],
  declarations: [
    NewsCenterComponent,
    NewsListComponent,
    NewsCenterHomeComponent,
    NewsDetailComponent
  ]
})
export class NewsCenterModule {}


