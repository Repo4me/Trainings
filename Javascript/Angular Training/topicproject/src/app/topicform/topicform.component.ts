import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import categories from '../model/topiclist';
import { Topic } from '../model/topicmodel';

@Component({
  selector: 'app-topicform',
  templateUrl: './topicform.component.html',
  styleUrls: ['./topicform.component.css']
})
export class TopicformComponent implements OnInit {

  topic : Topic;
  categories : string[] = categories;

  @Output()
  topicCreated : EventEmitter<Topic> = new EventEmitter();
  // topicCreated is event name. This will emit event for parent. In angular Child emit events for parent and parent sends data to child.

  constructor() { 
    //this.topic = new Topic(0, 'css', 'decorate', 'lang');
    this.topic = new Topic(0, '', '', '');
  }

  ngOnInit() {
  }

  submit(form)
  {
    console.log(form)
    console.log(this.topic); // This may not prnt all from UI as there is no 2-way data binding for all elements
    this.topicCreated.emit(form);
  }

}
