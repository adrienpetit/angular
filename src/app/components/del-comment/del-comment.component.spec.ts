import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelCommentComponent } from './del-comment.component';

describe('DelCommentComponent', () => {
  let component: DelCommentComponent;
  let fixture: ComponentFixture<DelCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
