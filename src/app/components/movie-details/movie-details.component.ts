import {Component, Input} from '@angular/core';
import { Movie } from '../../model/movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  @Input() movie: Movie;
  constructor () {}
}
