import { InMemoryDbService } from 'angular-in-memory-web-api';
import { movies } from '../model/movie.mock-data';
import { genreType } from '../model/movie.model';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {movies, genre: genreType};
  }
}
