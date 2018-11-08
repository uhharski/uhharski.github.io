"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MovieActions;
(function (MovieActions) {
    MovieActions["GET_MOVIES"] = "GET_MOVIES";
    MovieActions["GET_MOVIES_SUCCESS"] = "GET_MOVIES_SUCCESS";
    MovieActions["GET_MOVIE"] = "GET_MOVIE";
    MovieActions["GET_MOVIE_SUCCESS"] = "GET_MOVIE_SUCCESS";
    MovieActions["SELECT_MOVIE"] = "SELECT_MOVIE";
})(MovieActions = exports.MovieActions || (exports.MovieActions = {}));
var GetMovies = (function () {
    function GetMovies() {
        this.type = MovieActions.GET_MOVIES;
    }
    return GetMovies;
}());
exports.GetMovies = GetMovies;
var GetMoviesSuccess = (function () {
    function GetMoviesSuccess(payload) {
        this.payload = payload;
        this.type = MovieActions.GET_MOVIES_SUCCESS;
    }
    return GetMoviesSuccess;
}());
exports.GetMoviesSuccess = GetMoviesSuccess;
var SelectMovie = (function () {
    function SelectMovie(payload) {
        this.payload = payload;
        this.type = MovieActions.SELECT_MOVIE;
    }
    return SelectMovie;
}());
exports.SelectMovie = SelectMovie;
//# sourceMappingURL=movie-actions.js.map