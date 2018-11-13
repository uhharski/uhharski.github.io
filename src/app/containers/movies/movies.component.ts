import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieService } from '../../services/movie.service';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../../model/movie.model';
import * as fromSelectors from '../../store/selectors';
import { CinemaState } from '../../store/reducers';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-movies',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  animations: [
    trigger('preview',[
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('3s cubic-bezier(0.35, 0, 0.25, 1)')
      ]),
    ])
  ]
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Movie[]>;
  constructor(private movieService: MovieService, private store: Store<CinemaState>) { }

  ngOnInit() {
    this.movies$ = this.store.select(fromSelectors.selectMoviesByTerm);
  }
}
