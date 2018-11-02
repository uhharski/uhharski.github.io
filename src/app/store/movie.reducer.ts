import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector} from '@ngrx/store';
import { Movie} from '../model/movie.model';
import * as movieActions from './movie.actions';
import * as routerReducers from './router.reducers';


export interface MovieState extends EntityState<Movie> {
  selectedMovieKey: string | null;
  moviesLoaded: boolean;
 }

const movieAdapter = createEntityAdapter<Movie>({
    selectId: (movie: Movie) => movie.key
});

const movieInitialState: MovieState = movieAdapter.getInitialState({
  selectedMovieKey: null,
  moviesLoaded: false

});

export function movieReducer(
  state: MovieState = movieInitialState,
  action: any
) {
  switch (action.type) {
    case movieActions.MovieActions.GET_MOVIES_SUCCESS:
      return movieAdapter.addAll(action.payload, {...state, moviesLoaded: true});
    case movieActions.MovieActions.SELECT_MOVIE:
      state.selectedMovieKey = action.payload;
      return state;
    default:
      return state;
  }
}

export const selectMovieState = createFeatureSelector<MovieState>('movies');

export const { selectAll: selectAllMovies, selectIds } = movieAdapter.getSelectors(
  selectMovieState
);

export const getLoadedState = createSelector(
  selectMovieState,
  state => state.moviesLoaded
)

export const getSelectedMovie = createSelector(
    selectMovieState,
    routerReducers.getRouterState,
    (state, router) => {
      console.log(router);
      return router.state && state.entities[router.state.params.key];
    }
);

