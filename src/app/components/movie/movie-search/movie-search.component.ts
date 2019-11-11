import { Component, OnInit } from '@angular/core';
import { FormBaseComponent } from 'src/app/shared/components/form-base.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MovieService } from '../services/movie.service';
import { MovieResponse } from '../models/movie-response.model';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent extends FormBaseComponent implements OnInit {
  public movieList: MovieResponse[] = [];

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
      titulo: new FormControl("", Validators.required),
      ano: new FormControl("", Validators.maxLength(4))
    });
  }

  search() {
    if (this.formGroup.valid) {
      this.movieList = [];
      this.movieService.getMovies(this.formGroup.value).subscribe(movies => {
        this.movieList.push(movies);
      });
    }
  }
}
