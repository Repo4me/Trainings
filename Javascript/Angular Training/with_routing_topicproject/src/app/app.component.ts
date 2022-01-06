import { Component } from '@angular/core';
import { UserService } from './authguards/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'topicprojectroute';

  constructor(public service : UserService){}
}
