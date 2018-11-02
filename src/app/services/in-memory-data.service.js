"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var movie_mock_data_1 = require("../model/movie.mock-data");
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        return { movies: movie_mock_data_1.movies };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map