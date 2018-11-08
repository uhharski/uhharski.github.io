import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Movie} from '../../model/movie.model';
import * as movieActions from '../actions/movie.actions';

export interface MovieState extends EntityState<Movie> {
  moviesLoaded: boolean;
  term: string;
 }

export const movieAdapter = createEntityAdapter<Movie>({
    selectId: (movie: Movie) => movie.key
});

const movieInitialState: MovieState = movieAdapter.getInitialState({
  moviesLoaded: false,
  term: '',
});

export function movieReducer(
  state: MovieState = movieInitialState,
  action: movieActions.MovieActions
) {
  switch (action.type) {
    case movieActions.MovieActionsTypes.GET_MOVIES_SUCCESS:
      return movieAdapter.addAll(action.payload, {...state, moviesLoaded: true});
    case movieActions.MovieActionsTypes.UPDATE_TERM:
      return {...state, term: action.payload};
    default:
      return state;
  }
}
