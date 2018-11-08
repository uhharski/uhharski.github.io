import { createSelector } from '@ngrx/store';
import { genreAdapter } from '../reducers/genre.reducer';
import * as fromCinema from '../reducers';

export const getGenreState = createSelector(
  fromCinema.getCinemaState,
  (state: fromCinema.CinemaState) => state.genres
);

export const { selectAll: selectAllGenres, selectIds: selectGenreIds } = genreAdapter.getSelectors(
  getGenreState
);

export const getLoadedGenreState = createSelector(
  getGenreState,
  state => state.genresLoaded
);

export const getSelectedGenres = createSelector(
  getGenreState,
  state => state.selectedGenres
);
