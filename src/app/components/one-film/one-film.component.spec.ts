import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneFilmComponent } from './one-film.component';

describe('OneFilmComponent', () => {
  let component: OneFilmComponent;
  let fixture: ComponentFixture<OneFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
