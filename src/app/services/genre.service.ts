import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

@Injectable()
export class GenreService {

  private genresUrl = 'api/genre';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET getGenres from the server */
  getGenres (): Observable<string[]> {
    return this.http.get<string[]>(this.genresUrl)
      .pipe(
        tap(genres => this.log(`fetched genres`)),
        catchError(this.handleError('getGenres', []))
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
