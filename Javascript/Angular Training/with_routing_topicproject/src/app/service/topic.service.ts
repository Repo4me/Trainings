import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { TopicComponent } from '../topic/topic.component';
import { Topic } from '../model/topicmodel';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  message:string;
  url:string='http://localhost:8080/demo/topics'
  constructor(private http:HttpClient) {
    this.message = 'Hello from service'
   }
   getTopics()
   {
     console.log('get topics')
     return this.http.get(this.url);
   }

   addTopic(topic : Topic) {
     return this.http.post(this.url, topic);
   }

   deleteTopic(id : number) {
    return this.http.delete(this.url + "/" + id);
  }

  updateTopic(topic : Topic) {
    return this.http.put(this.url, topic);
  }

  getTopicById(id : number) {
    return this.http.get(this.url + "/" + id);
  }
}
