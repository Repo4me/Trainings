import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCUstomersComponent } from './view-customers.component';

describe('ViewCUstomersComponent', () => {
  let component: ViewCUstomersComponent;
  let fixture: ComponentFixture<ViewCUstomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCUstomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCUstomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
