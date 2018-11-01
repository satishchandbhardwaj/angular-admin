import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsComponent } from '../cars/cars.component';
import { CarsHomeComponent } from './cars-home/cars-home.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsDetailsComponent } from './cars-details/cars-details.component';

const routes: Routes = [
	{
	path:'',
	component:CarsComponent,
	children:[
		{
            path: '',
            component: CarsListComponent,
            children:[
            	{
            		path:'',
            		component: CarsHomeComponent
            	},
            	{
            		path:':id',
            		component:CarsDetailsComponent
            	}
            ]
          }
		]	
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
