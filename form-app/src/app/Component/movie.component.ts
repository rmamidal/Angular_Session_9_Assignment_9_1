// Importing required libraries.
import { Component, Injectable } from "@angular/core"
import { Movie, IRating } from "../Service/movie"
import { MovieService, RatingService } from "../Service/movie.service"

@Component({
    selector: "movie-app",
    templateUrl: "../View/movie.Component.html",
    providers: [MovieService, RatingService]
})
export class MovieComponent {
    // Binding Logic.
    currentMovie: Movie = new Movie();

    // List of Movies.
    listOfMovies: Array<Movie> = new Array<Movie>();

    // Rating list array.
    movieRatings: IRating[] = [];

    constructor(private _movieService: MovieService, private _ratingService: RatingService) {}


    ngOnInit() {
        this.listOfMovies = this._movieService.getMovieList();
        this.movieRatings = this._ratingService.getRatings();
    }

    addMovie() {
        this._movieService.addMovie(this.currentMovie);
        this.currentMovie = new Movie();
    }
}