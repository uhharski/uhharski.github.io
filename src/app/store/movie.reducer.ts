import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector} from '@ngrx/store';
import { Movie} from '../model/movie.model';
import * as movieActions from './movie.actions';
import * as routerReducers from './router.reducers';


export interface MovieState extends EntityState<Movie> {
  selectedMovieKey: string | null;
  moviesLoaded: boolean;
  term: string;
  enqueuedNames: string[];
 }

const movieAdapter = createEntityAdapter<Movie>({
    selectId: (movie: Movie) => movie.key
});

const movieInitialState: MovieState = movieAdapter.getInitialState({
  selectedMovieKey: null,
  moviesLoaded: false,
  term: '',
  enqueuedNames: []
});

export function movieReducer(
  state: MovieState = movieInitialState,
  action: any
) {
  switch (action.type) {
    case movieActions.MovieActions.GET_MOVIES_SUCCESS:
      return movieAdapter.addAll(action.payload, {...state, moviesLoaded: true});
    case movieActions.MovieActions.SEARCH_MOVIES:
      return {...state, term: action.payload};
    case movieActions.MovieActions.SEARCH_MOVIES_SUCCESS:
      return {...state, enqueuedNames: action.payload};
    default:
      return state;
  }
}

export const selectMovieState = createFeatureSelector<MovieState>('movies');

export const { selectAll: selectAllMovies, selectIds, selectTotal } = movieAdapter.getSelectors(
  selectMovieState
);

export const getLoadedState = createSelector(
  selectMovieState,
  state => state.moviesLoaded
);

export const getEnqueuedNames = createSelector(
  selectMovieState,
  state => state.enqueuedNames
);

export const getSelectedMovie = createSelector(
    selectMovieState,
    routerReducers.getRouterState,
    (state, router) => {
      return router.state && state.entities[router.state.params.key];
    }
);
