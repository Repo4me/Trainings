import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import { Topic } from '../model/topicmodel';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent{
//implements OnInit,OnChanges , DoCheck{

  @Input() topic:Topic
  
  @Input() 
  title:string ='Demo';

  constructor() {
    //console.log('Topic constructor called '+this.topic);
    // this.topic = new 
    // Topic(1,'Java',
    // 'Learn the trending language');
   }

  // ngOnInit(): void {
  //   console.log('Topic ngoninit topic object')
  //   console.log(this.topic);
  //   console.log('Topic ngoninit title '+this.title)
  // }
  // ngOnChanges()
  // {
  //   console.log('Topic ngonChnages topic->title'+this.topic.title)
  //   console.log('Topic ngonChnages title '+this.title)
  // }
  // ngDoCheck()
  // {
  //   console.log('Topic ngdocheck topic->title '+this.topic.title)
  //   console.log('Topic ngdocheck title '+this.title)
  // }
}
