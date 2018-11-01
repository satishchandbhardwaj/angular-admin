import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }     from '@angular/router';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {
  courseId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	route.params.subscribe(
        params =>{
            this.courseId = parseInt(params['id']);
        }
    ); 
  }

}
