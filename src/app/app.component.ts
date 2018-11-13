import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as movieActions from './store/actions/movie.actions';
import * as genreActions from './store/actions/genre.actions';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new movieActions.GetMovies);
    this.store.dispatch(new genreActions.GetGenres);
  }
}
