import { Component, OnInit } from '@angular/core';
import { Topic } from '../model/topicmodel';
import topics from '../model/topicslist';
import { TopicService } from '../service/topic.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topiclist',
  templateUrl: './topiclist.component.html',
  styleUrls: ['./topiclist.component.css']
})
export class TopiclistComponent implements OnInit {
  
  listoftopics:Topic[] = [];
  categories:string[]=['oops', 'web','lang'];
  cat:string='all';
  constructor(private service:TopicService,
    private router : Router, private activatedRoute : ActivatedRoute) { 
    this.listoftopics = topics;
  }

  ngOnInit(): void {
    this.service.getTopics()
    .subscribe((response:Topic[])=>{
      this.listoftopics = response
      console.log('resp ',this.listoftopics)
      console.log(this.listoftopics)
      console.log(response)
    });  
  }

  onselect(topic) {
    // this.router.navigate(['/list', topic.topicid]); THis is hard coaded for /list, instead do following
    this.router.navigate([topic.topicid], {relativeTo : this.activatedRoute});
  }
}
