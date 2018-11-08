import { createSelector } from '@ngrx/store';
import * as routerReducers from '../reducers/router.reducer';
import {movieAdapter, MovieState} from '../reducers/movie.reducer';
import * as fromCinema from '../reducers';
import * as genreSelectors from './genre.selectors';

export const getMovieState = createSelector(
  fromCinema.getCinemaState,
  (state: fromCinema.CinemaState) => state.movies
);

export const { selectAll: selectAllMovies, selectIds: selectMoviesKeys, selectEntities: selectMovieEntities } = movieAdapter.getSelectors(
  getMovieState
);

export const getLoadedMoviesState = createSelector(
  getMovieState,
  state => state.moviesLoaded
);

export const selectMovieKeysByGenre = createSelector(
  selectMoviesKeys,
  selectMovieEntities,
  genreSelectors.getGenreState,
  (keys: string[], entities, genreState: any ) => {
    return keys
      .filter(key => {
        if (!genreState.selectedGenres.length) {
          return true;
        }
        return genreState.selectedGenres.every(elem => entities[key].genres.includes(elem));
      });
  });

export const selectMoviesByGenre = createSelector(
  selectMovieKeysByGenre,
  selectMovieEntities,
  (ids, entities) => ids.map(id => entities[id])
);

export const selectMovieKeysByTerm = createSelector(
  selectMovieKeysByGenre,
  selectMovieEntities,
  getMovieState,
  (keys: string[], entities, movieState: MovieState ) => {
    return keys
    // Filter By Term
      .filter(key => entities[key].name.toLocaleLowerCase().includes(movieState.term.toLocaleLowerCase()));
  });

export const selectMoviesByTerm = createSelector(
  selectMovieKeysByTerm,
  selectMovieEntities,
  (ids, entities) => ids.map(id => entities[id])
);

export const selectTerm = createSelector(
  getMovieState,
  state => state.term
);

export const getSelectedMovie = createSelector(
  getMovieState,
  routerReducers.getRouterState,
  (state, router) => {
    return router.state && state.entities[router.state.params.key];
  }
);
