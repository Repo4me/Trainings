import { Component, OnInit } from '@angular/core';
import { Topic } from '../model/topicmodel';
import { topics } from '../model/topiclist';

import categories from "../model/topiclist"; // As we exported the lsit as default, no need to enclose in {}
import { TopicService } from '../service/topic.service';


@Component({
  selector: 'app-topiclist',
  templateUrl: './topiclist.component.html',
  styleUrls: ['./topiclist.component.css']
})
export class TopiclistComponent implements OnInit {

  listoftopics : Topic[] = [];
  categoryList : string[] = categories;
  cat : string = 'all';

  constructor(public service : TopicService) { 
    this.listoftopics = topics;
    
  }

  ngOnInit() {
    this.service.getTopics()
    .subscribe( (response : Topic[]) => this.listoftopics = response);
  }

}
