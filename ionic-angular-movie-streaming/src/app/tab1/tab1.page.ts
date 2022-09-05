import { MovieService } from './../services/movie.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public movieType = 'movie';

  constructor(private movieService: MovieService) {
    this.initializeSliderContainer();
  }

  public initializeSliderContainer() {
    this.movieService.getTrendingList(this.movieType).subscribe((response) => {
      console.log(response);
    });
  }
}
