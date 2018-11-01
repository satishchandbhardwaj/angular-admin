import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';

import { CarsComponent } from '../cars/cars.component';
import { CarsHomeComponent } from './cars-home/cars-home.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsDetailsComponent } from './cars-details/cars-details.component';

@NgModule({
  imports: [
    CommonModule,
    CarsRoutingModule
  ],
  declarations: [CarsComponent, CarsHomeComponent, CarsListComponent, CarsDetailsComponent]
})
export class CarsModule { }
