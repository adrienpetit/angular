import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFilmsComponent } from './edit-films.component';

describe('EditFilmsComponent', () => {
  let component: EditFilmsComponent;
  let fixture: ComponentFixture<EditFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
