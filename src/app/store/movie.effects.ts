import { Injectable } from '@angular/core';
import { ofAction } from 'ngrx-actions';
import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import * as movieActions from './movie.actions';
import { map, switchMap } from 'rxjs/operators';
import { MovieService } from '../services/movie.service';
import { MessageService } from '../services/message.service';

@Injectable()
export class MovieEffects {
  @Effect()
  getMovies$ = this.update$.pipe(
    ofAction(movieActions.GetMovies),
    switchMap(movie => this.movieService.getMovies()),
    map(response => {
      this.messageService.add('Populating list with movies.');
      return new movieActions.GetMoviesSuccess(response);
    }));

  @Effect()
  getEnqueuedNames$ = this.update$.pipe(
    ofAction(movieActions.SearchMovies),
    map(action => action.payload),
    switchMap(term => this.movieService.searchMovies(term)),
    map(response => {
      this.messageService.add('Populating list with movie names.');
      const movieNames: string[] = response.map(movie => movie.name)
      return new movieActions.SearchMoviesSuccess(movieNames);
    }));

  constructor (
    private store: Store<any>,
    private update$: Actions,
    private movieService: MovieService,
    private messageService: MessageService) {}
}
