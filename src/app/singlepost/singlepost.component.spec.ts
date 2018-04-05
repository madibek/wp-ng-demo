import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePostComponent } from './singlepost.component';

describe('SinglepostComponent', () => {
  let component: SinglePostComponent;
  let fixture: ComponentFixture<SinglePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
