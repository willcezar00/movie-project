import { Component, OnInit } from '@angular/core';
import { FormBaseComponent } from 'src/app/shared/components/form-base.component';
import { FormBuilder, FormControl } from '@angular/forms';
import { MovieService } from '../services/movie.service';
import { MovieResponse } from '../models/movie-response.model';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent extends FormBaseComponent implements OnInit {
  protected movieList: MovieResponse[];

  constructor(
    protected fb: FormBuilder,
    protected movieService: MovieService
  ) {
    super(fb);
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formGroup = this.fb.group({
      titulo: new FormControl(""),
      ano: new FormControl("")
    });
  }

  search() {
    this.movieService.getMovies(this.formGroup.value).subscribe(movies => {
      this.movieList = movies;
    })
  }
}
