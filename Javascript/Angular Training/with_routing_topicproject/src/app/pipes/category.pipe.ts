import { Pipe, PipeTransform } from '@angular/core';
import { Topic } from '../model/topicmodel';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {
  transform(topics:Topic[], category:string): Topic[] {
    if(category=='all')
     return topics;
    else
     return topics.filter(topic => topic.category=== category);
  }

}
