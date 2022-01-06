import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TopicService } from '../service/topic.service';
import { Topic } from '../model/topicmodel';

@Component({
  selector: 'app-topicdetail',
  templateUrl: './topicdetail.component.html',
  styleUrls: ['./topicdetail.component.css']
})
export class TopicdetailComponent implements OnInit {

  topic : Topic;
  constructor(private service : TopicService, private router: Router,
    private activatedRoute : ActivatedRoute) { 

      this.activatedRoute.paramMap.subscribe(
        (params:ParamMap)=>{
          console.log(params);
          this.service.getTopicById(parseInt(params.get('id')))
          .subscribe((resp : Topic) => {
            this.topic = resp;
          })
        }
      )
    }

  ngOnInit() {
  }


}
