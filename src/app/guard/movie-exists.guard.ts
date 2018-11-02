import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { tap, map, filter, take, switchMap } from 'rxjs/operators';

import * as fromReducers from '../store/movie.reducer';
import * as fromActions from '../store/movie.actions';

import {Movie} from '../model/movie.model';


@Injectable()
export class MovieExistsGuards implements CanActivate {
  constructor(private store: Store<any>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkMovies().pipe(
      switchMap(() => {
        return this.hasMovie();
      })
    );
  }

  hasMovie(): Observable<boolean> {
    return this.store
      .select(fromReducers.getSelectedMovie)
      .pipe(
        map(loaded => !!loaded),
        take(1)
      );
  }

  checkMovies(): Observable<boolean> {
    return this.store.select(fromReducers.getLoadedState).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromActions.GetMovies);
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}

