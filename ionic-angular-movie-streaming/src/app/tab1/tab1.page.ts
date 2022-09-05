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
  public page: number;
  public filteredGenreIds: string;
  public appCardContainer: any = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.initializeSliderContainer();
    this.initializeGenreContainer();
    this.initializeContainer();
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

  public initializeContainer() {
    this.page = 1;
    this.filteredGenreIds = '';
    this.initializePopularContainer();
  }

  public initializePopularContainer() {
    this.movieService
      .getPoplarList(this.movieType, this.page, this.filteredGenreIds)
      .subscribe((response) => {
        response.results.forEach((movie) => {
          this.appCardContainer.push(movie);
        });
      });
  }

  public genreSelectionChanged(event) {
    const genreEl = event.detail.value;
    console.log(genreEl);

    if (genreEl.length > 0 || this.filteredGenreIds != null) {
      this.page = 1;
      this.appCardContainer = [];
      this.filteredGenreIds = genreEl.toString();
      this.initializePopularContainer();
    }
  }

  loadData(event) {
    this.page += 1;
    this.filteredGenreIds = '';
    this.movieService
      .getPoplarList(this.movieType, this.page, this.filteredGenreIds)
      .subscribe((response) => {
        response.results.forEach((movie) => {
          this.appCardContainer.push(movie);
        });
        event.target.complete();

        if (response.results.length === 0) {
          event.target.disabled = true;
        }
      });
  }
}
