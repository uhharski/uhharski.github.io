import { InMemoryDbService } from 'angular-in-memory-web-api';
import { movies } from '../model/movie.mock-data';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {movies};
  }
}
