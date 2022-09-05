import { Genre } from './../models/genre.model';
import { Trending } from './../models/trending.model';
import { MovieService } from './../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public movieType = 'movie';
  public sliderContainer: Trending[] = [];
  public genreListContainer: Genre[] = [];
  public genreSelectedValue: string;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.initializeSliderContainer();
    this.initializeGenreContainer();
  }

  public initializeSliderContainer() {
    this.movieService.getTrendingList(this.movieType).subscribe((response) => {
      response.results.forEach((movie) => {
        this.sliderContainer.push(movie);
      });
    });
  }

  public initializeGenreContainer() {
    this.movieService.getGenreList(this.movieType).subscribe((response) => {
      //this.genreListContainer = response;

      response.genres.forEach((genre) => {
        this.genreListContainer.push(genre);
      });
    });
  }

  public genreSelectionChanged(event: CustomEvent) {
    console.log(event.detail.value);
  }
}
