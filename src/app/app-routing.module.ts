import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieSearchComponent } from './components/movie/movie-search/movie-search.component';


// não esta utilizando components com lazy loading
const routes: Routes = [
  { path: 'movie-search', component: MovieSearchComponent },
  { path: 'movie-detail', component: MovieSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
