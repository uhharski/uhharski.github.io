import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as movieActions from './store/movie.actions';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'Movies';

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new movieActions.GetMovies);
  }
}
