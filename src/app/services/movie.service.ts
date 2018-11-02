import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Movie } from '../model/movie.model';
import { MessageService } from './message.service';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class MovieService {

  private moviesUrl = 'api/movies';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET movies from the server */
  getMovies (): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl)
      .pipe(
        tap(movies => this.log(`fetched movies`)),
        catchError(this.handleError('getMovies', []))
      );
  }

  /** GET movie by key. Return `undefined` when key not found */
  getMovieNo404<Data>(key: string): Observable<Movie> {
    const url = `${this.moviesUrl}/?key=${key}`;
    return this.http.get<Movie>(url)
      .pipe(
        map(movies => movies[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} movie key=${key}`);
        }),
        catchError(this.handleError<Movie>(`getMovie key=${key}`))
      );
  }

  /** GET movie by id. Will 404 if id not found */
  getMovie(key: string): Observable<Movie> {
    const url = `${this.moviesUrl}/?key=${key}`;
    return this.http.get<Movie>(url).pipe(
      tap(_ => this.log(`fetched movie key=${key}`)),
      catchError(this.handleError<Movie>(`getMovie key=${key}`))
    );
  }

  /* GET movies whose name contains search term */
  searchMovies(term: string): Observable<Movie[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Movie[]>(`${this.moviesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found movies matching "${term}"`)),
      catchError(this.handleError<Movie[]>('searchMovies', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a MovieService message with the MessageService */
  private log(message: string) {
    this.messageService.add('MovieService: ' + message);
  }
}
