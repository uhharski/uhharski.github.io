import { Action } from '@ngrx/store';

export enum GenreActionsTypes {
  GET_GENRES = '[Genres] Get All Genres',
  GET_GENRES_SUCCESS = '[Genres] Get All Genres Success',
  SELECT_GENRE = '[Genres] Select Genre',
  DESELECT_GENRE = '[Genres] Deselect Genre'
}

export class GetGenres implements Action {
  readonly type = GenreActionsTypes.GET_GENRES;
}

export class GetGenresSuccess implements Action  {
  readonly type = GenreActionsTypes.GET_GENRES_SUCCESS;
  constructor(public payload: string[]) {}
}

export class SelectGenre implements Action  {
  readonly type = GenreActionsTypes.SELECT_GENRE;
  constructor(public payload: string) {}
}

export class DeselectGenre implements Action  {
  readonly type = GenreActionsTypes.DESELECT_GENRE;
  constructor(public payload: string) {}
}

export type GenreActions = GetGenres | GetGenresSuccess | SelectGenre | DeselectGenre;

