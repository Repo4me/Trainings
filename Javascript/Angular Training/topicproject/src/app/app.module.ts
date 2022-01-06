import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InlineCompComponent } from './inline-comp/inline-comp.component';
import { HandsonComponent } from './handson/handson.component';
import { TopicComponent } from './topic/topic.component';
import { TopiclistComponent } from './topiclist/topiclist.component';
import { BorderDirective } from './directives/border.directive';
import { PipesComponent } from './pipes/pipes.component';
import { PowerPipe } from './pipes/power.pipe';
import { CategoryPipe } from './pipes/category.pipe';
import { TopicformComponent } from './topicform/topicform.component';
import { ReactiveComponent } from './reactive/reactive.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InlineCompComponent,
    HandsonComponent,
    TopicComponent,
    TopiclistComponent,
    BorderDirective,
    PipesComponent,
    PowerPipe,
    CategoryPipe,
    TopicformComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
