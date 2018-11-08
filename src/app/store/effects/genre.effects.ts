import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ofAction } from 'ngrx-actions';
import { Effect, Actions } from '@ngrx/effects';
import * as genreActions from '../actions/genre.actions';
import * as moviesActions from '../actions/movie.actions';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { GenreService } from '../../services/genre.service';
import { MessageService } from '../../services/message.service';
import { CinemaState } from '../reducers';
import * as fromSelectors from '../selectors';

@Injectable()
export class GenreEffects {
  @Effect()
  getGenres$ = this.update$.pipe(
    ofAction(genreActions.GetGenres),
    switchMap(genre => this.genreService.getGenres()),
    map(response => {
      this.messageService.add('Populating list with genres.');
      return new genreActions.GetGenresSuccess(response);
    }));

  constructor (
    private update$: Actions,
    private store: Store<CinemaState>,
    private genreService: GenreService,
    private messageService: MessageService) {}
}
