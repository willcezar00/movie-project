import { Component, OnInit } from '@angular/core';
import { FormBaseComponent } from 'src/app/shared/components/form-base.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MovieService } from '../services/movie.service';
import { MovieResponse } from '../models/movie-response.model';
import ComparatorUtils from 'src/app/shared/util/comparator-util.model';
import { Router } from '@angular/router';
import { MovieResquest } from '../models/movie-request.model';
import { RatingAverage } from 'src/app/shared/util/rating-avarege.model';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent extends FormBaseComponent implements OnInit {

  public movieRequest: MovieResquest;
  public movieList: MovieResponse;

  constructor(
    protected router: Router,
    protected fb: FormBuilder,
    protected movieService: MovieService
  ) {
    super(fb);
  }

  ngOnInit() {
    this.buildForm();
    this.loadBackup();
  }

  buildForm() {
    this.formGroup = this.fb.group({
      titulo: new FormControl("", Validators.required),
      ano: new FormControl("", Validators.maxLength(4))
    });
  }

  /**
   * Essa parte de bakcup de component deveria ser um service que faria o backup generico de acordo com o component
   */
  loadBackup() {
    if (this.movieService.initLoaded) {
      this.formGroup.patchValue(this.movieService.movieRequest);
      this.movieList = this.movieService.movieList;
    }
  }

  // Este método poderia ser generico em um service ou em uma classe statica para reuso
  sort(lista, comparator, tipoOrdenacao) {
    const inverse = ComparatorUtils.inverse(comparator);
    const comparatorAtual = tipoOrdenacao === 'asc' ? comparator : inverse;
    lista.sort(comparatorAtual);
  }

  order(tipoOrdenacao: string, property: string) {
    if (!this.movieList) return;
    const comparator = (a, b) => a[property] > b[property] ? 1 : -1;
    this.sort(this.movieList.Search, comparator, tipoOrdenacao)
  }

  search() {
    if (this.formGroup.valid) {
      this.movieService.getMovies(this.formGroup.value).subscribe(movies => {
        this.movieService.movieRequest = this.formGroup.value;
        this.movieService.movieList = movies;
        this.movieList = movies;
        this.getRatings();
      });
    }
  }

  rediretoToDetails(id: number) {
    this.movieService.initLoaded = true;
    this.router.navigate(['../movie-detail', id]);
  }

  getRatings() {
    this.movieList.Search.forEach(x => {
      this.movieService.getMovie(x.imdbID).subscribe(movie => {
        x.Rating = RatingAverage.getAverageRating(movie);
      });
    });
  }
}
