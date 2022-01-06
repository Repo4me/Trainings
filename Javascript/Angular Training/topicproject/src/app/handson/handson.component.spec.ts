import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandsonComponent } from './handson.component';

describe('HandsonComponent', () => {
  let component: HandsonComponent;
  let fixture: ComponentFixture<HandsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
