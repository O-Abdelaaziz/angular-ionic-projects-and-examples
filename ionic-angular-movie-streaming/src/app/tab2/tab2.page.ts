import { MovieService } from './../services/movie.service';
import { forkJoin } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  /** Only the modelType is different from tab1 */
  modelType = 'tv';

  sliderContainer: any = [];
  genreContainerList: any = [];
  page: number;
  genreSelectedValue: any;
  filteredGenreId: string;
  appCardContainer: any = [];
  loadingCurrentEventData: any;

  constructor(private service: MovieService) {}

  ngOnInit(): void {
    this.initializeSliderContainer();
    this.initializeGenreContainer();
    this.initializeContainer();
  }

  initializeSliderContainer() {
    this.service
      .getTrendingList(this.modelType)
      .subscribe((trendingMoviesEl) => {
        console.log(trendingMoviesEl);

        trendingMoviesEl.results.forEach((trendingMovies) => {
          this.sliderContainer.push(trendingMovies);
        });
      });
  }

  initializeGenreContainer() {
    this.service.getGenreList(this.modelType).subscribe((genreEl) => {
      genreEl.genres.forEach((genreElement) => {
        this.genreContainerList.push(genreElement);
      });
    });
  }

  initializeContainer() {
    this.page = 1;
    this.filteredGenreId = '';
    this.loadPoplarContainer();
  }

  loadPoplarContainer() {
    this.service
      .getPoplarList(this.modelType, this.page, this.filteredGenreId)
      .subscribe((poplarMoviesEl) => {
        poplarMoviesEl.results.forEach((element) => {
          this.appCardContainer.push({
            id: element.id,
            title: element.original_name,
            descriptoin: element.overview,
            image: 'http://image.tmdb.org/t/p/original/' + element.poster_path,
            voterRating: element.vote_average,
            modelItem: element,
          });
        });

        if (this.page > 1) {
          this.loadingCurrentEventData.target.complete();
          if (poplarMoviesEl.results.length === 0) {
            this.loadingCurrentEventData.target.disabled = true;
          }
        }
      });
  }

  genreSelectionChanged(genreEvent) {
    const genreEl = genreEvent.detail.value;
    if (genreEl.length > 0 || this.filteredGenreId != null) {
      this.page = 1;
      this.appCardContainer = [];
      this.filteredGenreId = genreEl.toString();
      this.loadPoplarContainer();
    }
  }

  loadData(event) {
    this.page = this.page + 1;
    this.loadingCurrentEventData = event;
    this.loadPoplarContainer();
  }

  cardEventListener(modelItem) {
    forkJoin(
      this.service.getDetailList(this.modelType, modelItem.id),
      this.service.getCreditList(this.modelType, modelItem.id),
      this.service.getVideoList(this.modelType, modelItem.id)
    ).subscribe((responseEl) => {
      modelItem.detailResponseEl = responseEl[0];
      modelItem.creditsResponseEl = responseEl[1];
      modelItem.videos = responseEl[2];
      this.service.presentModal(modelItem, this.modelType);
    });
  }
}
