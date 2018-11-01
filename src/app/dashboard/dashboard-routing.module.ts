import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {DashboardComponent} from './dashboard.component';
import { DashHomeComponent } from './dash-home/dash-home.component';



const routes: Routes = [
    { path: "",
    component: DashboardComponent,
    children: [{
                path: '',
                component: DashHomeComponent
            }, 
              {
                path: 'crisis-center',
                loadChildren: '../dashboard/crisis-center/crisis-center.module#CrisisCenterModule',
                data: { preload: true }
              },
              {
                path: 'news',
                loadChildren: '../dashboard/news/news-center.module#NewsCenterModule',
                data: { preload: true }
              },
              {
                path: 'cars',
                loadChildren: '../dashboard/cars/cars.module#CarsModule',
                data: { preload: true }
              }
            ]
	}
    //{ path: "dashboard-home", component: DashHomeComponent}

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class DashboardRoutingModule { }