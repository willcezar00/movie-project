import { Injectable } from '@angular/core';
import { BaseService, API_URL } from '../../../shared/services/base-service.component';
import { HttpClient } from '@angular/common/http';
import { MovieResquest } from '../models/movie-request.model';
import { MovieResponse } from '../models/movie-response.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieService extends BaseService {

  private TYPE_MOVIE: string = 'movie';
  private PLOT: string = 'full';
  url = [API_URL].join('/');

  //backup
  public movieRequest: MovieResquest;
  public movieList: MovieResponse;
  public initLoaded = false;

  constructor(http: HttpClient) {
    super(http, API_URL);
  }

  getMovies(request: MovieResquest): Observable<MovieResponse> {
    let params = {
      s: request.titulo,
      y: request.ano,
      type: this.TYPE_MOVIE,
      plot: this.PLOT
    }
    return this.http.get([this.url,].join('/'), { params: params }).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  getMovie(id: string): Observable<any> {
    let params = {
      i: id,
      type: this.TYPE_MOVIE,
      plot: this.PLOT,
    }
    return this.http.get([this.url,].join('/'), { params: params }).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

}
