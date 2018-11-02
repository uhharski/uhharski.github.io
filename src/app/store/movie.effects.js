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
var ngrx_actions_1 = require("ngrx-actions");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var movieActions = require("./movie.actions");
var operators_1 = require("rxjs/operators");
var movie_service_1 = require("../services/movie.service");
var message_service_1 = require("../services/message.service");
var MovieEffects = (function () {
    function MovieEffects(store, update$, movieService, messageService) {
        var _this = this;
        this.store = store;
        this.update$ = update$;
        this.movieService = movieService;
        this.messageService = messageService;
        this.getMovies$ = this.update$.pipe(ngrx_actions_1.ofAction(movieActions.GetMovies), operators_1.switchMap(function (movie) { return _this.movieService.getMovies(); }), operators_1.map(function (response) {
            _this.messageService.add("Populating list with movies.");
            return new movieActions.GetMoviesSuccess(response);
        }));
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], MovieEffects.prototype, "getMovies$", void 0);
    MovieEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [store_1.Store,
            effects_1.Actions,
            movie_service_1.MovieService,
            message_service_1.MessageService])
    ], MovieEffects);
    return MovieEffects;
}());
exports.MovieEffects = MovieEffects;
//# sourceMappingURL=movie-effects.js.map
