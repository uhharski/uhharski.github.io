import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../../model/movie.model';
import { Store } from '@ngrx/store';
import * as fromSelectors from '../../store/selectors';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  movie$: Observable<Movie>;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.movie$ = this.store.select(fromSelectors.getSelectedMovie);
  }

}
