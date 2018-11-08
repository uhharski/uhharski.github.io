import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import * as genreActions from '../actions/genre.actions';
import {s} from '@angular/core/src/render3';

export interface GenreState extends EntityState<string> {
  selectedGenres: string[];
  genresLoaded: boolean;
}

export const genreAdapter: EntityAdapter<string> = createEntityAdapter<string>({
  selectId: (genre: string) => genre
});

const genreInitialState: GenreState = genreAdapter.getInitialState({
  selectedGenres: [],
  genresLoaded: false
});

export function genreReducer(
  state: GenreState = genreInitialState,
  action: genreActions.GenreActions
) {
  switch (action.type) {
    case genreActions.GenreActionsTypes.GET_GENRES_SUCCESS:
      return genreAdapter.addAll(action.payload, {...state, genresLoaded: true});
    case genreActions.GenreActionsTypes.SELECT_GENRE:
      return { ...state, selectedGenres: [ ...state.selectedGenres, action.payload]};
    case genreActions.GenreActionsTypes.DESELECT_GENRE:
      return { ...state, selectedGenres: state.selectedGenres.filter(item => item !== action.payload)};
    default:
      return state;
  }
}
