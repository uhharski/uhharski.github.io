import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromMovies from './movie.reducer';
import * as fromGenres from './genre.reducer';

export interface CinemaState {
  movies: fromMovies.MovieState;
  genres: fromGenres.GenreState;
}

export const reducers: ActionReducerMap<CinemaState> = {
  movies: fromMovies.movieReducer,
  genres: fromGenres.genreReducer,
};

export const getCinemaState = createFeatureSelector<CinemaState>(
  'cinema'
);
