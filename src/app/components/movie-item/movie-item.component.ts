import {Component, Input} from '@angular/core';
import { Movie } from '../../model/movie.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  @Input() movie: Movie;
  constructor() { }
}
