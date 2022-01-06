import { Component, OnInit } from '@angular/core';
import { TopicService } from '../service/topic.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service : TopicService) { }

  ngOnInit() {
  }

}
