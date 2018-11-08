import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from '../containers/movies/movies.component';
import { MoviePageComponent } from '../containers/movie-page/movie-page.component';

import { MovieExistsGuards } from '../guard/movie-exists.guard';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies/:key', canActivate: [MovieExistsGuards], component: MoviePageComponent },
  { path: 'movies', component: MoviesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  providers: [ MovieExistsGuards ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
