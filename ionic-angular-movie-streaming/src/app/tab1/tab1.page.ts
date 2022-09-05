import { Trending } from './../models/trending.model';
import { MovieService } from './../services/movie.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public movieType = 'movie';
  public sliderContainer: Trending[] = [];
  constructor(private movieService: MovieService) {
    this.initializeSliderContainer();
  }

  public initializeSliderContainer() {
    this.movieService.getTrendingList(this.movieType).subscribe((response) => {
      response.results.forEach((movie) => {
        this.sliderContainer.push(movie);
      });

      console.log(this.sliderContainer);
    });
  }
}
