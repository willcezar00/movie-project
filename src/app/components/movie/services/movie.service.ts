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

  url = [API_URL].join('/');

  constructor(http: HttpClient) {
    super(http, API_URL);
  }

  getMovies(request: MovieResquest): Observable<any> {
    let params = {
      s: request.titulo
    }
    return this.http.get([this.url,].join('/'), { params: params }).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

}
