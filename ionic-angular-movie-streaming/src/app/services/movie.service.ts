import { Genres } from './../models/genre.model';
import { TrendingPage } from './../models/trending.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_KEY = '8658db4a977bd67dbe8c82ada29a0289';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

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
}
