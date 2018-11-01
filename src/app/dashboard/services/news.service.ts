import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
 
	//const url = ''

  myData(): Observable<any> {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=26a4d7f5b96649e5a829f7ead515ab0e');
  }

  newsdetails(newssources): Observable<any> {
    return this.http.get<any>('https://newsapi.org/v2/top-headlines?sources='+ newssources +'&apiKey=26a4d7f5b96649e5a829f7ead515ab0e');
  }
}
