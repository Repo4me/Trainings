import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Topic } from '../model/topicmodel';
import { TopicService } from "../service/topic.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topicform',
  templateUrl: './topicform.component.html',
  styleUrls: ['./topicform.component.css']
})
export class TopicformComponent implements OnInit {
  @Output()
  topicCreated:EventEmitter<any> = new EventEmitter();
  user:User;
  topic:Topic;
  categories:string[]=['oops','web','lang'];

  constructor(private service : TopicService,
    private router : Router, 
    private activatedRoute : ActivatedRoute) {
    this.topic= new Topic(0,'','','');
    this.user= new User('');
  }
  submit(form)
  {
    console.log("submit " + form)
    console.log(this.topic);
    // this.topicCreated.emit(form);
    this.service.addTopic(form).subscribe((resp) =>
   {
      console.log(resp)
      this.router.navigate(['../list'], {relativeTo : this.activatedRoute});
    },
     (err) => this.router.navigate(['/error']) // As we have configure '**' to pagenotfount, any url that is not configured will go to that page.
     );
  }
  ngOnInit(): void {
  }
}

class User{
  constructor(public username:string){}
}