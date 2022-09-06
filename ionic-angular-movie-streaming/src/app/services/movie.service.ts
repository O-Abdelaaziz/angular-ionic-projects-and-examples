import { ModalComponent } from './../shared/modal/modal.component';
import { Genres } from './../models/genre.model';
import { TrendingPage } from './../models/trending.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';

const API_KEY = '';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public currentModel = [];

  constructor(
    private httpClient: HttpClient,
    public modalController: ModalController
  ) {}

  public getGenreList(type: string): Observable<Genres> {
    return this.httpClient.get<Genres>(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}&language=en-US`
    );
  }

  public getTrendingList(type: string): Observable<TrendingPage> {
    return this.httpClient.get<TrendingPage>(
      `https://api.themoviedb.org/3/trending/${type}/day?api_key=${API_KEY}&language=en-US`
    );
  }

  public getPoplarList(
    type: string,
    page: number,
    genres: string
  ): Observable<any> {
    return this.httpClient.get(
      `https://api.themoviedb.org/3/${type}/popular?api_key=${API_KEY}&language=en-US&page=${page}&with_genres=${genres}`
    );
  }

  public getDetailList(type: string, id: string): Observable<any> {
    return this.httpClient.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US`
    );
  }

  public getCreditList(type: string, id: string): Observable<any> {
    return this.httpClient.get(
      `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
  }

  public getVideoList(type: string, id: string): Observable<any> {
    return this.httpClient.get(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${API_KEY}&language=en-US`
    );
  }

  public getRecommendationList(type: string, id: string): Observable<any> {
    return this.httpClient.get(
      `https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${API_KEY}&language=en-US`
    );
  }

  async presentModal(modelItem, type) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        modelItemList: modelItem,
        modelType: type,
      },
    });

    this.currentModel.push(modal);
    return await modal.present();
  }

  dismissModel() {
    this.currentModel[this.currentModel.length - 1].dismiss().then(() => {
      this.currentModel.pop();
    });
  }
}
