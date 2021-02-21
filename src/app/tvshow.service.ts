import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { ICurrentTvShow } from './icurrent-tv-show';
import { ICurrentTvShowData } from './icurrent-tv-show-data';

@Injectable({
  providedIn: 'root'
})

export class TvshowService {

  constructor(private httpClient: HttpClient) { }

  getCurrentTvShow(name: string){
     return this.httpClient.get<ICurrentTvShowData>(`http://api.tvmaze.com/singlesearch/shows?q=${name}`).pipe(
      //  map(data => this.transformToIcurrentTvShow(data))
      map(data => this.transformToIcurrentTvShow(data))
     )
   
  }
  private transformToIcurrentTvShow(data: ICurrentTvShowData): ICurrentTvShow {
    return {
    name: data.name,
    country: data.network.country.name,
    language: data.language,
    genres: data.genres,
    rating: data.rating.average,
    weight: data.weight,
    summary: data.summary,
    image: data.image.medium,
    premiered: data.premiered,
    status: data.status
    }
  }
}

