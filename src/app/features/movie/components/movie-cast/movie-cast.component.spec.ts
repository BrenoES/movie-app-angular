import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MovieCastComponent } from './movie-cast.component';

describe('MovieCastComponent', () => {
  let component: MovieCastComponent;
  let fixture: ComponentFixture<MovieCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieCastComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
