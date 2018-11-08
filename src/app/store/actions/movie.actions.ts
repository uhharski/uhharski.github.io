import { Movie } from '../../model/movie.model';
import { Action } from '@ngrx/store';

export enum MovieActionsTypes {
  GET_MOVIES = '[Movies] Get All Movies',
  GET_MOVIES_SUCCESS = '[Movies] Get All Movies Success',
  UPDATE_TERM = '[Movies] Update Term'
}

export class GetMovies implements Action {
   readonly type = MovieActionsTypes.GET_MOVIES;
}

export class GetMoviesSuccess implements Action  {
   readonly type = MovieActionsTypes.GET_MOVIES_SUCCESS;
   constructor(public payload: Movie[]) {}
}

export class UpdateMovieTerm implements Action  {
  readonly type = MovieActionsTypes.UPDATE_TERM;
  constructor(public payload: string) {}
}



export type MovieActions = GetMovies |
  GetMoviesSuccess |
  UpdateMovieTerm;
