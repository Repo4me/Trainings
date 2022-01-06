import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicformComponent } from './topicform.component';

describe('TopicformComponent', () => {
  let component: TopicformComponent;
  let fixture: ComponentFixture<TopicformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
