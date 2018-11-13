import {Component, OnInit, ViewEncapsulation, ViewChild, HostBinding} from '@angular/core';
import { Store } from '@ngrx/store';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs/Observable';
import * as fromSelectors from '../../store/selectors';
import * as fromMovieActions from '../../store/actions/movie.actions';
import { FormControl, Validators} from '@angular/forms';
import * as fromGenreActions from '../../store/actions/genre.actions';
import {CinemaState} from '../../store/reducers';
import {take} from 'rxjs/operators';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-search-sidenav',
  templateUrl: './search-sidenav.component.html',
  styleUrls: ['./search-sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchSidenavComponent implements OnInit {
  @ViewChild('snav') snav: MatSidenav;
  genres$: Observable<any[]>;
  input = new FormControl('', [ Validators.minLength(1), Validators.maxLength(20) ]);
  constructor( private store: Store<CinemaState>) { }

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

  ngOnInit() {
    this.genres$ = this.store.select(fromSelectors.selectAllGenres);
    this.store.select(fromSelectors.selectTerm).pipe(
      take(1)
    ).subscribe(value => this.input.setValue(value));
  }

}
