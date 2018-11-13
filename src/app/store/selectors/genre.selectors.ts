import { createSelector } from '@ngrx/store';
import { genreAdapter } from '../reducers/genre.reducer';
import * as fromCinema from '../reducers';

export const getGenreState = createSelector(
  fromCinema.getCinemaState,
  (state: fromCinema.CinemaState) => state.genres
);

export const { selectAll, selectIds: selectGenreIds } = genreAdapter.getSelectors(
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

export const selectAllGenres = createSelector(
  selectAll,
  getSelectedGenres,
  (genres, selectedGenre) => genres.map( (genre) => {
    return {name: genre, checked: selectedGenre.includes(genre)};
  })
);
