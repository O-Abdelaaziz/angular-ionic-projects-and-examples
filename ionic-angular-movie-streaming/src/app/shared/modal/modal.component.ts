import { MovieService } from './../../services/movie.service';
import { forkJoin } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() modelItemList: any;
  @Input() modelType: any;

  isLoading: boolean;
  id: string;
  title: string;
  backGroundImage: string;
  releaseDate: string;
  overview: string;
  castItemList: any = [];
  crewItemList: any = [];
  runtime: string;
  voterRating: any;
  appRecommendationsContainer: any = [];
  isVideoEnabled: boolean;
  dangerousVideoUrl: string;
  videoUrl: any;

  constructor(private service: MovieService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.initializeContainer();
  }

  initializeContainer() {
    this.isLoading = true;
    this.title =
      this.modelType === 'movie'
        ? this.modelItemList.detailResponseEl.title
        : this.modelItemList.detailResponseEl.original_name;
    this.isLoading = false;
  }
}
