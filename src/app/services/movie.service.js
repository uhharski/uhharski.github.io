"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var of_1 = require("rxjs/observable/of");
var operators_1 = require("rxjs/operators");
var message_service_1 = require("./message.service");
// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
var MovieService = (function () {
    function MovieService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.moviesUrl = 'api/movies'; // URL to web api
    }
    /** GET movies from the server */
    MovieService.prototype.getMovies = function () {
        var _this = this;
        return this.http.get(this.moviesUrl)
            .pipe(operators_1.tap(function (movies) { return _this.log("fetched movies"); }), operators_1.catchError(this.handleError('getMovies', [])));
    };
    /** GET movie by key. Return `undefined` when key not found */
    MovieService.prototype.getMovieNo404 = function (key) {
        var _this = this;
        var url = this.moviesUrl + "/?key=" + key;
        return this.http.get(url)
            .pipe(operators_1.map(function (movies) { return movies[0]; }), // returns a {0|1} element array
        operators_1.tap(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " movie key=" + key);
        }), operators_1.catchError(this.handleError("getMovie key=" + key)));
    };
    /** GET movie by id. Will 404 if id not found */
    MovieService.prototype.getMovie = function (key) {
        var _this = this;
        var url = this.moviesUrl + "/?key=" + key;
        return this.http.get(url).pipe(operators_1.tap(function (_) { return _this.log("fetched movie key=" + key); }), operators_1.catchError(this.handleError("getMovie key=" + key)));
    };
    /* GET movies whose name contains search term */
    MovieService.prototype.searchMovies = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return of_1.of([]);
        }
        return this.http.get(this.moviesUrl + "/?name=" + term).pipe(operators_1.tap(function (_) { return _this.log("found movies matching \"" + term + "\""); }), operators_1.catchError(this.handleError('searchMovies', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    MovieService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return of_1.of(result);
        };
    };
    /** Log a MovieService message with the MessageService */
    MovieService.prototype.log = function (message) {
        this.messageService.add('MovieService: ' + message);
    };
    MovieService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            message_service_1.MessageService])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map