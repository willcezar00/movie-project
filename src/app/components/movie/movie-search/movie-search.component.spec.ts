import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSearchComponent } from './movie-search.component';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

describe('MovieSearchComponent', () => {
  let component: MovieSearchComponent;
  let fixture: ComponentFixture<MovieSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieSearchComponent],
      imports: [
        MovieService,
        Router,
        ReactiveFormsModule,
        MatInputModule

      ],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bring 10 movies', () => {

  })
});
