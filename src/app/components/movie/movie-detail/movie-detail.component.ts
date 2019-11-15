import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  private id: string = "";
  private movie: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getMovie();
  }

  getMovie() {
    this.movieService.getMovie(this.id).subscribe((movie) => {
      this.movie = movie;
    });
  }

  return(){
    this.router.navigate(["./movie-search"])
  }

}
