import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieService } from '../../services/movie.service';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../../model/movie.model';
import { selectAllMovies } from '../../store/movie.reducer';

import * as fromActions from '../../store/movie.actions'
// import { transition, style, animate, trigger } from '@angular/animations';
//
// export const DROP_ANIMATION = trigger('drop', [
//   transition(':enter', [
//     style({ transform: 'translateY(-200px)', opacity: 0 }),
//     animate(
//       '300ms cubic-bezier(1.000, 0.000, 0.000, 1.000)',
//       style({ transform: 'translateY(0)', opacity: 1 })
//     ),
//   ]),
//   transition(':leave', [
//     style({ transform: 'translateY(0)', opacity: 1 }),
//     animate(
//       '200ms cubic-bezier(1.000, 0.000, 0.000, 1.000)',
//       style({ transform: 'translateY(-200px)', opacity: 0 })
//     ),
//   ]),
// ]);

@Component({
  selector: 'app-movies',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(private movieService: MovieService, private store: Store<any>) { }

  ngOnInit() {
    this.movies$ = this.store.select(selectAllMovies);
  }

  onSelect(event: string) {
    // this.store.dispatch(new fromActions.SelectMovie(event));
  }
}
