import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Store } from '@ngrx/store';
import { MovieService } from '../../services/movie.service';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../../model/movie.model';
import { selectAllMovies, getEnqueuedNames } from '../../store/movie.reducer';
import {map, startWith} from 'rxjs/operators';
import * as fromActions from '../../store/movie.actions';

@Component({
  selector: 'app-movies',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Movie[]>;
  total: Observable<number>;
  myControl = new FormControl();
  filteredOptions$: Observable<string[]>;
  constructor(private movieService: MovieService, private store: Store<any>) { }

  ngOnInit() {
    this.movies$ = this.store.select(selectAllMovies);
    this.filteredOptions$ = this.store.select(getEnqueuedNames);

    this.myControl.valueChanges.subscribe((value) => {
      this.store.dispatch(new fromActions.SearchMovies(value));
    });
  }

  onSelect(event: string) {
    // this.store.dispatch(new fromActions.SelectMovie(event));
  }
}
