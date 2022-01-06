import { Component } from '@angular/core';
import { Topic } from './model/topicmodel';
import { registerLocaleData } from '@angular/common'; 
import localeFr from '@angular/common/locales/fr';
import { TopicService } from './service/topic.service';
// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

title : string = 'topicproject';  
java : Topic = new Topic(2, this.title, 'Learn how Java impmenets MVC');


constructor(private service : TopicService) {
  // console.log('App ctor called');
  this.title = service.message;
}

topicAdded(event) {
  console.log('Received event data');
  alert(event.topictitle + ' ' + event.topicdesc);
}

}
