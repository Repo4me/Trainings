import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { TopicComponent } from './topic/topic.component';
import { TopiclistComponent } from './topiclist/topiclist.component';
import { BorderDirective } from './directives/border.directive';
import { CategoryPipe } from './pipes/category.pipe';
import { TopicformComponent } from './topicform/topicform.component';
import {FormsModule} from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TopicdetailComponent } from './topicdetail/topicdetail.component';
import { UserCanActivate } from './authguards/UserAuth';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path : '', redirectTo : 'list', pathMatch : 'full'},
  {path :'list', component:TopiclistComponent},
  {path : 'list/:id', component : TopicdetailComponent},
  {path : 'create', component:TopicformComponent,
    canActivate : [UserCanActivate]
  },
  {path : 'login', component : LoginComponent},
  {path : '**', component : PagenotfoundComponent}
];

@NgModule({
  declarations:[
    TopicComponent, TopicformComponent, TopiclistComponent, BorderDirective, CategoryPipe, PagenotfoundComponent, TopicdetailComponent, LoginComponent
  ],
  imports: [RouterModule.forRoot(routes),FormsModule, BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
