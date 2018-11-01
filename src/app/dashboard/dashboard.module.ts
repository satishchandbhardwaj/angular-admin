import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NewsService } from './services/news.service';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashHomeComponent } from './dash-home/dash-home.component';




@NgModule({
  imports: [
    CommonModule, ChartsModule, DashboardRoutingModule, HttpClientModule
  ],
  declarations: [DashboardComponent, DashHomeComponent],
  providers: [NewsService]
})
export class DashboardModule { }
