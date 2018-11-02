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
var store_1 = require("@ngrx/store");
var movie_service_1 = require("../../services/movie.service");
var movie_reducer_1 = require("../../store/movie.reducer");
// import { transition, style, animate, trigger } from '@angular/animations';
//
// export const DROP_ANIMATION = trigger('drop', [
//   transition(':enter', [
//     style({ transform: 'translateY(-200px)', opacity: 0 }),
//     animate(
//       '300ms cubic-bezier(1.000, 0.000, 0.000, 1.000)',
//       style({ transform: 'translateY(0)', opacity: 1 })
//     ),
//   ]),
//   transition(':leave', [
//     style({ transform: 'translateY(0)', opacity: 1 }),
//     animate(
//       '200ms cubic-bezier(1.000, 0.000, 0.000, 1.000)',
//       style({ transform: 'translateY(-200px)', opacity: 0 })
//     ),
//   ]),
// ]);
var MoviesComponent = (function () {
    function MoviesComponent(movieService, store) {
        this.movieService = movieService;
        this.store = store;
    }
    MoviesComponent.prototype.ngOnInit = function () {
        this.movies$ = this.store.select(movie_reducer_1.selectAllMovies);
    };
    MoviesComponent = __decorate([
        core_1.Component({
            selector: 'app-movies',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            templateUrl: 'app/containers/movies/movies.component.html',
            styleUrls: ['app/containers/movies/movies.component.scss']
        }),
        __metadata("design:paramtypes", [movie_service_1.MovieService, store_1.Store])
    ], MoviesComponent);
    return MoviesComponent;
}());
exports.MoviesComponent = MoviesComponent;
//# sourceMappingURL=movies.component.js.map
