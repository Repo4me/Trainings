import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import { Topic } from '../model/topicmodel';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit, OnChanges, DoCheck {

  // udinh @Input, child gets data fron parent not vice versa
  @Input()
  topic : Topic;

  @Input() title : string;

  constructor() {
  //  this.topic = new Topic(1, 'Java', 'Learn the trending language');
  console.log('Topic ctor called');
   }

  ngOnInit() : void {
    console.log('Topic ngoninit ' + this.topic)
    console.log('Topic ngOnInit : '+ this.title);
  }

  ngOnChanges() {
    console.log('Topic ngOnChanges topic - ' + this.topic.title);
    console.log('Topic ngOnChanges title : '+ this.title);
  }

  ngDoCheck() {
    console.log('Topic ngDoCheck topic - ' + this.topic.title);
    console.log('Topic ngDoCheck title : '+ this.title);
  }

}
