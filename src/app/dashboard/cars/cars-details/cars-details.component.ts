import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.scss']
})
export class CarsDetailsComponent implements OnInit {
  courseId;
  constructor(private route: ActivatedRoute, private router: Router,) {
  		this.route.params.subscribe(
        params =>{
            this.courseId = parseInt(params['id']);
        }
    ); 

  }

  ngOnInit() {
  	alert(this.courseId);
  }

}
