import { Movie } from '../model/movie.model';
import { Action } from '@ngrx/store';

export enum MovieActions {
  GET_MOVIES = '[Movies] Get All Movies',
  GET_MOVIES_SUCCESS = '[Movies] Get All Movies Success',
  SEARCH_MOVIES = '[Movies] Search Movies',
  SEARCH_MOVIES_SUCCESS = '[Movies] Search Movies Success'
}

export class GetMovies implements Action {
   readonly type = MovieActions.GET_MOVIES;
}

export class GetMoviesSuccess implements Action  {
   readonly type = MovieActions.GET_MOVIES_SUCCESS;
   constructor(public payload: Movie[]) {}
}

export class SearchMovies implements Action  {
  readonly type = MovieActions.SEARCH_MOVIES;
  constructor(public payload: string) {}
}

export class SearchMoviesSuccess implements Action  {
  readonly type = MovieActions.SEARCH_MOVIES_SUCCESS;
  constructor(public payload: string[]) {}
}
