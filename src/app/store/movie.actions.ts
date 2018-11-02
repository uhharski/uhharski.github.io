import { Movie } from '../model/movie.model';
import { Action } from '@ngrx/store';

export enum MovieActions {
  GET_MOVIES = 'GET_MOVIES',
  GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS',
  GET_MOVIE = 'GET_MOVIE',
  GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS',
  SELECT_MOVIE = 'SELECT_MOVIE',
}

export class GetMovies implements Action {
   readonly type = MovieActions.GET_MOVIES;
}

export class GetMoviesSuccess implements Action  {
   readonly type = MovieActions.GET_MOVIES_SUCCESS;
   constructor(public payload: Movie[]) {}
}


export class SelectMovie implements Action {
   readonly type = MovieActions.SELECT_MOVIE;
   constructor(public payload: string) {}
}
