import { Injectable } from '@angular/core';
import { ofAction } from 'ngrx-actions';
import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import * as movieActions from '../actions/movie.actions';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import { MovieService } from '../../services/movie.service';
import { MessageService } from '../../services/message.service';
import { CinemaState } from '../reducers';
import * as fromSelectors from '../selectors';

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

  constructor (
    private update$: Actions,
    private store: Store<CinemaState>,
    private movieService: MovieService,
    private messageService: MessageService) {}
}
