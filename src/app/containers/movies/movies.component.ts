import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import {FormBuilder, FormControl, FormArray, Validators, FormGroup} from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { MovieService } from '../../services/movie.service';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../../model/movie.model';
import {take, distinctUntilChanged, debounceTime} from 'rxjs/operators';
import * as fromMovieActions from '../../store/actions/movie.actions';
import * as fromGenreActions from '../../store/actions/genre.actions';
import * as fromRoutingActions from '../../store/actions/router.actions';
import * as fromSelectors from '../../store/selectors';
import { CinemaState } from '../../store/reducers';


@Component({
  selector: 'app-movies',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Movie[]>;
  genres$: Observable<string[]>;
  input = new FormControl('', [ Validators.minLength(1), Validators.maxLength(20) ]);
  inputValue: Observable<string>;
  constructor(private movieService: MovieService, private store: Store<CinemaState>, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.movies$ = this.store.select(fromSelectors.selectMoviesByTerm);
    this.genres$ = this.store.select(fromSelectors.selectAllGenres);
    this.inputValue = this.store.select(fromSelectors.selectTerm);
  }

  clear() {
    this.input.setValue('');
    this.store.dispatch(new fromMovieActions.UpdateMovieTerm(''));
  }

  submit() {
    const value = this.input.value;
    this.store.dispatch(new fromMovieActions.UpdateMovieTerm(value));
  }

  updateGenres(event) {
    if (event.checked) {
      this.store.dispatch(new fromGenreActions.SelectGenre(event.source.name));
    } else {
      this.store.dispatch(new fromGenreActions.DeselectGenre(event.source.name));
    }
  }
}
