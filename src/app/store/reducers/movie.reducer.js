"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entity_1 = require("@ngrx/entity");
var store_1 = require("@ngrx/store");
var movieActions = require("./movie.actions");
var movieAdapter = entity_1.createEntityAdapter({
    selectId: function (movie) { return movie.key; }
});
var movieInitialState = movieAdapter.getInitialState({
    selectedMovieKey: null
});
function movieReducer(state, action) {
    if (state === void 0) { state = movieInitialState; }
    switch (action.type) {
        case movieActions.MovieActions.GET_MOVIES_SUCCESS:
            return movieAdapter.addAll(action.payload, state);
        case movieActions.MovieActions.SELECT_MOVIE:
            state.selectedMovieKey = action.payload;
            return state;
        default:
            return state;
    }
}
exports.movieReducer = movieReducer;
exports.selectMovieState = store_1.createFeatureSelector('movies');
exports.selectAllMovies = (_a = movieAdapter.getSelectors(exports.selectMovieState), _a.selectAll), exports.selectIds = _a.selectIds;
exports.getSelectedMovie = store_1.createSelector(exports.selectMovieState, function (state) {
    return state.entities[state.selectedMovieKey];
});
var _a;
//# sourceMappingURL=movie-reducer.js.map
