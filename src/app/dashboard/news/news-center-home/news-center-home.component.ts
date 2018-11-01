import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';


@Component({
  selector: 'app-news-center-home',
  templateUrl: './news-center-home.component.html',
  styleUrls: ['./news-center-home.component.css']
})
export class NewsCenterHomeComponent implements OnInit {
	getnews = [];
	constructor (private newservice: NewsService){}

	ngOnInit() {
		this.newservice.myData()
		.subscribe((data) => {
			this.getnews = data;
			console.log(this.getnews);
		})
	}
}

