import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  message : string;
  url : string = 'http://localhost:8080/demo/topics';
 
  constructor(private http : HttpClient) { 
    this.message = "Message from service";
  }

  getTopics() {
    console.log('get topics');
    return this.http.get(this.url + '/getAll');
  }
}
